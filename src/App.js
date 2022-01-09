import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="8127e0b0-174c-4891-b780-ca3960a59b54"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;
