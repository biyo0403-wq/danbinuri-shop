# KSK 제품 이미지 전체 가져오기 (재분류판)
# .import 스테이징(zip1/zip2)의 원본을 웹용(리사이즈/압축)으로 변환해
# public/products/<카테고리>/<제품>/NN.jpg 로 저장하고 lib/products.ts 를 생성한다.
# - 하위 폴더 제품 + 낱장 사진(번호별 자동 묶음) 모두 처리
# - 신상품(NEW) 폴더는 다른 폴더와 중복이라 제외
# - 재실행 시 대상 카테고리 출력 폴더를 비우고 새로 만든다 (이름표 lib/product-names.ts 는 건드리지 않음)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root   = "C:\Users\Y\Desktop\danbinuri-shop"
$z1     = Join-Path $root ".import\zip1\2026 SS KSK 이미지파일1(신상품,점퍼,조끼,티셔츠,제전복등)"
$z2     = Join-Path $root ".import\zip2\2026"
$outDir = Join-Path $root "public\products"
$maxEdge = 1400
$quality = 82
$maxImgs = 8

# 카테고리 -> KSK 원본 폴더(여러 개 가능). srcs 가 비면 제품 없는 빈 카테고리.
$map = @(
  @{ label = "작업복"; slug = "workwear"; srcs = @(
      (Join-Path $z1 "점퍼"),
      (Join-Path $z2 "바지"),
      (Join-Path $z2 "상의&하의 세트 (별도구매가능)"),
      (Join-Path $z2 "스즈끼우주복,멜빵바지")
  ) },
  @{ label = "단체 조끼/모자"; slug = "vest"; srcs = @(
      (Join-Path $z1 "조끼")
  ) },
  @{ label = "근무복/후리스"; slug = "fleece"; srcs = @(
      (Join-Path $z1 "제전복,위생복,가운"),
      (Join-Path $z2 "경비복"),
      (Join-Path $z2 "민방위")
  ) },
  @{ label = "단체티셔츠"; slug = "tshirt"; srcs = @(
      (Join-Path $z1 "티셔츠")
  ) },
  @{ label = "체육복/운동복"; slug = "sportswear"; srcs = @() },
  @{ label = "안전화";        slug = "safety";     srcs = @() }
)

function Get-Slug([string]$name, [int]$idx) {
  $s = ($name -replace '[^A-Za-z0-9]+', '-').Trim('-').ToLower()
  if ([string]::IsNullOrWhiteSpace($s)) { $s = "p$idx" }
  return $s
}

# 낱장 파일명에서 제품 묶음 키 추출: 한글/공백 전까지의 선행 번호 토큰
function Get-LooseKey([string]$base) {
  $b = $base.Trim()
  # "KP 720..." 처럼 영문+공백+번호는 붙여서 처리
  $b = $b -replace '^([A-Za-z]+)\s+', '$1'
  if ($b -match '^([A-Za-z0-9~&,\.\-]+)') {
    $k = $Matches[1].Trim('-', '.', ',')
    if ($k) { return $k }
  }
  return $b
}

# 표시용 제목 정리: 공급사 표기(-경신123), "복사" 꼬리 제거
function Clean-Title([string]$s) {
  $t = $s -replace '-?경신\d*', ''
  $t = $t -replace '\s*복사\s*$', ''
  $t = $t -replace '"', "'"
  return $t.Trim()
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
  if ($m.srcs.Count -eq 0) {
    $tsCats += @"
  {
    slug: "$($m.slug)",
    label: "$($m.label)",
    productSlugs: [],
  }
"@
    Write-Output ("[$($m.slug)] (빈 카테고리)")
    continue
  }

  $catOut = Join-Path $outDir $m.slug
  if (Test-Path $catOut) { Remove-Item $catOut -Recurse -Force }
  New-Item -ItemType Directory -Path $catOut -Force | Out-Null

  # 1) 제품 후보 수집 (폴더 제품 + 낱장 묶음)
  $items = @()
  foreach ($src in $m.srcs) {
    if (-not (Test-Path $src)) { Write-Output ("  !! 원본 폴더 없음: " + $src); continue }

    foreach ($folder in (Get-ChildItem $src -Directory | Sort-Object Name)) {
      if ($folder.Name -match '모음|기존제품') { continue }
      $imgs = Get-ChildItem $folder.FullName -Recurse -File | Where-Object { $_.Extension -match '(?i)^\.(jpg|jpeg|png)$' }
      if (-not $imgs) { continue }
      $main = @($imgs | Where-Object { $_.Name -notmatch '(?i)(spec|size|사이즈|상세|스펙|3d|뒤|뒷)' } | Sort-Object Name)
      $back = @($imgs | Where-Object { $_.Name -match '(?i)(spec|size|사이즈|상세|스펙|3d|뒤|뒷)' } | Sort-Object Name)
      $items += @{ key = $folder.Name; title = (Clean-Title $folder.Name); files = (@($main) + @($back)) }
    }

    $loose = @(Get-ChildItem $src -File | Where-Object { $_.Extension -match '(?i)^\.(jpg|jpeg|png)$' })
    $groups = @{}
    foreach ($f in $loose) {
      $base = [System.IO.Path]::GetFileNameWithoutExtension($f.Name)
      $k = Get-LooseKey $base
      if (-not $groups.ContainsKey($k)) { $groups[$k] = @() }
      $groups[$k] += $f
    }
    foreach ($k in ($groups.Keys | Sort-Object)) {
      $fs = @($groups[$k])
      $main = @($fs | Where-Object { $_.Name -notmatch '뒤|뒷' } | Sort-Object Name)
      $back = @($fs | Where-Object { $_.Name -match '뒤|뒷' } | Sort-Object Name)
      if ($fs.Count -eq 1) {
        $t = Clean-Title ([System.IO.Path]::GetFileNameWithoutExtension($fs[0].Name))
      } else {
        $t = Clean-Title $k
      }
      $items += @{ key = $k; title = $t; files = (@($main) + @($back)) }
    }
  }

  # 2) 저장 + TS 조각 생성
  $prodSlugs = @()
  $i = 0
  foreach ($it in $items) {
    $i++
    $slug = Get-Slug $it.key $i
    if ($prodSlugs -contains $slug) { $slug = "$slug-$i" }

    $ordered = @($it.files | Select-Object -First $maxImgs)
    if ($ordered.Count -eq 0) { continue }

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

    $imgList = ($files | ForEach-Object { "      `"$_`"" }) -join ",`n"
    $tsProds += @"
  {
    slug: "$slug",
    category: "$($m.slug)",
    title: "$($it.title)",
    images: [
$imgList
    ],
  }
"@
    $prodSlugs += $slug
    Write-Output ("  [$($m.slug)] $slug  ($($files.Count)장)  <= $($it.title)")
  }

  $slugArr = ($prodSlugs | ForEach-Object { "`"$_`"" }) -join ", "
  $tsCats += @"
  {
    slug: "$($m.slug)",
    label: "$($m.label)",
    productSlugs: [$slugArr],
  }
"@
  Write-Output ("[$($m.slug)] 제품 " + $prodSlugs.Count + "개")
}

$ts = @"
// 이 파일은 scripts/import-ksk.ps1 로 자동 생성됩니다. 직접 수정하지 마세요.
// 표시 이름을 바꾸려면 lib/product-names.ts 에 추가하세요.
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
