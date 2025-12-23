"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Heart,
  ShoppingCart,
  ChevronLeft,
  Minus,
  Plus,
} from "lucide-react";

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
  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const [selectedColor, setSelectedColor] = useState<string>("blue");
  const [quantity, setQuantity] = useState<number>(1);

  const productImages: string[] = [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=650&fit=crop",
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=650&fit=crop",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=650&fit=crop",
  ];

  const sizes: string[] = ["Small", "Medium", "Large", "X-Large"];

  const colors: { name: string; code: string }[] = [
    { name: "red", code: "#EF4444" },
    { name: "white", code: "#FFFFFF" },
    { name: "brown", code: "#92400E" },
    { name: "blue", code: "#3B82F6" },
    { name: "black", code: "#000000" },
  ];

  const reviews: Review[] = [
    {
      name: "Alex Goodson",
      rating: 5,
      date: "Aug 15, 2021",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. The quality is exceptional and the fit is perfect!",
    },
    {
      name: "Jane Doe",
      rating: 4,
      date: "Aug 20, 2021",
      comment:
        "Great quality and fast shipping. Highly recommend! The material feels premium and comfortable.",
    },
    {
      name: "Alex Goodson",
      rating: 5,
      date: "Aug 15, 2021",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Best purchase this year!",
    },
  ];

  const relatedProducts: Product[] = [
    {
      id: "1",
      name: "Black Dress",
      price: 300.0,
      image:
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=400&fit=crop",
    },
    {
      id: "2",
      name: "T-Shirt",
      price: 150.0,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
    },
    {
      id: "3",
      name: "Jacket",
      price: 450.0,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop",
    },
    {
      id: "4",
      name: "Blue Hoodie",
      price: 250.0,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop",
    },
  ];

  const handleQuantityChange = (type: "increase" | "decrease"): void => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center text-gray-600 hover:text-gray-900 transition">
              <ChevronLeft className="w-5 h-5" />
              <span className="ml-1 font-medium">Back</span>
            </button>

            <nav className="hidden md:flex gap-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition font-medium"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-gray-600 hover:text-gray-900 transition font-medium"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition font-medium"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={productImages[selectedImage]}
                alt="Product"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex gap-4">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === idx
                      ? "border-blue-500"
                      : "border-gray-200"
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
              <button className="w-24 h-24 rounded-lg bg-gray-900 text-white flex items-center justify-center font-semibold hover:bg-gray-800 transition">
                +2
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">Home / Men / Clothes</p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                JVER Men Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">(3.0K)</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  $300.00
                </span>
                <span className="text-xl text-gray-400 line-through">
                  $400.00
                </span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  -25%
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Size</h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 rounded-lg border-2 transition font-medium ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                Colors
              </h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-transform ${
                      selectedColor === color.name
                        ? "border-blue-500 scale-110"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  >
                    {color.name === "white" && (
                      <span className="sr-only">White</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-4 py-3 hover:bg-gray-100 transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-3 font-semibold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="px-4 py-3 hover:bg-gray-100 transition"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Add to Cart
                </button>

                <button className="p-3 border-2 border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition">
                  <Heart className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Rating & Reviews
            </h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium transition">
              Write a Review
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="text-center md:border-r border-gray-200 pr-8">
                <div className="text-6xl font-bold mb-2 text-gray-900">4.5</div>
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600">3.0K Reviews</p>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-200 pb-6 last:border-0"
                >
                  <div className="flex items-start justify-between mb-2">
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
                                  ? "fill-yellow-400 text-yellow-400"
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
                  <p className="text-gray-600 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-gray-900">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold mb-1 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  ${product.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">SHOP.CO</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="hover:text-white transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="hover:text-white transition">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-white transition">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/support" className="hover:text-white transition">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/delivery"
                    className="hover:text-white transition"
                  >
                    Delivery Details
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/ebooks" className="hover:text-white transition">
                    Free eBooks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorial"
                    className="hover:text-white transition"
                  >
                    Development Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition">
                    How to - Blog
                  </Link>
                </li>
                <li>
                  <Link href="/youtube" className="hover:text-white transition">
                    Youtube Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 SHOP.CO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
