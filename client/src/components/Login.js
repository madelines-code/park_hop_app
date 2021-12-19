import {useContext, useState} from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

  const {handleLogin} = useContext(AuthContext);
  const [email, setEmail] = useState('test1@test.com')
  const [password, setPassword] = useState('3453777')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({email, password}, navigate);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input 
        value={email} 
        onChange={(e)=>{setEmail(e.target.value);}}/>
        <p>Password</p>
        <input 
        value={password} 
        onChange={(e)=>{setPassword(e.target.value);}}/>
        <button >Login</button>
      </form>
    </>
  );
};

export default Login;
