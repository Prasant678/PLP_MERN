import React, { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <footer className="bg-black text-slate-200 font-sans">
            <div className="flex justify-between border-t border-b border-gray-200 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:max-w-2xl sm:mx-8 mx-0">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">BE THE FIRST TO KNOW</h2>
                    <p className="mb-6 sm:mb-8">Sign up for updates from mettā muse.</p>

                    <div className="max-w-md mx-auto flex flex-row sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Enter your e-mail..."
                            className="flex-1 px-4 pr-15 bg-white text-slate-700 border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                        />
                        <button className="bg-black border border-slate-300 rounded text-white px-6 py-3 hover:bg-gray-800 transition-colors text-sm sm:text-base whitespace-nowrap">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                <div className="hidden sm:block">
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">CONTACT US</h4>
                        <p className="text-sm">+44 221 153 5380</p>
                        <p className="text-sm">customercare@mettamuse.com</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">CURRENCY</h4>
                        <form class="max-w-sm">
                            <select class="block py-2.5 px-0 w-13 text-sm text-white bg-transparent dark:text-white dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option selected className='text-white bg-black'>USD</option>
                                <option value="US" className='text-white bg-black'>INR</option>
                                <option value="CA" className='text-white bg-black'>EUR</option>
                                <option value="FR" className='text-white bg-black'>DHM</option>
                                <option value="DE" className='text-white bg-black'>RUP</option>
                            </select>
                        </form>
                        <p className="text-xs mt-1">
                            Transactions will be completed in Euros and a currency reference is available on hover.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-8 px-4 sm:px-6 lg:px-8 sm:py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:ml-17 gap-6 sm:gap-8">
                    <div className="sm:hidden">
                        <div className="mb-6">
                            <h4 className="text-md font-semibold mb-2">CONTACT US</h4>
                            <p className="text-sm">+44 221 153 5380</p>
                            <p className="text-sm">customercare@mettamuse.com</p>
                        </div>
                        <div>
                            <h4 className="text-md font-semibold mb-2">CURRENCY</h4>
                            <form class="max-w-sm">
                                <select id="underline_select" class="block py-2.5 px-0 w-13 text-md text-white bg-transparent dark:text-white dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option selected className='text-white bg-black'>USD</option>
                                    <option value="US" className='text-white bg-black'>INR</option>
                                    <option value="CA" className='text-white bg-black'>EUR</option>
                                    <option value="FR" className='text-white bg-black'>DHM</option>
                                    <option value="DE" className='text-white bg-black'>RUP</option>
                                </select>
                            </form>
                            <p className="text-xs mt-1">
                                Transactions will be completed in Euros and a currency reference is available on hover.
                            </p>
                        </div>
                    </div>

                    <div className="border-b sm:border-none border-gray-200 pb-4 sm:pb-0">
                        <button
                            className="flex justify-between items-center w-full sm:hidden"
                            onClick={() => toggleSection('about')}
                        >
                            <h4 className="text-sm font-semibold">mettā muse</h4>
                            <svg
                                className={`h-4 w-4 transform transition-transform ${expandedSection === 'about' ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${expandedSection === 'about' ? 'block' : 'hidden'} sm:block`}>
                            <h4 className="text-lg font-semibold mb-4 hidden sm:block">mettā muse</h4>
                            <ul className="space-y-2 mt-4 sm:mt-0">
                                <li><Link to="/stories" className="text-sm hover:underline block py-1">About Us</Link></li>
                                <li><Link to="/stories" className="text-sm hover:underline block py-1">Stories</Link></li>
                                <li><Link to="/artisans" className="text-sm hover:underline block py-1">Artisans</Link></li>
                                <li><Link to="/boutiques" className="text-sm hover:underline block py-1">Boutiques</Link></li>
                                <li><Link to="/contact" className="text-sm hover:underline block py-1">Contact Us</Link></li>
                                <li><Link to="/compliance" className="text-sm hover:underline block py-1">EU Compliances Docs</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b sm:border-none border-gray-200 pb-4 sm:pb-0">
                        <button
                            className="flex justify-between items-center w-full sm:hidden"
                            onClick={() => toggleSection('quickLinks')}
                        >
                            <h4 className="text-sm font-semibold">QUICK LINKS</h4>
                            <svg
                                className={`h-4 w-4 transform transition-transform ${expandedSection === 'quickLinks' ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${expandedSection === 'quickLinks' ? 'block' : 'hidden'} sm:block`}>
                            <h4 className="text-sm font-semibold mb-4 hidden sm:block">QUICK LINKS</h4>
                            <ul className="space-y-2 mt-4 sm:mt-0">
                                <li><Link to="/orders-shipping" className="text-sm hover:underline block py-1">Orders & Shipping</Link></li>
                                <li><Link to="/join-login" className="text-sm hover:underline block py-1">Join/Login as a Seller</Link></li>
                                <li><Link to="/payment-pricing" className="text-sm hover:underline block py-1">Payment & Pricing</Link></li>
                                <li><Link to="/returns-refunds" className="text-sm hover:underline block py-1">Return & Refunds</Link></li>
                                <li><Link to="/faqs" className="text-sm hover:underline block py-1">FAQs</Link></li>
                                <li><Link to="/privacy-policy" className="text-sm hover:underline block py-1">Privacy Policy</Link></li>
                                <li><Link to="/terms-conditions" className="text-sm hover:underline block py-1">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-b sm:border-none border-gray-200 pb-4 sm:pb-0">
                        <button
                            className="flex justify-between items-center w-full sm:hidden"
                            onClick={() => toggleSection('follow')}
                        >
                            <h4 className="text-sm font-semibold">FOLLOW US</h4>
                            <svg
                                className={`h-4 w-4 transform transition-transform ${expandedSection === 'follow' ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${expandedSection === 'follow' ? 'block' : 'hidden'} sm:block`}>
                            <div className="mb-6 mt-4 sm:mb-8">
                                <h4 className="text-sm font-semibold mb-4 hidden sm:block">FOLLOW US</h4>
                                <div className="flex space-x-4 mt-2 sm:mt-0">
                                    <Link href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7"
                                            fill="currentColor"
                                            style={{ color: "#1877f2" }}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </Link>
                                    <Link href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7"
                                            fill="currentColor"
                                            style={{ color: "#c13584" }}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </Link>
                                    <a href="#" className="text-white">
                                        <BsTwitterX size={26} />
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-4 hidden sm:block">mettā muse ACCEPTS</h4>
                                <div className="flex flex-wrap gap-2 sm:mt-0 mt-2">
                                    <div className="bg-gray-100 px-2 h-7.5 rounded">
                                        <img className='w-12 h-8' src="public/google-pay-primary-logo-logo-svgrepo-com.svg" alt="" />
                                    </div>
                                    <div className="bg-gray-100 h-7.5 rounded">
                                        <img className='w-12 h-7.5' src="public/mastercard-svgrepo-com.svg" alt="" />
                                    </div>
                                    <div className="bg-gray-100 h-7.5 rounded">
                                        <img className='w-12 h-7.5' src="public/paypal-svgrepo-com.svg" alt="" />
                                    </div>
                                    <div>
                                        <img className='w-12 h-7.5' src="public/amex-svgrepo-com.png" alt="" />
                                    </div>
                                    <div className="bg-gray-100 h-7.5 rounded">
                                        <img className='w-12 h-7.5' src="public/apple-pay-svgrepo-com.svg" alt="" />
                                    </div>
                                    <div>
                                        <img className='w-14 h-7.5' src="public/Shop-Pay-Emblem-500x281.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                    <p className="text-xs text-gray-600 mb-2 sm:mb-0">
                        Copyright © 2023 mettamuse. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                        <Link to="/privacy" className="text-xs text-gray-600 hover:underline">Privacy Policy</Link>
                        <Link to="/terms" className="text-xs text-gray-600 hover:underline">Terms & Conditions</Link>
                        <Link to="/cookies" className="text-xs text-gray-600 hover:underline">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;