import React, { useState } from 'react';
import Button from './components/Button';
import ButtonContainer from './components/ButtonContainer';
import Card from './components/Card';
import Selector from './components/Selector';
import Table from './components/Table';

function App() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [colors, setColors] = useState(Array(9).fill('#FFFFFF')); 
  const handleReset = () => {
    setSelectedOption(1);
    setColors(Array(9).fill('#FFFFFF')); 
  };

  const handleColorize = () => {
    const newColors = [...colors];
    newColors[selectedOption - 1] = getRandomColor(); 
    setColors(newColors);
  };

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-200 h-screen flex justify-center items-center">
      <Card>
        <Selector value={selectedOption} onChange={setSelectedOption} />
        <ButtonContainer>
          <Button name="Reset" onClick={handleReset} color="#bfdbfe" />
          <Button name="Colorize" onClick={handleColorize} color="#a5f3fc" />
        </ButtonContainer>
        <Table colors={colors} />
      </Card>
    </div>
  );
}

export default App;

