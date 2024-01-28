import React, { useState } from 'react'
import Navigation from './Navigation'
import { homeStyle, common } from '../styles'
import { We_are } from './We_are'
import What_we_do from './What_we_do'
import About from './About'
import ContactUs from './ContactUs'
const Home = ({setPage}) => {
  const spanD = 'w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-5 animate-pulse'
  const liD = ' bg-gradient-to-r  from-slate-950 px-5 py-3 rounded-2xl mt-3'
  const liED = ' bg-gradient-to-r  from-slate-950 px-5 py-3 rounded-2xl mt-3'

  
  return (
    <div id="home" className="mt-[66px]"
    >
      <Navigation setPage={setPage}/>
      <section className={homeStyle.root} id='home'>
        <div className='flex flex-col md:w-[40%] m-10'>
          <h1 className={common.textNabula+" md:mt-[5em]"}>Build with ROXs</h1>
          <p className={homeStyle.p}>Welcome to our thriving software development community—a place where innovation converges with aspiration. In this dynamic ecosystem, we welcome newcomers to the industry, embracing their fresh perspectives and boundless enthusiasm. Here, you'll discover a world of opportunity, where novices are empowered to shape tomorrow's technology.</p>
          <button className={common.Buttonblue}>Learn More</button>
        </div>
      </section>
      <We_are />
      <What_we_do />
      <About />
      <ContactUs />
      
    </div>
    
  )
}

export default Home