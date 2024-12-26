'use client'


import { useEffect, useState } from 'react'


export default function ProjectExamples () {
  const [projectData, setProjectData] = useState([])
  useEffect(() => {
    fetch('/data/projectData.json')
      .then(response => response.json())
      .then(data => setProjectData(data))
  });

  return (
    <div className='flex flex-wrap mb-3'>
      { projectData.map((project, index) => {
        return (
          <>
            <div key={index}>
              <div className='flex flex-col w-full md:w-1/2 p-2'>
                <div className='mb-3 hover:scale-105'>
                  <a href={project.url} target='_blank' rel='noreferrer'>
                    <img src={project.imageUrl} alt={project.name} className='w-full' />
                  </a>
                </div>
                <div>
                  <a href={project.url} target='_blank' rel='noreferrer' className='mb-3'>
                    <h2 className='font-bold'>{project.name}</h2>
                  </a>
                </div>
                <div>
                  <p>{project.description}</p>
                </div>
              </div>
              {index % 2 === 0 && index !== projectData.length - 1 && <hr className='w-full mb-3 border-0 bg-gray-300 h-px block md:hidden' />}
              {index % 2 === 1 && index !== projectData.length - 1 && <hr className='w-full mb-3 border-0 bg-gray-300 h-px' />}
            </div>
          </>
        )
      })}
    </div>      
  )
}