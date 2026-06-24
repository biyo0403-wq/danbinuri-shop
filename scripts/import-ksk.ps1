# KSK 제품 이미지 가져오기 (1회용 스크립트)
# .import 스테이징 폴더의 원본을 웹용(리사이즈/압축)으로 변환해
# public/products/<카테고리>/<제품>/NN.jpg 로 저장하고 lib/products.ts 를 생성한다.
# 재실행 시 대상 카테고리 폴더를 비우고 새로 만든다.

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root   = "C:\Users\Y\Desktop\danbinuri-shop"
$srcCat = Join-Path $root ".import\zip1\2026 SS KSK 이미지파일1(신상품,점퍼,조끼,티셔츠,제전복등)"
$outDir = Join-Path $root "public\products"
$maxEdge = 1400
$quality = 82
$maxImgs = 8

# 홈 6품목 라벨 -> 제품 카테고리(slug) -> KSK 원본 폴더
# src 가 비어 있으면 제품 없이 빈 카테고리만 생성한다(추후 제품 채울 예정).
$map = @(
  @{ label = "작업복";         slug = "workwear";   src = "점퍼"   },
  @{ label = "단체 조끼/모자";  slug = "vest";       src = "조끼"   },
  @{ label = "단체티셔츠";      slug = "tshirt";     src = "티셔츠" },
  @{ label = "근무복/후리스";   slug = "fleece";     src = ""       },
  @{ label = "체육복/운동복";   slug = "sportswear"; src = ""       },
  @{ label = "안전화";          slug = "safety";     src = ""       }
)

function Get-Slug([string]$name, [int]$idx) {
  $s = ($name -replace '[^A-Za-z0-9]+', '-').Trim('-').ToLower()
  if ([string]::IsNullOrWhiteSpace($s)) { $s = "p$idx" }
  return $s
}

function Save-Resized($srcPath, $destPath) {
  $img = [System.Drawing.Image]::FromFile($srcPath)
  try {
    $w = $img.Width; $h = $img.Height
    $scale = [Math]::Min(1.0, $maxEdge / [Math]::Max($w, $h))
    $nw = [int]([Math]::Round($w * $scale)); $nh = [int]([Math]::Round($h * $scale))
    $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::White)
    $g.DrawImage($img, 0, 0, $nw, $nh)
    $g.Dispose()
    $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)
    $bmp.Save($destPath, $enc, $ep)
    $bmp.Dispose()
  } finally { $img.Dispose() }
}

$tsCats = @()
$tsProds = @()

foreach ($m in $map) {
  # 원본 폴더(src)가 없으면 빈 카테고리만 등록
  if ([string]::IsNullOrWhiteSpace($m.src)) {
    $tsCats += @"
  {
    slug: "$($m.slug)",
    label: "$($m.label)",
    productSlugs: [],
  }
"@
    Write-Output ("  [$($m.slug)] (빈 카테고리)")
    continue
  }

  $catPath = Join-Path $srcCat $m.src
  $catOut  = Join-Path $outDir $m.slug
  if (Test-Path $catOut) { Remove-Item $catOut -Recurse -Force }
  New-Item -ItemType Directory -Path $catOut -Force | Out-Null

  $prodSlugs = @()
  $i = 0
  foreach ($folder in (Get-ChildItem $catPath -Directory | Sort-Object Name)) {
    if ($folder.Name -match '모음') { continue }   # "반팔컷 모음" 등 모음 폴더 제외
    $i++
    $slug = Get-Slug $folder.Name $i
    # 슬러그 중복 방지
    if ($prodSlugs -contains $slug) { $slug = "$slug-$i" }

    $imgs = Get-ChildItem $folder.FullName -Recurse -File | Where-Object { $_.Extension -match '(?i)\.(jpg|jpeg|png)$' }
    # 사이즈표/상세 이미지는 뒤로
    $main = $imgs | Where-Object { $_.Name -notmatch '(?i)(spec|size|사이즈|상세|스펙|3d)' }
    $spec = $imgs | Where-Object { $_.Name -match     '(?i)(spec|size|사이즈|상세|스펙)' }
    $ordered = @($main) + @($spec)
    if ($ordered.Count -eq 0) { continue }
    $ordered = $ordered | Select-Object -First $maxImgs

    $prodOut = Join-Path $catOut $slug
    New-Item -ItemType Directory -Path $prodOut -Force | Out-Null
    $files = @()
    $n = 0
    foreach ($img in $ordered) {
      $n++
      $fn = "{0:D2}.jpg" -f $n
      Save-Resized $img.FullName (Join-Path $prodOut $fn)
      $files += "/products/$($m.slug)/$slug/$fn"
    }

    $title = $folder.Name -replace '"', "'"
    $imgList = ($files | ForEach-Object { "      `"$_`"" }) -join ",`n"
    $tsProds += @"
  {
    slug: "$slug",
    category: "$($m.slug)",
    title: "$title",
    images: [
$imgList
    ],
  }
"@
    $prodSlugs += $slug
    Write-Output ("  [$($m.slug)] $slug  ($($files.Count)장)  <= $($folder.Name)")
  }

  $slugArr = ($prodSlugs | ForEach-Object { "`"$_`"" }) -join ", "
  $tsCats += @"
  {
    slug: "$($m.slug)",
    label: "$($m.label)",
    productSlugs: [$slugArr],
  }
"@
}

$ts = @"
// 이 파일은 scripts/import-ksk.ps1 로 자동 생성됩니다. 직접 수정하지 마세요.
export type ProductCategory = {
  slug: string;
  label: string;
  productSlugs: string[];
};

export type Product = {
  slug: string;
  category: string;
  title: string;
  images: string[];
};

export const productCategories: ProductCategory[] = [
$($tsCats -join ",`n")
];

export const products: Product[] = [
$($tsProds -join ",`n")
];

export function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getProduct(category: string, slug: string) {
  return products.find((p) => p.category === category && p.slug === slug);
}
"@

Set-Content -Path (Join-Path $root "lib\products.ts") -Value $ts -Encoding UTF8
Write-Output "lib/products.ts 생성 완료"
