import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import "../../stylesheets/text.css";

const Contact = () => {
  return (
    <section className='py-16 px-4 md:px-12'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4' id='text-main'>
          Contact Us
        </h2>
        <p className='text-gray-300'>
          Have any questions or feedback? We&apos;d love to hear from you!
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        {/* Left Side: Contact Details */}
        <div>
          <div className='flex items-center space-x-4 mb-6'>
            <Phone className='text-[#ff4655] w-6 h-6' />
            <div>
              <h4 className='text-xl font-semibold text-[#ff4655]'>Phone</h4>
              <p className='text-gray-200'>+1 234 567 890</p>
            </div>
          </div>

          <div className='flex items-center space-x-4 mb-6'>
            <Mail className='text-[#ff4655] w-6 h-6' />
            <div>
              <h4 className='text-xl font-semibold text-[#ff4655]'>Email</h4>
              <p className='text-gray-200'>contact@shopfusion.com</p>
            </div>
          </div>

          <div className='flex items-center space-x-4 mb-6'>
            <MapPin className='text-[#ff4655] w-6 h-6' />
            <div>
              <h4 className='text-xl font-semibold text-[#ff4655]'>Address</h4>
              <p className='text-gray-200'>123 Main Street, City, Country</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div>
          <Image
            src='/Contact.jpg'
            alt='Contact Us'
            width={500}
            height={500}
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
