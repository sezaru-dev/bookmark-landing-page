import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

/* 
   npm install react-hook-form yup
   npm install @hookform/resolvers
*/

const ContactForm = () => {

   const schema = yup.object().shape({
      email: yup.string().email("Whoops, Make sure it's an email").required("Please enter your email"),
   })

   const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
   })

   const onSubmit = (data) => {
      console.table(data);
   }

  return (
   <form role='form' className="flex flex-col sm:flex-row gap-6 mt-8 max-h-fit" onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex flex-col flex-1">
         <input type="email" placeholder="Enter your email address" className={`text-dark-blue outline-none flex-1 px-4 py-3 rounded-md z-10 ${errors.email?.message.length? 'border-2 border-soft-red' : 'border-white'}`} {...register("email")}/>
         <small className={`bg-soft-red text-white italic text-xs px-2 py-1 pt-2.5 -mt-2 rounded-b-md z-0 ${errors.email?.message.length? 'block' : 'hidden'}`}>{errors.email?.message}</small>
      </div>

      <button className="btn h-14 bg-soft-red border-2 border-soft-red hover:bg-white hover:text-soft-red focus:bg-white focus:text-soft-red active:bg-white active:text-soft-red">Contact Us</button>
   </form>
  )
}

export default ContactForm