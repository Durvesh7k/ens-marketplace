import React from 'react'
import product1 from './Public/product-5.jpg'
const Card = () => {
    return (
        <div className='lg:h-max lg:w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg h-max w-max  '>
            <div className='overflow-hidden rounded-xl cursor-pointer  '>
                <img src={product1} alt="" className=' hover:scale-110 hover:z-0 transition duration-500 ease-in-out h-60' />
            </div>
            <h1 className='font-roboto'>Name : <span> .......</span></h1>
            <h1 className='font-roboto'>Price : <span> .......</span></h1>
            <button className='bg-blue-500 p-2 rounded-md hover:scale-105 transition duration-300 tracking-wide font-roboto '>Buy</button>
        </div>
    )
}

export default Card