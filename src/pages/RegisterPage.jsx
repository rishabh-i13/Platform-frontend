import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {

    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [redirect,setRedirect]=useState(false);

    async function register( ev ){
        ev.preventDefault();
        try{
            const response=await fetch('http://localhost:4000/register',{
                method:'POST',
                body:JSON.stringify({email,username,password}),
                headers:{'Content-Type':'application/json'},
            });
            if(response){
              alert('Registration Successful')
              setRedirect(true);
            }
        }
        catch(err){
            alert("Registration Failed , Try Again !")
        }
      
    }
    if(redirect){
      return <Navigate to={'/login'}/>
    }
    return (
      <div className="flex flex-row justify-center items-center w-full h-full mt-[13%]">
        <form className="w-full max-w-sm p-6 shadow-lg rounded-md border-b-8 bg-blue-200">
          <h1 className="text-center text-xl font-bold mb-4">Welcome to PLATFORM</h1>
          <h3 className="flex items-center justify-center text-xl font-bold mb-4 gap-2"><FaUserAlt />Register</h3>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded" 
            value={email}
            onChange={ev=> setEmail(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border border-gray-300 rounded" 
            value={username}
            onChange={ev=> setUsername(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={password}
            onChange={ev=>setPassword(ev.target.value)}
          />
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={register}>
            Register
          </button>
        </form>
      </div>
    );
  };

export default RegisterPage