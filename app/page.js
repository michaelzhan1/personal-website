'use client'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Image } from 'react-bootstrap'



export default function Home() {
  return (
    <>
      <Container>
        <Row className='mb-4'>
          <Col xs={12} md={7} className='d-flex flex-column justify-content-center'>
            <h1><strong>Michael Zhan</strong></h1>
            <h2>Harvard Computational Science and Engineering MSc Student</h2>
          </Col>
          <Col xs={12} md={5} className='d-flex flex-column justify-content-center'>
            <Image src='/img/headshot.jpg' roundedCircle fluid />
          </Col>
        </Row>
        <Row>
          <p>Hi there! My name is Michael, and I'm currently pursuing a master's degree at Harvard in the CSE program. I did my undergrad at UT Austin in Chemical Engineering with a certificate in Computer Science. I'm interested in software engineering, web development, and data science. In my free time, I enjoy learning new things, playing pickleball, and listening to music.</p>
        </Row>
      </Container>
    </>
  )
}
