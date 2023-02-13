import React from 'react'
import { Link } from 'react-router-dom'
import login_img from "./Public/login-img.png"
const LoginPage = () => {
  return (
    <div className="bg-login h-screen w-100 flex items-center justify-center">
      <div className="w-3/6 rounded-md shadow-sm shadow-slate-800 bg-slate-600/30 p-8">
        <h4 className="text-2xl text-center font-sans font-semibold text-white">Login</h4>
          <div className="grid grid-cols-2 gap-2 items-center">

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
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" for="username">
                  Password
                </label>
                <input className="w-full py-1.5 px-4 mt-2 bg-slate-500/50 rounded-md outline-none font-semibold text-white focus:border-slate-800 focus:outline-cyan-400" id="username" type="password" placeholder="Password" />
              </div>
              <button className="py-1.5 px-4 mt-5 w-full  bg-cyan-400 text-black rounded-md font-medium ml-auto items-end hover:bg-cyan-600">
            Sign In
          </button>
            </form>
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