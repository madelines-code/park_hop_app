import React, {useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import ReactDOM from 'react-dom';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// import axios from 'axios';
import { Button } from 'semantic-ui-react';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);



const EditUser= () => {
  const {handleEdit} = useContext(AuthContext);
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [kids, setKids] = useState([])
  const navigate = useNavigate();
  const params = useParams();
  const auth = useContext(AuthContext);
  const [files, setFiles] = useState([])



  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    let res = await axios.get(`/api/users/${params.id}`)
    setName(res.data.name)
    setEmail(res.data.email)
    setImage(res.data.image)
    setKids(res.data.kids)
    setId(res.data.id)
  }



  const handleUpdate = (files)=>{
    // console.log(x)
    console.log(files[0])
    console.log(files[0].file)
    setFiles(files)
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle submit clicked')
    console.log(files)
    let data = new FormData();
    if (files !== []) {
      data.append('fileYo', files[0].file)
      data.append('name', name) 
      data.append('email', email) 
      console.log(data)}
      else {
        data.append('name', name) 
        data.append('email', email) 
        console.log(data)
      }
    try{
      let res = await axios.put(`/api/users/profile_image`, data)
      console.log('res: ', res)
      auth.setUser(res.data);
      navigate('/protected')
    } catch(err){
        console.log(err)
    }
  };



  return (
    <div>
      <h2>Edit My Profile</h2>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input 
        value={name} 
        onChange={(e)=>{setName(e.target.value);}}/>
        <p>Email</p>
        <input 
        value={email} 
        onChange={(e)=>{setEmail(e.target.value);}}/>
        <p>Current Image</p>
        <img src={image} style={{width: '200px'}}/>
          <h1>only 1 photo and don't do api call on change</h1>
          <FilePond
              files={files}
              onupdatefiles={handleUpdate}
              allowMultiple={false}
              name="files"
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        <button type='Submit'>Update</button>
      </form>
    </div>
  );
};

export default EditUser;
