'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap'


export default function CustomNavbar () {
  return (
    <>
      <Navbar expand='sm' sticky='top' style={{backgroundColor: '#f5f5f5', color: '#666666'}} className='my-4'>
        <Container fluid className='p-0' style={{maxWidth: '650px'}}>
          <Navbar.Brand href='/' className='p-0'>Next.js</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='mr-auto'>
              <Nav.Link href='/' style={{color: '#666666'}}>Home</Nav.Link>
              <Nav.Link href='/about' style={{color: '#666666'}}>About</Nav.Link>
              <Nav.Link href='/projects' style={{color: '#666666'}}>Projects</Nav.Link>
              <Nav.Link href='/resume.pdf' style={{color: '#666666'}} target='_blank'>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}