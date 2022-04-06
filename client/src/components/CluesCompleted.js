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
    console.log(resClues.data)
    setClues(resClues.data)
    let resClueQuestions = await axios.get('/api/clues');
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

  const normalizeQuestions = () => {
    let normalizedQuestions = clueQuestions.map((clue) => {
      let clueid = clue.id 
      console.log("clueId", clueid)
      console.log("clues",clues)
      let clueAnswerObj = clues.filter((c)=> c.ogclueid === clueid)
      console.log("clueanswerObj", clueAnswerObj)
      if (clueAnswerObj[0].myanswer === null) {
        let normalizedQuestion = { key: clue.id, question: clue.question, myAnswer:"unanswered" }
        console.log(normalizedQuestion)
        return (
          <div key = {normalizedQuestion.key}>
            <p>Q: {normalizedQuestion.question}</p>
            <p>A: {normalizedQuestion.myAnswer}</p>
          </div>
        )
      } else {
        let normalizedQuestion = { key: clue.id, question: clue.question, myAnswer:clueAnswerObj[0].myanswer }
        return (
          <div key = {normalizedQuestion.key}>
            <p>Q: {normalizedQuestion.question}</p>
            <p>A: {normalizedQuestion.myAnswer}</p>
          </div>
        )
      }
  }
    )
  }

  const renderMyAnswers = () => {
    return (clues.map((c)=>{
      return (
        <div key={c.clue_id}>
          <p>Q: {c.question}</p>
          <p>A: {c.myanswer}</p>
        </div>
      )
    }))
  }
  
  return (
    <>
      <h1>Progress</h1>
      <div className='progressBox'>
    {renderClues()}
      </div>
      <div>
        {renderMyAnswers()}
      </div>
    </>
  );
};

export default CluesCompleted;
