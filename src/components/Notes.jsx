import React from "react";

import IconA from "../resources/weather-icon/1.png";
import IconB from "../resources/weather-icon/2.png";
import IconC from "../resources/weather-icon/3.png";
import IconD from "../resources/weather-icon/4.png";
import IconE from "../resources/weather-icon/5.png";
import IconF from "../resources/weather-icon/6.png";
import IconG from "../resources/weather-icon/7.png";
import IconH from "../resources/weather-icon/8.png";
import IconI from "../resources/weather-icon/9.png";

const Notes = () => {
    return (
        <div className="w-full md:mt-32 lg:mt-6 my-24">
            <div className="flex flex-col items-center justify-center mb-12">
                <h1 className="text-4xl font-black text-[#323368] text-left">Weather Notes</h1>
                <p className="text-sm text-[#323368] text-left mt-4">Weather icon based weather condition!</p>
            </div>
            <div className="grid grid-cols-3 justify-items-center gap-2 md:gap-6 w-10/12 md:w-11/12 lg:w-9/12 mx-auto md:border md:rounded-[3rem] md:p-12 lg:p-20">
                <div className="border rounded-lg w-11/12 md:w-10/12 h-[120px] grid justify-items-center content-center p-2 md:p-4 bg-gradient-to-t from-[#323368] to-violet-600">
                    <div className="w-full h-[60px] flex items-center justify-center">
                        <img src={IconA} className="w-12" alt='...'></img>
                    </div>
                    <p className="text-[0.6rem] md:text-sm lg:text-xl font-bold text-white text-center">Clear Sky</p>
                </div>
                <div className="border rounded-lg w-11/12 md:w-10/12 h-[120px] grid justify-items-center content-center p-2 bg-gradient-to-t from-[#323368] to-violet-600">
                    <div className="w-full h-[60px] flex items-center justify-center">
                        <img src={IconB} className="w-12 h-auto" alt='...'></img>
                    </div>
                    <p className="text-[0.6rem] md:text-sm lg:text-xl font-bold text-white text-center">Few Clouds</p>
                </div>
                <div className="border rounded-lg w-11/12 md:w-10/12 h-[120px] grid justify-items-center content-center p-2 bg-gradient-to-t from-[#323368] to-violet-600">
                    <div className="w-full h-[60px] flex items-center justify-center">
                        <img src={IconC} className="w-12 h-auto" alt='...'></img>
                    </div>
                    <p className="text-[0.6rem] md:text-sm lg:text-xl font-bold text-white text-center">Scattered Clouds</p>
                </div>
                <div className="border rounded-lg w-11/12 md:w-10/12 h-[120px] grid justify-items-center content-center p-2 bg-gradient-to-t from-[#323368] to-violet-600">
                    <div className="w-full h-[60px] flex items-center justify-center">
                        <img src={IconD} className="w-12 h-auto" alt='...'></img>
                    </div>
                    <p className="text-[0.6rem] md:text-sm lg:text-xl font-bold text-white text-center">Broken Clouds</p>
                </div>
                <div className="border rounded-lg w-11/12 md:w-10/12 h-[120px] grid justify-items-center content-center p-2 bg-gradient-to-t from-[#323368] to-violet-600">
                    <div className="w-full h-[60px] flex items-center justify-center">
                        <img src={IconE} className="w-12 h-auto" alt='...'></img>
                    </div>
                    <p className="text-[0.6rem] md:text-sm lg:text-xl font-bold text-white text-center">Shower Rain</p>
                </div>
                <div className="border rounded-lg w-11/12 md:w-10/12 h-[120px] grid justify-items-center content-center p-2 bg-gradient-to-t from-[#323368] to-violet-600">
                    <div className="w-full h-[60px] flex items-center justify-center">
                        <img src={IconF} className="w-12 h-auto" alt='...'></img>
                    </div>
                    <p className="text-[0.6rem] md:text-sm lg:text-xl font-bold text-white text-center">Rain</p>
                </div>
                <div className="border rounded-lg w-11/12 md:w-10/12 h-[120px] grid justify-items-center content-center p-2 bg-gradient-to-t from-[#323368] to-violet-600">
                    <div className="w-full h-[60px] flex items-center justify-center">
                        <img src={IconG} className="w-12 h-auto" alt='...'></img>
                    </div>
                    <p className="text-[0.6rem] md:text-sm lg:text-xl font-bold text-white text-center">Thunderstorm</p>
                </div>
                <div className="border rounded-lg w-11/12 md:w-10/12 h-[120px] grid justify-items-center content-center p-2 bg-gradient-to-t from-[#323368] to-violet-600">
                    <div className="w-full h-[60px] flex items-center justify-center">
                        <img src={IconH} className="w-12 h-auto" alt='...'></img>
                    </div>
                    <p className="text-[0.6rem] md:text-sm lg:text-xl font-bold text-white text-center">Snow</p>
                </div>
                <div className="border rounded-lg w-11/12 md:w-10/12 h-[120px] grid justify-items-center content-center p-2 bg-gradient-to-t from-[#323368] to-violet-600">
                    <div className="w-full h-[60px] flex items-center justify-center">
                        <img src={IconI} className="w-12 h-auto" alt='...'></img>
                    </div>
                    <p className='text-[0.6rem] md:text-sm lg:text-xl font-bold text-white text-center'>Mist</p>
                </div>
            </div>
        </div>
    )
}

export default Notes;