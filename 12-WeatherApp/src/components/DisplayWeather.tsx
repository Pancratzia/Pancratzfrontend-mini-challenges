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
import { useEffect, useState } from "react";

interface WeatherDataProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  },
  sys: {
    country: string;
  },
  wheater: {
    main: string;
  }[];
  wind: {
    speed: number;
  }
}

const DisplayWeather = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const api_endpoint = import.meta.env.VITE_API_ENDPOINT;

  const [weatherData, setWeatherData] = useState<WeatherDataProps | null >(null);

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
          console.log(currentWeather);
        }
      );
    });
  }, []);

  return (
    <MainWrapper>
      <div className="container">
        <div className="searchArea">
          <input type="text" placeholder="Enter a city..." />

          <div className="searchCircle">
            <AiOutlineSearch className="searchIcon" />
          </div>
        </div>

        <div className="weatherArea">
          <h1>Barquisimeto</h1>
          <span>VE</span>
          <div className="icon">icon</div>
          <h1>18º</h1>
          <h2>Cloudy</h2>
        </div>

        <div className="bottomInfoArea">
          <div className="humidityLevel">
            <WiHumidity className="windIcon" />
            <div className="humidInfo">
              <h1>60%</h1>
              <p>Humidity</p>
            </div>
          </div>

          <div className="wind">
            <SiWindicss className="windIcon" />
            <div className="humidInfo">
              <h1>2.35km/h</h1>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;
