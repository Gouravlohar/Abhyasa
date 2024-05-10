import React,{useState} from 'react';
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import "../Styles/login.css";


function LoginBmsons() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = () => {
        axios.post('http://localhost:5000/Login', { email, password })
          .then(response => {
            alert("Logged In Successfully")
            navigate("/")
          })
          .catch(error => {
            alert("Wrong Details....")
          });
      };

    return (
        <>
        <div className="login-container">
            <div className="login-form">
                <h2 className="text-center text-3xl font-bold mb-6 underline">Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-actions">
                        <button
                            className="btn-login"
                            type="button"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                        <a
                            className="forgot-password"
                            href="/"
                        >
                            &nbsp;&nbsp;&nbsp;Forgot Password?
                        </a>
                    </div><br/>
                    New User? &nbsp;<Link to="/Signup"><button className='button-login'>Signup</button></Link>
                </form>
            </div>
        </div>
        </>
    );
}

export default LoginBmsons;
