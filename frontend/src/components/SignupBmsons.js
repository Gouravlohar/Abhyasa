import React,{ useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from 'axios'



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
        
      <div className="bg-gray-100 min-h-screen flex justify-center items-center bg-violet-200">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-center text-3xl font-bold mb-6 underline">Signup</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Set Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button" onClick={handleSignup}>
                            Sign Up
                        </button>
                </div><br/>
                Already User? &nbsp;<Link to="/LoginBmsons"><button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>Login</button></Link>
            </form>
        </div>
    </div>
    
    </>
  )
}

export default SignupBmsons
