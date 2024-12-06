import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ChatWindow from './components/ChatWindow';

const App = () => {
  const [responses, setResponses] = useState([]);

  const handleFileUploaded = (data) => {
    setResponses((prev) => [...prev, data.message]);
  };

  return (
    <div className="container">
      <h2 className="center-align">SESMag AI Agent</h2>
      <div className="row">
        <div className="col s12 m6">
          <FileUpload onFileUploaded={handleFileUploaded} />
        </div>
        <div className="col s12 m6">
          <ChatWindow responses={responses} />
        </div>
      </div>
    </div>
  );
};

export default App;
