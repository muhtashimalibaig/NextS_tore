"use client";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../app/redux/store";
import { useState } from "react";
import CartDrawer from "./Cart";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className='w-full border-b border-zinc-400 px-6 py-4 flex items-center justify-between'>
        {/* Brand */}
        <Link
          href='/'
          className='text-3xl font-bold'
          style={{
            color: "transparent",
            WebkitTextStroke: "1px #ff4655",
            textShadow: "2px 0px 10px #ff4655",
          }}>
          ShopFusion
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-6'>
          {["home", "about", "pricing", "products", "contact"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className='transition text-xl font-bold hover:text-[#ff4655] capitalize'>
              {item}
            </Link>
          ))}

          <button
            className='relative hover:text-[#ff4655] transition'
            onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={28} />
            {cartItems.length > 0 && (
              <span className='bg-[#ff4655] text-white px-2 py-1 text-xs font-bold rounded-full absolute top-[-8px] right-[-12px]'>
                {cartItems.length}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden text-[#ff4655]'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle Menu'>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed top-16 right-0 w-4/6 h-full z-50 md:hidden flex flex-col gap-6 px-6 py-6 bg-gray-800 shadow-lg'>
            {["home", "about", "pricing", "products", "contact"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className='text-lg font-semibold hover:text-[#ff4655] capitalize'
                onClick={() => setMenuOpen(false)}>
                {item}
              </Link>
            ))}

            <button
              className='relative self-start hover:text-[#ff4655] transition'
              onClick={() => {
                setIsCartOpen(true);
                setMenuOpen(false);
              }}>
              <ShoppingCart size={26} />
              {cartItems.length > 0 && (
                <span className='bg-[#ff4655] text-white px-2 py-1 text-xs font-bold rounded-full absolute top-[-8px] right-[-12px]'>
                  {cartItems.length}
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
