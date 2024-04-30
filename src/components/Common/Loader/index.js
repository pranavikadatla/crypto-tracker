import React from "react";
import "./styles.css"
import { CircularProgress } from "@mui/material";
function Loader(){
   return (
    <div className="loader">
        <CircularProgress/>
    </div>
   )
}
export default Loader;