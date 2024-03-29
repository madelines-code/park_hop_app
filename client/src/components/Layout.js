import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Layout = () => {
  // x bad name for tutorial sake
  let x = useNavigate();

  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return (
        <>
          <div>
            <Link style={styles.navbarText}  to="/parks">Parks</Link>
          </div>
          <button style={styles.button} onClick={() => handleLogout(x)}>Logout</button>
        </>
      );
    }
    return (
      <>
        <div>
          <Link style={styles.navbarText} to="/register">Register</Link>
        </div>
        <div>
          <Link style={styles.navbarText} to="/login">Login</Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div style={styles.navbar}>
        <div>
          <Link style={styles.navbarText} to="/">Home</Link>
        </div>
        <div>
          <Link style={styles.navbarText} to="/protected">Profile</Link>
        </div>

        {renderAuthLinks()}
      </div>
      <div style={styles.background}>
        <Outlet />
      </div>
    </div>
  );
};

const styles={
  content: {
    display: "flex",
    border: "1px solid",
    padding: "15px",
  },
    outlet: {
      backgroundColor: "lightgrey",
      padding: "15px",
  },
    navbar: {
      display: "flex",
      backgroundColor: "rgb(237, 142, 0)",
      justifyContent: 'center',
      padding: '20px',
    },
    navbarText: {
      textDecoration: 'none',
      color: 'black',
      margin: '10px',
      fontSize: '20px',
    },
    button: {
      border: '0px',
      backgroundColor: 'rgb(237, 142, 0)',
      fontSize: '20px',
    },
    background: {
      backgroundColor: 'rgb(0, 168, 0)',
      height: '100%',
    },
};

export default Layout;
