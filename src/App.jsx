import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';

function App() {

  return (
    <>
      <Header />
      <main className='w-full lg:w-[80%] mx-auto flex flex-col items-center '>
        <Posts />
      </main>
    </>
  )
}

export default App
