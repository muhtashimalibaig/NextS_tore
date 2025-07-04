"use client";

import { UserPlus, User, UserCog } from "lucide-react";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className='py-10 flex items-center justify-center px-4'>
      <div className='w-full max-w-md bg-gray-900 border border-white p-8 rounded-xl shadow-md'>
        {/* Header */}
        <div className='flex items-center gap-2 mb-6'>
          <UserPlus className='w-6 h-6 text-[#ff4655]' />
          <h2 className='text-2xl font-semibold'>Create Account</h2>
        </div>

        {/* Name */}
        <div className='mb-4'>
          <label className='block text-sm font-medium  mb-1'>Full Name</label>
          <input
            type='text'
            placeholder='Enter your full name'
            className='w-full px-4 py-2 border outline-none rounded-lg focus:border-[#ff4655]'
          />
        </div>

        {/* Username */}
        <div className='mb-4'>
          <label className='block text-sm font-medium  mb-1'>Username</label>
          <input
            type='text'
            placeholder='Choose a username'
            className='w-full px-4 py-2 border outline-none rounded-lg focus:border-[#ff4655]'
          />
        </div>
        {/* Email */}
        <div className='mb-4'>
          <label className='block text-sm font-medium  mb-1'>Email</label>
          <input
            type='email'
            placeholder='Choose an Email'
            className='w-full px-4 py-2 border outline-none rounded-lg focus:border-[#ff4655]'
          />
        </div>
        {/* Password */}
        <div className='mb-4'>
          <label className='block text-sm font-medium  mb-1'>Password</label>
          <input
            type='password'
            placeholder='Choose a Password'
            className='w-full px-4 py-2 border outline-none rounded-lg focus:border-[#ff4655]'
          />
        </div>

        {/* Account Type */}
        <div className='mb-6'>
          <label className='block text-sm font-medium mb-2'>Account Type</label>
          <div className='flex items-center gap-4'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input
                type='radio'
                name='accountType'
                className='accent-[#ff4655]'
              />
              <User className='w-4 h-4 text-[#ff4655]' />
              <span className='text-sm '>Customer</span>
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input
                type='radio'
                name='accountType'
                className='accent-[#ff4655]'
              />
              <UserCog className='w-4 h-4 text-[#ff4655]' />
              <span className='text-sm '>Vendor</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button className='w-full bg-[#ff4655] text-white py-2 rounded-md hover:bg-red-600 transition'>
          Create Account
        </button>
        <div className='mt-3 text-center'>
          <h1>
            Already Have An Account?{" "}
            <Link href={"/login"} className='text-[#ff4655]'>
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
