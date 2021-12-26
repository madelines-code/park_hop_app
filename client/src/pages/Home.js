import React, { useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";


const Home = () => {
  const auth = useContext(AuthContext);
  const [clues, setClues] = useState([]);
  const [parks, setParks] = useState([]);
  const [answer, setAnswer] = useState("");

  useEffect(()=>{
    getData()
  }, [])

  const getData = async ()=>{
    try{
      // NOTE: access-token is getting sent here (devise-axios)
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
  let park = checkInAtPark();
  console.log(park);

  const renderClues = () => {
    if(!park) {
      return <p>couldn't find a park</p>
    }
    let filteredClues = clues.filter((c)=> {
      if(c.park_id === park.id) {
        return (
          <div>
            <p>{c.question}</p>
          </div>
          )
        }
      })
      return filteredClues.map(c => {
        return (
          <div>
          <p>{c.question}</p>
          <input placeholder="Enter answer here"></input>
          </div>)
      })
    }

  return (
    <div>
      <form>
      {/* { renderClues()} */}
      {park && <h2>{park.name} Clues</h2>}
      {park && renderClues()}
      <button>Submit</button>
      </form>
      <hr/>
      {JSON.stringify(auth)}
      <hr/>
      {JSON.stringify(clues)}
      <hr/>
      {JSON.stringify(parks)}

      <hr/>
      {/* <button onClick={()=>checkInAtPark()}>Check In at Park</button> */}
      


    </div>
  );
};

export default Home;
