'use client'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectExamples from './ProjectExamples.js'


export default function Projects () {
  return (
    <>
      <Container>
        <Row>
          <Col className='mb-3'>
            <h1><strong>Projects</strong></h1>
          </Col>
        </Row>
      </Container>
      <ProjectExamples />
    </>
  )
}