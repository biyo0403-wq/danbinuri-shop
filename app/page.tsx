import HeroCarousel from "@/components/home/HeroCarousel";
import QuickCategories from "@/components/home/QuickCategories";
import ProductSection from "@/components/home/ProductSection";
import PromoBanners from "@/components/home/PromoBanners";
import {
  heroBanners,
  newProducts,
  bestProducts,
  saleProducts,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroCarousel slides={heroBanners} />
      <QuickCategories />

      <ProductSection
        title="NEW ARRIVAL"
        subtitle="이번 주 새로 입고된 신상품"
        href="/new"
        products={newProducts}
      />

      <PromoBanners />

      <ProductSection
        title="WEEKLY BEST"
        subtitle="가장 많이 찾은 베스트 아이템"
        href="/best"
        products={bestProducts}
        ranked
      />

      <ProductSection
        title="SALE"
        subtitle="놓치면 아쉬운 특가"
        href="/sale"
        products={saleProducts}
      />
    </>
  );
}
