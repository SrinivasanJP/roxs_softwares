import React, { useState } from 'react'
import Navigation from './Navigation'
import { homeStyle } from '../styles'
const Home = ({setPage}) => {
  const spanD = 'w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-5 animate-pulse'
  const liD = ' bg-gradient-to-r  from-slate-950 px-5 py-3 rounded-2xl mt-3'
  const liED = ' bg-gradient-to-r  from-slate-950 px-5 py-3 rounded-2xl mt-3'

  const [contactData, setContactData]= useState({
    name: '',
    email: '',
    message: '',
    submitted: false,
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    setContactData({...contactData,submitted:true})
  }
  const handleChange = (e)=>{
    setContactData({...contactData,[e.target.name]:e.target.value})
  }
  return (
    <div id="home" className="mt-[66px]"
    >
      <Navigation setPage={setPage}/>
      <section className={homeStyle.root+" bg-cover bg-[center_right_45em] md:bg-center flex md:justify-end justify-center"} id='home'>
          <p className=' text-white mt-[10em] md:mr-[2em] text-xl md:w-[40%] text-center md:text-left'>Explore the paperless world move your business to digital world with ROXs Softwares make softwares work for you.</p>
      {/* <div className='flex mx-10'>
        <div className='text-white w-[80%] h-[80%] backdrop-blur-sm backdrop-filter bg-opacity-70 rounded-2xl z-10 shadow-gray-700 flex items-start shadow-inner flex-col p-6'>
          
          <h1 className='bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-4xl leading-[1.2] tracking-tighter text-transparent
          text-[1em] sm:text-[2rem] lg:text-left' >Do you have Project in your mind? </h1>
          <button className='my-5 bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] p-3 rounded-full font-bold text-sm' onClick={()=>document.location.href = "#contact"}>Contact us</button>
        </div>
        <img src={technoAstro} alt="astronaut" className='w-[30%] md:w-[20%] h-40 z-10 lg:h-52' />   
        </div> */}
       

      </section>
      {/* <section id='courses' className=' h-full w-screen text-gray-100  flex justify-center flex-col md:w-[60%] mx-auto'>
        <div className=' w-[85%] h-[80%] backdrop-blur-md backdrop-filter bg-opacity-70 rounded-2xl mx-auto z-10 shadow-gray-700 shadow-inner'>

       
        
        <h1 className=' text-3xl font-bold text-center bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-transparent my-14'>Categorires of Courses</h1>
        <ol className=' flex flex-col w-[80%] mx-auto'>
          <li className='mb-10'>
            <h1 className=' bg-gradient-to-r from-[#4D78EF] p-3 text-center rounded-2xl font-bold'>General</h1>
            <ul>
              <li className={liD}><span className={spanD}></span>Mathematics</li>
              <li className={liED}><span className={spanD}></span>Computer Science</li>
              <li className={liD}><span className={spanD}></span>Biology</li>
              <li  className={liED}><span className={spanD}></span>Chemistry</li>
              <li className={liD}><span className={spanD}></span>Physics</li>
              
            </ul>
          </li>
          <li className='mb-10'>
            <h1 className=' bg-gradient-to-r from-[#4D78EF] p-3 text-center rounded-2xl font-bold'>Technology</h1>
            <ul>
              <li className={liD}><span className={spanD}></span>Web Development</li>
              <li className={liED}><span className={spanD}></span>Android Development</li>
              <li className={liD}><span className={spanD}></span>Block Chain</li>
              <li className={liED}><span className={spanD}></span>AI</li>
              <li className={liD}><span className={spanD}></span>Data Science</li>
              <li className={liED}><span className={spanD}></span>Machine Learning</li>
            </ul>
          </li>
          <li className='mb-10' >
            <h1 className=' bg-gradient-to-r from-[#4D78EF] p-3 text-center rounded-2xl font-bold'>Programming</h1>
            <ul>
              <li className={liD}><span className={spanD}></span>C</li>
              <li className={liED}><span className={spanD}></span>C++</li>
              <li className={liD}><span className={spanD}></span>Python</li>
              <li className={liED}><span className={spanD}></span>Java</li>
              <li className={liD}><span className={spanD}></span>Ruby</li>
              <li className=' bg-gradient-to-r  from-slate-950 px-5 py-3 rounded-2xl mt-3'><span className={spanD}></span>HTML, CSS, JavaScript</li>
              <li className={liD}><span className={spanD}></span>PHP</li>
              <li className={liED}><span className={spanD}></span>Perl</li>
              <li className={liD}><span className={spanD}></span>SQL</li>
              <li className={liED}><span className={spanD}></span>No SQL</li>
            </ul>
            
          </li>
          <li className='mb-10'>
            <h1 className=' bg-gradient-to-r from-[#4D78EF] p-3 text-center rounded-2xl font-bold'>Frameworks</h1>
            <ul>
              <li className={liD}><span className={spanD}></span>ReactJS</li>
              <li className={liED}><span className={spanD}></span>ExpressJS</li>
              <li className={liD}><span className={spanD}></span>MERN Stack</li>
            </ul>
            
          </li>
        </ol>
        </div>
      </section> */}
      <section id="about" className=' text-gray-100 p-10 md:w-[60%] mx-auto'>
        <h1 className=' text-3xl font-bold text-center bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-transparent my-14'>About Our Academy</h1>
        <p className=' text-justify mb-5'>
          ROXs Academy is dedicated to providing high-quality education
          and empowering individuals to achieve their academic and career goals.
          Established in 2020, we have been serving Offline/Online for 3
          years, consistently delivering exceptional learning experiences.
        </p>

        <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Our Mission</h2>
        <p className=' text-justify'>
          Our mission is to make every one to execute their knowledge. We are committed to
          fostering a learning environment that empower every grownups to build their dreams.
        </p>

        <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Our Team</h2>
        <p className=' text-justify'>
          At ROXs Academy, we take pride in our team of experienced and
          dedicated educators. Our faculty members are experts in their fields
          and are passionate about imparting knowledge and nurturing the
          potential within each student.
        </p>

        <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Why Choose Us</h2>
        <p className=' text-justify'>
          - Comprehensive Course Offerings: We offer a wide range of courses in
          Programming, catering to learners of all levels. <br />
          - Flexible Learning: Our online/offline programs are designed to
          accommodate diverse schedules and learning preferences.
        </p>

        <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Get in Touch</h2>
        <p className=' text-justify'>
          We are here to answer any questions you may have. Feel free to
          contact us at <a href="mailto:jpsrinivasan38@gmail.com" className='hover:text-orange-300 hover:border-b-2'>help@roxs.com</a>
        </p>
      </section>
      <section id="contact" className=' text-gray-100 p-10 md:w-[60%] mx-auto'>
        <h1 className=' text-3xl font-bold text-center bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-transparent my-14'>Contact Us</h1>
        {contactData.submitted ? (
          <div className="message-sent">
            <p>Thank you for contacting us. We will get back to you shortly.</p>
          </div>
        ) : (
          <div >
            <p className=' my-5'>Have a question or need assistance? Reach out to us!</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-5">
                <label htmlFor="name" className=' block'>Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className=' w-full rounded-md text-md text-black p-3 focus:outline-none '
                  value={contactData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-5">
                <label htmlFor="email" className='block'>Email:</label>
                <input
                  type="email"
                  className=' w-full rounded-md text-md text-black p-3 focus:outline-none '
                  id="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-5">
                <label htmlFor="message" className='block'>Message:</label>
                <textarea
                  id="message"
                  name="message"
                  className=' w-full rounded-md text-md text-black p-3 focus:outline-none '
                  value={contactData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className=' bg-indigo-600 text-white px-5 py-2 rounded-xl mt-5 font-semibold'>Submit</button>
            </form>
          </div>
        )}
      </section>
    </div>
    
  )
}

export default Home