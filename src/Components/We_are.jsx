import React from 'react'
import community from '../assets/astronaut/community.png'
import planet from '../assets/svgs/p2.png'
import { common, we_are } from '../styles'

export const We_are = () => {
  return (
    <div className={we_are.root} id='we_are'>
        <img src={planet} alt="planet image" className={we_are.bPlanet} />
        <img src={community} alt="community image" className='w-1/2 lg:w-[30%] lg:order-2'/>
        <div className='w-[80%] md:w-1/2 mx-10 lg:order-1'>
            <h1 className={common.textNabula}>Who We Are..</h1>
            <p className={we_are.p}>
            Our vibrant and dynamic software development community is a melting pot of fresh talent, eager to dive headfirst into the ever-evolving tech landscape. With a hunger for innovation and a thirst for learning, our newcomers bring a breath of fresh air to the industry. They're the rising stars, ready to shine in the constellation of coding, forging ahead with curiosity as their compass.
            </p>
            <button className={common.Buttonblue}>Explore us</button>
        </div>

    </div>
  )
}
