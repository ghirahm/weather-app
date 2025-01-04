import React from "react";

import Floating from "./Floating";

const HeroContent = (props) => {
    return (
        <section ref={props.ref} className="relative lg:container w-full h-[720px] md:h-[480px] flex flex-col justify-center items-center gap-6 px-6 md:px-0">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-black text-[#323368]">
                {props.title}
            </h1>
            <p className="text-[0.6rem] sm:text-sm md:text-base text-[#323368]">
                {props.subtitle}
            </p>
            <button onClick={props.click} className="text-lg text-white bg-[#F0C548] rounded-lg w-[200px] p-3 transition-all hover:bg-[#323368] hover:text-white">
                {props.button}
            </button>
            <div className="absolute bottom-0">
                <Floating click={props.click}/>
            </div>
        </section>
    )
}

export default HeroContent;