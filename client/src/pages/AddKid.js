import React, {useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import ReactDOM from 'react-dom';
import Bunny from "../Bunny.svg"
import Cat from "../Cat.svg"
import Dog from "../Dog.svg"
import Fox from "../Fox.svg"
import Gorilla from "../Gorilla.svg"
import Koala from "../Koala.svg"
import Lion from "../Lion.svg"
import Tiger from "../Tiger.svg"

// import axios from 'axios';
import { Button, Image } from 'semantic-ui-react';


const AddKid = () => {
  const [userId, setUserId] = useState("")
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [highlightedd, setHighlightedd] = useState("")
  const navigate = useNavigate();
  const params = useParams();
  const auth = useContext(AuthContext);



  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    let res = await axios.get(`/api/users/${params.id}`)
    setUserId(res.data.id)
  }

  const selectAvatar = (avatar) => {
    setAvatar(avatar)
    console.log(avatar)
    setHighlightedd("highlighted")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let kid = { name, user_id: userId, birthdate, avatar }
    console.log(kid)
    try {
      let res = await axios.post(`/api/kids`, kid);
      console.log(res)
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };


  return (
    <div>
      <h2>Add A Kid to Your Profile</h2>
      <p>{userId}</p>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input 
        value={name} 
        onChange={(e)=>{setName(e.target.value);}}/>
        <p>Birthdate</p>
        <input 
        type="date"
        value={birthdate} 
        onChange={(e)=>{setBirthdate(e.target.value);}}/>
        <div className='avatarList'>
         
        <Image className={highlightedd} src={Bunny} size='tiny' circular onClick={()=>selectAvatar(Bunny)}/>
        <Image className={highlightedd} src={Cat} size='tiny' value={Cat} circular onClick={()=>selectAvatar(Cat)}/>
        <Image className={highlightedd} src={Dog} size='tiny' circular onClick={()=>selectAvatar(Dog)}/>
        <Image className={highlightedd} src={Fox} size='tiny' circular onClick={()=>selectAvatar(Fox)}/>
        <Image className={highlightedd} src={Gorilla} size='tiny' circular onClick={()=>selectAvatar(Gorilla)}/>
        <Image className={highlightedd} src={Koala} size='tiny' circular onClick={()=>selectAvatar(Koala)}/>
        <Image className={highlightedd} src={Lion} size='tiny' circular onClick={()=>selectAvatar(Lion)}/>
        <Image className={highlightedd} src={Tiger} size='tiny' circular onClick={()=>selectAvatar(Tiger)}/>
        </div>
        <button type='Submit'>Add Kid</button>
      </form>
    </div>
  );
};

export default AddKid;
