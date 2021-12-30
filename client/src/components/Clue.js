import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate} from "react-router";

const Clue = (props) => {
  const [clues, setClues] = useState([]);
  const park = props
  const parkClues = props
  const [submitted_answer, setSubmitted_answer] = useState("")
  const [clue, setClue]=useState({})
  const [clueId, setClueId] = useState("")
  const navigate = useNavigate();

// useEffect(()=>{
//   setClues(parkClues.parkClues)
// }, [])

// useEffect(()=>{
//   setClue(randomClue())
//   console.log(clue)
// }, [clues])

  // setClues(array)
  // if (clues.length) {
  //   const index = Math.floor(Math.random() * clues.length);
  //   setClue(clues[index]);
  // }

      

    
  //   return null;
  // }
  // const handleChange = (props) => {
  //   setSubmitted_answer(props.e.target.value)
  //   setClueId(props.c.id)
  //   // setClueId(item)
  //   console.log({submitted_answer, id: clueId, status: 'answered' })
  // }

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

  const randomClue = () => {
    console.log(parkClues)
    if (parkClues.parkClues.length) {
      const index = Math.floor(Math.random() * parkClues.parkClues.length);
      return parkClues.parkClues[index];
    }}

  const renderClue = () => {
    let clue = (randomClue())
    console.log(clue)
    if (!clue) {
      return <p>Park complete!</p>
    }
    return (
      <form >
        <h3>{clue.question}</h3>
        <input key = {clue.id} value={submitted_answer} onChange = {(e) => {
          setSubmitted_answer(e.target.value)
        }} placeholder="Enter answer here"></input>
        <br/>
        <button>submit</button>
      </form>
    )
  }

  return (
    <div>
     {renderClue()}
    </div>
  )
}

  export default Clue;