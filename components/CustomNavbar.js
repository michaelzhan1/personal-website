export default function CustomNavbar () {
  return (
    <>
      <div className="sticky top-0 text-navbar-text text-base my-4 py-2">
        <div className="flex justify-end mr-auto">
          <a href="/" className="p-2">Home</a>
          <a href="/about" className="p-2">About</a>
          <a href="/projects" className="p-2">Projects</a>
          <a href="/resume.pdf" className='p-2' target="_blank">Resume</a>
        </div>
      </div>




      {/* <Navbar expand='sm' sticky='top' style={{backgroundColor: '#f5f5f5', color: '#666666', fontSize: '16px'}} className='my-3'>
        <Container fluid>
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
      </Navbar> */}
    </>
  )
}