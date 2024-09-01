import React,{useState} from 'react'
import { FaUserAlt } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import {Navigate} from 'react-router-dom';

const LoginPage = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [redirect,setRedirect]=useState(false);

  async function login(ev){
    ev.preventDefault();
        try{
            const response=await fetch('http://localhost:4000/login',{
                method:'POST',
                body:JSON.stringify({email,password}),
                headers:{'Content-Type':'application/json'},
                credentials:'include',
            });
            if(response.ok){
              setRedirect(true);
            }
            else{
              alert('Email/Password did not match, Try Again! ')
            }
        }
        catch(err){
            alert("Login Failed , Try Again !")
        }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="flex flex-row justify-center items-center w-full h-full mt-[15%]">
      <form className="w-full max-w-sm p-6 shadow-lg rounded-md border-b-8 bg-blue-200">
        <h1 className="flex items-center justify-center text-xl font-bold mb-4 gap-2">Welcome Back to PLATFORM  <MdCelebration /></h1>
        <h3 className="flex items-center justify-center text-xl font-bold mb-4 gap-2"><RiLoginCircleFill />Login</h3>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={ev=>setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={password}
          onChange={ev=>setPassword(ev.target.value)}
        />
        <button onClick={login}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage