import Link from 'next/link'

export default function About () {
  return (
    <>
      <div className="flex flex-col mt-4">
        <div className="mb-4">
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>
        <div>
          <p className="mb-3">Hi! I'm currently working as a SWE at Bloomberg in NYC as a recent graduate, with a passion for backend development. I got my B.S. from UT Austin in Chemical Engineering and my M.S. in Computational Science and Engineering at Harvard. I'm always exploring the software engineering and web development space to learn new things, and I've developed some small personal projects along the way to grow those skills.</p>
          <p className="mb-3">Through high school and college, coding was more of an interest to me; I would casually go through problems from repositories like Project Euler or Leetcode. In my junior year of college, I realized that I wanted to fully pursue a career in CS, and decided to pursue opportunities to realize that dream. I took internships at Genentech and Amazon, did academic research, and made some personal projects to help pivot my skillset into the CS area, and I'm happy to say that it's paid off.</p>
          <p className="mb-3">In terms of technologies, I learned Python and Java as my first two languages, then eventually learned JS and React for web development projects. Then through internships and coursework, I grew fairly proficient in C and C++. I'm currently looking to continue to learn other backend-focused languages such as Go and Rust.</p>
          <p className="mb-3">Some of my projects are linked in the <Link href="/projects" className="underline">Projects</Link> tab, and the rest are on my GitHub. They aren't super large projects, but they've helped me gain proficiency with different frameworks and general principles.</p>
        </div>
      </div>
    </>
  )
}