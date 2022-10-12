import React from 'react'
import ContactForm from './forms/ContactForm'

const ContactUs = () => {
  return (
   <section id='contact' role='region' className='bg-soft-blue font-rubik text-white py-14 lg:py-20 mt-12 lg:mt-24'>
      <div className="container">
         <div className="sm:w-3/4 lg:w-2/4 mx-auto">
            <p className='font-light uppercase text-base tracking-widest text-center mb-8'>35,000+ already joined</p>
            <h2 className='text-2xl md:text-4xl font-medium text-center'>Stay up-to-date with what we're doing.</h2>
            <ContactForm/>
         </div>
      </div>
   </section>
  )
}

export default ContactUs