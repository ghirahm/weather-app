import React from "react";

import { Link } from "react-router-dom";

const VideoContent = (props) => {
    return (
        <section className="container w-full h-fit mt-48 lg:mt-12 flex justify-center items-center">
            <div className="grid grid-cols-2 justify-items-center w-10/12 lg:w-9/12 gap-10">
                <div className="grid content-center order-1 gap-6">
                    <h1 className="text-4xl font-black text-[#323368] text-center lg:text-left">{props.title}</h1>
                    <p className="text-sm text-[#323368] text-justify lg:text-left leading-7">{props.description}</p>
                    <div className="w-full grid justify-items-center content-center lg:justify-items-start">
                        <Link to={props.navigation} className="text-base text-white bg-[#F0C548] rounded-lg w-[160px] p-3 hover:bg-[#323368] hover:text-white" target="_blank">{props.button}</Link>
                    </div>
                </div>
                <div className="grid order-2 justify-items-center">
                    <iframe className="w-full md:w-[560px] md:h-[320px]" src={props.navigation} title="Youtube Content" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>
            </div>
        </section>
    )
}

export default VideoContent;