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
import IconJ from "../resources/weather-icon/10.png";
import IconK from "../resources/weather-icon/11.png";

const Weather = ({ weather }) => {
    
    //Using Forecast Onecall API
    /*const [forecast, setForecast] = useState();

    useEffect(() => {
      handleForecast();
    },[weather])

    const handleForecast = () => {
      axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&units=metric&exclude=,hourly,minutely&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      .then((res) => {
        setForecast(res.data);
      })
    } */

    const weatherIcon = (icon) => {
        if (icon === "01d") {
            return IconA;
        }
        else if (icon === "02d") {
            return IconB;
        }
        else if (icon === "03d" || icon === "03n") {
            return IconC;
        }
        else if (icon === "04d" || icon === "04n") {
            return IconD;
        }
        else if (icon === "09d" || icon === "09n") {
            return IconE;
        }
        else if (icon === "10d" || icon === "10n") {
            return IconF;
        }
        else if (icon === "11d" || icon === "11n") {
            return IconG;
        }
        else if (icon === "13d" || icon === "13n") {
            return IconH;
        }
        else if (icon === "50d" || icon === "50n") {
            return IconI;
        }
        else if (icon === "01n") {
            return IconJ;
        }
        else if (icon === "02n") {
            return IconK;
        }
    }

    return (
        <div className="w-full md:h-[1640px] lg:h-fit flex my-12 justify-center items-start">
            <div className="grid justify-items-center content-center w-9/12 gap-10 bg-white">
                <div className="mx-auto w-full h-72 bg-gradient-to-t lg:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-600 to-[#323368] lg:from-amber-200 lg:via-violet-600 lg:to-[#323368] rounded-xl">
                    <div className="flex justify-between h-full">
                        <div className="flex flex-col justify-between order-1 p-4 md:p-8 space-y-2 h-full">
                            <div>
                                <h1 className="text-left text-white text-3xl">{weather.name}</h1>
                                <p className="text-left text-[#F0C548] text-xs mt-2">
                                    {new Date().toLocaleString("en-US", { day: "2-digit", month: "long", weekday: "short" })}
                                </p>
                            </div>
                            <div>
                                <h1 className="text-left text-[#F0C548] text-2xl md:text-5xl">{(weather.main.temp).toFixed(1)}&deg;C</h1>
                                <p className="text-left text-white capitalize text-xs mt-2">{weather.weather[0].description}</p>
                            </div>
                        </div>
                        <div className="order-2 flex flex-col justify-between items-end p-8 h-full">
                            <img src={weatherIcon(weather.weather[0].icon)} className="w-20" alt=""></img>
                            {/* <p className="text-right text-white text-xs mt-2 capitalize">Tomorrow {forecast.daily[0].weather[0].description}</p> */}
                        </div>
                    </div>
                </div>
                {/* <div className="grid w-10/12 grid-cols-2 lg:grid-cols-4 gap-10">
                        {forecast.daily.map((i, key) => {
                            return(
                            <div key={i.moonrise} className={`grid justify-items-center content-center w-full bg-gradient-to-tl ${key === 0 ? "from-[#F0C548] to-rose-300" : "from-[#323368] to-violet-600"}  shadow-md rounded-[3rem] h-64 py-12 gap-2`}>
                                <p className="text-center text-white text-xs">
                                {new Date(new Date().getTime()+(24 * (key+1) * 60 * 60 * 1000)).toLocaleString("en-US", { day : "2-digit", month:"long", weekday:"short"})}
                                </p>
                                <h1 className="text-left text-white text-3xl">{(i.temp.min).toFixed(1)}&deg;C</h1>
                                <p className="text-center text-white text-xs capitalize">
                                {(i.weather[0].description)}
                                </p>
                            </div>
                            )
                        })}
                    </div> */}
            </div>
        </div>
    );
};

export default Weather;
