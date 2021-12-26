import React, { useState } from "react";
import { Link } from "react-router-dom";

const Park = (props) => {
  
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Coordinates: {props.geolocation}</p>
      <p>id: {props.id}</p>
    </div>
  );
};

export default Park;