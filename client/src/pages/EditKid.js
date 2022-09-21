import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router';
import { Image } from "semantic-ui-react";
import Bunny from "../Bunny.svg"
import Cat from "../Cat.svg"
import Dog from "../Dog.svg"
import Fox from "../Fox.svg"
import Gorilla from "../Gorilla.svg"
import Koala from "../Koala.svg"
import Lion from "../Lion.svg"
import Tiger from "../Tiger.svg"


const EditKid = () => {
const [name, setName] = useState("")   
const [birthdate, setBirthdate] = useState("")   
const [avatar, setAvatar] = useState("")
const params = useParams();
const navigate = useNavigate();

useEffect(() => {
  getData();
}, [])

const getData = async () => {
  let res = await axios.get(`/api/kids/${params.id}`)
  console.log(res.data)
  setName(res.data.name)
  setBirthdate(res.data.birthdate)
  setAvatar(res.data.avatar)
}

const selectAvatar = (avatar) => {
  setAvatar(avatar)
  console.log(avatar)
}

  const handleSubmit = async (e) => {
    // this prevents a reload
    e.preventDefault();
    console.log({ name: name, birthdate: birthdate, avatar: avatar });
    const kid = { name: name, birthdate: birthdate, avatar: avatar };
        try {
        let response = await axios.put(`/api/kids/${params.id}`, kid);
        console.log(response.data);
        navigate('/protected')
      } catch (err) {
        alert(`${err.response.data.errors}`);
        console.log(err);
        console.log(err.response);
        console.log(err.response.data.errors);
      }
    
    }
  return (
    <div>
    <h1>Edit Kid</h1>
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
         
        <Image className={(avatar === Bunny) ? 'highlighted' : '' } src={Bunny} size='tiny' circular onClick={()=>selectAvatar(Bunny)}/>
        <Image className={(avatar === Cat) ? 'highlighted' : '' } src={Cat} size='tiny' value={Cat} circular onClick={()=>selectAvatar(Cat)}/>
        <Image className={(avatar === Dog) ? 'highlighted' : '' } src={Dog} size='tiny' circular onClick={()=>selectAvatar(Dog)}/>
        <Image className={(avatar === Fox) ? 'highlighted' : '' } src={Fox} size='tiny' circular onClick={()=>selectAvatar(Fox)}/>
        <Image className={(avatar === Gorilla) ? 'highlighted' : '' } src={Gorilla} size='tiny' circular onClick={()=>selectAvatar(Gorilla)}/>
        <Image className={(avatar === Koala) ? 'highlighted' : '' } src={Koala} size='tiny' circular onClick={()=>selectAvatar(Koala)}/>
        <Image className={(avatar === Lion) ? 'highlighted' : '' } src={Lion} size='tiny' circular onClick={()=>selectAvatar(Lion)}/>
        <Image className={(avatar === Tiger) ? 'highlighted' : '' } src={Tiger} size='tiny' circular onClick={()=>selectAvatar(Tiger)}/>
        </div>
        <button type='Submit'>Submit</button>
    </form>
    </div>
  )
}

export default EditKid;