import '@/styles/globals.css'

import { Saira } from 'next/font/google'

import { Header } from '@/components/Header/Header'
import { ContextsProviders } from '@/contexts'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Capputeeno',
  description: 'Find your ideal product here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <ContextsProviders>
          <Header />
          {children}
        </ContextsProviders>
      </body>
    </html>
  )
}
