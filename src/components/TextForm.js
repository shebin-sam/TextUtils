import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLowClick =()=>{
        
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleClearClick =()=>{
        setText("")
    }
    const handlechange =(event)=>{
        
        setText(event.target.value);
    }

    const handleCopy =()=>{
        var text = document.getElementById('exampleFormControlTextarea1')
        text.select()
        navigator.clipboard.writeText(text.value);
    }

    const [text,setText] =useState('');  
  return (<>
  <div className="container">
   <h2>{props.heading}</h2>
<div className="mb-3">
  
  <textarea className="form-control" value ={text} id="exampleFormControlTextarea1" onChange={handlechange} rows="8" ></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert Upper Case</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert Lower Case</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
</div>
<div className="container my-5">
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
</div>
<div className="container my-5">
    <h3>Preview</h3>
   <p> {text.length>0?text:"Enter Your Text To preview"} </p>
</div>
</> )
}
