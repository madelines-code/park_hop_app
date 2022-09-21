import {useContext, useState} from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Card, Input } from "semantic-ui-react";


const Register = () => {

  const {handleRegister} = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
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
    <div  className='homepage'>
      <Card style = {{margin: '40px'}}>
        <Card.Content  style={{margin: 'auto', paddingLeft: "20px"}}>
              <Card.Header style = {{marginTop: '20px'}}>Register</Card.Header>

        <form onSubmit={handleSubmit}>
          {/* <p>Email</p> */}
            <Input 
            value={email} 
            style={{ width:"250px", margin: "10px 0px"}}
            placeholder={"Email"}
            onChange={(e)=>{setEmail(e.target.value);}}/>
            {/* <p>Password</p> */}
          {/* <input 
          value={email} 
          onChange={(e)=>{setEmail(e.target.value);}}/> */}
          {/* <p>Password</p> */}
          <Input 
            value={password} 
            style={{ width:"250px", margin: "10px 0px"}}
            placeholder={"Password"}
            type='password'
            onChange={(e)=>{setPassword(e.target.value);}}/>
          {/* <input 
          value={password} 
          onChange={(e)=>{setPassword(e.target.value);}}/> */}
          {/* <p>Password confirmation</p> */}
          <Input 
            value={passwordConfirmation} 
            style={{ width:"250px", margin: "10px 0px"}}
            placeholder={"Confirm Password"}
            type='password'
            onChange={(e)=>{setPasswordConfirmation(e.target.value);}}/>
          {/* <input 
          value={passwordConfirmation} 
          onChange={(e)=>{setPasswordConfirmation(e.target.value);}}/> */}
          <Button style = {{marginTop: '10px', marginBottom: '20px'}}>Register</Button>
          {/* <button >Register</button> */}
        </form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Register;
