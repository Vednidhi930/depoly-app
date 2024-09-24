import React, { useState } from "react";
import "../App.css";
import { Button } from "@mui/material";
import {Line ,Circle} from "rc-progress"
import axios from "axios";


const GridLayout = () => {

  const [data,setData]=useState()

 const handleClick=async()=>{
 

  const response = await axios.post(
    'https://crmapi.conscor.com/api/general/v1/mfind',
    {
      dbName: 'customize-5',
      collectionName: 'company_details',
      query: {},
      projection: {},
      limit: 5,
      skip: 0
    },
    {
      headers: {
        'content-type': 'application/json',
        'x-api-key': 'PLLW0s5A6Rk1aZeAmWr1'
      }
    }
  );

  setData(response.data.data)
 }


  return (
    <>
      <div className="bg-white w-full h-[100vh] flex justify-center items-center">

        {!data ? <h1>Press button to get data <br/></h1> :
          data.map((curr,i)=> <div key={i} className="w-[20rem] h-[20rem] border-black border-2">
          <h1>Agentrate:<span className="text-red-500">{curr.sectionData['Agent Details'].agentrate}</span></h1>
          <h1>city:<span className="text-red-500">{curr.sectionData['Agent Details'].city}</span></h1>
          <h1>name:<span className="text-red-500">{curr.sectionData['Agent Details'].name}</span></h1>
        </div>)
        }
        
         <button onClick={handleClick} className="w-[7rem] text-white rounded-lg h-[2rem] bg-blue-500">Get data</button>
      </div>
    </>
  );
};

export default GridLayout;
