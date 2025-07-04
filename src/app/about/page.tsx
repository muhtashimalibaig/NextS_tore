import Image from "next/image";
const About = () => {
  return (
    <section className='py-16 px-4 md:px-12'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        {/* Content */}
        <div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            About <span className='text-[#ff4655]'>Shop Fusion</span>
          </h2>
          <p className='text-gray-300 mb-6'>
            Welcome to <strong className='text-[#ff4655]'>Shop Fusion</strong> —
            your one-stop destination for top-quality fashion, tech gadgets,
            lifestyle products, and more. We believe in delivering trust,
            affordability, and premium service to our customers across the
            globe.
          </p>
          <p className='text-gray-300 mb-6'>
            Built with modern technologies like{" "}
            <span className='font-semibold'>Next.js</span> and{" "}
            <span className='font-semibold'>React</span>, our store is optimized
            for performance, speed, and a seamless shopping experience across
            all devices.
          </p>
          <p className='text-gray-300'>
            Join our growing family and explore products handpicked with love,
            care, and creativity. Fast delivery, secure checkout, and 24/7
            support — that’s what makes us different.
          </p>
        </div>

        {/* Image */}
        <div className='relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg'>
          <Image
            src={"/about.jfif"}
            alt='About Shop Fusion'
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
