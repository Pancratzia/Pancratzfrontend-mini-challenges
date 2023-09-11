import React, { useState } from 'react';
import Button from './components/Button';
import ButtonContainer from './components/ButtonContainer';
import Card from './components/Card';
import Selector from './components/Selector';
import Table from './components/Table';

function App() {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleReset = () => {
    setSelectedOption(1);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-200 h-screen flex justify-center items-center">
      <Card>
        <Selector value={selectedOption} onChange={setSelectedOption} />
        <ButtonContainer>
          <Button name="Reset" onClick={handleReset} />
          <Button name="Colorize" />
        </ButtonContainer>
        <Table />
      </Card>
    </div>
  );
}

export default App;
