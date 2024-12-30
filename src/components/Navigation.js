import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../resources/logo.png"

const Navigation = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b">
            <div className="lg:max-w-screen-xl flex items-center justify-between mx-auto h-20 px-6 md:px-6 lg:px-0">
                <Link to='/' className='order-1 flex items-center'>
                    <img src={Logo} className="animate-spin h-8 mr-3" alt="Weather" />
                    <h1 className='text-[#323368] text-xl font-bold'>Weather Control</h1>
                </Link>
                <>
                <div className="hidden md:flex order-2 gap-6">
                    <Link to='/' className='py-2 text-[#323368] text-md w-24 rounded-lg hover:bg-gray-100 transition-all ease-in-out font-bold'>Home</Link>
                    <Link to='/about' className='py-2 text-[#323368] text-md w-24 rounded-lg hover:bg-gray-100 transition-all ease-in-out font-bold'>About</Link>
                    <Link to='/team' className='py-2 text-[#323368] text-md w-24 rounded-lg hover:bg-gray-100 transition-all ease-in-out font-bold'>Team</Link>
                </div>
                </>
            </div>
        </nav>
  )
}

export default Navigation;