import React from 'react'

export const Footer = () => {
    return (
        <div className=' flex flex-col justify-center items-center h-52 bg-gray-900 border-t-2 border-black  shadow-t- '>
            <div className='text-white text-lg lg:text-2xl tracking-wider flex justify-center items-center mx-10 text-center'>
               <div> Created for <b>EthForAll</b> by <b>Team Hackios</b></div></div>
            <div className=' mt-5 text-white text-lg mg:text-xl'>
                <span> Visit on </span>  
                <a href="" className=' font-bold text-red-500 underline underline-offset-4 '>Github</a>
            </div>
        </div>
    )
}
