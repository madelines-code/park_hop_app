import React from "react";
import { Header } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home!</h2>
      {JSON.stringify(auth)}
      <p onClick={auth.handleLogin}>Login</p>
      <p onClick={auth.handleLogout}>Logout</p>
      <Link to="/protected">Protected</Link>
      <Link to="/public">Public</Link>
      <p onClick={()=>navigate("/public")}>navigate to public</p>
    </div>
  );
};

export default Home;
