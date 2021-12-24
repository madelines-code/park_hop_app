import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import _ from 'lodash'
import axios from "axios";

const CluesCompleted = () => {
  const [clues, setClues] = useState([]);

    useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get("/api/clues");
    console.log(res.data)
    setClues(res.data)
  };

  const statuscolors = [
    'red',
    'green',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
  ]

  const renderClues = () => {

    return (
    <Grid columns={5} padded>
    {/* {colors.map((color) => (
      <Grid.Column color={color} key={color}>
        {color}
      </Grid.Column>
    ))} */}
        {clues.map((clue) => (
      <Grid.Column color={clue.status} key={clue.id}>
        <p>{clue.status}</p>
        <p>{clue.id}</p>
        <p>{clue.park_id}</p>
      </Grid.Column>
    ))}
  </Grid>
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
