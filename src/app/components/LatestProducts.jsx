"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function LatestProducts() {
  const latestProducts = [
    { id: 1, name: "Smartphone Stand", price: "$19.99", image: "https://i.ibb.co.com/RT0TXjgn/images-1.jpg" },
    { id: 2, name: "USB Hub", price: "$14.99", image: "https://i.ibb.co.com/XrBn3tzw/QK100-RNDR-30.webp" },
    { id: 3, name: "Webcam", price: "$39.99", image: "https://i.ibb.co.com/RT0TXjgn/images-1.jpg" },
    { id: 4, name: "Laptop Cooling Pad", price: "$24.99", image: "https://i.ibb.co.com/M5GzmmXn/images.jpg" },
    { id: 5, name: "Wireless Charger", price: "$29.99", image: "https://i.ibb.co.com/GQJGZy69/b524d1fb39b8d68b584d890c0407a879.jpg" },
    { id: 6, name: "Bluetooth Earphones", price: "$49.99", image: "https://i.ibb.co.com/F4dKhxDr/QCY-T13-ANC-True-Wireless-Earbuds-Black-QCY-4323a-327053.png" },
    { id: 7, name: "Portable SSD", price: "$99.99", image: "https://i.ibb.co.com/RT0TXjgn/images-1.jpg" },
    { id: 8, name: "Mechanical Keyboard", price: "$59.99", image: "https://i.ibb.co.com/XrBn3tzw/QK100-RNDR-30.webp" },
    { id: 9, name: "Gaming Mouse", price: "$34.99", image: "https://i.ibb.co.com/XrBn3tzw/QK100-RNDR-30.webp" },
    { id: 10, name: "Smartwatch", price: "$89.99", image: "https://i.ibb.co.com/M5GzmmXn/images.jpg" },
    { id: 11, name: "Noise Cancelling Headphones", price: "$199.99", image: "https://i.ibb.co.com/GQJGZy69/b524d1fb39b8d68b584d890c0407a879.jpg" },
    { id: 12, name: "Action Camera", price: "$149.99", image: "https://i.ibb.co.com/F4dKhxDr/QCY-T13-ANC-True-Wireless-Earbuds-Black-QCY-4323a-327053.png" },
  ];

  return (
    <div className="container  mx-auto py-10 px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl font-bold text-white text-start mb-6">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {latestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
