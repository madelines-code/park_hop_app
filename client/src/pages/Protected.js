import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CluesCompleted from "../components/CluesCompleted";
import { AuthContext } from "../providers/AuthProvider";

const Protected = () => {
  const auth = useContext(AuthContext);


  return (
    <div>
      <h2>My Profile</h2>
      <h3>Hey, {auth.name}!</h3>
      <img src={auth.image} />
      <p>email: {auth.email}</p>
        <p>My ID {auth.id}</p>
      <Link to={`/api/users/${auth.id}/edit`}>Edit Profile </Link>
      <CluesCompleted/>
      <p>{JSON.stringify(auth)}</p>
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>error should not see this</p>}
    </div>
  );
};

export default Protected;
