import React, { useState } from 'react'
import TabIllustrationOne from '../assets/illustration-features-tab-1.svg'
import TabIllustrationTwo from '../assets/illustration-features-tab-2.svg'
import TabIllustrationThree from '../assets/illustration-features-tab-3.svg'

const tabs = [
   {
      id: 1,
      name: 'Simple Bookmarking',
      isActive:true,
      tabContent:    {
         title: 'Bookmark in one click',
         description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
         illustration: TabIllustrationOne,
      },
   },
   {
      id: 2,
      name: 'Speedy Searching',
      isActive:false,
      tabContent:   {
         title: 'Intelligent search',
         description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
         illustration: TabIllustrationTwo,
      },
   },
   {
      id: 3,
      name: 'Easy Share',
      isActive:false,
      tabContent:   {
         title: 'Share your bookmarks',
         description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
         illustration: TabIllustrationThree,
      }
   },
]

const Features = () => {
   const [activeTAb, setActiveTab] = useState(1)

  return (
    <section id='features' role='region' className='overflow-hidden font-rubik'>
      <div className='container pb-10 mt-12 lg:mt-24'>
         <div className='max-w-lg mx-auto text-center'>
            <h2 className='heading-2'>Features</h2>
            <p className='subtitle mt-4 lg:mt-6'>Our aim is to make it quick and easy for you to access your favourite websites. 
   Your bookmarks sync between your devices so you can access them on the go.</p>
         </div>

         <div>
            <ul className='w-full md:max-w-2xl grid grid-cols-1 lg:grid-cols-3 mx-auto border-t lg:border-y-0 my-8'>
               {
                  tabs.map(tab => (
                     <li role='tab' key={tab.id} className='text-center border-b border-grayish-blue/30'>
                        <button type='button'
                           id={tab.id}
                           onClick={(e) => setActiveTab(e.target.id)}
                           className={`tab-btn px-2 py-3 text-base lg:w-full text-dark-blue/80 ${activeTAb == tab.id  && 'active-tab' }`}>
                           {tab.name}
                        </button>
                     </li>
                  ))
               }
            </ul>

            {
               tabs.map((tab) => {

                     return(
                        <div key={tab.id} className={`flex-col lg:flex-row items-center justify-center gap-x-24 py-12 space-y-20 lg:space-y-0 ${activeTAb == tab.id ? 'active-tab-content': 'tab-content'}`}>
                           
                           <div className="h-max lg:w-1/2 relative">
                              <img src={tab.tabContent.illustration} alt="features-illustration" loading='lazy'/>
                              <div className='absolute top-[17%] lg:top-20 right-[20%] -z-10 rounded-r-full bg-soft-blue h-[100%] lg:h-[90%] w-screen'/>
                           </div>
               
                           <div className="flex flex-1 flex-col items-center lg:items-start max-w-2xl">
                              <h2 className='heading-2 font-semibold text-dark-blue'>{tab.tabContent.title}</h2>
                              <p className='subtitle my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
                                 {tab.tabContent.description}
                              </p>
                              <button type='button' className='hidden lg:block btn btn-softBlue hover:bg-white hover:text-dark-blue'>More Info</button>
                           </div>
                        </div>
                     )
               })
            }

         </div>

      </div>
    </section>
  )
}

export default Features