import React from 'react'
import Card from './Card';


export const BuyensPage = () => {
  return (
    <div className=" bg-gradient-to-r from-green-900 via-gray-900 to-red-900 flex flex-col justify-center items-center">
                <h1 className='text-white text-lg md:text-xl lg:text-3xl font-righteous tracking-wider uppercase pt-24 lg:px-32 pb-5'>Available ENS</h1>

                {/* CARDS */}
                <div className='grid xl:grid-cols-4 xl:gap-x-15 xl:px-20 xl:gap-y-14 xl:pb-32 gap-y-6 lg:grid-cols-3 md:grid-cols-2 md:gap-x-4 pb-20 '>
                    
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>

                </div>
            </div>
  )
}
