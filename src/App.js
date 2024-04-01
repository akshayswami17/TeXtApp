import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavbar from "./components/Navbars/HomeNavBar";
import TextComponent from "./components/OtherComponents/TextComponent";
import AboutUs from "./components/OtherComponents/AboutUs";
import Alert from "./components/OtherComponents/Alert";


function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message ,type) => 
  {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 800);

  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark mode has been enabled successfully." ,"success");
      
    } else {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Light mode has been enabled successfully." ,"success");
    }
  };

  return (
    <div>
      <Router>
        <HomeNavbar title="TextEditor" aboutus="About TextEditor" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<TextComponent showAlert={showAlert} heading="Enter the text : " />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
