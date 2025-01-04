import React, { useState } from "react";

import axios from "axios";

const GeoLocation = ({ setCity, setWeather, setErrorMessage }) => {

    const [isLoading, setIsLoading] = useState(false);

    const onLocation = async (event) => {

        if(event){
            event.preventDefault();
        }
        
        setIsLoading(true);

        const geolocations = navigator.geolocation;

        if (geolocations) {
            geolocations.getCurrentPosition(async (position) => {

                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                await axios.get(
                    `${process.env.REACT_APP_WEATHER_URL}weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`)
                    .then((response) => {
                        setWeather(response.data);
                        setCity("");
                        setErrorMessage(null);
                    })
                    .catch((err) => {
                        setErrorMessage("Unable to Fetch Location");
                    })
                    .finally(() => {
                        setIsLoading(false);
                    })
            })
        }
    };

    return (
        <section>
            <div className="flex items-center">
                <button onClick={onLocation} className="flex justify-center items-center gap-4 text-sm text-white bg-[#F0C548] rounded-full w-[240px] p-3 transition-all hover:bg-[#323368] hover:text-white">
                    {
                        !isLoading ?
                            <>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                                </svg>
                                <p>Get Current Location</p>
                            </>
                            :
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <p>Loading . . .</p>
                            </>
                    }
                </button>
            </div>
        </section>
    )
}

export default GeoLocation;
