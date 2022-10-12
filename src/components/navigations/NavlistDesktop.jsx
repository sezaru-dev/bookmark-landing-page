import React from 'react'
import { MenuItems } from '../MenuItems'

const NavlistDesktop = () => {
  return (
    <ul className='hidden md:flex flex-1 justify-end items-center gap-12 text-sm uppercase font-normal tracking-widest'>
      {
         MenuItems.map((item, index) => (
            <li key={index} className={item.cName}>
               <a href={item.url}>{item.title}</a>
            </li>
         ))
      }
   </ul>
  )
}

export default NavlistDesktop