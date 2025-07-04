"use client";

import { useEffect, useState } from "react";
import { Search, Boxes, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { RootState } from "../redux/store";

// Interface for Product
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Product() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [products, setProducts] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='flex flex-col md:flex-row gap-6 p-4 md:p-6 min-h-screen'>
      {/* Sidebar */}
      <div className='w-full md:w-1/4 bg-zinc-900 rounded-xl p-5'>
        <h2 className='text-xl font-semibold flex items-center gap-2 mb-4 text-white'>
          <Boxes className='w-5 h-5' color='#ff4655' />
          Categories
        </h2>

        {/* Mobile Dropdown */}
        <div className='md:hidden relative mb-4'>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className='w-full flex justify-between items-center border border-gray-300 px-3 py-2 rounded-lg shadow-sm'>
            {selectedCategory || "Select Category"}
            <ChevronDown className='w-4 h-4 text-gray-500' />
          </button>
          {showDropdown && (
            <ul className='absolute z-10 mt-2 bg-black border border-gray-200 rounded-lg w-full shadow-md'>
              {categories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowDropdown(false);
                  }}
                  className='px-4 py-2 hover:bg-[#ff4655] hover:text-white cursor-pointer text-sm'>
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop Category List */}
        <ul className='hidden md:block space-y-2 text-white text-sm'>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 rounded-lg cursor-pointer hover:text-[#ff4655] ${
                selectedCategory === category ? "text-[#ff4655]" : ""
              }`}>
              {category}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setSelectedCategory(null)}
          className='text-sm mt-4 text-white hover:text-[#ff4655] border px-4 py-1 rounded-md transition w-full'>
          Show All
        </button>
      </div>

      {/* Main Content */}
      <div className='w-full md:w-3/4 space-y-4'>
        {/* Search */}
        <div className='flex items-center border border-gray-300 rounded-lg px-4 py-3 shadow-sm'>
          <Search className='w-5 h-5 text-gray-500' />
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search products...'
            className='ml-3 w-full outline-none bg-transparent'
          />
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProducts.length === 0 ? (
            <div className='col-span-3 text-center text-red-500 font-semibold'>
              {searchTerm ? "Incorrect title" : "No products found."}
            </div>
          ) : (
            filteredProducts.map((product) => {
              const isInCart = cartItems.some((item) => item.id === product.id);

              return (
                <div
                  key={product.id}
                  className='border border-dashed border-gray-300 rounded-lg p-5 shadow-inner'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='w-full h-[200px] object-contain mb-4'
                  />
                  <h3 className='text-sm font-semibold mb-1 truncate'>
                    {product.title}
                  </h3>
                  <p className='font-bold text-[#ff4655] mb-1'>
                    ${product.price}
                  </p>
                  <p className='text-xs text-gray-600 line-clamp-2'>
                    {product.description}
                  </p>

                  <button
                    onClick={() =>
                      isInCart
                        ? dispatch(removeFromCart(product.id))
                        : dispatch(addToCart(product))
                    }
                    className={`px-5 py-2 rounded-md mt-3 text-sm text-white transition ${
                      isInCart
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-[#ff4655] hover:bg-red-600"
                    }`}>
                    {isInCart ? "Remove From Cart" : "Add To Cart"}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
