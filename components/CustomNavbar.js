'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function CustomNavbar () {
  return (
    <>
      <Navbar expand='sm' sticky='top' style={{backgroundColor: '#f5f5f5', color: '#666666', fontSize: '16px'}} className='my-3'>
        <Container fluid style={{maxWidth: '650px'}}>
          <Navbar.Toggle style={{borderWidth: 0}}></Navbar.Toggle>
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