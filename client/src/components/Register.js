import {useContext, useState} from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

  const {handleRegister} = useContext(AuthContext);
  const [email, setEmail] = useState('test1@test.com')
  const [password, setPassword] = useState('3453777')
  const [passwordConfirmation, setPasswordConfirmation] = useState('3453777')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordConfirmation){
      alert('passwords dont match');
      //the return means quit this function
      return;
    }

    handleRegister({email, password}, navigate);
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input 
        value={email} 
        onChange={(e)=>{setEmail(e.target.value);}}/>
        <p>Password</p>
        <input 
        value={password} 
        onChange={(e)=>{setPassword(e.target.value);}}/>
        <p>Password confirmation</p>
        <input 
        value={passwordConfirmation} 
        onChange={(e)=>{setPasswordConfirmation(e.target.value);}}/>
        <button >Register</button>
      </form>
    </>
  );
};

export default Register;
