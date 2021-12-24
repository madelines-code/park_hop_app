import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Protected from './pages/Protected';
import { Route, Routes} from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import AuthProvider from './providers/AuthProvider';
import EditUser from './pages/EditUser';

function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element= {<Home/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/register" element= {<Register/>}/>
          <Route element={<RequireAuth />}>
              {/* protected routes go here */}
            <Route path="/protected" element={<Protected />} />
            <Route path="/api/users/:id/edit" element={<EditUser/>}/>
          </Route>
        </Route >
      </Routes>
  );
}

export default App;
