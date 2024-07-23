import React from "react";
import "./styles.css";
import Switch from '@mui/material/Switch';
//const label = { inputProps: { 'aria-label': 'Switch demo' } };

function BasicSwitches() {
    function darkTheme(){
        document.querySelector("body").setAttribute("theme","dark");
        localStorage.setItem("selectedTheme","dark")
    }
    function lightTheme(){
         document.querySelector("body").setAttribute("theme","light");
         localStorage.setItem("selectedTheme","light")
    }
    const selectedTheme=localStorage.getItem("selectedTheme");
    if(selectedTheme==="light"){
      lightTheme();
    }
    const toggleTheme= (e)=>{
            if(e.target.checked) darkTheme();
            else lightTheme();
     }     
     return (
    <div>
      <Switch defaultChecked={selectedTheme==="dark"}onChange= {toggleTheme}/>
      </div>
  )
}
export default BasicSwitches;