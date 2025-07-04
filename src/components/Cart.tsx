"use client";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/redux/store";
import { removeFromCart } from "@/app/redux/cartSlice";
import Link from "next/link";
import Image from "next/image";

const CartDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[90%] sm:w-[400px] bg-gray-900 z-[999] shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      <div className='flex items-center justify-between px-6 py-4 bg-[#ff4655] text-white'>
        <h2 className='text-lg font-bold'>My Cart</h2>
        <button onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <div className='px-4 py-2 overflow-y-auto h-[calc(100%-130px)]'>
        {cartItems.length === 0 ? (
          <p className='text-center mt-8'>Your cart is empty.</p>
        ) : (
          <ul className='space-y-4'>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className='flex items-center justify-between bg-zinc-900 rounded-lg p-3'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className='object-contain'
                />
                <div className='flex-1 px-4'>
                  <p className='text-sm font-semibold'>{item.title}</p>
                  <p className='text-sm text-gray-500'>${item.price}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className='text-red-500 text-sm font-semibold hover:underline'>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='p-4 mt-5 border-t text-center'>
        <Link
          href={"/products"}
          className='w-full px-5 py-2 bg-[#ff4655] hover:bg-[#e63b49] text-white font-semibold rounded'>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartDrawer;
