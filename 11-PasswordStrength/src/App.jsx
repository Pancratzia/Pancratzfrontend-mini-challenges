import PasswordStrengthMeter from "./components/PasswordStrengthMeter"


function App() {
  
  return (
   <div className="container">
    <div className="col-md-6 mx-auto">
      <h1 className="text-center mt-3 fw-bold text-uppercase">Password Strength Checker</h1>
      <h2 className="text-center mb-5">by Pancratzia</h2>

      <div className="form-group">
        <input type="password" className="form-control" placeholder="Password..." />

        <PasswordStrengthMeter />

      </div>
    </div>
   </div>
  )
}

export default App
