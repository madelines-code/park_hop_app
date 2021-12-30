import React, { useEffect, useState } from "react"
import axios from "axios";

const Clue = (park) => {
  const [clues, setClues] = useState([]);
  const [submitted_answer, setSubmitted_answer] = useState("")
  const [clueId, setClueId] = useState("")

useEffect(()=>{
  getClues()
  cluesArray()
}, [])

const getClues = async ()=>{
  try{
    // NOTE: access-token is getting sent here (devise-axios)
    let resClues = await axios.get('/api/clues')
    setClues(resClues.data);
  } catch(err){
    alert('err in getClues()')
  }
  
}

const cluesArray = ()=> {

  if(!park) {
    return <p>couldn't find a park</p>
  }
  let array =  clues.filter((c)=> {
    if(c.park_id === park.id) {
      return (
        <div >
          <p>{c.question}</p>
        </div>
        )
      }
    })
    setClues(array);
  }

  const randomClue = () => {
    if (clues.length) {
      const index = Math.floor(Math.random() * clues.length);
      return clues[index];
    }
    return null;
  }

  // const handleChange = (props) => {
  //   setSubmitted_answer(props.e.target.value)
  //   setClueId(props.c.id)
  //   // setClueId(item)
  //   console.log({submitted_answer, id: clueId, status: 'answered' })
  // }

  const renderClue = () => {
    let clue = randomClue();
    if (!clue) {
      return <p>Park complete!</p>
    }
    return (
      <form>
        <h2>{clue.question}</h2>
        <input key = {clue.id} value={submitted_answer} onChange={(e)=>(e.target.value)} placeholder="Enter answer here"></input>
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