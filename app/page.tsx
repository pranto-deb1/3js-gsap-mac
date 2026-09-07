import Features from "@/components/features";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import Performance from "@/components/performence";
import ProductViewer from "@/components/productViewer";
import Showcase from "@/components/showcase";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProductViewer />
      <Showcase />
      {/* <Performance /> */}
      <Features />
      <Highlights />
    </div>
  );
}
