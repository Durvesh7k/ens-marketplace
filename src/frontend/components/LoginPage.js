import React from 'react'
import { Link } from 'react-router-dom'
import login_img from "./Public/login-img.png"
import { FcGoogle } from "react-icons/fc"
import { FaDiscord } from "react-icons/fa"
const LoginPage = () => {
  return (
    <div className="bg-login h-screen w-100 p-8 flex items-center justify-center">
      <div className="md:w-3/6 sm:w-full  rounded-md shadow-sm shadow-slate-800 bg-slate-600/30 p-8">
        <h4 className="text-2xl text-center font-sans font-semibold text-white">Login</h4>
        <div className="grid md:grid-cols-2 md:grid-rows-1 sm:grid-rows-2 gap-2 items-center">

          <div className="py-12 ">
            <img src={login_img} alt="Login" />
          </div>
          <div className="form">
            <form action="/">
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input className="w-full py-1.5 px-4 mt-2 bg-slate-500/50 rounded-md outline-none font-semibold text-white focus:border-slate-800 focus:outline-cyan-400" id="username" type="text" placeholder="Username" />
              </div>
              <button className="py-1.5 px-4 mt-5 w-full  bg-cyan-400 text-black rounded-md font-medium ml-auto items-end hover:bg-cyan-600">
                Sign In
              </button>

            </form>

            <div class="flex items-center justify-between w-full">
              <span class=" h-0.5 my-8 bg-gray-400 w-full border-0 "></span>
              <span class="px-3 font-medium    left-1/2 text-white">or</span>
              <span class="h-0.5  my-8 bg-gray-400 w-full border-0 "></span>
            </div>
            <button className="py-1.5 px-4  flex items-center justify-center mt-5 w-full  bg-white shadow-sm text-black rounded-md font-medium ml-auto items-end hover:bg-cyan-600">
              <FcGoogle class="text-2xl" />
              <span className="text-sm ml-2">
                SinIn with Google
              </span>
            </button>
            <button className="py-1.5 px-4  flex items-center justify-center mt-5 w-full  bg-white shadow-sm text-black rounded-md font-medium ml-auto items-end hover:bg-cyan-600">
              <FaDiscord class="text-2xl text-blue-500" />
              <span className="text-sm ml-2">
                SignIn with Discord
              </span>
            </button>


      

            <p className="mt-6 text-sm  mb-2 text-white">
              Don't have an Account?
              <Link
                to="/"
                className="text-cyan-400 ml-1 underline"
              >
                SignUp Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage