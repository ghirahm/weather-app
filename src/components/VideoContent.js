import React from 'react'
import { Link } from 'react-router-dom';

const VideoContent = () => {
  return (
    <div className="lg:container w-full h-[560px] lg:h-[640px] my-36 flex justify-center items-center">
        <div className="grid lg:grid-cols-2 justify-items-center w-10/12 lg:w-9/12 gap-10">
            <div className='order-1 px-6 mb-6 lg:mb-0'>
                <h1 className="text-3xl md:text-4xl font-black text-[#323368] text-center lg:text-left">Be Aware of<br/> Climate Change</h1>
                <p className='text-sm text-[#323368] text-justify lg:text-left mt-8 leading-7'>Climate change refers to long-term changes in temperature and weather patterns. These shifts occur naturally, such as through variations in the solar cycle. But since the 1800s, human activity has become a major cause of climate change, mainly due to the burning of fossil fuels such as coal, oil and gas.</p>
                <div className='w-full grid justify-items-center lg:justify-items-start'>
                    <Link to="https://youtu.be/LxgMdjyw8uw" className='text-base text-white bg-[#F0C548] rounded-lg w-[160px] p-3 transition-all hover:bg-[#323368] mt-8 hover:text-white'>Explore More</Link>
                </div>
            </div>
            <div className='grid order-2 justify-items-center items-center'>
              <iframe className='w-full md:w-[560px] md:h-[320px]' src="https://www.youtube.com/embed/wbR-5mHI6bo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default VideoContent;