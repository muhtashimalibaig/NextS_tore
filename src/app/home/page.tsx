"use client";
import { useEffect, useRef } from "react";
import Button from "@/components/Button";
import { motion, Variants, useAnimation, useInView } from "framer-motion";
import "../../stylesheets/text.css";

export default function Home() {
  const about = [
    {
      heading: "Trusted Vendors",
      description:
        "Browse products from verified and trusted sellers around the world.",
    },
    {
      heading: "Secure Checkout",
      description:
        "Enjoy a smooth and safe payment experience with multiple secure options.",
    },
    {
      heading: "Customer Support",
      description:
        "We’re here 24/7 to help you with orders, returns, and more.",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center text-center py-20 px-6 text-white'>
        <motion.h1
          className='text-4xl md:text-6xl font-bold mb-4'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Welcome to{" "}
          <span id='text-main' className='inline-block'>
            ShopFusion
          </span>
        </motion.h1>

        <motion.p
          className='text-lg md:text-xl max-w-xl mb-8'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}>
          Your one-stop multi-vendor marketplace for everything you need. Shop
          smart, sell smarter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}>
          <Button href='/products' text='Explore Products' />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-6 max-w-6xl mx-auto' ref={sectionRef}>
        <motion.h2
          className='text-3xl font-bold text-center mb-12'
          initial='hidden'
          animate={controls}
          variants={fadeUp}
          custom={0}>
          Why <span className='text-[#ff4655]'>ShopFusion</span>?
        </motion.h2>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {about.map((items, index) => (
            <motion.div
              key={index}
              className='p-6 border border-[#ff4655] rounded-lg shadow hover:shadow-md transition'
              initial='hidden'
              animate={controls}
              variants={fadeUp}
              custom={index + 1}>
              <h1 className='text-2xl font-bold mb-3'>{items.heading}</h1>
              <p>{items.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
