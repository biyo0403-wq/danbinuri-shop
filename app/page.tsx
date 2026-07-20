import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Strengths from "@/components/home/Strengths";
import Categories from "@/components/home/Categories";
import Brands from "@/components/home/Brands";
import Process from "@/components/home/Process";
import Certifications from "@/components/home/Certifications";
import InquiryCTA from "@/components/home/InquiryCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Strengths />
      <Categories />
      <Brands />
      <Process />
      <Certifications />
      <InquiryCTA />
    </>
  );
}
