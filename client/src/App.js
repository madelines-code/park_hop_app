import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Protected from './pages/Protected';
import { Route, Routes} from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import EditUser from './pages/EditUser';
import Parks from './pages/Parks';
import AddKid from './pages/AddKid';
import EditKid from './pages/EditKid';

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
            <Route path="/api/kids/:id/" element={<EditKid/>}/>
            <Route path="/" element= {<Home/>}/>
          </Route>
        </Route >
      </Routes>
  );
}

export default App;
