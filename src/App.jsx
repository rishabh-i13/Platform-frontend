import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';

function App() {

  return (
    <>
    <Header/> 
      <main className=' ris p-[10px] max-w-[70%] mx-auto flex flex-col items-center '>
        <Posts/>
      </main>
    </>
  )
}

export default App
