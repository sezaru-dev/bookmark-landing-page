import React from 'react'
import BgDots from '../assets/bg-dots.svg'
import Chrome from '../assets/logo-chrome.svg'
import Firefox from '../assets/logo-firefox.svg'
import Opera from '../assets/logo-opera.svg'

const DownloadExtension = () => {
  return (
    <section role='region' className='font-rubik py-20'>
      <div className='container'>
         {/* headings */}
         <div className='sm:w-3/4 lg:w-6/12 mx-auto px-2 text-center'>
            <h2 className='heading-2'>Download the extension</h2>
            <p className='subtitle mt-4'>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize.</p>
         </div>

         {/* cards */}
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-5 mx-auto mt-16'>
            <div className='flex flex-col rounded-md shadow-md lg:mb-16'>
               <div className="p-6 flex flex-col items-center">
                  <img src={Chrome} alt="chrome.svg" loading='lazy'/>
                  <h3 className="mt-5 mb-2 text-dark-blue text-xl font-medium">Add to Chrome</h3>
                  <p className="mb-2 text-grayish-blue text-sm md:text-base">Minimum version 62</p>
               </div>
               <img src={BgDots} alt="Dots Background" />
               <div className="flex p-6">
                  <button type="buttons" className="flex-1 btn btn-softBlue hover:bg-white hover:text-dark-blue text-sm md:text-base">Add & Install Extension</button>
               </div>
            </div>

            <div className="flex flex-col rounded-md shadow-md lg:my-8">
               <div className="p-6 flex flex-col items-center">
                  <img src={Firefox} alt="firefox.svg" loading='lazy'/>
                  <h3 className="mt-5 mb-2 text-dark-blue text-xl font-medium">Add to Firefox</h3>
                  <p className="mb-2 text-grayish-blue text-sm md:text-base">Minimum version 55</p>
               </div>
               <img src={BgDots} alt="Dots Background" />
               <div className="flex p-6">
                  <button type="buttons" className="flex-1 btn btn-softBlue hover:bg-white hover:text-dark-blue text-sm md:text-base">Add & Install Extension</button>
               </div>
            </div>

            <div className="flex flex-col rounded-md shadow-md lg:mt-16">
               <div className="p-6 flex flex-col items-center">
                  <img src={Opera} alt="opera.svg" loading='lazy'/>
                  <h3 className="mt-5 mb-2 text-dark-blue text-xl font-medium">Add to Edge</h3>
                  <p className="mb-2 text-grayish-blue text-sm md:text-base">Minimum version 46</p>
               </div>
               <img src={BgDots} alt="Dots Background" />
               <div className="flex p-6">
                  <button type="buttons" className="flex-1 btn btn-softBlue hover:bg-white hover:text-dark-blue text-sm md:text-base">Add & Install Extension</button>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default DownloadExtension