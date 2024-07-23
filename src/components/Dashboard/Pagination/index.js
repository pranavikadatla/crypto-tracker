import React from "react";
import "./styles.css";
//import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
//import Stack from '@mui/material/Stack';

export default function PaginationComponent({page,handlePageChange}) {
  


  return (
    <div className="pagination-component" >
     
     <Pagination count={10} page={page} onChange={(event,value)=>handlePageChange(event,value )} 
                   sx={{
                     color:"var(--color)",
                     "& .Mui-selected":{
                        backgroundColor:"var(--blue) !important",
                        color:"#fff !important",
                        borderColor:"var(--blue) !important",
                      },
                     "& .MuiPaginationItem-ellipsis":{
                        border:"0px solid var(--lightgrey) !important",
                      },
                     "& .MuiPaginationItem-text":{
                     color:"var(--color)",
                       border:"1px solid var(--lightgrey)",
                   },
                }}      
              
      />
   </div>
  );
}