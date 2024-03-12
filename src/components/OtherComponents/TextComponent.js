import React, { useState } from 'react';

export default function TextComponent(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase());
    };
    const handlelowerClick = () => {
        setText(text.toLowerCase());
    };
    const handleClearClick = () => {
        setText('');
    };
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label"></label>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
            </div>
            <div>
    <button className="btn btn-primary" style={{ marginRight: '20px' }} onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary" style={{ marginRight: '20px' }} onClick={handlelowerClick}>Convert to LowerCase</button>
    <button className="btn btn-primary" style={{ marginRight: '20px' }} onClick={handleClearClick}>Clear text</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
</div>
<div className="container my-2"> {/* my-2 spacing between text */}

    <h3>Your text summary</h3>
    <p>Words : {text.split(" ").length}  and Characters : {text.length} </p>
    <p>Time take to read : {0.008 * text.split(" ").length}</p>
</div>


        </>
    );
}
