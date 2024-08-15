import React from "react";

const Header = () => {
  return (
    <div className="">
      <header className="flex justify-between bg-blue-300 mb-15 ">
        <a href="" className='font-bold text-3xl  m-2'>
          PLATFORM
        </a>
        <nav className="flex gap-[15px] m-2">
          <a href="" className="text-inherit flex items-center text-white bg-black p-2 px-4 rounded-md cursor-pointer hover:bg-blue-100 hover:text-black duration-1000 hover:scale-110"> Login</a>
          <a href="" className="text-inherit flex items-center text-white bg-black p-2 rounded-md cursor-pointer hover:bg-blue-100 hover:text-black duration-1000 hover:scale-110">Register</a>
        </nav>
      </header>
      </div>
  );
};

export default Header;
