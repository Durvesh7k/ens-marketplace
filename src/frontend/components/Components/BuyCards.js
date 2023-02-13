import React from 'react'
import product1 from '../Public/product-5.jpg'

export const BuyCards = () => {
    return (
        <>
            <div className=" bg-gradient-to-r from-green-900 via-gray-900 to-red-900 flex flex-col justify-center items-center">
                <h1 className='text-white text-lg md:text-xl lg:text-3xl font-righteous tracking-wider uppercase pt-24 lg:px-32 pb-5'>Available ENS</h1>

                {/* CARDS */}
                <div className='grid xl:grid-cols-4 xl:gap-x-15 xl:px-20 xl:gap-y-14 xl:pb-32 gap-y-6 lg:grid-cols-3 md:grid-cols-2 md:gap-x-4 pb-20 '>
                    
                    {/* CARD */}

                    <div className='lg:h-max lg:w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg h-max w-max  '>
                        <div className='overflow-hidden rounded-xl cursor-pointer  '>
                            <img src={product1} alt="" className=' hover:scale-110 hover:z-0 transition duration-500 ease-in-out h-60' />
                        </div>
                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md hover:scale-105 transition duration-300 tracking-wide font-roboto '>Buy</button>
                    </div>
                    
                    <div className='lg:h-max lg:w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg h-max w-max  '>
                        <div className='overflow-hidden rounded-xl cursor-pointer  '>
                            <img src={product1} alt="" className=' hover:scale-110 hover:z-0 transition duration-500 ease-in-out h-60' />
                        </div>
                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md hover:scale-105 transition duration-300 tracking-wide font-roboto '>Buy</button>
                    </div>
                    <div className='lg:h-max lg:w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg h-max w-max  '>
                        <div className='overflow-hidden rounded-xl cursor-pointer  '>
                            <img src={product1} alt="" className=' hover:scale-110 hover:z-0 transition duration-500 ease-in-out h-60' />
                        </div>
                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md hover:scale-105 transition duration-300 tracking-wide font-roboto '>Buy</button>
                    </div>
                    <div className='lg:h-max lg:w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg h-max w-max  '>
                        <div className='overflow-hidden rounded-xl cursor-pointer  '>
                            <img src={product1} alt="" className=' hover:scale-110 hover:z-0 transition duration-500 ease-in-out h-60' />
                        </div>
                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md hover:scale-105 transition duration-300 tracking-wide font-roboto '>Buy</button>
                    </div>
                    <div className='lg:h-max lg:w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg h-max w-max  '>
                        <div className='overflow-hidden rounded-xl cursor-pointer  '>
                            <img src={product1} alt="" className=' hover:scale-110 hover:z-0 transition duration-500 ease-in-out h-60' />
                        </div>
                        <h1 className='font-roboto'>Name : <span> .......</span></h1>
                        <h1 className='font-roboto'>Price : <span> .......</span></h1>
                        <button className='bg-blue-500 p-2 rounded-md hover:scale-105 transition duration-300 tracking-wide font-roboto '>Buy</button>
                    </div>


                </div>
            </div>
        </>
    )
}
