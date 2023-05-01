import "./App.css";
import SignUp from "./Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpUsers from "./SingupUsers";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/SignUpUsers" element={<SignUpUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
