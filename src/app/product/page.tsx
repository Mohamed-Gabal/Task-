"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Minus, Plus, ChevronDown } from "lucide-react";
import { Navbar } from "@/src/components/shared/Navbar";
import { Footer } from "@/src/components/shared/Footer";

interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
}

const Page: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("lightblue");
  const [quantity, setQuantity] = useState<number>(1);

  const productImages: string[] = [
    "/product1.png",
    "/product2.png",
    "/product3.png",
  ];
  const sizes: string[] = ["XS", "S", "M", "L", "XL"];
  const colors: { name: string; code: string }[] = [
    { name: "red", code: "#EF4444" },
    { name: "lightblue", code: "#BFDBFE" },
    { name: "olive", code: "#A8A869" },
    { name: "blue", code: "#60A5FA" },
    { name: "gray", code: "#6B7280" },
  ];

  const reviews: Review[] = [
    {
      name: "Alex Doemen",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit sed",
    },
    {
      name: "Alex Doemen",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit sed",
    },
    {
      name: "Alex Doemen",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit sed",
    },
    {
      name: "Alex Doemen",
      rating: 4,
      date: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit sed",
    },
  ];

  const relatedProducts: Product[] = [
    {
      id: "1",
      name: "J.VER Women's Letter Mini Dress Short Sleeve Elegant Midi Dress Bodycon Strechy Dress With Sash",
      price: 45.0,
      image: "/item1.png",
    },
    {
      id: "2",
      name: "GFMN Women's Basic Plain 100% Cotton Long Sleeve Knit Top - Two With One",
      price: 40.0,
      image: "/item2.png",
    },
    {
      id: "3",
      name: "J.VER Women's Dress Short Sleeve Maxi Dress Pocket Casual Loose Maxi Dresses - One With One",
      price: 60.0,
      image: "/item3.png",
    },
    {
      id: "4",
      name: "J.VER Women's Stripe Tee Short Sleeve T-Shirts Crewne - One With",
      price: 45.0,
      image: "/item4.png",
    },
  ];

  const handleQuantityChange = (type: "increase" | "decrease"): void => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 flex flex-wrap gap-2">
          <span>Home</span>
          <span>/</span>
          <span>Our Category</span>
          <span>/</span>
          <span className="text-gray-700">Product Details</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden">
              <Image
                src={productImages[selectedImage]}
                alt="Product"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-wrap gap-4">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-[110px] h-[140px] rounded-2xl overflow-hidden transition ${
                    selectedImage === idx
                      ? "ring-2 ring-[#BE968E]"
                      : "ring-1 ring-gray-200"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Product ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
              <button className="w-[110px] h-[140px] rounded-2xl bg-gray-800 text-white flex items-center justify-center text-3xl font-light hover:bg-gray-700 transition">
                +2
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">7 days</span>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-gray-300">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-gray-300">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-gray-900 leading-snug">
                J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With
                Blue
              </h1>

              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                  $300.00
                </span>
                <span className="text-xl sm:text-2xl text-gray-400 line-through">
                  $400.00
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 mb-4">
                *the price is exclusive of taxes
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam
                nonummy Lorem ipsum dolor sit amet, diam nonummy
              </p>
            </div>

            {/* Type & Collar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Type", "Collar"].map((label, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 text-sm">
                      <option>{label === "Type" ? "Collar" : "Select"}</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Size
              </label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 rounded-lg border text-sm font-medium transition ${
                      selectedSize === size
                        ? "border-[#BE968E] bg-[#BE968E] text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Colors
              </label>
              <div className="flex flex-wrap gap-2.5">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-11 h-11 rounded-full transition-all ${
                      selectedColor === color.name
                        ? "ring-2 ring-gray-800 ring-offset-2"
                        : "ring-1 ring-gray-300"
                    }`}
                    style={{ backgroundColor: color.code }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity & Add */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Quantity{" "}
                <span className="text-gray-400 font-normal text-xs">
                  (10 piece for wholes)
                </span>
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-4 py-2.5 hover:bg-gray-50 transition"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="px-5 py-2.5 font-medium text-gray-900 min-w-[50px] text-center">
                    {quantity.toString().padStart(2, "0")}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="px-4 py-2.5 hover:bg-gray-50 transition"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ${(300 * quantity).toFixed(2)}
                </div>
                <button className="ml-auto bg-[#BE968E] text-white py-2.5 px-6 sm:px-8 rounded-lg font-medium text-sm sm:text-base hover:bg-[#A87D6F] transition">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Rating & Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1 text-center md:border-r border-gray-200 pr-0 md:pr-8">
              <div className="text-6xl sm:text-8xl font-bold mb-2 text-gray-900">
                4.5
              </div>
              <div className="flex justify-center mb-2 gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-[#BE968E] text-[#BE968E]"
                  />
                ))}
              </div>
              <p className="text-gray-600">3.0K Reviews</p>
            </div>
            <div className="md:col-span-3 space-y-6">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-200 pb-6 last:border-0"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2 sm:gap-0">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= review.rating
                                  ? "fill-[#BE968E] text-[#BE968E]"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-4 bg-[#F5F5F5] text-[#BE968E] hover:text-[#A87D6F] font-medium transition px-4 py-2 rounded-lg">
            Write a Review
          </button>
        </div>

        {/* Similar Items */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">
            Similar items
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white shadow-sm">
                      <Heart className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
                <h3 className="font-medium text-sm sm:text-base mb-1.5 text-gray-900 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-3 h-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">(4.9)</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
