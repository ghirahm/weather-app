import React from 'react'

const Hero = (props) => {
  return (
    <div className="lg:container w-full h-[720px] md:h-[560px] mt-20">
        <div className="flex flex-col justify-center items-center w-full h-full gap-6 px-6 md:px-0">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-black text-[#323368]"><span className="text-[#F0C548]">Find</span> the Sun in Your City!</h1>
            <p className='text-[0.6rem] sm:text-sm md:text-base text-[#323368]'>Its a pleasure to keep track of the weather!</p>
            <button onClick={props.click} className='text-lg text-white bg-[#F0C548] rounded-lg w-[200px] p-3 transition-all hover:bg-[#323368] hover:text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero;