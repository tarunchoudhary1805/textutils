import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.title = "Dark Mode";
  };
  return (
    <div>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="about"
          toggleMode={toggleMode}
          mode={darkMode}
        />
        <Alert
          alert={`${darkMode ? "Dark Mode Enabled" : "Dark mode disabled"}`}
        />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze" />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
