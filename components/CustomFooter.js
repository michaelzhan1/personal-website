import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false;


export default function CustomFooter () {
  return (
    <>
      <div className='fixed bottom-0 w-full bg-custom-gray text-custom-light flex flex-col justify-center items-center text-center'>
        <p className='mt-1 text-base'>Contact me:</p>
        <div className='flex flex-row justify-center items-center'>
          <a href='mailto:michaelzhan2001@gmail.com' className='mx-2'><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href='https://linkedin.com/in/michaelzhan1' className='mx-2'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='https://github.com/michaelzhan1' className='mx-2'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <p className='text-sm mb-1'>© 2024 Michael Zhan. Built with Next.js, deployed on Railway</p>
      </div>



      {/* <Container fluid style={{backgroundColor: '#363636', color: '#efede7'}} className='fixed-bottom'>
        <Row className='mt-1' style={{fontSize: '16px'}}>
          <Col className='text-center'>
            <p className='mb-0'>Contact me:</p>
          </Col>
        </Row>
        <Row className='mb-0'>
          <Col className='text-center'>
            <a href='mailto:michaelzhan2001@gmail.com' style={{color: '#efede7'}} className='mx-2'><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href='linkedin.com/in/michaelzhan1' style={{color: '#efede7'}} className='mx-2'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='github.com/michaelzhan2' style={{color: '#efede7'}} className='mx-2'><FontAwesomeIcon icon={faGithub} /></a>
          </Col>
        </Row>
        <Row>
          <Col className='text-center' style={{fontSize: '14px'}}>
            <p className='mb-1'>© 2023 Michael Zhan. Built with Next.js, deployed on Railway</p>
          </Col>
        </Row>
      </Container> */}
    </>
  )
}