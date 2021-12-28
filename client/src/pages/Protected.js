import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CluesCompleted from "../components/CluesCompleted";
import { AuthContext } from "../providers/AuthProvider";
import EditUser from "./EditUser";

const Protected = () => {
  const auth = useContext(AuthContext);

// can I use useEffect here to reload page when data changes? 

  return (
    <div>
      <h2>My Profile</h2>
      <h3>Hey, {auth.name}!</h3>
      <img src={auth.image} />
      <p>email: {auth.email}</p>
        <p>My ID {auth.id}</p>
      <Link to={`/api/users/${auth.id}/edit`} state = {{auth}} >Edit Profile </Link>
      {/* <EditUser/> */}
      <CluesCompleted/>
      <p>{JSON.stringify(auth)}</p>
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>error should not see this</p>}
    </div>
  );
};

export default Protected;
