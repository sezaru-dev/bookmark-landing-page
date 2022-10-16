import React, {useState} from 'react'
import BookmarkLogo from '../images/BookmarkLogo'
import CloseMenu from '../images/CloseMenu'
import HamburgerMenu from '../images/HamburgerMenu'
import NavlistDesktop from './navigations/NavlistDesktop'
import NavlistMobile from './navigations/NavlistMobile'
import BookmarkLogoWhite from '../images/BookmarkLogoWhite'


const Header = () => {
   const [isMenuClose, setIsMenuClose] = useState(true)
   const body = document.querySelector('body')

   {
      isMenuClose ? body.classList.remove('overflow-hidden') : body.classList.add('overflow-hidden')
   }


   window.addEventListener('resize', () => {
      if (screen.width >= 768) {
         setIsMenuClose(true)
      }
   })


   const menuHandler = () => {
      setIsMenuClose(!isMenuClose)
   }

  return (
    <header role='banner' className='relative z-50 font-rubik transition-all ease-in-out duration-200'>
      <nav role='navigation' className={`container flex items-center justify-between h-[6.4rem] lg:h-[8.5rem]  ${isMenuClose || 'bg-dark-blue md:bg-transparent'}`}>
         <a href="#"  onClick={() => setIsMenuClose(true)}>
            {
               isMenuClose? <BookmarkLogo/> : <BookmarkLogoWhite/>
            }
         </a>
         <NavlistDesktop />
         <NavlistMobile isMenuClose={isMenuClose} setIsMenuClose={setIsMenuClose}/>
         
         <button onClick={menuHandler} className='md:hidden'>
            {
               isMenuClose? <HamburgerMenu className='border'/> : <CloseMenu className='border'/>
            }
         </button>

      </nav>
    </header>
  )
}

export default Header