"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/35Sk2b6j/Adobe-Stock-709666448-Preview.jpg",
    title: "Tech Gadgets Sale",
    subtitle: "Up to 50% Off on Latest Tech Accessories",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/6cw1T3QW/kdrama-fashion-banner-scaled-1.webp",
    title: "Fashion Trends 2025",
    subtitle: "Exclusive Styles Coming Soon",
    buttonText: "Explore Fashion",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/mVBmqbFC/flat-lay-black-tech-gadgets-headphones-phone-laptop-black-background-14117-747545.jpg",
    title: "Electronics Mania",
    subtitle: "Grab the Best Deals Today!",
    buttonText: "Check Offers",
  },
];

export default function AutoCarouselBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[600px]">
      {/* Slides */}
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="bg-black bg-opacity-50 text-center p-8 rounded-lg">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg text-gray-200 mb-6">{slide.subtitle}</p>
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    {slide.buttonText}
                  </button>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 w-full flex justify-center items-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
