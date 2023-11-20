import ProjectExamples from './ProjectExamples.js'


export default function Projects () {
  return (
    <>
      <div className='flex flex-col'>
        <div className='mb-3'>
          <h1 className='text-[2.125rem] font-bold'>Projects</h1>
        </div>
      </div>


      <ProjectExamples />
      {/* <Container>
        <Row>
          <Col className='mb-3'>
            <h1><strong>Projects</strong></h1>
          </Col>
        </Row>
      </Container> */}
    </>
  )
}