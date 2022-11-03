import React, {useEffect, useState} from "react"
import axios from "axios"


function Get() {
    const[state, setstate]= React.useState([])
  React.useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res)=>{
      console.log(res.data);
      setstate(res.data);
      })
  }, [])
  return (
    <div>
        <div className="api-con">
        { state.map((items)=>{
      return(
        <div className="img-con">
        <img src={items.image}></img>
        {/* <p> {items.fName}</p>
        <p> {items.lName}</p> */}
        
        </div>
      )})}
      </div>
        </div>
  )
}

export default Get