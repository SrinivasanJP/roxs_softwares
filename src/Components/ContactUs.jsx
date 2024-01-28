import { doc, setDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../config/firebase'
const ContactUs = () => {
    const [contactData, setContactData]= useState({
        name: '',
        email: '',
        message: '',
        submitted: false,
      })
      const handleSubmit = async (e)=>{
        e.preventDefault()
        
        await setDoc(doc(db, "clients" , contactData["email"]),{...contactData}).then(()=>{
          setContactData({...contactData,submitted:true})
        })
      }
      const handleChange = (e)=>{
        setContactData({...contactData,[e.target.name]:e.target.value})
      }
  return (
    <div>
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

export default ContactUs