import React from 'react'
import logo from '../assets/logo-BfNap0Pe (1).png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
  <div className="sm:flex sm:items-center sm:justify-between">
    <Link href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Recipe</span>
    </Link>
    <span className="text-blue-700 font-bold text-2xl">Route</span>
  </div>
  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 
    <Link href="https://www.facebook.com/EINagy" className="hover:underline">Nagy Osama™</Link>
    . All Rights Reserved.</span>
</footer>

  )
}