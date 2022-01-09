import React from 'react';
import  {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from "./components/ChatFeed";

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="8127e0b0-174c-4891-b780-ca3960a59b54"
            userName="anisbrahmi"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps } /> }
        />
    );
};

export default App;
