"use client";

import { useParams } from "next/navigation";

const productsData = {
  fashion: [
    { title: "Classic Shirt", description: "A stylish cotton shirt for everyday wear" },
    { title: "Elegant Dress", description: "Perfect dress for parties and special events" },
    { title: "Leather Jacket", description: "Premium leather jacket for a cool look" },
  ],
  beauty: [
    { title: "Vitamin C Serum", description: "Brighten your skin with this serum" },
    { title: "Red Lipstick", description: "Bold and long-lasting lipstick" },
    { title: "Luxury Perfume", description: "A subtle fragrance for all occasions" },
  ],
  tech: [
    { title: "Smartphone X", description: "High performance with excellent battery life" },
    { title: "Laptop Pro", description: "Perfect for work and gaming" },
    { title: "Smartwatch 3", description: "Track your fitness and notifications" },
  ],
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category?.toLowerCase();

  if (!category) {
    return <div className="p-40 text-xl font-bold">Loading...</div>;
  }

  const products = productsData[category] || [];

  return (
    <div className="p-10  ">
      <h1 className="text-4xl font-bold capitalize">{category}</h1>
      <p className="mt-2 text-lg">Welcome to the {category} category page!</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product, i) => (
            <div key={i} className="border rounded-lg shadow p-4 hover:scale-105 transition-transform">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
}
