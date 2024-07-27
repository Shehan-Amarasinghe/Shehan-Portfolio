import React from 'react'
import taking_note from '../assets/note-taking-app.png'
import outer_clove from '../assets/outer-clove.png'
import SLRailway_project from '../assets/sl-train.png'
import To_do_list from '../assets/To-do-list.png'
import Weather_App from '../assets/weather-app.png'
import AxeL_Web from '../assets/Axel.png'
import Dashboard from '../assets/Dashboard.png'
import Projectitem from './Projectitem'




function Project() {
  return (
    <div id='project' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='py-8 text-center'>This is my latest projects</p>

        <div className='md:w-[60%] md:h-[10%] mx-auto'>
            <Projectitem img={AxeL_Web} title='Axel Furniture Web'/>
        </div>
        <br />
        <div className='grid gap-12 sm:grid-cols-2'>
            <Projectitem img={Dashboard} title='Dashboard-Next.js'/>
            <Projectitem img={taking_note} title='Note taking app'/>
            <Projectitem img={outer_clove} title='Outer clove resturant'/>
            <Projectitem img={SLRailway_project} title='SL Railway ticket booking system'/>
            <Projectitem img={To_do_list} title='To-do-list app'/>
            <Projectitem img={Weather_App} title='Weather-app'/>
        </div>
    </div>
    
  )
}

export default Project