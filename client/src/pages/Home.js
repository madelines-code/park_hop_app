import React, { useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";


const Home = () => {
  const auth = useContext(AuthContext);
  const [clues, setClues] = useState([]);
  const [parks, setParks] = useState([]);

  useEffect(()=>{
    getData()
  }, [])

  const getData = async ()=>{
    try{
      // NOTE: access-toke is getting sent here (devise-axios)
      let resClues = await axios.get('/api/clues')
      setClues(resClues.data);
      let resParks = await axios.get('/api/parks')
      setParks(resParks.data);
    } catch(err){
      alert('err in getData()')
    }
  }

  const checkInAtPark = () => {
    if (parks.length) {
    let parkLocation = Math.floor(Math.random() * parks.length);
    return parks[parkLocation];
    // console.log(parks[parkLocation]);
    }
    return null;
  }

  const renderClues = () => {
    const park = checkInAtPark();
    if(!park) {
      return <p>couldn't find a park</p>
    }
    return clues.filter((c)=> {
        if (c.park_id === park.id) {
        return (
          // <div>
            // <p>{c.question}</p>
          // </div>
          console.log(c.question)
          )
      }}
    )
    // <div>
    //   <p>{park.id}</p>
    //   <p>{park.name}</p>
    // </div>
    
    }


  return (
    <div>
      <h2>Home!</h2>
      {JSON.stringify(auth)}
      <hr/>
      {JSON.stringify(clues)}
      <hr/>
      {JSON.stringify(parks)}

      <hr/>
      <button onClick={()=>checkInAtPark()}>Check In at Park</button>
      <hr/>
      <div>{renderClues()}</div>
    </div>
  );
};

export default Home;
