import React, { useEffect, useState } from "react";

import axios from "axios";

const SearchLocation = ({ city, setCity, setWeather, setErrorMessage }) => {

    const [isLoading, setIsLoading] = useState(false);

    const onSearch = async (event) => {

        if (event) {
            event.preventDefault();
        }

        setIsLoading(true);

        if (!city) {
            setErrorMessage("Please Enter a City Name");
            return;
        }

        await axios
            .get(`${process.env.REACT_APP_WEATHER_URL}weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`)
            .then((response) => {
                setWeather(response.data);
                setCity("");
                setErrorMessage(null);
            })
            .catch(() => {
                setErrorMessage("City Not Found or An Error Occurred");
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    useEffect(() => {
        onSearch();
    }, [])

    return (
        <section>
            <form onSubmit={onSearch} className="flex justify-end items-center relative">
                <input
                    className="text-lg text-[#323368] bg-white border-2 border-gray-200 rounded-full w-[320px] md:w-[640px] p-3 px-8 pr-[4rem] gap-6"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}

                />
                <button className="absolute mr-6">
                    {
                        !isLoading ?
                            <svg className="w-7 h-7 text-[#323368]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            :
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#323368]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                    }

                </button>
            </form>
        </section>
    );
};

export default SearchLocation;
