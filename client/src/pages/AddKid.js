import React, {useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import ReactDOM from 'react-dom';


// import axios from 'axios';
import { Button } from 'semantic-ui-react';


const AddKid = () => {
  const [userId, setUserId] = useState("")
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [birthdate, setBirthdate] = useState("")
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let kid = { name, user_id: userId, birthdate }
    console.log(kid)
    try {
      let res = await axios.post(`/api/kids`, kid);
      console.log(res)
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };


//   const handleUpdate = (files)=>{
//     // console.log(x)
//     console.log(files)
//     console.log(files[0])
//     console.log(files[0].file)
//     setFiles(files)
// }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('handle submit clicked')
  //   console.log(files)
  //   let data = new FormData();
  //     data.append('fileYo', files[0].file) 
  //     data.append('name', name) 
  //     data.append('email', email) 
  //     console.log(data)
  //   try{
  //     let res = await axios.put(`/api/users/profile_image`, data)
  //     console.log('res: ', res)
  //     auth.setUser(res.data);
  //     navigate('/protected')
  //   } catch(err){
  //       console.log(err)
  //   }
  //   // console.log({email, name, kids})
  //   // return handleEdit({email, name, kids, id},navigate);
  // };



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
        <button type='Submit'>Add Kid</button>
      </form>
    </div>
  );
};

export default AddKid;
