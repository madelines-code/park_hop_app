import React, { useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";
import { Centered } from "../components/StyledComponents";
import Clue from "../components/Clue";
import ParkHopLogo from "../2020_Park_Hop_Logo_Vector.svg"
import { Button, Image } from "semantic-ui-react";


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
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        
      });
    } else {
      console.log("Not Available");
    }
    // if (parks.length) {
    // let parkLocation = Math.floor(Math.random() * parks.length);
    // setPark(parks[parkLocation]);
    
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
      <h2 style={{margin: '20px'}}>Welcome to Park Hop!</h2>
      <Image src={ParkHopLogo} size='medium' circular />

      <h3>Get started exploring parks all over Upstate SC.</h3>
      <p>Click the Parks tab to view a map of parks and get directions. Once you're at one of our parks, tap "Check In at Park" to start completing clues.</p>
      <button className='buttonStyle' onClick={()=>checkInAtPark()}>Check In at Park</button>
      {park && <h2>{park.name} Clue</h2>}
      {park && <Clue park={park} parkClues={parkClues}/>} 
      <div className='playdates'>
        <div className='playdatesTextBox'>
        <h2>Park Hop Play Dates</h2>
        <p>Join us on special days for playdates with games and fairy tale characters!</p>
        <Button>Plan for Playdates</Button>
        </div>
      </div>
    </div>
  );
};


export default Home;
