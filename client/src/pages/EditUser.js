import {useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";


const EditUser= (props) => {
  const {handleEdit, auth} = useContext(AuthContext);
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [kids, setKids] = useState([])
  const navigate = useNavigate();
  const params = useParams();


  useEffect(() => {
    getData();
  }, [])

  // const getData = () => {
  //   setEmail(`${auth.email}`)
  //   setImage("2")
  //   setName("3")
  // }
  const getData = async () => {
    let res = await axios.get(`/api/users/${params.id}`)
    setName(res.data.name)
    setEmail(res.data.email)
    setImage(res.data.image)
    setKids(res.data.kids)
    setId(res.data.id)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({email, image, name, kids})
    return handleEdit({email, image, name, kids, id}, navigate);
  };



  return (
    <div>
      <h2>Edit My Profile</h2>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input 
        value={name} 
        onChange={(e)=>{setName(e.target.value);}}/>
        <p>Email</p>
        <input 
        value={email} 
        onChange={(e)=>{setEmail(e.target.value);}}/>
        <p>Image</p>
        <input 
        value={image} 
        onChange={(e)=>{setImage(e.target.value);}}/>
        <p>Number of Kids</p>
        <input 
        value={kids} 
        onChange={(e)=>{setKids(e.target.value);}}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditUser;
