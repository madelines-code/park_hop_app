import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const RequireAuth = () => {
  const auth = useContext(AuthContext);
  const [checkingAuthStatus, setCheckingAuthStatus] = useState(true);

  useEffect(()=>{
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    //if we are suthenticated or we do not have a token
    if(auth.authenticated || !localStorage.getItem('access-token')){
      setCheckingAuthStatus(false);
      return;
    }
  // if we get here that means we have a token in local stuarate but are not authed so we need to check the token to see it was valid
    try{
      const res = await axios.get("/api/auth/validate_token");
      // if token is calid it will give back the user
      auth.setUser(res.data.data)
    } catch (err) {
    // if token is invalid or error occurs we end up here
    console.log("unable to validate token")
    } finally {
      // regardless if token is valid or not, we have checked it here
      setCheckingAuthStatus(false);
    }
  }

  // if in process of checking status, have a loading screen or return null
if(checkingAuthStatus){
  return <p>Checking if logged in or not</p>
}
  // now check if not authed
  if (!auth.authenticated) {
    return <Navigate to="/login" />;
  }

  // here we are authenticated
  return (
<<<<<<< HEAD
=======

>>>>>>> 7d297494a4d0a8600edc5f23ebb25279dab4018c
    <div>
      <Outlet />
    </div>
  );
};

export default RequireAuth;
