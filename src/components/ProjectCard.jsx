import React from 'react'

function ProjectCard({item}) {
  
  return (
    <div className=' flex flex-col justify-center items-center'>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl" >
              <img src={item.img} alt="" className='w-80 h-48' />
              <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
                <h1 className="font-bold text-3xl">{item.title}</h1>
                <p className="font-bold">{item.description}</p>
              </div>
            </div>
            <a href= {item.link} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-2" target="_blank">Go To Website</a>
    </div>
  )
}

export default ProjectCard