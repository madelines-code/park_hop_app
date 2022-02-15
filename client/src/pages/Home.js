import React, { useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";
import { Centered } from "../components/StyledComponents";
import Clue from "../components/Clue";


const Home = () => {
  const auth = useContext(AuthContext);
  const [clues, setClues] = useState([]);
  const [parks, setParks] = useState([]);
  const [submitted_answer, setSubmitted_answer] = useState("")
  const [parkClues, setParkClues] = useState([])
  const [clueId, setClueId] = useState("")
  const [clueAnswers, setClueAnswers] = useState([])
  // const [answer1, setAnswer1] = useState("");
  // const [answer2, setAnswer2] = useState("");
  const [park, setPark] = useState("");

  useEffect(()=>{
    getData()
  }, [])

  useEffect(()=>{
    listParkClues(park)
    console.log(parkClues);
  }, [park])

  const getData = async ()=>{
    try{
      // NOTE: access-token is getting sent here (devise-axios)
      let resClues = await axios.get(`/api/userclues/${auth.id}`)
      setClues(resClues.data);
      let resParks = await axios.get('/api/parks')
      setParks(resParks.data);
    } catch(err){
      alert('err in getData()')
    }
  }

  const checkInAtPark = () => {
    console.log(parks)
    if (parks.length) {
    let parkLocation = Math.floor(Math.random() * parks.length);
    setPark(parks[parkLocation]);
    }
    return null;
  }

  // let park = checkInAtPark();
  // console.log(park);

  const listParkClues = () => {
    console.log(park);
    if(!park) {
      return <p>couldn't find a park</p>
    }
    setParkClues(clues.filter((c)=> c.park_id === park.id))
      
    }

  return (
    <div className='form'>
      <h1>Hey {auth.name}!</h1>
      <h2>Welcome to Park Hop!</h2>
      <h3>Get started exploring parks all over Upstate SC.</h3>
      <p>Click the Parks tab to view a map of parks and get directions. Once you're at one of our parks, tap "Check In at Park" to start completing clues.</p>
      <button className='buttonStyle' onClick={()=>checkInAtPark()}>Check In at Park</button>
      {park && <h2>{park.name} Clue</h2>}
      {park && <Clue park={park} parkClues={parkClues}/>} 
    </div>
  );
};


export default Home;
