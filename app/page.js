export default function Home() {
  return (
    <>
      <div className="pb-3 flex items-center justify-between">
        <div className="mb-4 flex flex-col xs:w-full md:w-7/12">
          <h1 className="text-34 font-bold">Michael Zhan</h1>
          <h2 className="text-28 leading-tight">Harvard Computational Science and Engineering MSc Student</h2>
        </div>
        <div className="flex flex-col justify-center xs:w-full md:w-4/12 max-w-md">
          <img src="/img/headshot.jpg" className="rounded-full" />
        </div>
      </div>
      
      <div class="flex pb-80">
        <div className="mt-5">
          <p>Hi there! My name is Michael, and I'm currently pursuing a master's degree at Harvard in the CSE program. I did my undergrad at UT Austin in Chemical Engineering with a certificate in Computer Science. I'm interested in software engineering, web development, and data science. In my free time, I enjoy learning new things, rock climbing, and listening to music.</p>
      </div>
      </div>







      {/* <Container style={{paddingBottom: '80px'}}>
        <Row className='mb-4'>
          <Col xs={12} md={7} className='d-flex flex-column justify-content-center'>
            <h1><strong>Michael Zhan</strong></h1>
            <h2 style={{fontSize: '28px'}}>Harvard Computational Science and Engineering MSc Student</h2>
          </Col>
          <Col xs={12} md={5} className='d-flex flex-column justify-content-center'>
            <Image src='/img/headshot.jpg' roundedCircle fluid />
          </Col>
        </Row>
        <Row>
          <p>Hi there! My name is Michael, and I'm currently pursuing a master's degree at Harvard in the CSE program. I did my undergrad at UT Austin in Chemical Engineering with a certificate in Computer Science. I'm interested in software engineering, web development, and data science. In my free time, I enjoy learning new things, rock climbing, and listening to music.</p>
        </Row>
      </Container> */}
    </>
  )
}
