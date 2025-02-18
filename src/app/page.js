import Banner from "./components/Banner";
import FeaturedProducts from "./components/FeaturedProducts";
import LatestProducts from "./components/LatestProducts";
import Products from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      <Banner/>
      <div className="text-center">
        <FeaturedProducts/>
        <LatestProducts/>
    </div>
    </div>
  );
}
