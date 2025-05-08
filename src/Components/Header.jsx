import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty } from 'react-icons/io';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { name: 'SHOP', to: '/shop' },
    { name: 'SKILLS', to: '/skills' },
    { name: 'STORIES', to: '/stories' },
    { name: 'ABOUT', to: '/about' },
    { name: 'CONTACT US', to: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className='sm:w-145 w-23'>
              <Link to="/">
                <img className='sm:w-15 w-12' src="public/logo.png" alt="" />
              </Link>
            </div>
            <div className="ml-4 flex-shrink-0">
              <p className="text-xl font-bold text-gray-900">LOGO</p>
            </div>
          </div>

          <div className="flex items-center">
            <button
              className="p-2 text-gray-700 hover:text-gray-900"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Link to="#" className="p-2 text-gray-700 hover:text-gray-900">
              <IoIosHeartEmpty className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link to="#" className="p-2 text-gray-700 hover:text-gray-900">
              <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link to="/signin" className="p-2 text-gray-700 hover:text-gray-900 hidden sm:block">
              <UserIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
            <form class="max-w-sm">
              <select id="underline_select" class="py-2.5 px-0 w-13 text-md text-black bg-transparent  dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer hidden sm:block">
                <option selected className='text-black'>ENG</option>
                <option value="US" className='text-black'>HIN</option>
                <option value="CA" className='text-black'>EU</option>
                <option value="FR" className='text-black'>FR</option>
                <option value="DE" className='text-black'>IT</option>
              </select>
            </form>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8 md:justify-center pb-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex h-16 items-center justify-between px-4">
            <h1 className="text-xl font-bold text-gray-900">DISCOVER OUR PRODUCTS</h1>
            <button
              type="button"
              className="p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="px-4 py-6 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-lg font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {searchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-40">
          <div className="max-w-7xl mx-auto flex">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-r hover:bg-gray-700">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;