import React, { useContext, useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import _ from 'lodash'
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";


const CluesCompleted = () => {
  const [clues, setClues] = useState([]);
  const auth = useContext(AuthContext);

    useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let resClues = await axios.get(`/api/userclues/${auth.id}`);
    setClues(resClues.data)
  };

  // const statuscolors = [ 
  //   completed {color: green},
  //   incomplete {
  //     color: gray
  //   }
  //   'red',
  //   'green',
  //   'yellow',
  //   'olive',
  //   'green',
  //   'teal',
  //   'blue',
  //   'violet',
  //   'purple',
  //   'pink',
  //   'brown',
  //   'grey',
  //   // 'black',
  // ]


  const renderClues = () => {
    return clues.map((clue) => {
      return(
      <div key={clue.clue_id} className={`${clue.completed ? "completed" : "incomplete"}`}>
      <p>{clue.clue_id}</p>
      </div>
    )}
    )
  }
  
  return (
    <>
      <h1>Progress</h1>
      {/* <div className='progressBox'> */}
      <div className='progressBox'>
    {renderClues()}
      </div>
    </>
  );
};

export default CluesCompleted;
