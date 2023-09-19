import React from 'react'
import styled from 'styled-components';

const ModalContainer = ({isOpen, onClose}) => {
  return (
    <Containter>
      <ModalContent>
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

const ModalContent = styled.div`
  width: 60rem;
  height: 40rem;
  background-color: white;
`;

const ModalHeader = styled.div``;

const ModalTitle = styled.div``;

const ModalCloseButton = styled.button``;

const ModalBody = styled.div``;