export default function Home() {
  return (
    <>
      <div className="mb-4 flex flex-col md:flex-row flex-wrap items-center justify-between bg-main-bg">
        <div className="flex flex-col w-full md:w-7/12 mt-6 md:mt-3">
          <h1 className="text-4xl font-bold mb-md:mb-4">Michael Zhan</h1>
          <h2 className="text-2xl leading-tight">Harvard Computational Science and Engineering MSc Student</h2>
        </div>
        <div className="flex flex-col justify-center w-[60%] md:w-[39%] mt-3 items-center">
          <img src="/img/headshot.jpg" className="rounded-full" />
        </div>
      </div>
    
      <div>
        <p>Hi there! My name is Michael, and I'm currently pursuing a master's degree at Harvard in the CSE program. I did my undergrad at UT Austin in Chemical Engineering with a certificate in Computer Science. I'm interested in software engineering, web development, and data science. In my free time, I enjoy learning new things, rock climbing, and listening to music.</p>
      </div>
    </>
  )
}
