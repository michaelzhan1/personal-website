import './globals.css'
import { Open_Sans } from 'next/font/google'
import CustomNavbar from 'components/CustomNavbar'
import CustomFooter from 'components/CustomFooter'

export const metadata = {
  title: 'Michael Zhan',
  description: "Hi there! My name is Michael, and I'm currently pursuing a master's degree at Harvard in the CSE program.",
}

const openSans = Open_Sans({
  weight: '300',
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-main-bg text-lg`}>
        <div className='main-body'>
          <div className='max-w-[650px] px-3 m-auto'>
            <CustomNavbar />
            {children}
          </div>
        </div>
        <CustomFooter />
      </body>
    </html>
  )
}
