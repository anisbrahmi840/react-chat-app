import React, {useState} from 'react';
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const handleSubmit =async (e) => {
        e.preventDefault();
        const authObject = {'Project-ID': '8127e0b0-174c-4891-b780-ca3960a59b54', 'User-Name': username, 'User-secret': password}
        try{
          await  axios.get('https://api.chatengine.io/chats', {headers: authObject})
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload();
        }catch (e) {
            setError('Oops, incorrect credentials.')
        }
    }

    return (<div className="wrapper">
        <div className="form">
            <h1 className="title"> Chat App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input"
                       placeholder="Username" required/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input"
                       placeholder="Password" required/>
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error" style={{ color: 'red'}}>{error}</h2>
            </form>
        </div>

    </div>);
};

export default LoginForm;
