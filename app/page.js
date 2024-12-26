export default function Home() {
  return (
    <>
      <div className="mb-4 flex flex-col md:flex-row flex-wrap items-center justify-between bg-main-bg">
        <div className="flex flex-col w-full md:w-7/12 mt-6 md:mt-3">
          <h1 className="text-4xl font-bold mb-md:mb-4">Michael Zhan</h1>
          <h2 className="text-2xl leading-tight mb-3">Harvard Computational Science and Engineering MSc Student</h2>
          <h3 className="leading-tight">
            <a href="https://www.linkedin.com/in/michaelzhan1/" className="hover:text-gray-500">[LinkedIn]</a>
            <a href="https://www.github.com/michaelzhan1/" className="hover:text-gray-500">[GitHub]</a>
          </h3>
        </div>
        <div className="flex flex-col justify-center w-[60%] md:w-[39%] mt-3 items-center">
          <img src="/img/headshot.jpg" className="rounded-full" />
        </div>
      </div>
    
      <div>
        <p>
          Hi there! My name is Michael, and I'm currently working as a SWE at Bloomberg. I graduated from UT Austin with a B.S. in Chemical Engineering and from Harvard with an M.S. in Computational Science and Engineering. In my free time, I enjoy browsing Amazon for things I shouldn't buy, rock climbing, and eating food.
        </p>
      </div>
    </>
  )
}
