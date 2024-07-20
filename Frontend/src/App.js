import React from 'react'
import UserOne from './UserOne'
import UserSecond from './UserSecond'
import Footer from './Footer';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function App() {
  return (
    <div className='bg-blue-200 h-[100vh] text-center'>
      <h1 className='pt-8 text-[40px] font-semibold flex items-center gap-x-2 justify-center'>
        <IoChatbubbleEllipsesSharp/>
         Chat Application
      </h1>
      <p className='text-[20px] font-medium text-gray-800'>
        This is a chat application made using React and Socket.io
      </p>
      <div className='flex items-center mt-6 justify-center '>
        <div className='flex space-x-8 items-center justify-center'>
          <UserOne />
          <UserSecond />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;