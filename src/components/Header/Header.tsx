'use client'

import { Saira_Stencil_One } from 'next/font/google'

import { useFilter } from '@/hooks/useFilter'

import { CartButton } from '../CartButton/CartButton'
import { SearchInput } from '../SearchInput/SearchInput'
import { HeaderComponent, Logo } from './Header.styles'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

export function Header() {
  const { search, setSearch } = useFilter()

  return (
    <HeaderComponent>
      <Logo href="/" className={sairaStencil.className}>
        Capputeeno
      </Logo>
      <div>
        <SearchInput
          value={search}
          handleChange={setSearch}
          placeholder="Looking for something specific?"
        />
        <CartButton />
      </div>
    </HeaderComponent>
  )
}
