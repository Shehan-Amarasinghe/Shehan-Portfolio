import React from 'react'
import cover_img from '../assets/my-picture.jpg'
import {TypeAnimation} from 'react-type-animation'
import {FaGithub,FaInstagram, FaLinkedinIn } from 'react-icons/fa'


function Main() {
  return (
    <div id='main' className='flex justify-center items-right mt-11 text-[20px]'>
        <img src={cover_img} alt="" className='object-cover w-[250px] h-[250px] rounded-[10%] border-2 border-blue-500 '/>
        <div className='absolute top-0 left-0 w-full h-screen'>
        
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start'>
            <h1 className='text-4xl font-bold text-gray-800 sm:text-5xl '>I'm Shehan Amarasinghe</h1>
            <h2 className='flex pt-4 text-2xl text-gray-800 sm:text-3xl'>I'm
            <TypeAnimation
            sequence={[
            'an undergraduate software engineer',
            2000,
            'with good knowledge and understanding',
            2000,
            'Tech Enthusiast',
            2000,
            
         
            ]}
            wrapper='div'
            cursor={true}
            repeat={Infinity}
            style={{fontSize: '1em', paddingLeft: '5px'}}
            />
            </h2>

            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaGithub className='cursor-pointer' size={20}/>
                <FaLinkedinIn className='cursor-pointer' size={20}/>
                <FaInstagram className='cursor-pointer' size={20}/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Main