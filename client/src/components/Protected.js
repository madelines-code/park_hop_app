import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Protected = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h2>Protected</h2>
      <p>email: {auth.email}</p>
      <p>{JSON.stringify(auth)}</p>
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>error should not see this</p>}
    </div>
  );
};

export default Protected;
