import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate} from "react-router";
import { Button, Form } from "semantic-ui-react";

const Clue = (props) => {
  const [clues, setClues] = useState([]);
  const park = props
  const parkClues = props
  const [myanswer, setMyanswer] = useState("")
  const [clue, setClue]=useState({})
  const [clueId, setClueId] = useState("")
  const navigate = useNavigate();

useEffect(()=>{
  
  getClues();
  console.log(parkClues)
}, [parkClues])

useEffect(()=>{
  setClue(randomClue())
  console.log(clue)
}, [clues])

const getClues = () => {
  console.log(parkClues.parkClues)
  setClues(parkClues.parkClues)
}


  const handleSubmit = async (id) => {
    try {
      console.log('id', id)
      let clueData = {myanswer, completed:true, clue_id: id}
      console.log('cluedata', clueData)
      await axios.put(`/api/userclues/${id}`, clueData)
      console.log(clues)
      const filteredClues = clues.filter((clue)=> clue.id !== id  )
      console.log('remaining clues', filteredClues)
      setClues(filteredClues)
      setMyanswer("")
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
    let clue = randomClue();
    console.log(clue)
    if (!clue) {
      return <p>Park complete!</p>
    }
    
  }

  return (
    <div>
     {clue &&       
     <Form >
        <Form.Field>
        <label>{clue.question}</label>
        <input key = {clue.clue_id} value={myanswer} 
        onChange = {(e) => {setMyanswer(e.target.value)}} 
        // onChange={(e) => { setAbout(e.target.value); }}
        placeholder="Enter answer here"/>
        </Form.Field>
        
        
        <br/>
        {/* <button onClick = {()=>handleSubmit(clue.clue_id)}>submit</button> */}
        <Button onClick = {()=>handleSubmit(clue.clue_id)}>Button</Button>
      </Form>}
      {!clue && <p>"Park Complete!"</p>}
    </div>
  )
}

  export default Clue;