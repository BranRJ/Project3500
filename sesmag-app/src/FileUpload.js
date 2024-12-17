import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onFileUploaded }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload a file!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      onFileUploaded(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="card-panel">
      <h5 className="center-align">Upload Your PDF</h5>
      <form onSubmit={handleUpload} className="row">
        <div className="file-field input-field col s12">
          <div className="btn">
            <span>File</span>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" placeholder="Choose a file" />
          </div>
        </div>
        <div className="col s12 center-align">
          <button className="btn waves-effect waves-light" type="submit">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileUpload;
