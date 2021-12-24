import {useContext, useState} from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const EditUser= () => {
  const {handleEdit, auth} = useContext(AuthContext);
  const [email, setEmail] = useState(auth.email)
  const [image, setImage] = useState(auth.image)
  const [name, setName] = useState(auth.name)
  const [kids, setKids] = useState(auth.kids)
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit({email, image, name, kids}, navigate);
  };

  return (
    <>
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
    </>
  );
};

export default EditUser;
