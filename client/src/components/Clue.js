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
  console.log(parkClues.parkClues)
  getClues();
}, [])

useEffect(()=>{
  setClue(randomClue())
  console.log(clue)
}, [clues])

const getClues = () => {
  console.log(parkClues.parkClues)
  setClues(parkClues.parkClues)
  
}

      

    
  //   return null;
  // }
  const handleChange = (props) => {
    setSubmitted_answer(props.e)
    console.log(submitted_answer)
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   const updatedClue = { submitted_answer: submitted_answer, id: e.clue.id, status: 'answered' } ;
  //   console.log(updatedClue)
  //     if (e.clue.id) {
  //       // update logic here
  //       try {
  //         let response = await axios.put(`/api/clues/${e.clue.id}`, clue);
  //         console.log(response.data);
  //         // add a congrats on submitting notice here
  //         // navigate("/home");
  //       } catch (err) {
  //         alert(`${err.response.data.errors}`);
  //       }
  //     } else {
  //       alert ('Submission failed')
  //       }
  //     }

  const handleSubmit = async (id) => {
    try {
      await axios.put(`/api/clues/${id}`)
      const filteredClues = clues.filter((clue)=> clue.id !== id )
      console.log(filteredClues)
      setClues(filteredClues)
    } catch(err){
      alert ('err in submit');
    }

    // id.preventDefault()

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