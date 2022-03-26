import React, { useContext, useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import _ from 'lodash'
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";


const CluesCompleted = () => {
  const [clues, setClues] = useState([]);
  const [clueQuestions, setClueQuestions] = useState([]);
  const auth = useContext(AuthContext);

    useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let resClues = await axios.get(`/api/userclues/${auth.id}`);
    console.log(resClues)
    setClues(resClues.data)
    let resClueQuestions = await axios.get('/api/clues');
    console.log(resClueQuestions)
    setClueQuestions(resClueQuestions.data)
  };


  const renderClues = () => {
    return clues.map((clue) => {
      return(
      <div key={clue.clue_id} className={`${clue.completed ? "completed" : "incomplete"}`}>
      <p>{clue.clue_id}</p>
      </div>
    )}
    )
  }

  const renderClueQuestions = () => {
    return clueQuestions.map((clue) => {
      return(
      <div key={clue.id}>
      <p>{clue.question}</p>
      </div>
    )}
    )
  }

  const renderMyAnswers = () => {
    return clues.map((clue) => {
      return (<div>
        <p>{clue.myanswer}</p>
      </div>)
    })
  }
  
  return (
    <>
      <h1>Progress</h1>
      {/* <div className='progressBox'> */}
      <div className='progressBox'>
    {renderClues()}
      </div>
      <div>
        {renderClueQuestions()}
        {renderMyAnswers()}
      </div>
    </>
  );
};

export default CluesCompleted;
