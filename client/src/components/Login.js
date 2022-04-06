import {useContext, useState} from "react";
import { useNavigate } from "react-router";
import { Button, Card, Input } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

  const {handleLogin} = useContext(AuthContext);
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('moneybrain')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({email, password}, navigate);
  };

  return (
    <div className='homepage'>
          <Card style = {{margin: '40px'}}>
          <Card.Content  style={{margin: 'auto'}}>
            <Card.Header style = {{marginTop: '20px'}}>Login</Card.Header>
            <form onSubmit={handleSubmit}>
            <p>Email</p>
            <Input 
            value={email} 
            style={{ width:"250px"}}
            onChange={(e)=>{setEmail(e.target.value);}}/>
            <p>Password</p>
            <Input 
            value={password} 
            style={{ width:"250px"}}
            type='password'
            onChange={(e)=>{setPassword(e.target.value);}}/>
            <br/>
            <Button style = {{marginTop: '20px', marginBottom: '20px'}}>Login</Button>
          </form>
          </Card.Content>
        </Card>
    </div>
  );
};

export default Login;
