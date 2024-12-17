// Frontend enhancement with Materialize for SESMag Application

import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './App.css';

const App = () => {
    React.useEffect(() => {     // Initialize Materialize components
        M.AutoInit();
    }, []);

    return (
        <div className="container">
            <h1 className="center-align">SESMag Review by Fee</h1>
            
            {/* File Upload Section */}
            <div className="row">
                <form className="col s12">
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>Upload PDF</span>
                            <input type="file" />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" placeholder="Upload your PDF file" />
                        </div>
                    </div>
                </form>
            </div>

            {/* Chat Window */}
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Chat with Fee</span>
                            <p>Start uploading your document to get a response from Fee!</p>
                        </div>
                        <div className="card-action">
                            <button className="btn waves-effect waves-light" type="submit" name="action">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
