import React,{ useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from 'axios'
import "../Styles/signup.css";



const SignupBmsons = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
   
    const navigate = useNavigate()

    const handleSignup = () => {
        axios.post('http://localhost:5000/SignupBmsons', { username, email, password })
          .then(response => {
            alert("Signed Up Successfully")
            navigate("/")
          })
          .catch(error => {
            alert("please enter correct details")
          });
      };

    
    
   

  return (
    <>
        
        <div className="signup-container">
            <div className="signup-form">
                <h2 className="text-center text-3xl font-bold mb-6 underline">Signup</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Set Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            className="btn-signup"
                            type="button"
                            onClick={handleSignup}
                        >
                            Sign Up
                        </button>
                    </div><br/>
                    Already User? &nbsp;<Link to="/Login"><button className='button-login'>Login</button></Link>
                </form>
            </div>
        </div>
    );
};
    
    </>
  )
}

export default SignupBmsons
