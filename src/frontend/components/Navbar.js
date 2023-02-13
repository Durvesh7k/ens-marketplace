import React from 'react'
import { Link, NavLink } from "react-router-dom";
import profile from './Public/profile.png';
import { MdAccountCircle,MdKeyboardArrowDown } from 'react-icons/md';


export const Navbar = () => {
    return (
        <nav className="bg-transparent fixed border-b-2 border-slate-700 w-screen text-gray-100 backdrop-filter backdrop-blur-lg">
            <div className="container mx-auto flex items-center justify-between py-4 px-12 ">
                <div className="brand-logo">
                    <h3 className="text-xl font-semibold ">ENS Marketplace</h3>
                </div>
                <ul className="hidden  items-center md:flex">
                    <li>
                        <Link className='mx-1 px-2 text-sm font-semibold'>Mint</Link>
                    </li>
                    <li>
                        <Link className='mx-1 px-2 text-sm font-semibold'>Shop</Link>
                    </li>
                    <li>
                        <Link className='mx-1 px-2 text-sm font-semibold'>About</Link>
                    </li>
                    <li className="flex items-center justify-center ml-2 px-4 py-1 cursor-pointer text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-xl hover:bg-blue-600 shadow-blue-400/30">
                        <MdAccountCircle className='text-xl text-white-500' />
                        <Link className='text-sm text-semibold px-2'>Profile</Link>
                        <MdKeyboardArrowDown className='text-sm text-white-500' />
                    </li>
                </ul>
                <div class="md:hidden flex items-center">
                    <button class="outline-none mobile-menu-button">
                        <svg
                            class="w-6 h-6 text-gray-500"
                            x-show="!showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
