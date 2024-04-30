import React, { useState } from "react";
import "./styles.css";
function CoinInfo( { heading , desc }){
    const [flag,setFlag]=useState(false);
    const shortDesc=desc.slice(0,350)+"<span style='color:var(--grey)'>  Read More....</span>";
    const longDesc=desc +"<span style='color:var(--grey)'>  Read Less....</span>";
    return(
        <div className="grey-wrapper" style={{padding:"0rem 1rem"}} >
            <h2 className="coin-info-heading">{heading}</h2>
            {desc.length>350 ? (
           <p  onClick={()=>setFlag(!flag)}className="coin-info-desc" 
                dangerouslySetInnerHTML={{__html:!flag?shortDesc:longDesc}} 
           />
            ):(
              <p dangerouslySetInnerHTML={{__html:desc}}/>
            )}
        </div>
    );
}
export default CoinInfo;