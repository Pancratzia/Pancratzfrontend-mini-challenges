import styled from "styled-components"
import Tags from "./components/Tags/Tags";
import Timer from "./components/Timer/timer";


function App() {

  return (
    <>
      <Title>Pomodoro</Title>
      <Tags />
      <Timer />
    </>
  )
}

export default App;


const Title = styled.h1`
font-size: 6rem;
padding: 2rem 0;
text-align: center;
transition: all 0.3s;

@media screen and (max-width: 768px){
  font-size: 5rem;
}

@media screen and (max-width: 480px){
  font-size: 4rem;
}
`;
