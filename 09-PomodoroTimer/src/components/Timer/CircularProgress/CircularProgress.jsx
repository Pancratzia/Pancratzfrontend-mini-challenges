import { useContext } from "react";
import styled from "styled-components";
import Clock from "./Clock/Clock";
import { StateContext } from "../../StateProvider";

const CircularProgress = () => {

    const {progress, setProgress} = useContext(StateContext);

  return (
    <OuterCircle progress={progress}>
      <InnerCircle>
        <Clock />
      </InnerCircle>
    </OuterCircle>
  );
};

export default CircularProgress;

const OuterCircle = styled.div`
  width: 35rem;
  height: 35rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(${props => props.theme.colors.primary} ${({ progress }) => progress}%, transparent ${({ progress }) => progress}%);
  transition: all .3s;

    @media screen and (max-width: 480px){
        width: 25rem;
        height: 25rem;
    }
`;

const InnerCircle = styled.div`
  width: 33rem;
  height: 33rem;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: all .3s;
  
  @media screen and (max-width: 480px){
        width: 23rem;
        height: 23rem;
    }
`;
