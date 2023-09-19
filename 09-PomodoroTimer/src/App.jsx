import styled from "styled-components"
import Tags from "./components/Tags/Tags";
import Timer from "./components/Timer/timer";
import Modal from "./components/Modal/Modal";
import { FaCog } from "react-icons/fa";
import { useState } from "react";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  }

  const onOpen = () => {
    setIsOpen(true);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} />
      <Title>Pomodoro</Title>
      <Tags />
      <Timer />

      <CogIcon onClick={onOpen}>
        <FaCog />
      </CogIcon>
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

const CogIcon = styled.div`
display: flex;
justify-content: center;
font-size: 4rem;
cursor: pointer;
`;
