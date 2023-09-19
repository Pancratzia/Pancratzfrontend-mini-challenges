import React from 'react'
import styled from 'styled-components';

const MadalContainer = () => {
  return (
    <Container>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalCloseButton>X</ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Container>
  )
}

export default MadalContainer;


const Conainter = styled.div``;

const ModalContent = styled.div``;

const ModalHeader = styled.div``;

const ModalTitle = styled.div``;

const ModalCloseButton = styled.div``;

const ModalBody = styled.div``;