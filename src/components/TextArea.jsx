import React from 'react'
import { useState } from "react"

export default function TextArea(props) {
    const [text, setText] = useState("");

    function UpperCase(event) {
        let new1 = text.toUpperCase();
        event.preventDefault();
        setText(new1);
        props.showalert("success", "Converted To Upper Case");
    }

    function LowerCase(event) {
        let new1 = text.toLowerCase();
        event.preventDefault();
        setText(new1);
        props.showalert("success", "Converted To Lower Case");
    }

    function edit(event) {
        setText(event.target.value);
    }

    function clear(event){
        event.preventDefault();
        setText(" ");
        props.showalert("success", "Cleared Text");
    }

    function download(){
        const fileblob = new Blob([text], {type: 'text/plain'});
        const url = URL.createObjectURL(fileblob);

        const elem = document.createElement("a");
        elem.href = url;
        elem.download = "File.txt";
        document.body.appendChild(elem);
        elem.click();

        props.showalert("success", "Started Download");
    }

        function speak(event) {
            event.preventDefault();
            if ('speechSynthesis' in window) {
            let utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
            } else {
            alert('Text-to-speech not supported in this browser.');
            }

            props.showalert("success", "Started Speaking");
    }

        function extraSpace(event){
            event.preventDefault();
            setText(text.replace(/ +/g, ' ').trim()); // /s this inlcudes tab and next lines, so ignoring it
            props.showalert("success", "Cleared Extra Spaces");
        }

  return (
    <>
    <div className="container">
        <form>
        <h1 style={{color: props.mode === 'light'? 'black':'white'}}>{props.text}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={edit} value={text} placeholder='Your Text Here' rows="6" style={{color: props.mode === 'light'? 'black':'white', backgroundColor: props.mode === 'light'? 'white':props.color}}></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={UpperCase} style={{backgroundColor: props.color == 'white'? '': props.color, borderColor: props.color == 'white'? '': 'white'}}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={LowerCase} style={{backgroundColor: props.color == 'white'? '': props.color, borderColor: props.color == 'white'? '': 'white'}}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={clear} style={{backgroundColor: props.color == 'white'? '': props.color, borderColor: props.color == 'white'? '': 'white'}}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={download} style={{backgroundColor: props.color == 'white'? '': props.color, borderColor: props.color == 'white'? '': 'white'}}>Download as txt file</button>
        <button className="btn btn-primary mx-3" onClick={speak} style={{backgroundColor: props.color == 'white'? '': props.color, borderColor: props.color == 'white'? '': 'white'}}>Hear Text</button>
        <button className="btn btn-primary mx-3" onClick={extraSpace} style={{backgroundColor: props.color == 'white'? '': props.color, borderColor: props.color == 'white'? '': 'white'}}>Remove Extra Spaces</button>
        </form>
    </div>
    <div className="container my-5" style={{color: props.mode === 'light'? 'black':'white'}}>
        <h2>Text Summary</h2>
        <p>{text.trim().split(/\s+/).filter(Boolean).length} Words and {text.length} Letters</p>
        <p>{text.trim().split(/\s+/).filter(Boolean).length * 0.004} Minutes needed to read</p>
        <h3>Preview</h3>
        <p>{text.length>0? text: "Enter Text above to preview here!"}</p>
    </div>
    </>
  )
}