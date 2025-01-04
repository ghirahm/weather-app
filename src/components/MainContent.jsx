import React, { useState } from "react";

import Weather from "./Weather";
import Alert from "../utils/Alert";
import GeoLocation from "../api/GeoLocation";
import SearchLocation from "../api/SearchLocation";

const MainContent = () => {

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("Jakarta");

    const [errorMessage, setErrorMessage] = useState("");

    return (
        <section className="lg:container w-full flex flex-col justify-center items-center gap-6">
            {errorMessage &&
                <Alert errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
            }
            <h1 className="text-4xl md:text-6xl font-black text-[#323368]">
                <span className="text-[#F0C548]">Choose</span> a City!
            </h1>
            <p className="text-sm sm:text-base text-[#323368]">Select a city or country to see the weather!</p>

            <SearchLocation city={city} setWeather={setWeather} setCity={setCity} setErrorMessage={setErrorMessage} />
            <GeoLocation setWeather={setWeather} setCity={setCity} setErrorMessage={setErrorMessage} />

            {weather && <Weather weather={weather} />}
        </section>
    )
}

export default MainContent;
