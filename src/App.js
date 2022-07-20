import "./styles.css";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import React, { useState } from "react";
import Darkmode from "./Components/Darkmode";
import Alert from "./Components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Components/Error";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      t: type
    });
    setTimeout(() => {
      setAlert();
    }, 1200);
  };

  const [darkMode, setdarkMode] = useState(
    "light"
  ); /*Weather dark mode is enable or not*/

  const toggleMode = () => {
    if (darkMode === "light") {
      setdarkMode("dark");
      document.body.style.backgroundColor = "#f0f8ff";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setdarkMode("light");
      document.body.style.backgroundColor = "#89cff0";
      showAlert("Light mode has been enabled", "Success");
    }
  };
  return (
    <BrowserRouter>
      <Nav
        title="YKIYK"
        aboutText="About"
        darkMode={darkMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Nav /> */}
      <div className="container my-4">
        <Routes>
          <Route path="/title" element={<title />} />
          <Route
            path="/Form"
            element={<Form heading="Enter the text to analyze" />}
          />
          <Route path="/Darkmode" element={<Darkmode darkMode={darkMode} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
