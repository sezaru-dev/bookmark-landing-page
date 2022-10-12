import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import DownloadExtension from './components/DownloadExtension'
import FAQs from './components/FAQs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
      <Header/>
      <main role='main'>
         <Hero/>
         <Features/>
         <DownloadExtension/>
         <FAQs/>
         <ContactUs/>
      </main>
      <Footer/>
    </>
  )
}

export default App