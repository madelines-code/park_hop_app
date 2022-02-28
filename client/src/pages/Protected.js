import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CluesCompleted from "../components/CluesCompleted";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import EditUser from "./EditUser";
import { Button, Card, Image } from 'semantic-ui-react'

const Protected = () => {
  const auth = useContext(AuthContext);
  const [userclues, setUserclues] = useState([]);
  const [kids, setKids] = useState([]);
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
      console.log(res_kids.data)
      setKids(res_kids.data)
    } catch(err){
      console.log(err)
      console.log(err.response)
    }
    else {
      window.location.reload(false)
    }
  }

  const renderKids = () => {
    console.log(kids)
    return kids.map((k)=> {
      return (
        <Card key={k.id}>
      <Card.Content>
        <Image
          floated='right'
          size='small'
          src={k.avatar}
        />
        <Card.Header>{k.name}</Card.Header>
        <Card.Meta>{k.birthdate}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <div className='ui two buttons'> */}
          <Button size='small' basic color='green'>
            Edit
          </Button>
          <Button size='small' basic color='red'>
            Delete
          </Button>
        {/* </div> */}
      </Card.Content>
    </Card>
      )
    })
  }


  return (
      
        
    <div className='homepage'>
      {auth && <>
      <h2>My Profile</h2>
      <CluesCompleted/>
      <h3>Hey, {auth.name}!</h3>
      <img src={auth.image} style={{width: '200px'}}/>
      <p>email: {auth.email}</p>
        <p>My ID {auth.id}</p>
        <h3>Kids</h3>
        <Card.Group> {kids !== {} && renderKids()}</Card.Group>
      <button className='buttonStyle' onClick={()=>navigate(`/api/users/${auth.id}/edit`)} state = {{auth}} >Edit Profile</button>
      <button className='buttonStyle' onClick={()=>navigate(`/api/users/${auth.id}/add_kid`)} state = {{auth}} >Add Kid</button>
      
</> }
    </div>
    
     
      
  );
};

export default Protected;
