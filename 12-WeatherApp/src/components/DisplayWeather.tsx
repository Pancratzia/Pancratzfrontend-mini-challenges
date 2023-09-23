import { MainWrapper } from "./styles.module";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { SiWindicss } from "react-icons/si";
import { BsFillSunFill, BsCloudyFill, BsFillCloudRainFill, BsCloudFog2Fill  } from "react-icons/bs";
import {RiLoaderFill} from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";

const DisplayWeather = () => {
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
