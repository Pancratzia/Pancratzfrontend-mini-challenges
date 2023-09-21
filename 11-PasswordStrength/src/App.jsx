import { useState } from "react";
import PasswordStrengthMeter from "./components/PasswordStrengthMeter";

function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      
      <div className="col-md-6 mx-auto">
        <h1 className="text-center mt-3 fw-bold text-uppercase">
          Password Strength Checker
        </h1>
        <h2 className="text-center mb-5">by Pancratzia</h2>

        <div className="form-group mb-1">
          <input
            type="password"
            className="form-control shadow-none"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <PasswordStrengthMeter password={password} />
      </div>

        <footer>
          <p className="text-center opacity-25">
            &copy; Made by Pancratzia using zxcvbn - {new Date().getFullYear()}
          </p>
        </footer>
    </div>
  );
}

export default App;
