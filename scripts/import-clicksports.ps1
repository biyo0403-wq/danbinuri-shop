# 클릭스포츠 다운로드 이미지(.import/clicksports-manifest.json) 를 웹용으로 변환해
# public/products/<카테고리>/<제품>/NN.jpg 로 저장하고 lib/products.ts 를 생성한다.
# 매니페스트는 scripts/clicksports-manifest.mjs (node) 로 먼저 생성한다.

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root = "C:\Users\Y\Desktop\danbinuri-shop"
$manifestPath = Join-Path $root ".import\clicksports-manifest.json"
$outDir = Join-Path $root "public\products"
$maxEdge = 1400
$quality = 82
$maxImgs = 4

$manifest = Get-Content $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json

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

# 카테고리별 기존 폴더 비우기
$cats = $manifest | Select-Object -ExpandProperty category -Unique
foreach ($cat in $cats) {
  $catOut = Join-Path $outDir $cat
  if (Test-Path $catOut) { Remove-Item $catOut -Recurse -Force }
  New-Item -ItemType Directory -Path $catOut -Force | Out-Null
}

$tsProds = @()
$catSlugs = @{}

foreach ($item in $manifest) {
  $prodOut = Join-Path (Join-Path $outDir $item.category) $item.slug
  New-Item -ItemType Directory -Path $prodOut -Force | Out-Null

  $files = @()
  $n = 0
  foreach ($src in ($item.sourceFiles | Select-Object -First $maxImgs)) {
    $n++
    $fn = "{0:D2}.jpg" -f $n
    Save-Resized $src (Join-Path $prodOut $fn)
    $files += "/products/$($item.category)/$($item.slug)/$fn"
  }

  $imgList = ($files | ForEach-Object { "      `"$_`"" }) -join ",`n"
  $titleEsc = $item.title -replace '"', "'"
  $tsProds += @"
  {
    slug: "$($item.slug)",
    category: "$($item.category)",
    subCategory: "$($item.subCategory)",
    title: "$titleEsc",
    images: [
$imgList
    ],
  }
"@

  if (-not $catSlugs.ContainsKey($item.category)) { $catSlugs[$item.category] = @() }
  $catSlugs[$item.category] += $item.slug

  Write-Output ("[$($item.category)/$($item.subCategory)] $($item.slug)  ($($files.Count)장)  <= $($item.title)")
}

# 카테고리 라벨 (고정)
$labels = @{
  workwear = "작업복"; vest = "단체 조끼/모자"; fleece = "근무복/후리스"
  tshirt = "단체티셔츠"; sportswear = "체육복/운동복"; safety = "안전화"
}

$tsCats = @()
foreach ($slug in @("workwear", "vest", "fleece", "tshirt", "sportswear", "safety")) {
  $slugs = if ($catSlugs.ContainsKey($slug)) { $catSlugs[$slug] } else { @() }
  $slugArr = ($slugs | ForEach-Object { "`"$_`"" }) -join ", "
  $tsCats += @"
  {
    slug: "$slug",
    label: "$($labels[$slug])",
    productSlugs: [$slugArr],
  }
"@
}

$ts = @"
// 이 파일은 scripts/import-clicksports.ps1 로 자동 생성됩니다. 직접 수정하지 마세요.
// 표시 이름을 바꾸려면 lib/product-names.ts 에 추가하세요.
export type ProductCategory = {
  slug: string;
  label: string;
  productSlugs: string[];
};

export type Product = {
  slug: string;
  category: string;
  subCategory: string;
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
