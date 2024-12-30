import React from 'react'

import Illustration from "../resources/content.png"
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="lg:container w-full h-fit mt-48 lg:mt-12 flex justify-center items-center">
        <div className="grid lg:grid-cols-2 justify-items-center w-10/12 lg:w-9/12 gap-10">
            <div className='order-1 px-6 mb-6 lg:mb-0'>
                <h1 className="text-4xl font-black text-[#323368] text-center lg:text-left">Real-Time Weather</h1>
                <p className='text-sm text-[#323368] text-justify lg:text-left mt-8 leading-7'>Weather control application will provide you an accurate and real-time weather and temperature data. This application will also show you the weather and temperature forecast for the next few days. So, you can plan your activities and prepare for expected weather conditions!</p>
                <div className='w-full grid justify-items-center lg:justify-items-start'>
                    <Link to='/about' className='text-base text-white bg-[#F0C548] rounded-lg w-[160px] p-3 transition-all hover:bg-[#323368] mt-8 hover:text-white'>Explore More</Link>
                </div>
            </div>
            <div className='grid order-2 justify-items-center'>
                <img src={Illustration} alt="..."  className='w-9/12'>
                </img>
            </div>
        </div>
    </div>
  )
}

export default Content;