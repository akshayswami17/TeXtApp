import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from './components/Navbars/HomeNavBar';
import TextComponent from './components/OtherComponents/TextComponent';
import AboutUs from './components/OtherComponents/AboutUs';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'dark', /*minHeight: '100vh', color: 'white'*/ }}>
        <HomeNavbar title="TextEditor" aboutus="About TextEditor"/>
        <div className="container">
          <TextComponent heading="Enter the text : "/>
        </div>
        
        <Routes> 
          {/* <Route path='/aboutus' element={<AboutUs/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
