import React, { useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";
<<<<<<< HEAD
import ParkHopLogo from "../2020_Park_Hop_Logo_Vector.svg"
import { Button, Image } from "semantic-ui-react";
import CheckInAtPark from "../components/CheckInAtPark";
=======
// import Clue from "../components/Clue";
import ParkHopLogo from "../2020_Park_Hop_Logo_Vector.svg"
import { Button, Image } from "semantic-ui-react";
import CheckinButton from "../components/CheckinButton";
// import isPointWithinRadius from 'geolib/es/isPointWithinRadius';

>>>>>>> 7d297494a4d0a8600edc5f23ebb25279dab4018c

const Home = () => {
  const auth = useContext(AuthContext);
  const [clues, setClues] = useState([]);
  const [parks, setParks] = useState([]);
<<<<<<< HEAD
=======
  // const [parkClues, setParkClues] = useState([])
  // const [park, setPark] = useState("");
>>>>>>> 7d297494a4d0a8600edc5f23ebb25279dab4018c
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(()=>{
    getData()
  }, [])

<<<<<<< HEAD
=======

  // useEffect(()=>{
  //   listParkClues(park)
  //   console.log(parkClues);
  // }, [park])

>>>>>>> 7d297494a4d0a8600edc5f23ebb25279dab4018c
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

<<<<<<< HEAD
=======

  // const within9Km = () => {
  //   parks.map((p) => {
  //     console.log(p.latitude);
  //     console.log(p.longitude);
  //      if(isPointWithinRadius (
  //       { latitude: p.latitude, longitude: p.longitude},
  //       { latitude: lat, longitude: lng },
  //       9000
  //     ) === true ) {
  //       setPark(p)
  //       console.log('park', p)
  //     }
  //   })

  // }

>>>>>>> 7d297494a4d0a8600edc5f23ebb25279dab4018c
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

  
<<<<<<< HEAD
=======
  // const checkInAtPark = () => {
      
  //   if (parks.length) {
  //         within9Km()
  //       // let parkLocation = Math.floor(Math.random() * parks.length);
  //       // setPark(parks[parkLocation]);
  //   } else {
  //     alert("Error loading park data.")
  //   }
  // }


  // const listParkClues = () => {
  //   console.log(park);
  //   if(!park) {
  //     return <p>couldn't find a park</p>
  //   }
  //   console.log(clues)
  //   setParkClues(clues.filter((c)=> c.park_id === park.id && c.completed === false))
  //   }

>>>>>>> 7d297494a4d0a8600edc5f23ebb25279dab4018c

  return (
    <div className='form'>
      <h2 style={{margin: '20px'}}>Welcome to Park Hop!</h2>
      <Image src={ParkHopLogo} size='medium' circular />

      <h3>Get started exploring parks all over Upstate SC.</h3>
      <p>Click the Parks tab to view a map of parks and get directions. Once you're at one of our parks, tap "Check In at Park" to start completing clues.</p>
<<<<<<< HEAD
      {lat && <CheckInAtPark parks = {parks} lat = {lat} lng = {lng} clues = {clues}/>}
=======

      {/* {lat && <button className='buttonStyle' onClick={()=>checkInAtPark()}>Check In at Park</button>}
      {park && <h2>You are at {park.name}</h2>}
      {park && <Clue park={park} parkClues={parkClues}/>}  */}
      {lat && <CheckinButton parks = {parks} lat = {lat} lng = {lng} clues = {clues}/>}

>>>>>>> 7d297494a4d0a8600edc5f23ebb25279dab4018c
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
