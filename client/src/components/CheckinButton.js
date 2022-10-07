import React, { useEffect, useState } from "react"
import isPointWithinRadius from 'geolib/es/isPointWithinRadius';
import Clue from "./Clue";


const CheckinButton = (props) => {

  const [park, setPark] = useState(null);
  const [parkClues, setParkClues] = useState([]);
  const parks = props.parks;
  const lat = props.lat;
  const lng = props.lng;
  const clues = props.clues;

  useEffect(()=>{
    listParkClues(park)
    console.log(parkClues);
    console.log(parks)
  }, [park])

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
    console.log(p.latitude);
    console.log(p.longitude);
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
    return <p>couldn't find a park</p>
  }
  if(!clues) {
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
     </div>
  );

};


export default CheckinButton;