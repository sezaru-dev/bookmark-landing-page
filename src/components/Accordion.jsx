import React, {useState} from 'react'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FAQsItems } from './FAQsItems';

const Accordion = () => {
   const [isActive, setIsActive] = useState(false)
   const toggle = index => {
      if (isActive === index) {
         //if clicked question is already active, then close it
         return setIsActive(null)
      }
      setIsActive(index)
   }

  return (
    <>
      {
         FAQsItems.map((item, index) => (
            <div key={index} className='border-b'>
               <button type='button' onClick={() => toggle(index)} className="flex items-center justify-between py-4 w-full">
                  <span className="text-sm md:text-base font-medium text-dark-blue/80 hover:text-soft-red transition-all ease-in-out duration-200">{item.question}</span>
                  {
                     isActive === index ? 
                     <FaChevronUp className='text-soft-red'/>  : 
                     <FaChevronDown className='text-dark-blue/80'/>

                  }
               </button>
               {
                  isActive === index ? 
                  <p className={`flex-1 py-4 text-dark-blue/80 text-sm md:text-base leading-loose`}>{item.answer}</p> :
                  null
               }
            </div>
         ))

      }
    </>
  )
}

export default Accordion