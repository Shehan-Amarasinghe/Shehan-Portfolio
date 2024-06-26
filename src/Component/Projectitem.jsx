import React from 'react'

function Projectitem({img, title}) {
  return (
    <div className='relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
        <div className='absolute hidden group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' >
            <h3 className='text-2xl font-bold tracking-wider text-center text-white'>
                {title}
            </h3>
            <p className='pt-2 pb-4 text-center text-white'>React Js</p>
            <a href="/">
                <p className='p-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer '>More Info</p>
            </a>
        </div>
    </div>
  )
}

export default Projectitem