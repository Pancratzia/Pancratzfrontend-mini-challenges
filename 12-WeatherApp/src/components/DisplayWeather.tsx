import { MainWrapper } from "./styles.module";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { SiWindicss } from "react-icons/si";
import {
  BsFillSunFill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsCloudFog2Fill,
} from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface WeatherDataProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

const DisplayWeather = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const api_endpoint = import.meta.env.VITE_API_ENDPOINT;

  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [searchCity, setSearchCity] = useState("");

  const getcurrentWeather = async (lat: number, lon: number) => {
    const url = `${api_endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      Promise.all([getcurrentWeather(latitude, longitude)]).then(
        ([currentWeather]) => {
          setWeatherData(currentWeather);
          setIsLoading(true);
        }
      );
    });
  }, []);

  const fetchWeatherData = async(city: string) => {
    try{
      const url = `${api_endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
      const response = await axios.get(url);
      const currentWeatherData: WeatherDataProps = response.data;
      return {currentWeatherData};
    }catch(err){
      console.error("Not Data Found");
      throw err;
    }
  };

  const handleSearch = async () => {
    if(searchCity.trim() === "") return;

    try{
      const {currentWeatherData} = await fetchWeatherData(searchCity);
      setWeatherData(currentWeatherData);
      setSearchCity("");
    }catch(err){
      console.error("Not Result Found");
    }
  }
  const iconChanger = (icon: string) => {
    let iconElement: React.ReactNode;
    let iconColor: string;

    switch (icon) {
      case "Rain":
        iconElement = <BsFillCloudRainFill />;
        iconColor = "#272829";
        break;
      case "Clear":
        iconElement = <BsFillSunFill />;
        iconColor = "#FFC436";
        break;

      case "Clouds":
        iconElement = <BsCloudyFill />;
        iconColor = "#102C57";
        break;

      case "Mist":
        iconElement = <BsCloudFog2Fill />;
        iconColor = "#279EFF";
        break;

      default:
        iconElement = <TiWeatherPartlySunny />;
        iconColor = "#7B2869";
    }

    return (
      <span className="icon" style={{ color: iconColor }}>
        {iconElement}
      </span>
    )
  };

  return (
    <MainWrapper>
      <div className="container">
        <div className="searchArea">
          <input type="text" placeholder="Enter a city..." value={searchCity} onChange={(e) => setSearchCity(e.target.value)} />

          <div className="searchCircle">
            <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
          </div>
        </div>

        {weatherData && isLoading ? (
          <>
            <div className="weatherArea">
              <h1>{weatherData.name}</h1>
              <span>{weatherData.sys.country}</span>
              <div className="icon">
                {iconChanger(weatherData.weather[0].main)}
              </div>
              <h1>{weatherData.main.temp}°C</h1>
              <h2>{weatherData.weather[0].main}</h2>
            </div>

            <div className="bottomInfoArea">
              <div className="humidityLevel">
                <WiHumidity className="windIcon" />
                <div className="humidInfo">
                  <h1>{weatherData.main.humidity}%</h1>
                  <p>Humidity</p>
                </div>
              </div>

              <div className="wind">
                <SiWindicss className="windIcon" />
                <div className="humidInfo">
                  <h1>{weatherData.wind.speed}km/s</h1>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="loading">
            <RiLoaderFill className="loadingIcon" />
            <p>Loading...</p>
          </div>
        )}
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;
