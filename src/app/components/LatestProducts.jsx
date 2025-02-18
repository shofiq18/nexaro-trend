"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function LatestProducts() {
  const latestProducts = [
    { id: 1, name: "Smartphone Stand", price: "$19.99", image: "https://via.placeholder.com/150" },
    { id: 2, name: "USB Hub", price: "$14.99", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Webcam", price: "$39.99", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Laptop Cooling Pad", price: "$24.99", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Wireless Charger", price: "$29.99", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Bluetooth Earphones", price: "$49.99", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Portable SSD", price: "$99.99", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Mechanical Keyboard", price: "$59.99", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Gaming Mouse", price: "$34.99", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Smartwatch", price: "$89.99", image: "https://via.placeholder.com/150" },
    { id: 11, name: "Noise Cancelling Headphones", price: "$199.99", image: "https://via.placeholder.com/150" },
    { id: 12, name: "Action Camera", price: "$149.99", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="container max-w-[1421px] mx-auto py-10 px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {latestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
