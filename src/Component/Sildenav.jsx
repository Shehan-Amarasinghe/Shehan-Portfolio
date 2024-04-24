import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, } from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr';


function Sildenav() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
        console.log('state');
    }

    return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
              <div className='fixed z-20 flex flex-col items-center justify-center w-full h-screen bg-white/90'> 
                <a onClick={handleNav}
                  href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20} />
                    <span className='pl-4'>Home</span>
                </a>

                <a onClick={handleNav}
                  href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects size={20} />
                    <span className='pl-4'>About</span>
                </a>

                <a onClick={handleNav}
                  href="#project" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject size={20} />
                    <span className='pl-4'>Project</span>
                </a>

                <a onClick={handleNav} 
                  href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson size={20} />
                    <span className='pl-4'>Resume</span>
                </a>

                <a onClick={handleNav}
                  href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20} />
                    <span className='pl-4'>Contact</span>
                </a>

                
              </div>
            )
            : (
              ''
            )}
            <div className='fixed hidden md:block top-[25%] z-10'>
                <div className='flex flex-col '>
                  <a href="#main" className='bg-gray-100 rounded-full shadow shadow-lg=gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20} />
                  </a>

                  <a href="#work" className='bg-gray-100 rounded-full shadow shadow-lg=gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={20} />
                  </a>

                  <a href="#project" className='bg-gray-100 rounded-full shadow shadow-lg=gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20} />
                  </a>

                  <a href="#main" className='bg-gray-100 rounded-full shadow shadow-lg=gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPerson size={20} />
                  </a>

                  <a href="#contact" className='bg-gray-100 rounded-full shadow shadow-lg=gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20} />
                  </a>
                </div>
          </div>
            
    </div>
  )
}

export default Sildenav