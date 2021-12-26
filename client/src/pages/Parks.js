import axios from "axios";
import React, { useEffect, useState } from "react";
import Park from "./Park";

const Parks = () => {
  const [parks, setParks] = useState([]);

  useEffect(()=>{
    getParks()
  }, [])

  const getParks = async () => {
    let res = await axios.get('/api/parks')
    setParks(res.data);

  }

  const renderParks = () => {
    return parks.map((p)=>{
      return <Park key={p.id} {...p}/>
    })
  }

  return (
    <div>
      <h1>All Parks</h1>
      {renderParks()}
    </div>
  )
}

export default Parks;