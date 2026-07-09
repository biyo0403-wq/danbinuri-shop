# KSK 제품 이미지 가져오기 (세부카테고리판)
# .import 스테이징(zip1/zip2)의 원본을 웹용(리사이즈/압축)으로 변환해
# public/products/<카테고리>/<제품>/NN.jpg 로 저장하고 lib/products.ts 를 생성한다.
# - 각 제품 카테고리 안에 세부카테고리(subCategory)를 함께 부여한다.
# - 원본 폴더(src) 하나는 고정 세부카테고리(subcat) 또는 항목별 매핑(subcatMap+subcatDefault) 중 하나를 가진다.
# - 제품당 이미지는 최대 4장까지만 저장한다.
# - 재실행 시 대상 카테고리 출력 폴더를 비우고 새로 만든다 (이름표 lib/product-names.ts 는 건드리지 않음)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root   = "C:\Users\Y\Desktop\danbinuri-shop"
$z1     = Join-Path $root ".import\zip1\2026 SS KSK 이미지파일1(신상품,점퍼,조끼,티셔츠,제전복등)"
$z2     = Join-Path $root ".import\zip2\2026"
$outDir = Join-Path $root "public\products"
$maxEdge = 1400
$quality = 82
$maxImgs = 4

# 조끼 세부카테고리: 폴더명/낱장 그룹키 -> 세부카테고리
$vestSubcatMap = @{
  "51" = "기본형"; "51-A" = "기본형"; "52" = "기본형"; "52-A" = "기본형"; "53" = "기본형"; "53-A" = "기본형"
  "550-A" = "기본형"; "551" = "기본형"; "552" = "기본형"; "560~563" = "기본형"
  "57" = "기본형"; "57-A" = "기본형"; "58" = "기본형"; "58-A" = "기본형"; "59" = "기본형"; "59-A" = "기본형"
  "64" = "기본형"; "64-A" = "기본형"; "66" = "기본형"; "66-A" = "기본형"; "662" = "기본형"; "663" = "기본형"; "924" = "기본형"
  "65 회색망사조끼" = "기본형"; "TC망사조끼" = "기본형"; "TC조끼" = "기본형"
  "79 경찰,보안조끼 형광" = "안전조끼"; "80 곤색망사조끼 신형" = "안전조끼"; "81 검정망사조끼 신상" = "안전조끼"
  "71.72 밀리터리 망사조끼" = "밀리터리"
  "775" = "특수다용도"; "776" = "특수다용도"; "774 특수조끼  블랙" = "특수다용도"
  "777.778.779 특수조끼3종" = "특수다용도"; "925" = "특수다용도"; "사다리조끼 781-789" = "특수다용도"; "665" = "특수다용도"
  "922" = "팀조끼"; "타스란 42.43.44" = "팀조끼"; "KSK2560(챠콜+오렌지)조끼" = "팀조끼"; "KSK2599(챠콜+블루)조끼" = "팀조끼"
}
$vestSubcatDefault = "기본형"

# 티셔츠 세부카테고리: 예외만 지정, 나머지는 전부 카라
$tshirtSubcatMap = @{
  "587(그레이)라운드티셔츠" = "라운드"
  "579,580,581" = "기능성집업"
}
$tshirtSubcatDefault = "카라"

# 제전복,위생복,가운 폴더: 실물 확인 결과로 가운/병원복/방진복 구분
# (54,55-KSK: 민무늬 콜라 가운 / 67&61&62: 병원 근무 장면(위생복+약사가운) / 904,905: 제전 스트라이프 원단)
$gownSubcatMap = @{
  "54-KSK" = "가운"
  "55-KSK" = "가운"
  "67&61&62" = "병원복"
  "904" = "방진복"
  "905" = "방진복"
}
$gownSubcatDefault = "가운"

# 카테고리 -> KSK 원본 폴더.
# 각 src 는 subcat(고정 세부카테고리) 또는 subcatMap+subcatDefault(항목별 매핑) 중 하나를 가진다.
# srcs 가 비면 제품 없는 빈 카테고리.
$map = @(
  @{ label = "작업복"; slug = "workwear"; srcs = @(
      @{ path = (Join-Path $z1 "점퍼");                              subcat = "점퍼/자켓" },
      @{ path = (Join-Path $z2 "바지");                              subcat = "바지" },
      @{ path = (Join-Path $z2 "상의&하의 세트 (별도구매가능)");       subcat = "상하 세트" },
      @{ path = (Join-Path $z2 "스즈끼우주복,멜빵바지");              subcat = "우주복/멜빵바지" }
  ) },
  @{ label = "단체 조끼/모자"; slug = "vest"; srcs = @(
      @{ path = (Join-Path $z1 "조끼"); subcatMap = $vestSubcatMap; subcatDefault = $vestSubcatDefault }
  ) },
  @{ label = "근무복/후리스"; slug = "fleece"; srcs = @(
      @{ path = (Join-Path $z1 "제전복,위생복,가운"); subcatMap = $gownSubcatMap; subcatDefault = $gownSubcatDefault },
      @{ path = (Join-Path $z2 "경비복");             subcat = "경비복" },
      @{ path = (Join-Path $z2 "민방위");             subcat = "민방위복" }
  ) },
  @{ label = "단체티셔츠"; slug = "tshirt"; srcs = @(
      @{ path = (Join-Path $z1 "티셔츠"); subcatMap = $tshirtSubcatMap; subcatDefault = $tshirtSubcatDefault }
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

function Resolve-Subcat($srcObj, $key) {
  if ($srcObj.subcat) { return $srcObj.subcat }
  if ($srcObj.subcatMap -and $srcObj.subcatMap.ContainsKey($key)) { return $srcObj.subcatMap[$key] }
  return $srcObj.subcatDefault
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

  # 1) 제품 후보 수집 (폴더 제품 + 낱장 묶음), 세부카테고리 부여
  $items = @()
  foreach ($srcObj in $m.srcs) {
    $src = $srcObj.path
    if (-not (Test-Path $src)) { Write-Output ("  !! 원본 폴더 없음: " + $src); continue }

    foreach ($folder in (Get-ChildItem $src -Directory | Sort-Object Name)) {
      if ($folder.Name -match '모음|기존제품') { continue }
      $imgs = Get-ChildItem $folder.FullName -Recurse -File | Where-Object { $_.Extension -match '(?i)^\.(jpg|jpeg|png)$' }
      if (-not $imgs) { continue }
      $main = @($imgs | Where-Object { $_.Name -notmatch '(?i)(spec|size|사이즈|상세|스펙|3d|뒤|뒷)' } | Sort-Object Name)
      $back = @($imgs | Where-Object { $_.Name -match '(?i)(spec|size|사이즈|상세|스펙|3d|뒤|뒷)' } | Sort-Object Name)
      $subcat = Resolve-Subcat $srcObj $folder.Name
      $items += @{ key = $folder.Name; title = (Clean-Title $folder.Name); files = (@($main) + @($back)); subcat = $subcat }
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
      $subcat = Resolve-Subcat $srcObj $k
      $items += @{ key = $k; title = $t; files = (@($main) + @($back)); subcat = $subcat }
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
    subCategory: "$($it.subcat)",
    title: "$($it.title)",
    images: [
$imgList
    ],
  }
"@
    $prodSlugs += $slug
    Write-Output ("  [$($m.slug)/$($it.subcat)] $slug  ($($files.Count)장)  <= $($it.title)")
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
