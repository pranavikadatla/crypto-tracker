import React from "react";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
import BasicSwitches from "../../Darkmode";
import "./styles.css";
function  Header () {
 return (
     <div className="navbar">
          <h1 className="logo">Crypto Tracker<span style={{color:"var(--blue)"}}>.</span></h1>
          <div className="links">
            <BasicSwitches/>
            
             <Link to="/"><p className="link">Home</p></Link>
             <Link to="/compare"><p className="link">Compare</p></Link>
             <Link to="/dashboard"><Button text={"Dashboard"} onClick={()=>console.log("")}/></Link>
          </div>
          <div className="mobile-drawer">
             <TemporaryDrawer/>
          </div>
     </div>
   );
} 
export default Header;