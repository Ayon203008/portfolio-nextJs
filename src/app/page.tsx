
// import { AnimatedTestimonialsDemo } from '@/components/Testiomonial'
import { SpotlightPreview } from '@/components/Hero'
import {  ConnectMe } from '@/components/ContactMe'
import React from 'react'
import { Education } from '@/components/Education'
import { AboutMe } from '@/components/AboutMe'
import { CardHoverEffectDemo } from '@/components/Skills'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { AllProjects } from '@/components/AllProjects'


// import { calsans } from "@/fonts/calsans";
 
// import { twMerge } from "tailwind-merge";

export default function page() {
  return (
    <div>
     

        <Navbar></Navbar>
        <div id='home' >
        <SpotlightPreview></SpotlightPreview>
        </div>
        <div id='about'>
         <AboutMe/>
        </div>
        <div id='skills'>
      <CardHoverEffectDemo></CardHoverEffectDemo>
        </div>
        <div id='projects' className='mt-40 mb-40'>
          <AllProjects></AllProjects>
        </div>
       
      
        <div id='education'>
          <Education></Education>
        </div>
      
        <div id='contact'>
          
         <ConnectMe></ConnectMe>
        </div>
      
        <div>
          <Footer></Footer>
        </div>  
     

    </div>
  )
}
