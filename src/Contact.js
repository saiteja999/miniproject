import React, {useState} from 'react';
import {ReactComponent as ChatIcon} from './assets/chat.svg';
import './Login.css';

const Applicant = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <>
      <div>
        <div className="contact">
          <header className="header">
            <span>Feel free to get in touch with us</span>
            <img src="/chat.png" alt="" />
          </header>
          <div className="contact-section">
            <img src="/contact1.png" alt="" />
            <div />
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            right: '50px',
            bottom: '20px',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
          }}
          onClick={() => setShowChat(!showChat)}
        >
          <ChatIcon />
        </div>
        {showChat && (
          <div
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              bottom: '70px',
              right: '50px',
            }}
            className="chat"
          >
            <button className="close" onClick={() => setShowChat(!showChat)}>
              &times;
            </button>
            <iframe
              title="chat"
              allow="microphone;"
              width="100%"
              height="100%"
              src="https://console.dialogflow.com/api-client/demo/embedded/01a23ff3-5ce1-445a-aff0-d66abbe4ff4a"
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
};

export default Applicant;
