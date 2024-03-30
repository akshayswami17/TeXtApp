import React, { useState } from 'react';

export default function TextComponent(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UPPERCASE ", "success");
    };
    const handlelowerClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase ", "success");
    };
    const handleClearClick = () => {
        setText('');
        props.showAlert("Clear data . ", "warning");
    };
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Capitilize the text . ", "success");
   }

   

    return (
        <>
        <div style={{color : props.mode==='dark'?'white':'black'}}>

        
            <h1>{props.heading}</h1>
            <div style={{color : props.mode==='dark'?'white':'black'}} >
                <label htmlFor="mybox" className="form-label"></label>
                <textarea className="form-control" onChange={handleOnChange} value={text}  id="mybox" rows="8"></textarea>
            </div>
            <div>
    <button className="btn btn-primary" style={{ marginRight: '20px' }} onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary" style={{ marginRight: '20px' }} onClick={handlelowerClick}>Convert to LowerCase</button>
    <button className="btn btn-primary" style={{ marginRight: '20px' }} onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary" style={{ marginRight: '20px' }} onClick={handleCapitalize}>Capitalize text</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
</div>
<div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}} > {/* my-2 spacing between text */}

<div >
    
    <h3>Your text summary</h3>
    <p>Words : {text.split(" ").length}  and Characters : {text.length} </p>
    <p>Time take to read : {0.008 * text.split(" ").length}</p>
</div>
</div>
</div>

        </>
    );
}
