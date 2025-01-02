import React, { useEffect, useRef, useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const [city, setCity] = useState("Jakarta");
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorLocation, setErrorLocation] = useState(null);
  const [isLoadingCurrentLocation, setIsLoadingCurrentLocation] = useState(false)

  const [weather, setWeather] = useState();

  const weatherRef = useRef(null);

  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop, behavior: 'smooth'
    })
  }

  useEffect(() => {
    onSearch();
  }, []);

  const onSearch = async (event) => {
    if (event) event.preventDefault();
    await axios
      .get(`${process.env.REACT_APP_WEATHER_URL}weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`)
      .then((res) => {
        setWeather(res.data);
        setCity('')
        setErrorMessage(null);
        setErrorLocation(null);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setErrorLocation(null);
      })
      .finally(() => {
        handleScroll(weatherRef)
      })
  };

  const onLocation = async (event) => {
    if (event) event.preventDefault();
    setIsLoadingCurrentLocation(true)
    if (navigator.geolocation){
      await navigator.geolocation.getCurrentPosition(
        function(position){
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          axios
          .get(`${process.env.REACT_APP_WEATHER_URL}weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`)
          .then((res) => {
            setWeather(res.data);
            setCity('')
            setErrorLocation(null);
            setErrorMessage(null);
          })
          .catch((error) => {
            setErrorLocation(error.message)
            setErrorMessage(null);
          })
          .finally(()=>{
            setIsLoadingCurrentLocation(false);
            handleScroll(weatherRef)
          })
        }
      )
    }
    else{
      setErrorLocation(!null);
    }
  }

  return (
    <div className="lg:container w-full">
      <div className="flex flex-col justify-center items-center w-full h-full gap-6">

        {errorMessage &&
        <div className="relative">        
        <div
          className="fixed inset-x-0 mx-auto top-[100px] w-10/12 rounded-lg bg-white border text-red-700 px-4 py-3 z-10"
          role="alert"
        >
          <span className="block sm:inline">
            Invalid City Name!
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
            onClick={() => setErrorMessage(null)}
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
        </div>

        }

        {errorLocation &&
        <div className="relative">        
        <div
          className="fixed inset-x-0 mx-auto top-[100px] w-10/12 rounded-lg bg-white border text-red-700 px-4 py-3 z-10"
          role="alert"
        >
          <span className="block sm:inline">
            Browser not Supported Geolocation
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
            onClick={() => setErrorLocation(null)}
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
        </div>

        }

        <h1 className="text-4xl md:text-6xl font-black text-[#323368]">
          <span className="text-[#F0C548]">Choose</span> a City!
        </h1>
        <p className="text-sm sm:text-base text-[#323368]">
          Select a city or country to see the weather!
        </p>
        <form
          data-netlify="true"
          className="flex justify-end items-center relative"
          onSubmit={(event) => onSearch(event)}
        >
          <input
            className="text-lg text-[#323368] bg-white border-2 border-gray-200 rounded-full w-[320px] md:w-[640px] p-3 px-8 pr-[4rem] gap-6"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <button className="absolute mr-6">
            <svg
              className="w-7 h-7 text-[#323368]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
        <div className="flex items-center">
          <button onClick={onLocation} className="flex justify-center items-center gap-4 text-sm text-white bg-[#F0C548] rounded-full w-[240px] p-3 transition-all hover:bg-[#323368] hover:text-white">
            {
              !isLoadingCurrentLocation ?
              <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              />
            </svg> :
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            }
            
            {
              !isLoadingCurrentLocation 
              ? 'Use Current Location' 
              : 'Loading . . .'
            }
            
          </button>
        </div>
      </div>
      {weather && 
      <div ref={weatherRef}><Weather weather={weather} /></div>}
    </div>
  );
};

export default Main;
