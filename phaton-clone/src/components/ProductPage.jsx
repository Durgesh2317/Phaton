import React, { useState } from "react";
import { FaTrash, FaRegHeart, FaUser } from "react-icons/fa";
import { getProducts } from "../services/productService";

export default function ProductPage() {
  const [products, setProducts] = useState(getProducts());

  const increaseQty = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decreaseQty = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 mb-8">
        <h1 className="text-xl font-extrabold text-blue-800">Phaton</h1>
        <h2 className="text-lg font-medium text-gray-700">Saved Products</h2>
        <div className="flex gap-6 text-xl text-gray-700">
          <FaRegHeart className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col h-full"
          >

            <div className="flex justify-between items-start mb-3">
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                {product.category}
              </span>
              <button
                onClick={() => deleteProduct(product.id)}
                className="w-6 h-6 flex items-center px-1 justify-center rounded bg-gray-100 hover:bg-gray-300 transition-colors"
              >
                <FaTrash className="text-gray-600 text-xl" />
              </button>
            </div>

            
            <div className="flex justify-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-44 h-44 rounded-lg"
              />
            </div>
            
            <h3 className="text-sm font-medium text-gray-950 text-center mb-4 flex-1">
              {product.name}
            </h3>

            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={() => increaseQty(product.id)}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-300 transition-colors"
              >
                <span className="text-lg font-light">+</span>
              </button>
              
              <span className="text-sm font-medium min-w-[20px] text-center">
                {product.quantity}
              </span>
              
              <button
                onClick={() => decreaseQty(product.id)}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-300 transition-colors"
              >
                <span className="text-lg font-light">−</span>
              </button>
            </div>

           
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-3 px-4 rounded transition-colors">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );

}
