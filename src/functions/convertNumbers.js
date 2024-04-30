const convertNumbers=(number)=>{
    const numberWithComas=number.toLocaleString();
    var arr=numberWithComas.split(",");
    if(arr.length===5){
        //Trillions
        return arr[0]+"."+arr[1].slice(0,2)+"T";
    }//Billions
    else if(arr.length===4){
        return arr[0]+"."+arr[1].slice(0,2)+"B";
    }//Millions
    else if(arr.length===3){
        return arr[0]+"."+arr[1].slice(0,2)+"M";
    }//Thousands
    else if(arr.length===2){
        return arr[0]+"."+arr[1].slice(0,2)+"K";
    }//Hunderds
    else{
        return number.toLocaleString();
    }
};
export default convertNumbers;