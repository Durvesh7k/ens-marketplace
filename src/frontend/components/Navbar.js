import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import profile from './Public/profile.png';
import { MdAccountCircle, MdKeyboardArrowRight } from 'react-icons/md';
import { HiMenuAlt3,HiOutlineX } from 'react-icons/hi';
import { Transition } from '@headlessui/react';


export const Navbar = ({account,onClickButton}) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-transparent fixed border-b-2 border-slate-700 w-screen text-gray-100 backdrop-filter backdrop-blur-lg">
            <div className="container mx-auto flex items-center justify-between py-4 sm:px-8 px-12 ">
                <div className="brand-logo">
                    <Link to="/" className="text-xl font-semibold ">ENS Marketplace</Link>
                </div>
                <ul className="hidden  items-center md:flex">
                    <li>
                        <Link className='mx-1 px-2 text-sm font-semibold' to='/listens'>List ENS</Link>
                    </li>
                    <li>
                        <Link className='mx-1 px-2 text-sm font-semibold' to='/buyens'>Buy ENS</Link>
                    </li>
                    <li>
                        <Link className='mx-1 px-2 text-sm font-semibold'>About</Link>
                    </li>
                    <li className="flex items-center justify-center ml-2 px-4 py-1 cursor-pointer text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-xl hover:bg-blue-600 shadow-blue-400/30" onClick={onClickButton}>
                       {account === null ? (
                        <span>Connect wallet</span>
                       ):(
                        <span>Connected</span>
                       )} 
                       <MdKeyboardArrowRight className='text-sm text-white-500' />
                    </li>
                </ul>
                <div class="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
                    <button class="outline-none p-2   mobile-menu-button bg-slate-500/30 rounded-full border-1 border-gray-500 select-none focus:bg-slate-800">
                        {isOpen ? <HiOutlineX className='text-2xl text-gray-200' /> :
                            <HiMenuAlt3 className='text-2xl text-gray-200' />

                        }
                    </button>
                </div>

            </div>
            {/* Menu  Mobile*/}
            <Transition show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {
                    (ref) => (
                        <div className="md:hidden " id="mobile-menu">
                            <div
                                ref={ref}
                                className="dark:bg-transparent dark:text-white mx-4 pt-4 pb-4 space-y-1"
                            >

                                <Link
                                    to="/listens"
                                    activeClass="listens"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    List ENS
                                </Link>
                                <Link
                                    to="/buyens"
                                    activeClass="buyens"

                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Buy ENS
                                </Link>

                                    <Link
                                        to="/about"
                                        activeClass="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/contact"
                                        activeClass="contact"
                                        to="contact"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Connect Wallet
                                    </Link>
                                  
                                </div>
                            </div>
                        )
                    }

            </Transition>
        </nav >
    )
}
