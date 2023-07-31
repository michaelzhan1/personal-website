'use client'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Image } from 'react-bootstrap'



export default function Home() {
  return (
    <>
      <Container>
        <Row className='mb-4'>
          <Col xs={12} md={7} className='p-0 d-flex flex-column justify-content-center'>
            <h1><strong>Michael Zhan</strong></h1>
            <h2>Harvard Computational Science and Engineering MSc Student</h2>
          </Col>
          <Col xs={12} md={5} className='p-0 d-flex flex-column justify-content-center'>
            <Image src='/img/headshot.jpg' roundedCircle fluid />
          </Col>
        </Row>
        <Row>
          <p className='p-0'>This is the main body! Loremipsum and all that shitsdf sdf sdf sdf sdfslkdfslkjsdfjlkdsfljk fjsdf jlsfd  sljksdl kjsd l sljdk jlskd. Short blurb and all that</p>
        </Row>
      </Container>
    </>
  )
}
