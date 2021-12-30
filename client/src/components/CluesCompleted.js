import React, { useContext, useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import _ from 'lodash'
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";


const CluesCompleted = () => {
  const [clues, setClues] = useState([]);
  const [completedClues, setCompletedClues] = useState([]);
  const auth = useContext(AuthContext);

    useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let resClues = await axios.get("/api/clues/all");
    setClues(resClues.data)
    let resCompleted = await axios.get("/api/clues");
    console.log(resCompleted.data)
    setCompletedClues(resCompleted.data)
    
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

    return (
    <Container>
    {/* {colors.map((color) => (
      <Grid.Column color={color} key={color}>
        {color}
      </Grid.Column>
    ))} */}
        {clues.map((clue) => (
      <Grid.Column  key={clue.id}>
        <p>{clue.id}</p>
      </Grid.Column>
    ))}
  </Container>
    )
  }
  
  return (
    <>
      <h1>Progress</h1>
      {renderClues()}

    </>
  );
};

export default CluesCompleted;
