'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap'


export default function CustomNavbar () {
  return (
    <>
      <Navbar expand='sm' sticky='top' style={{backgroundColor: '#efede7', color: '#1BA098'}}>
        <Container fluid className='p-0' style={{maxWidth: '650px'}}>
          <Navbar.Brand href='/' className='p-0'>Next.js</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='mr-auto'>
              <Nav.Link href='/' style={{color: '#1BA098'}}>Home</Nav.Link>
              <Nav.Link href='/about' style={{color: '#1BA098'}}>About</Nav.Link>
              <Nav.Link href='/projects' style={{color: '#1BA098'}}>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}