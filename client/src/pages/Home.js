import React, { useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";
import { Centered } from "../components/StyledComponents";
import Clue from "../components/Clue";


const Home = () => {
  const auth = useContext(AuthContext);
  const [clues, setClues] = useState([]);
  const [parks, setParks] = useState([]);
  const [submitted_answer, setSubmitted_answer] = useState("")
  const [clueId, setClueId] = useState("")
  const [clueAnswers, setClueAnswers] = useState([])
  // const [answer1, setAnswer1] = useState("");
  // const [answer2, setAnswer2] = useState("");
  const [park, setPark] = useState("");

  useEffect(()=>{
    getData()
  }, [])

  const getData = async ()=>{
    try{
      // NOTE: access-token is getting sent here (devise-axios)
      let resClues = await axios.get('/api/clues')
      setClues(resClues.data);
      let resParks = await axios.get('/api/parks')
      setParks(resParks.data);
    } catch(err){
      alert('err in getData()')
    }
  }

  const checkInAtPark = () => {
    // getData()
    if (parks.length) {
    let parkLocation = Math.floor(Math.random() * parks.length);
    setPark(parks[parkLocation]);
    // console.log(parks[parkLocation]);
    }
    return null;
  }

  // let park = checkInAtPark();
  // console.log(park);

  const renderClues = () => {
    if(!park) {
      return <p>couldn't find a park</p>
    }
    let filteredClues = clues.filter((c)=> {
      if(c.park_id === park.id) {
        return (
          <div >
            <p>{c.question}</p>
          </div>
          )
        }
      })
      return filteredClues.map(c => {
        
        return (
          <div className='formContainer' key={c.id} id={c.id}>
          <p>{c.question}</p>
          <p>{c.id}</p>
          <input key = {c.id} value={c.submitted_answer} onChange={(e)=>handleChange(e.target.value)} placeholder="Enter answer here"></input>
          </div>)
      })
    }

// maybe try a handle change function that sets values separately somehow

const handleChange = async (e) => {
  // const answer1 = {submitted_answer: answer}
  setSubmitted_answer(e.target.value)
  // setClueId(c.id)
  // setClueId(item)
  console.log({submitted_answer, id: clueId, status: 'answered' })
}

    const handleSubmit = async (e) => {
      
      e.preventDefault();
      handleChange();
      // console.log({ answer: answer1, status: 'answered' });
      // const clue = { answer: answer, status: 'answered' } };
  
      // if (params.id) {
      //   // update logic here
      //   try {
      //     let response = await axios.put(`/api/clues/${params.id}`, clue);
      //     console.log(response.data);
      //     // add a congrats on submitting notice here
      //     navigate("/home");
      //   } catch (err) {
      //     alert(`${err.response.data.errors}`);
      //   }
      // } else {
      //   alert 'Submission failed'
      //   }
      // }
    }

  return (
    <div className='form'>
      {/* //NEED TO WATCH VIDEO TO ATTACH DIFFERENT VALUES TO FIELDS CORRESPONDING TO USER 
      MUST DO THIS BEFORE CONTINUING WITH SUBMIT ISSUE */}
      <button className='buttonStyle' onClick={()=>checkInAtPark()}>Check In at Park</button>
      
      <form className='form' onSubmit={handleSubmit}>
      {/* { renderClues()} */}
      {park && <h2>{park.name} Clues</h2>}
      {/* {park && renderClues()} */}
      {park && <button className='buttonStyle'>Submit</button>}
      </form>
      <hr/>
      {park && <Clue park={park}/>}
      <hr/>
      {JSON.stringify(auth)}
      {/* <hr/>
      {JSON.stringify(clues)}
      <hr/>
      {JSON.stringify(parks)} */}

      <hr/>
    </div>
  );
};


export default Home;
