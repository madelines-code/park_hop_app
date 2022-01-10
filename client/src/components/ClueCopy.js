import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate} from "react-router";
import { Form } from "semantic-ui-react";

const Clue = (props) => {
  const [clues, setClues] = useState([]);
  const park = props
  const parkClues = props
  const [submitted_answer, setSubmitted_answer] = useState("")
  const [clue, setClue]=useState({})
  const [clueId, setClueId] = useState("")
  const navigate = useNavigate();

useEffect(()=>{
  
  getClues();
  console.log(parkClues)
}, [parkClues])

useEffect(()=>{
  setClue(randomClue())
  // console.log(clue)
}, [clues])

const getClues = () => {
  console.log(parkClues.parkClues)
  setClues(parkClues.parkClues)
  
}


  const handleSubmit = async (id) => {
    try {
      await axios.put(`/api/clues/${id}`)
      const filteredClues = clues.filter((clue)=> clue.id !== id )
      console.log(filteredClues)
      setClues(filteredClues)
      setSubmitted_answer("")
    } catch(err){
      alert ('err in submit');
    }


  }

  const randomClue = () => {
    console.log(parkClues)
    if (clues.length) {
      const index = Math.floor(Math.random() * clues.length);
      return clues[index];
    }}


  const renderClue = () => {
    // let clue = randomClue();
    console.log(clue)
    if (!clue) {
      return <p>Park complete!</p>
    }
    return (
      <Form >
        <Form.Field>
        <label>{clue.question}</label>
        <input key = {clue.id} value={submitted_answer} onChange = {(e) => {
          setSubmitted_answer(e.target.value)
        }} placeholder="Enter answer here"/>
        </Form.Field>
        
        
        <br/>
        <button onClick = {()=>handleSubmit(clue.id)}>submit</button>
      </Form>
    )
  }

  return (
    <div>
     {renderClue()}
    </div>
  )
}

  export default Clue;