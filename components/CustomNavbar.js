'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap'


export default function CustomNavbar () {
  return (
    <>
      <Navbar expand='md' className='navbar-dark bg-dark' sticky='top'>
        <Container fluid>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/projects'>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}