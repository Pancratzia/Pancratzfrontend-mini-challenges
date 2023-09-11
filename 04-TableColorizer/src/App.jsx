import Button from "./components/Button"
import ButtonContainer from "./components/ButtonContainer"
import Card from "./components/Card"
import Selector from "./components/Selector"

function App() {

  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-200 h-screen flex justify-center items-center">
      <Card>
        <Selector />
        <ButtonContainer>
          <Button name="Reset" />
          <Button name="Colorize" />
        </ButtonContainer>
      </Card>
    </div>
  )
}

export default App
