import React from "react";
import"./styles.css";
import Button from "../../Common/Button";
import phone from "../../../assets/phone.png";
import { Link } from "react-router-dom";
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion";
function MainComponent(){
    return(
        <div className="flex-info">
            <div className="left-component">
                <h1 className="track-crypto-heading">Track Crypto</h1>
                <h1 className="real-time-heading">Real Time.</h1>
                <p className="info-text">Track Crypto through a public api in real time .Visit the dashboard to do so!</p>
                <div className="btn-flex"> 
                <Link to="/dashboard"> <Button text={"Dashboard"}  onClick={()=>console.log("")}/></Link>
                </div>
                </div>
            <div className="phone-container">
                <motion.img src={phone} className="phone"
                 initial={{y:-10}}
                 animate={{y:10}}
                 transition={{
                    type:"smooth",
                    repeatType:"mirror",
                    duration:2,
                    repeat:Infinity,             
                 }}
                />
                <img src={gradient} alt="" className="gradient"/>
            </div>
        </div>
    )
}
export default MainComponent;