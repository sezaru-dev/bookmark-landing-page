import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const NavlistMobile = ({isMenuClose, setIsMenuClose}) => {
  return (
   <div className={`md:hidden absolute z-50 top-[6.4rem] left-0 right-0 w-full h-[calc(100vh-6.4rem)] bg-gradient-to-b from-dark-blue via-dark-blue/[.96] to-dark-blue/[.96] ${isMenuClose && 'hidden'}`}>
      <div className='container'>
         <ul className=' flex flex-col items-center justify-start text-center text-white text-xl'>
            <li className='w-full border-t border-grayish-blue/20 py-4 tracking-widest'><a onClick={() => setIsMenuClose(!isMenuClose)} href="#features">FEATURES</a></li>
            <li className='w-full border-t border-grayish-blue/20 py-4 tracking-widest'><a onClick={() => setIsMenuClose(!isMenuClose)} href="#">PRICING</a></li>
            <li className='w-full border-t border-b border-grayish-blue/20 py-4 tracking-widest'><a  onClick={() => setIsMenuClose(!isMenuClose)} href="#contact">CONTACT</a></li>
         </ul>
         <button className='mt-12 border-2 border-white text-white text-xl font-bold w-full py-2.5 rounded-md focus:bg-grayish-blue focus:text-dark-blue transition-all ease-in-out duration-200'  onClick={() => setIsMenuClose(!isMenuClose)}>LOGIN</button>
         <div className="social-medias absolute bottom-10 left-0 right-0 flex items-center justify-center space-x-8 w-full text-white">
            <FaFacebookSquare size={28} className="cursor-pointer hover:text-soft-blue" onClick={() => setIsMenuClose(!isMenuClose)}/>
            <FaTwitter size={28} className="cursor-pointer hover:text-soft-blue" onClick={() => setIsMenuClose(!isMenuClose)}/>
         </div>
      </div>
   </div>

  )
}

export default NavlistMobile