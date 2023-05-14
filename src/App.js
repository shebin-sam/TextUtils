import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  const[mode,setdarkmode]=useState('light')

  const toggleMode =()=>{
    if (mode ==='light'){
    setdarkmode('dark')
    document.body.style.backgroundColor ='grey';
    document.title = "Text Utils";
    //blinking title 
    //setInterval(()=>{
     // document.title = "Text";
    //},2000);
    //setInterval(()=>{
      //document.title = "Utils";
    //},2000);
  }

   else{
    setdarkmode('light')
    document.body.style.backgroundColor ='white';
   }
}
  return (
   <>


<Router> 
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Routes>   
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" />} />
          <Route exact path="about" element={<About />} />
          
</Routes>
</Router> 
   </>
    
    
  );
}

export default App;
