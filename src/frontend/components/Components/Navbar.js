import React from 'react'
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className='z-999 fixed flex items-center justify-between px-5 shadow-black shadow-sm bg-transparent backdrop-blur-md  w-screen font-roboto z-50'>
            <div className='flex  justify-center items-center'>
                <Link to='/' className='p-5  text-white tracking-wider text-2xl font-righteous'>ENS MARKETPLACE</Link>
                <ul className='text-white text-lg flex mr-10 tracking-wider cursor-pointer'>
                    <NavLink to='/' className="hover:bg-gray-600 hover:m-3 hover:rounded-lg hover:p-2  p-5 px-15 " >Home</NavLink>
                    <NavLink to='/listens' className="hover:bg-gray-600 hover:m-3 hover:rounded-lg hover:p-2  p-5 px-15 " >List ENS</NavLink>
                    <NavLink to='/buyens' className='hover:bg-gray-600 hover:m-3 hover:rounded-lg hover:p-2 p-5'>Buy ENS</NavLink>
                    <NavLink to='/about' className=' hover:bg-gray-600 hover:m-3 hover:rounded-lg hover:p-2 p-5'>About</NavLink>
                </ul>
            </div>

            <button className='p-2 m-3 px-15 text-white mr-10 tracking-wider border-2 border-[#39ff14] rounded-full w-40 hover:bg-[#39ff14] hover:text-black hover:scale-105 transition duration-200 cursor-pointer font-roboto hover:font-semibold'>
                Connect
            </button>

        </nav>

    )
}
//bg-gradient-to-r from-[#231262] via-blue-900 to-[#231262]
