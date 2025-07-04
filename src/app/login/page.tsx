"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className='py-10 flex items-center justify-center px-4'>
      <div className='w-full max-w-md bg-gray-900 border border-white p-8 rounded-xl shadow-md'>
        {/* Header */}
        <div className='flex items-center gap-2 mb-6'>
          {/* <UserPlus className='w-6 h-6 text-[#ff4655]' /> */}
          <h2 className='text-2xl font-semibold'>Login</h2>
        </div>

        {/* Name */}
        <div className='mb-4'>
          <label className='block text-sm font-medium  mb-1'>Email</label>
          <input
            type='email'
            placeholder='Enter your Email'
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

        {/* Submit Button */}
        <button className='w-full bg-[#ff4655] text-white py-2 rounded-md hover:bg-red-600 transition'>
          Login
        </button>
        <div className='mt-3 text-center'>
          <h1>
            Not Have An Account?{" "}
            <Link href={"/create-account"} className='text-[#ff4655]'>
              Create An Account
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
