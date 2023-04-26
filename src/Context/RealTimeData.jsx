import React, { useEffect, useState } from "react";
import RealTimeDataContext from "./RealTimeDataContext"; 

const baseUrl = "http://localhost:5000";

function RealTimeData(props) {

  const [sharePrices, setSharePrices] = useState([]);

  const getRealTimePrices = async()=>{
    const option = {
      method : 'GET',
      Headers: {
        'Content-type' : 'application/json',
        
      }
    }


    const data = await fetch(`${baseUrl}/api/realTime/getPrices`, option);
    const sharePrices = await data.json()
    setSharePrices(sharePrices);
  }

  useEffect(()=>{

    setInterval(()=>{
      getRealTimePrices()

    },500)
  },[])
  // setInterval(()=>{
  // },[500])
 
  return (
    <RealTimeDataContext.Provider value={{sharePrices}}>
      {props.children}
    </RealTimeDataContext.Provider>
  )
}

export default RealTimeData