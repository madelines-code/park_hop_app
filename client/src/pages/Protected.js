import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import CluesCompleted from "../components/CluesCompleted";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import EditUser from "./EditUser";

const Protected = () => {
  const auth = useContext(AuthContext);
  const [userclues, setUserclues] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getData()
  }, [auth])

  const getData = async ()=>{
    console.log(auth.id)
    console.log(auth.name)
    console.log(auth.image)
    if (auth.id)
    try{
      // NOTE: access-token is getting sent here (devise-axios)
      let res = await axios.get(`/api/userclues/${auth.id}`)
      setUserclues(res.data);
      let res_kids = await axios.get(`/api/users/${auth.id}/user_kids`)
      console.log(res_kids)
    } catch(err){
      console.log(err)
      console.log(err.response)
    }
    else {
      window.location.reload(false)
    }
  }

// can I use useEffect here to reload page when data changes? 

  return (
      
        
    <div className='homepage'>
      {auth && <>
      <h2>My Profile</h2>
      <h3>Hey, {auth.name}!</h3>
      <img src={auth.image} />
      <p>email: {auth.email}</p>
        <p>My ID {auth.id}</p>
        <h3>Kids</h3>

      <button className='buttonStyle' onClick={()=>navigate(`/api/users/${auth.id}/edit`)} state = {{auth}} >Edit Profile</button>
      <button className='buttonStyle' onClick={()=>navigate(`/api/users/${auth.id}/add_kid`)} state = {{auth}} >Add Kid</button>

      <div className='homepage'>
      <CluesCompleted/>
      </div>
</> }
    </div>
    
     
      
  );
};

export default Protected;
