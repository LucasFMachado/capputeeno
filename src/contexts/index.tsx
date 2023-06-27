'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { FilterContextProvider } from './FilterContext'

interface IContextsProvidersProps {
  children: ReactNode
}

const theme = {
  tabletBreakpoint: '768px',
  desktopBreakpoint: '968px',
}

export function ContextsProviders({ children }: IContextsProvidersProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FilterContextProvider>{children}</FilterContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
