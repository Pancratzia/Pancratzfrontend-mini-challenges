import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ModalContainer = ({isOpen, onClose}) => {
  return (
    <Containter>
      <ModalContent initial = {{y: "-100vh" }} animate = {{y: 0}} exit = {{y: "-100vh"}}>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Containter>
  )
}

export default ModalContainer;


const Containter = styled.div`
position: absolute;
height: 100vh;
width: 100vw;
display: grid;
place-items: center;
z-index: 150;
`;

const ModalContent = styled(motion.div)`
  width: 60rem;
  height: 40rem;
  background-color: white;

  @media screen and (max-width: 480px){
    max-width: 60rem;
    width: 90%;
  }
`;

const ModalHeader = styled.div``;

const ModalTitle = styled.div``;

const ModalCloseButton = styled.button``;

const ModalBody = styled.div``;