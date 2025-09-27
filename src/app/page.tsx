
import { AnimatedTestimonialsDemo } from '@/components/Testiomonial'
import { SpotlightPreview } from '@/components/Hero'
import {  ConnectMe } from '@/components/ContactMe'
import React from 'react'
import { Education } from '@/components/Education'
import { AboutMe } from '@/components/AboutMe'
import { CardHoverEffectDemo } from '@/components/Skills'
import { TabsDemo } from '@/components/Projects'
import { Footer } from '@/components/Footer'



export default function page() {
  return (
    <div>
        
        <div >
        <SpotlightPreview></SpotlightPreview>
        </div>
        <div>
          <AboutMe>  </AboutMe>
        </div>
        <div>
      <CardHoverEffectDemo></CardHoverEffectDemo>
        </div>
        <div>
          <TabsDemo></TabsDemo>
        </div>
      
        <div>
          <Education></Education>
        </div>
        <div className='mt-40 mb-40'>

        <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
        </div>
        <div>
          
        </div>
        <div>
         <ConnectMe></ConnectMe>
        </div>
        <div>
          <Footer></Footer>
        </div>  

    </div>
  )
}
