import fs from "node:fs";
import path from "node:path";
import { rawNames, classify } from "./clicksports-map.mjs";

const downloadsDir =
  "C:\\Users\\Y\\Downloads\\경신코리아(KSK) 작업복 - 현장 근무복 및 정비복 스즈끼 주문제작 _ 클릭스포츠";

function slugFromName(goodsNo, rawName) {
  const m = rawName.match(/(KSK|KP)-?[0-9A-Za-z,.\-·\s]+/);
  let base = m ? m[0] : `p${goodsNo}`;
  const s = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return s || `p${goodsNo}`;
}

// 중복/제외할 goodsNo (20254 = 20252와 동일한 쿨론 긴팔 티셔츠 중복 등록)
const SKIP = new Set(["20254"]);

// 1) Downloads 폴더 파일을 goodsNo 별로 그룹
const files = fs.readdirSync(downloadsDir).filter((f) => /\.(jpg|jpeg|png)$/i.test(f));
const byGoods = {};
for (const f of files) {
  const m = f.match(/^imgi_\d+_(\d+)_main_/);
  if (!m) {
    console.error("!! 패턴 불일치:", f);
    continue;
  }
  const no = m[1];
  if (SKIP.has(no)) continue;
  (byGoods[no] ||= []).push(f);
}

// 2) 매니페스트 생성 (이미지 보유 상품만)
const manifest = [];
const slugCount = {};
for (const [no, fileList] of Object.entries(byGoods)) {
  const rawName = rawNames[no];
  if (!rawName) {
    console.error("!! 상품명 없음:", no, fileList);
    continue;
  }
  const { category, subCategory, title } = classify(no, rawName);
  if (!category) {
    console.error("!! 미분류:", no, rawName);
    continue;
  }
  let slug = slugFromName(no, rawName);
  slugCount[slug] = (slugCount[slug] || 0) + 1;
  if (slugCount[slug] > 1) slug = `${slug}-${no}`;

  fileList.sort();
  manifest.push({
    goodsNo: no,
    category,
    subCategory,
    title,
    slug,
    sourceFiles: fileList.map((f) => path.join(downloadsDir, f)),
  });
}

fs.writeFileSync(
  path.join(process.cwd(), ".import", "clicksports-manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8"
);

console.log("매니페스트 항목 수:", manifest.length);
const tally = {};
for (const it of manifest) {
  const k = it.category + "/" + it.subCategory;
  tally[k] = (tally[k] || 0) + 1;
}
for (const [k, v] of Object.entries(tally).sort()) console.log(" ", k, v);
