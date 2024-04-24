import React from 'react'
import taking_note from '../assets/note-taking-app.png'
import outer_clove from '../assets/outer-clove.png'
import SLRailway_project from '../assets/sl-train.png'
import Sn_enterprises from '../assets/snenterprises-web.png'
import c_plus from '../assets/c_plus.png'
import java from '../assets/Java.webp'
import Projectitem from './Projectitem'



function Project() {
  return (
    <div id='project' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='py-8 text-center'>This is my latest projects</p>

        <div className='grid gap-12 sm:grid-cols-2'>
            <Projectitem img={taking_note} title='Note taking app'/>
            <Projectitem img={outer_clove} title='Outer clove resturant'/>
            <Projectitem img={SLRailway_project} title='SL Railway ticket booking system'/>
            <Projectitem img={Sn_enterprises} title='SN ENTERPRISES Static web'/>
            <Projectitem img={c_plus} title='Spire health care project C++'/>
            <Projectitem img={java} title='Apple istore project java'/>
        </div>
    </div>
    
  )
}

export default Project