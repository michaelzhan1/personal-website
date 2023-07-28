import './globals.css'
import CustomNavbar from 'components/CustomNavbar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomNavbar />
        {children}
      </body>
    </html>
  )
}
