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
    // return parks[parkLocation];
    console.log(parks[parkLocation]);
    }
    return null;
  }

  const renderClues = () => {
    let park = checkInAtPark();
    
    if(!park) {
      return <p>couldn't find a park</p>
    }
    return (
      <div>
        <h1>here's a list of clues</h1>
      </div>
    )
  }


  return (
    <div>
      <h2>Home!</h2>
      {JSON.stringify(auth)}
      <hr/>
      {JSON.stringify(clues)}
      <hr/>
      {JSON.stringify(parks)}
      {/* <p>{checkInAtPark()}</p> */}
      <hr/>
      <button onClick={checkInAtPark}>Check In at Park</button>
      
    </div>
  );
};

export default Home;
