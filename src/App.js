import "./styles.css";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import React, { useState } from "react";
// import Darkmode from "./Components/Darkmode"
import Alert from './Components/Alert';

export default function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      t:type
    })
    setTimeout(() =>{
      setAlert()
    }, 1000)
  }

  const [darkMode, setdarkMode] = useState(
    "light"
  ); /*Weather dark mode is enable or not*/

  const toggleMode = () => {
    if (darkMode === "light") {
      setdarkMode("dark");
      document.body.style.backgroundColor = "#f0f8ff";
      showAlert("Dark mode has been enabled","Success")
    } else {
      setdarkMode("light");
      document.body.style.backgroundColor = "#89cff0";
      showAlert("Light mode has been enabled","Success")
    }
  };
  return (
    <>
      <Nav
        title="YKIYK"
        aboutText="About"
        darkMode={darkMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      {/* <Nav /> */}
      <div className="container my-4">
        <Form heading="Enter the text to analyze" />
        {/* <Darkmode/> */}
      </div>
    </>
  );
}