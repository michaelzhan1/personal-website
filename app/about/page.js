'use client'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'



export default function About () {
  return (
    <>
      <Container style={{paddingBottom: '150px'}}>
        <Row>
          <Col className='mb-3'>
            <h1><strong>About Me</strong></h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Hi! I'm currently pursuing a master's degree in Computational Science and Engineering at Harvard, and I received my bachelor's in Chemical Engineering from UT Austin in 2023. I'm currently exploring the software engineering and web development space, and I've developed some personal projects along the way.</p>
            <p>Through high school and college, I treated coding as a hobby; I took a few CS classes in college and casually went through problems from ProjectEuler and Leetcode. Only in my junior year of college did I realize that I wanted to pursue a career in software engineering. I gained experience through both industry internships and academic research projects, and I aim to continue learning and growing through my master's program.</p>
            <p>I recently started learning web development on my own, and I've developed a few side projects along the way (including this website). I come from a Python background, and have been gradually immersing myself into the JavaScript ecosystem. I started from static HTML/CSS/JS, then learned dynamic web development with Flask, and finally learned React and Next.js. I plan on learning Tailwind CSS and TypeScript in the near future.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}