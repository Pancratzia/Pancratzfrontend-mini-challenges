import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import { StateContext } from "../StateProvider";

const ModalContainer = ({ isOpen, onClose }) => {

  const {workTime, shortBreakTime, longBreakTime, setWorkTime, setShortBreakTime, setLongBreakTime} = useContext(StateContext);
  return (
    <Containter>
      <ModalContent
        initial={{ y: "-100vh", scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: "-100vh", scale: 0 }}
      >
        <ModalHeader>
          <ModalTitle>Settings</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <FaWindowClose fontSize="4rem" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ work: workTime/60, short: shortBreakTime/60, long: longBreakTime/60 }}
            onSubmit={(values) => {
              setWorkTime(values.work * 60);
              setShortBreakTime(values.short * 60);
              setLongBreakTime(values.long * 60);
              onClose();
            }}
          >
            <Form>
              <InputWrapper>
                <FormControl>
                  <label htmlFor="work">Work</label>
                  <Field id="work" name="work" min="1" type="number" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="short">Short Break</label>
                  <Field
                    id="short"
                    name="short"
                    min="1"
                    type="number"
                    max="60"
                  />
                </FormControl>
                <FormControl>
                  <label htmlFor="long">Long Break</label>
                  <Field id="long" name="long" min="1" type="number" max="60" />
                </FormControl>
              </InputWrapper>
              <ButtonWrapper>
                <ApplyButton type="submit">Apply</ApplyButton>
              </ButtonWrapper>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Containter>
  );
};

export default ModalContainer;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

const ApplyButton = styled.button`
  cursor: pointer;
  padding: 1rem 4rem;
  font-size: 2rem;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormControl = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: black;
  gap: 0.7rem;

  label {
    font-size: 2rem;
  }
  input {
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid black;
    background: #ead8fc;
  }
`;

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

  @media screen and (max-width: 768px) {
    max-width: 60rem;
    width: 90%;
    height: auto;
  }
`;

const ModalHeader = styled.div`
  color: black;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

const ModalTitle = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

const ModalCloseButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const ModalBody = styled.div``;
