import React from 'react'
import { Navbar } from './Navbar';
import nft from "./Public/nft.png";

export const Home = () => {
    return (
        <>
        <div className='bg-rbgradient'>
        <Navbar />


            <div className='flex justify-center items-center mx-32 space-x-28 h-screen overflow-y-hidden'>
                <p className='text-justify text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor, quae molestiae possimus sit repellendus molestias reprehenderit veniam exercitationem obcaecati numquam quibusdam? Quisquam molestiae distinctio totam possimus! Distinctio, sed reiciendis!</p>
                <img src={nft} alt="" className='h-[85%]' />
            </div>
        </div>
        </>
    )
}

// bg-gradient-to-t from-purple-900 to-violet-900