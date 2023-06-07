import React, { useEffect, useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';
import "./Chatbox.css";

const Chatbox = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Authenticate with ChatEngine
    axios
      .get('https://api.chatengine.io/users/me/', {
        headers: {
          'Project-ID': '01d5cedd-ed10-4a87-962c-801fa498a9f9',
          'User-Name': 'ShreyashC',
          'User-Secret': '12345678',
        },
      })
      .then(() => setLoading(false))
      .catch((error) => console.log('Authentication Error:', error));
  }, []);

  if (loading) return <div className='text-stone-50'>Loading...</div>;

  return (
    <ChatEngine
      height="100vh"
      projectID="01d5cedd-ed10-4a87-962c-801fa498a9f9"
      userName="ShreyashC"
      userSecret="12345678"
    />
  );
};

export default Chatbox;
