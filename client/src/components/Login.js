import {useContext, useState} from "react";
import { useNavigate } from "react-router";
import { Button, Card, Input } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

  const {handleLogin} = useContext(AuthContext);
  const [email, setEmail] = useState('anissa_hessel@dickinson.net')
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
            <Card.Header style={{textAlign: 'center'}}>Login</Card.Header>
            <form onSubmit={handleSubmit}>
            <p>Email</p>
            <Input 
            value={email} 
            onChange={(e)=>{setEmail(e.target.value);}}/>
            <p>Password</p>
            <Input 
            value={password} 
            onChange={(e)=>{setPassword(e.target.value);}}/>
            <br/>
            <Button style = {{margin: '20px auto'}}>Login</Button>
          </form>
          </Card.Content>
        </Card>
    </div>
  );
};

export default Login;
