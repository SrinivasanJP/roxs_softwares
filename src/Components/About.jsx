import React from 'react'
import { about, common } from '../styles'

const About = () => {
  return (
    <section id="about" className={about.root}>
    <h1 className={common.textNabula+" text-center my-10"}>About ROXs Softwares</h1>
    <p className={about.p}>
    Welcome to ROXs, where our mission is to paperless world. We believe in software is best alternative for papers, and we're dedicated to making a positive impact in Softwares. Learn more about who we are and what we stand for.
    </p>

    <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Our Mission</h2>
    <p className=' text-justify'>
    At ROXs Softwares, our mission is simple: <strong>In digital world convert papers to BIT.</strong> Our work is guided by a set of core values that include Quality and Excellence, Innovation, Customer-Centricity, Collaboration, Transparency, Agility and Adaptability, Continuous Learning, Accountability, Ethical and Responsible Development, Diversity and Inclusion, Sustainability, Simplicity, Data Security, Open Source Contribution, Team Empowerment, Agile Delivery, Adherence to Best Practices, Long-Term Vision.
    </p>

    <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Our Team</h2>
    <p className=' text-justify'>
    Our organization is led by a team of dedicated individuals who bring expertise and passion to the table. Meet some of our key leaders: <br /><ul className=' list-disc list-inside'>
        <li>Srinivasan J.P. - Founder and CEO</li>
    </ul>
    Staff or Team

    Behind our mission are the hardworking individuals who make it happen. Our diverse team is united by a common goal and a commitment to paperless world.
    </p>

    <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Why Choose Us</h2>
    <div className=' text-justify'>
      <ul className=' list-disc list-inside'>
        <li>Pay when the software is ready to use no payments before you experience the software.</li>
        <li>Low cost compared to other software developement organization</li>
        <li>Multiple type of payment plans for your software</li>
        <li>Fastest delivery</li>
        <li>Low maintainance cost </li>
      </ul>
    </div>

    <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Get in Touch</h2>
    <p className=' text-justify'>
      We are here to answer any questions you may have. Feel free to
      contact us at <a href="mailto:jpsrinivasan38@gmail.com" className='hover:text-orange-300 hover:border-b-2'>help@roxs.com</a>
    </p>
  </section>
  )
}

export default About