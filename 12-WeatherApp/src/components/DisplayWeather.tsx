import  { MainWrapper } from './styles.module';
import { AiOutlineSearch } from 'react-icons/ai';
const DisplayWeather = () => {
  return (
    <MainWrapper>
        <div className="container">
            <div className="searchArea">
                <input type="text" placeholder="Enter a city..."/>
            </div>
            <div className="searchCircle">
                <AiOutlineSearch className="searchIcon" />
            </div>
        </div>
    </MainWrapper>
  )
}

export default DisplayWeather