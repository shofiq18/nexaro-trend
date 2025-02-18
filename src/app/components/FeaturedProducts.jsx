import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = [
    { id: 1, name: "Camera", price: "$222.00", image: "https://i.ibb.co.com/GQJGZy69/b524d1fb39b8d68b584d890c0407a879.jpg" },
    { id: 2, name: "Wireless Earbuds", price: "$49.99", image: "https://i.ibb.co.com/F4dKhxDr/QCY-T13-ANC-True-Wireless-Earbuds-Black-QCY-4323a-327053.png" },
    { id: 3, name: "Smart Watch", price: "$89.99", image: "https://i.ibb.co.com/M5GzmmXn/images.jpg" },
    { id: 4, name: "Portable Charger", price: "$29.99", image: "https://i.ibb.co.com/RT0TXjgn/images-1.jpg" },
    { id: 5, name: "Gaming Mouse", price: "$39.99", image: "https://i.ibb.co.com/x8qmxVf5/gaming-mouse-with-a-blue-glow.jpg" },
    { id: 6, name: "Mechanical Keyboard", price: "$79.99", image: "https://i.ibb.co.com/XrBn3tzw/QK100-RNDR-30.webp" },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
