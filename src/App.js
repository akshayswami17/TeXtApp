import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavbar from "./components/Navbars/HomeNavBar";
import TextComponent from "./components/OtherComponents/TextComponent";
import AboutUs from "./components/OtherComponents/AboutUs";

function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor='white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
  };

  return (
    <Router>
      <div
        style={{
          backgroundColor: "dark" /*minHeight: '100vh', color: 'white'*/,
        }}
      >
        <HomeNavbar title="TextEditor" aboutus="About TextEditor" mode={mode} toggleMode={toggleMode}/>
        <div className="container">
          <TextComponent heading="Enter the text : " />
        </div>

        <Routes>{/* <Route path='/aboutus' element={<AboutUs/>} /> */}</Routes>
      </div>
    </Router>
  );
}

export default App;
