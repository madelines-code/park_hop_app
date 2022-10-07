import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CluesCompleted from "../components/CluesCompleted";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import EditUser from "./EditUser";
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import Modal2022 from "../components/Modal2022";

const Protected = () => {
  const auth = useContext(AuthContext);
  const [userclues, setUserclues] = useState([1]);
  const [kids, setKids] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getData()
  }, [auth])

  const getData = async ()=>{
    if (auth.id)
    try{
      // NOTE: access-token is getting sent here (devise-axios)
      let res = await axios.get(`/api/userclues/${auth.id}`)
      setUserclues(res.data);
      let res_kids = await axios.get(`/api/users/${auth.id}/user_kids`);
      setKids(res_kids.data)
    } catch(err){
      console.log(err)
      console.log(err.response)
    }
    else {
      window.location.reload(false)
    }
  }

  const deleteKid = async (id) => {
    await axios.delete(`/api/kids/${id}`)
    const filteredKids = kids.filter((kid) => kid.id !== id)
    setKids(filteredKids)
}

const editKidPage = (id) => {
  navigate(`/api/kids/${id}`)
}

  const renderKids = () => {
    return kids.map((k)=> {
      return (
  
     <Card key={k.id} >
      <Card.Content>
        <Image
          floated='left'
          size='tiny'
          src={k.avatar}
        />
        <Card.Header style={{marginTop: '15px'}}>{k.name}</Card.Header>
        <Card.Meta>{k.birthdate}</Card.Meta>
        <Card.Meta stye={{margin: '10px'}}>
          <div className='ui two buttons'>
          <Button icon basic color='green' onClick={()=>editKidPage(k.id)} id = {k.id} >
          <Icon name='edit outline' />
          </Button>
          <Button icon>
            <Icon name='trash alternate outline' id={k.id} onClick={()=>deleteKid(k.id)}/>
          </Button>
          </div>
          </Card.Meta>
      </Card.Content>
    </Card>

      )
    })
  }


  return (
      
        
    <div className='homepage'>
      {auth && <>
      
      { userclues[0] === undefined &&
        <Modal2022 user={auth.id}/>
      }
          
      <h2>My Profile</h2>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
        <div style={{alignSelf: "flex-start", zIndex: "100" }}>
      <img
        src={auth.image}
        alt="profile image"
        className="circletag"
        style={{border: '1px solid gray'}}/>
        </div>
      <div style={{marginLeft: '-70px', backgroundColor: 'white', padding: '30px 30px 30px 100px', zIndex: '2', borderRadius: '5px', color: 'black'}}>
        <h3>Hey, {auth.name}!</h3>
        <p>email: {auth.email}</p>
        
        {/* <p>My ID {auth.id}</p> */}
        <button className='profileButtonStyle' onClick={()=>navigate(`/api/users/${auth.id}/edit`)} state = {{auth}} >Edit Profile</button>
        </div>
        </div>
      <CluesCompleted/>
        <h3>Kids</h3>
        <Card.Group style= {{display: 'flex', flexWrap: 'wrap', alignContent: 'center', alignItems: 'centered', justifyContent: 'center'}}> {kids !== {} && renderKids()}</Card.Group> 
      <div>
      <button className='buttonStyle' onClick={()=>navigate(`/api/users/${auth.id}/add_kid`)} state = {{auth}} >Add Kid</button>    
      </div>
</> }
    </div>      
  );
};

export default Protected;
