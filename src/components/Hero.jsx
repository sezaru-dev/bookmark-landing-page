import React from 'react'
import HeroIllustration from '../assets/illustration-hero.svg'

const Hero = () => {
  return (
    <section role='region' className='overflow-hidden pb-10 font-rubik'>
      <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-20'>
         <div className='flex  flex-col items-center justify-between lg:items-start max-w-lg mx-auto lg:mx-0 lg:w-1/2'>
            <h1 className='text-dark-blue text-3xl md:text-4 lg:text-5xl font-medium text-center lg:text-left mb-6 capitalize'>A Simple Bookmark Manager</h1>
            <p className='subtitle text-center lg:text-left mb-6'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className='text-base flex justify-center flex-wrap gap-2'>
               <button className='btn-mobile md:btn btn-softBlue hover:bg-white hover:text-gray-800 text-sm'>Get it on Chrome</button>
               <button className='btn-mobile md:btn btn-white hover:bg-soft-blue hover:text-white text-sm'>Get it on Firefox</button>
            </div>
         </div>
         <div className='max-w-lg lg:w-1/2 relative'>
            <div className='lg:-mr-28'>
               <img src={HeroIllustration} alt="hero-illustration"  loading='lazy'/>
            </div>
            <div className='absolute top-[24%] left-[18%] -z-10 rounded-l-full bg-soft-blue h-[80%] w-screen'/>
         </div>
      </div>
    </section>

  )
}

export default Hero