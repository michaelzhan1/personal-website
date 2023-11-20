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
    <>
      <div className='flex flex-wrap'>
        { projectData.map((project, index) => {
          return (
            <>
              <div className='flex flex-col w-full md:w-1/2 p-2'>
                <div className='mb-3'>
                  <a href={project.url} target='_blank' rel='noreferrer'>
                    <img src={project.imageUrl} alt={project.name} className='w-full' />
                  </a>
                </div>
                <div>
                  <a href={project.url} target='_blank' rel='noreferrer' className='mb-3'>
                    <h2 className='text-[1.5rem] font-bold'>{project.name}</h2>
                  </a>
                </div>
                <div className='mb-3'>
                  <p>{project.description}</p>
                </div>
              </div>
              {index % 2 === 0 && index !== projectData.length - 1 && <hr className='w-full mb-3 border-0 bg-gray-300 h-px block md:hidden' />}
              {index % 2 === 1 && index !== projectData.length - 1 && <hr className='w-full mb-3 border-0 bg-gray-300 h-px' />}
            </>
          )
        })}
      </div>
      {/* <Container className='mb-3'>
        { projectData.map((project, index) => {
          return (
            <>
              <Row>
                <Col xs={12} sm={4} className='d-flex flex-column justify-content-center'>
                  <a href={project.url} target='_blank' rel='noreferrer'>
                    <Image src={project.imageUrl} thumbnail />
                  </a>
                </Col>
                <Col xs={12} sm={8} className={`${styles['project-name-margin']} d-flex flex-column justify-content-center`}>
                  <a href={project.url} target='_blank' rel='noreferrer' className={styles['project-link']}>
                    <h2 className={styles['project-name']}><strong>{project.name}</strong></h2>
                  </a>
                  <p className={styles['project-description']}>{project.description}</p>
                </Col>
              </Row>
              { projectData.length - 1 !== index && <hr />}
            </>
          )
        })}
      </Container> */}
    </>
      
  )
}