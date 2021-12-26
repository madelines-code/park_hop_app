import { useContext } from "react";
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
            <Link to="/parks">Parks</Link>
          </div>
          <button onClick={() => handleLogout(x)}>Logout</button>
        </>
      );
    }
    return (
      <>
        <div>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div style={styles.navbar}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/protected">Protected</Link>
        </div>

        {renderAuthLinks()}
      </div>
      <div style={styles.pageContainer}>
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
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
    border: "1px solid",
  },
};

export default Layout;
