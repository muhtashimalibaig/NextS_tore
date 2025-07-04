"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='py-10 border-t border-gray-400'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* About */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Shop Fusion</h2>
          <p className='text-sm text-gray-400'>
            Discover the best deals on fashion, electronics, and more. Quality
            and trust delivered to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-gray-400 text-sm'>
            <li>
              <Link href='/'>
                <span className='hover:text-[#ff4655] cursor-pointer'>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href='/shop'>
                <span className='hover:text-[#ff4655] cursor-pointer'>
                  Shop
                </span>
              </Link>
            </li>
            <li>
              <Link href='/cart'>
                <span className='hover:text-[#ff4655] cursor-pointer'>
                  Cart
                </span>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <span className='hover:text-[#ff4655] cursor-pointer'>
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Support</h3>
          <ul className='space-y-2 text-gray-400 text-sm'>
            <li>
              <Link href='/faq'>
                <span className='hover:text-[#ff4655] cursor-pointer'>FAQ</span>
              </Link>
            </li>
            <li>
              <Link href='/returns'>
                <span className='hover:text-[#ff4655] cursor-pointer'>
                  Returns
                </span>
              </Link>
            </li>
            <li>
              <Link href='/shipping'>
                <span className='hover:text-[#ff4655] cursor-pointer'>
                  Shipping
                </span>
              </Link>
            </li>
            <li>
              <Link href='/privacy'>
                <span className='hover:text-[#ff4655] cursor-pointer'>
                  Privacy Policy
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
          <div className='flex gap-4 text-white text-xl'>
            <a href='#' aria-label='Facebook' className='hover:text-blue-500'>
              <Facebook size={20} />
            </a>
            <a href='#' aria-label='Instagram' className='hover:text-pink-500'>
              <Instagram size={20} />
            </a>
            <a href='#' aria-label='Twitter' className='hover:text-sky-400'>
              <Twitter size={20} />
            </a>
            <a href='#' aria-label='YouTube' className='hover:text-red-600'>
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6'>
        &copy; {new Date().getFullYear()} Shop Fusion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
