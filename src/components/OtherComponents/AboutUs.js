import React, { useState } from "react";


export default function AboutUs() {
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    });
    const [buttext, setButText] = useState("Enable Light mode");

    const toggleStyle = () => { 
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setButText("Enable Dark mode");
        } else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setButText("Enable Light mode");
        }
    };

    return (
        <div class="row" >
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">About TextEditor</h5>
        <p class="card-text">TextEditor is a simple yet powerful text editing application designed to provide users with a seamless writing experience. Whether you're crafting a quick note, drafting an essay, or coding your next project, TextEditor has you covered.</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">About the Developers:</h5>
        <p class="card-text">TextEditor was developed by a team of passionate software engineers dedicated to creating tools that enhance productivity and creativity. Our mission is to provide users with the best possible writing experience while continually improving and adding new features to meet their evolving needs.</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Contact Us:</h5>
        <p class="card-text">Have questions, feedback, or suggestions? We'd love to hear from you! Reach out to us at contact@email.com and let us know how we can improve TextEditor to better serve you.</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-dark">{buttext}</button>
            </div> */}
</div>
        
    );
}
