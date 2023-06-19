import ClientOnly from './components/Client/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import NavBar from './components/NavBar'
import './globals.css'
import { Nunito } from 'next/font/google'


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}
const nunito = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <RegisterModal />
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
