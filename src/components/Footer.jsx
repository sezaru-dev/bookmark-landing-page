import React from 'react'
import BookmarkLogoFooter from '../images/BookmarkLogoFooter'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
   <footer  role='contentinfo' className='bg-dark-blue font-rubik py-8'>
   <div className="container flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-1 flex-col md:flex-row items-center justify-center md:justify-start gap-6 lg:gap-12">
         <a href="#"><BookmarkLogoFooter/></a>
         <ul className="flex flex-col md:flex-row items-center justify-center text-white uppercase gap-6 lg:gap-12 text-base md:text-xs">
            <li className="cursor-pointer hover:text-soft-red"><a href="#features">Features</a></li>
            <li className="cursor-pointer hover:text-soft-red">Pricing</li>
            <li className="cursor-pointer hover:text-soft-red"><a href="#contact">Contact</a></li>
         </ul>
      </div>
      <div className="">
         <ul className='flex gap-10 mt-6 md:mt-0 text-white'>
            <li>
               <a className='hover:text-soft-red'>
                  <FaFacebookSquare/>
               </a>
            </li>
            <li>
               <a className='hover:text-soft-red'>
                  <FaTwitter/>
               </a>
            </li>
         </ul>
      </div>
   </div>
 </footer>
  )
}

export default Footer