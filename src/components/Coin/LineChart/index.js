import react from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";//Don't get rid of this never
import convertNumbers from "../../../functions/convertNumbers";
function LineChart({chartData,priceType,multiAxis}){
    const options={
        plugins:{
          legend:{
              display:multiAxis?true:false,
          },
        },
        responsive:true,
        interaction:{
            mode:"index",
            intersect:false,
        },
        scales: {
            type: 'linear',
           display: true,
           position: 'left',
            crypto1: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                      if(priceType=="prices") 
                       return '$' + value.toLocaleString();
                     else{
                        return '$' + convertNumbers(value);
                     }
                    }
                }
            },
            crypto2: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                      if(priceType=="prices") 
                       return '$' + value.toLocaleString();
                     else{
                        return '$' + convertNumbers(value);
                     }
                    }
                }
            },
        } 
   };
    return <Line data={chartData} options={options}/>
};
export default LineChart;