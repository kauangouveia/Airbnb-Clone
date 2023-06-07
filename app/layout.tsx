import ClientOnly from './components/Client/ClientOnly'
import Modal from './components/Modals'
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
          <Modal isOpen />
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
