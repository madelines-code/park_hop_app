import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CluesCompleted from "../components/CluesCompleted";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import EditUser from "./EditUser";

const Protected = () => {
  const auth = useContext(AuthContext);
  const [userclues, setUserclues] = useState([]);

  useEffect(()=>{
    getData()
  }, [])

  const getData = async ()=>{
    try{
      // NOTE: access-token is getting sent here (devise-axios)
      let res = await axios.get('/api/userclues')
      setUserclues(res.data);
    } catch(err){
      alert('err in getData()')
    }
  }

// can I use useEffect here to reload page when data changes? 

  return (
    <div className='homepage'>
      <h2>My Profile</h2>
      <h3>Hey, {auth.name}!</h3>
      <img src={auth.image} />
      <p>email: {auth.email}</p>
        <p>My ID {auth.id}</p>
      <Link to={`/api/users/${auth.id}/edit`} state = {{auth}} >Edit Profile </Link>
      {/* <EditUser/> */}
      
      <div className='homepage'>
      <CluesCompleted/>
      </div>
    </div>
  );
};

export default Protected;
