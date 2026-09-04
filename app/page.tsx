import Hero from "@/components/hero";
import Performance from "@/components/performence";
import ProductViewer from "@/components/productViewer";
import Showcase from "@/components/showcase";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
    </div>
  );
}
