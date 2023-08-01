'use client'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
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
      <Container style={{'paddingBottom': '150px'}}> {/* change this as needed, with footer */}
        { projectData.map((project, index) => {
          return (
            <>
              <Row>
                <Col xs={12} sm={4} className='d-flex flex-column justify-content-center'>
                  <a href={project.url} target='_blank' rel='noreferrer'>
                    <Image src={project.imageUrl} thumbnail />
                  </a>
                </Col>
                <Col xs={12} sm={8} className='d-flex flex-column justify-content-center'>
                  <a href={project.url} target='_blank' rel='noreferrer'>
                    <h2><strong>{project.name}</strong></h2>
                  </a>
                  <p>{project.description}</p>
                </Col>
              </Row>
              { projectData.length - 1 !== index && <hr />}
            </>
          )
        })}
      </Container>
    </>
  )
}