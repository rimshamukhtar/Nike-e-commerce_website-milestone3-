



import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen flex justify-center   sm:px-6 lg:px-8  ">
      <div className="max-w-md w-screen bg-white rounded-lg p-6 sm:p-8">
       
        <div className="flex justify-center mb-6">
          <img
            src="/Logo.png"
            alt="Nike Logo"
            className="h-12 sm:h-14"
          />
        </div>

    
        <h2 className="text-center text-lg sm:text-xl font-bold text-gray-800 mb-6">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>

    
        <form>
          <div className="space-y-4">
       
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black text-sm sm:text-base"
              required
            />

          
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black text-sm sm:text-base"
              required
            />

          
            <div className="flex justify-between items-center text-sm sm:text-base">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox focus:ring-black focus:border-black"
                />
                <p className="ml-2 text-gray-600">Keep me signed in</p>
              </div>
              <p className="text-gray-600 hover:underline cursor-pointer">
                Forgotten your password?
              </p>
            </div>

           
            <p className="text-gray-500 text-xs sm:text-sm mt-4">
              By logging in, you agree to Nike's{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Terms of Use
              </a>
              .
            </p>

        
            <button
              type="submit"
              className="w-full bg-black text-white text-sm sm:text-base font-semibold py-2 sm:py-3 rounded-md mt-6 hover:bg-gray-800"
            >
              Sign in
            </button>

      
            <p className="text-center text-sm text-gray-600 mt-4">
              Not a Member?{" "}
              <Link href="/joinus" className="underline">
                Join Us
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
