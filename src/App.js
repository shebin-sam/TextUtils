import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const[mode,setdarkmode]=useState('light')

  const toggleMode =()=>{
    if (mode ==='light'){
    setdarkmode('dark')
    document.body.style.backgroundColor ='grey';
  }
   else{
    setdarkmode('light')
    document.body.style.backgroundColor ='white';
   }
}
  return (
   <>
  
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container"><TextForm heading ="Enter The Text To Analyze"/>

</div>

   </>
    
    
  );
}

export default App;
