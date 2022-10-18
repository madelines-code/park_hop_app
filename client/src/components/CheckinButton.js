import React, { useEffect, useState } from "react"
import isPointWithinRadius from 'geolib/es/isPointWithinRadius';
import Clue from "./Clue";


const CheckinButton = (props) => {
  const [park, setPark] = useState("");
  const [parkClues, setParkClues] = useState([]);
  const clues = props.clues;
  const parks = props.parks;
  const lat = props.lat;
  const lng = props.lng;

  useEffect(()=>{
    console.log(parks)
    console.log(clues)
  }, [])

  useEffect(()=>{
    if (park !== null) {
      console.log(park)
      listParkClues(park)
    }
    console.log(clues)
  }, [park])

  useEffect(()=>{
    renderClue()
    console.log(clues)
  }, [parkClues])

  const checkInAtPark = () => {
    console.log("push");
  if (parks.length) {
        within9Km()
      // let parkLocation = Math.floor(Math.random() * parks.length);
      // setPark(parks[parkLocation]);
  } else {
    alert("Error loading park data.")
  }
}

const within9Km = () => {
  parks.map((p) => {
     if(isPointWithinRadius (
      { latitude: p.latitude, longitude: p.longitude},
      { latitude: lat, longitude: lng },
      9000
    ) === true ) {
      setPark(p)
      console.log('park', p)
    }
  })
}

const listParkClues = () => {
  console.log(park);
  if(!park) {
    console.log("couldn't find a park")
    return <p>couldn't find a park</p>
  }
  if(clues < 1) {
    console.log("no clues yet, please refresh")
    return <p>no clues yet, please refresh</p>
  }
  console.log(clues)
  setParkClues(clues.filter((c)=> c.park_id === park.id && c.completed === false))
  return parkClues;
  }


  const renderClue = () => {
    return (
      <div>
      <Clue park={park} parkClues={parkClues}/> 
      </div>
    )
  }

  return (
    <div className='form'>
      <button className='buttonStyle' onClick={()=>checkInAtPark()}>Check In at Park</button>
      {park && <h2>You are at {park.name}</h2>}
      {parkClues.length > 0 && renderClue()}
      {JSON.stringify({parkClues})}

     </div>
  );

};


export default CheckinButton;