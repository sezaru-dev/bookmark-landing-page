import React from 'react'
import Accordion from './Accordion'

const FAQs = () => {
  return (
   <section role='region' className='font-rubik py-20'>
      <div className="container">
         {/* header */}
         <div className="sm:w-3/4 lg:w-6/12 mx-auto px-6">
            <h2 className="heading-2 text-center text-dark-blue font-bold">Frequently Asked Questions</h2>
            <p className="subtitle text-center mt-4">
               Here are some of our FAQs. If you have any other questions you'd like answered please feel free
            </p>
         </div>

         <div className="flex flex-col md:w-6/12 mt-12 mx-auto lg:px-6">
            {/* FAQs items */}
            <Accordion/>
            <button type="buttons" className="mt-12 flex mx-auto btn btn-softBlue hover:bg-white hover:text-dark-blue">More Info</button>
         </div>
      </div>
   </section>
  )
}

export default FAQs