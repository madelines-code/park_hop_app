import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleRegister = async (user, navigate) => {
    try {
    let res = await axios.post("/api/auth", user)
    console.log("res:", res);
      setUser(res.data.data);
      navigate("/protected");  
      } catch (err) { console.log(err.response);
        alert("error registering user");
    }

  };

  const handleEdit = async (editedUser, navigate) => {
    try {
      let res = await axios.put(`/api/users/${editedUser.id}`, editedUser)
      setUser(res.data.data)
      navigate("/protected");  
     } catch (err) { console.log(err.response);
       alert("error updating user");
   }
  }; 

  
  const handleLogin = async (user, navigate) => {
    try{
    let res = await axios.post("/api/auth/sign_in", user);
    // this axios call is a post to session so it creates a new session using devise token
      console.log("handleLogin", user);
      setUser(res.data.data);
      navigate("/protected"); 
    } catch (err) {
      console.log(err.response);
      alert("error logging in")
      navigate("/login"); 
      
    }
  };
  
  const handleLogout = async (y) => {
    try{ 
      let res = await axios.delete("/api/auth/sign_out");
      console.log(res)
      setUser(null);
        y('/login');
      } catch (err) {
        console.log(err.response);
        console.log(err.res);
        alert("error logging out");
      }
    console.log("handle logout");
  };
  
    return (
      <AuthContext.Provider value={{
        ...user,
        authenticated: user !== null,
        handleRegister,
        handleLogin,
        handleLogout,
        handleEdit, 
        setUser
      }}>
      {props.children }
      </AuthContext.Provider>
    )
  };

  export default AuthProvider;