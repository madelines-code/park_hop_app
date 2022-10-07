import React, { useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";
import ParkHopLogo from "../2020_Park_Hop_Logo_Vector.svg"
import { Button, Image } from "semantic-ui-react";
import CheckinButton from "../components/CheckinButton";


const Home = () => {
  const auth = useContext(AuthContext);
  const [clues, setClues] = useState([]);
  const [parks, setParks] = useState([]);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(()=>{
    getData()
  }, [])

  
  const getData = async ()=>{
    console.log(auth.id)
    try{
      // NOTE: access-token is getting sent here (devise-axios)
      let resClues = await axios.get(`/api/userclues/${auth.id}`)
      setClues(resClues.data);
      console.log("clues",resClues)
      let resParks = await axios.get('/api/parks')
      setParks(resParks.data);
      console.log("parks",resParks);
      getLocation()
    } catch(err){
      alert('err in getData()')
    }
  }


  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log("lat", position.coords.latitude)
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return (
    <div className='form'>
      <h2 style={{margin: '20px'}}>Welcome to Park Hop!</h2>
      <Image src={ParkHopLogo} size='medium' circular />

      <h3>Get started exploring parks all over Upstate SC.</h3>
      <p>Click the Parks tab to view a map of parks and get directions. Once you're at one of our parks, tap "Check In at Park" to start completing clues.</p>
      {lat && <CheckinButton parks = {parks} lat = {lat} lng = {lng} clues = {clues}/>}
      
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
