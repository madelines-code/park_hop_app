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
import Parks from './pages/Parks';
import AddKid from './pages/AddKid';

function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/register" element= {<Register/>}/>
          <Route element={<RequireAuth />}>
              {/* protected routes go here */}
            <Route path="/protected" element={<Protected />} />
            <Route path="/parks" element={<Parks />} />
            <Route path="/api/users/:id/edit" element={<EditUser/>}/>
            <Route path="/api/users/:id/add_kid" element={<AddKid/>}/>
            <Route path="/" element= {<Home/>}/>
          </Route>
        </Route >
      </Routes>
  );
}

export default App;
