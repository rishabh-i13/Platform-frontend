import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { FiPlus } from "react-icons/fi";


const Header = () => {

  const [username,setUsername]=useState('');

  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials :'include',
    }).then(response=>{
      response.json().then(userInfo=>{
        setUsername(userInfo.username);
      })
    })
  })

  return (
      <header className="flex justify-between bg-blue-300 h-15 w-full fixed top-0 z-50">
        <Link to="" className='font-bold text-3xl  m-2'>
          PLATFORM
        </Link>
        <nav className="flex gap-[15px] m-2">
          {username && (
            <>
            <Link to="/create" className="text-inherit flex items-center text-white bg-black p-2 px-4 rounded-md cursor-pointer hover:bg-blue-100 hover:text-black duration-1000 hover:scale-110">Create <FiPlus /></Link>
            </>
          )}
          {!username && (
            <>
            <Link to="/login" className="text-inherit flex items-center text-white bg-black p-2 px-4 rounded-md cursor-pointer hover:bg-blue-100 hover:text-black duration-1000 hover:scale-110"> Login</Link>
            <Link to="/register" className="text-inherit flex items-center text-white bg-black p-2 rounded-md cursor-pointer hover:bg-blue-100 hover:text-black duration-1000 hover:scale-110">Register</Link>
            </>
          )}
          </nav>
      </header>
  );
};

export default Header;
