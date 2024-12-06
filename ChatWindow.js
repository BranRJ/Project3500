import React from 'react';

const ChatWindow = ({ responses }) => {
  return (
    <div className="card-panel teal lighten-4">
      <h5>AI Responses:</h5>
      <ul className="collection">
        {responses.map((response, index) => (
          <li key={index} className="collection-item">
            {response}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatWindow;
