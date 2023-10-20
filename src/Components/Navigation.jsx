import React, { useState } from 'react'

function Navigation({setPage}) {
  const [showMenu, setShowMenu] = useState(false)
  return (

    <div className="flex flex-col md:flex-row justify-between fixed w-screen max-w-screen flex-wrap text-gray-300 md:p-[1em] p-[.5em] top-0 left-0 z-50 backdrop-blur-sm">
      <div className="flex flex-row items-center w-screen md:w-fit justify-between flex-wrap">
        <div className='flex item-center justify-center ml-5'>
          
          <h1 className="mx-1 font-bold flex justify-center items-center md:text-2xl lg:text-3xl md:ml-5 "><span className="text-orange-400 font-SpaceMono">ROXs</span>Softwares.</h1>
        </div>
      
        <div className='flex items-center justify-center md:hidden'>
        
        <button className=' ml-auto mr-14' onClick={()=>setShowMenu(!showMenu)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </button>
        </div>
       
      
        
      </div>
      
        <nav className={showMenu?"flex mt-4":"hidden md:flex rounded-md p-2 pr-4"}>
          <ul className="flex w-full flex-row justify-evenly items-center flex-wrap ">
            <li className="mt-2 w-full md:w-20 text-end md:text-start "><a href="#home" className='w-full inline-block text-center text-gray-400 hover:text-gray-50' >Home</a></li>
            <li className="mt-2 w-full md:w-20 text-end md:text-start "><a href="#courses" className='w-full inline-block text-center text-gray-400 hover:text-gray-50'>Courses</a></li>
            <li className="mt-2 w-full md:w-20 text-end md:text-start "><a href="#about" className='w-full inline-block text-center text-gray-400 hover:text-gray-50'>About</a></li>
            <li className=" mt-2 w-full md:w-20 text-end md:text-start "><a href="#contact" className='w-full inline-block text-center text-gray-400 hover:text-gray-50'>Contact</a></li>
          </ul>
        </nav>
        
    </div>
  )
}

export default Navigation