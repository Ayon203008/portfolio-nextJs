
import { AnimatedTestimonialsDemo } from '@/components/Testiomonial'
import { SpotlightPreview } from '@/components/Hero'
import {  ConnectMe } from '@/components/ContactMe'
import React from 'react'
import { Education } from '@/components/Education'
import { AboutMe } from '@/components/AboutMe'
// import { WorldMapDemo } from '@/components/world-map'

export default function page() {
  return (
    <div>
        
        <div className=' mb-20'>
        <SpotlightPreview></SpotlightPreview>
        </div>
        <div>
          <AboutMe>  </AboutMe>
        </div>
        <div className='mt-40 mb-40'>

        <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
        </div>
        <div>
          <Education></Education>
        </div>
        <div>
         <ConnectMe></ConnectMe>
        </div>
    </div>
  )
}
