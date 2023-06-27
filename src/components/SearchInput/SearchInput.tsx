'use client'

import { InputHTMLAttributes } from 'react'
import { MdSearch } from 'react-icons/md'

import { Container, Input } from './SearchInput.styles'

interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
}

export function SearchInput(props: ISearchInputProps) {
  return (
    <Container>
      <Input onChange={e => props.handleChange(e.target.value)} {...props} />
      <MdSearch />
    </Container>
  )
}
