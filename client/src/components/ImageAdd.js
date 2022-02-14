import React, { useState, useContext } from 'react';
import { AuthContext } from "../providers/AuthProvider";
import ReactDOM from 'react-dom';
import axios from "axios";

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


// Our app
const ImageAdd = () => {
    const auth = useContext(AuthContext);
    const [files, setFiles] = useState([])

    const handleUpdate = (files)=>{
        console.log(files)
        setFiles(files)
    }

    const handleUpload = async (e) => {
        e.preventDefault()

        let data = new FormData();
        if(files[0] && files[0].file ){
          data.append('fileYo', files[0].file)
        }
        try{
          let res = await axios.put(`/api/users/${auth.id}/profile_image`, data)
          console.log('res: ', res)
        } catch(err){
            console.log(err)
        }
    }


    return (
        <div className="App">
            <h1>only 1 photo and don't do api call on change</h1>
            <FilePond
                files={files}
                onupdatefiles={handleUpdate}
                allowMultiple={false}
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
                <Button style={{borderRadius:'40px', marginTop: '10px'}} onClick={handleUpload} >Upload</Button>
        </div>
    );
}

// Attach App to DOM
export default ImageAdd;