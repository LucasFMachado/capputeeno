'use client'

import { FilterByPriority } from '../FilterByPriority/FilterByPriority'
import { FilterByType } from '../FilterByType/FilterByType'
import { Container } from './FilterBar.styles'

export function FilterBar() {
  return (
    <Container>
      <FilterByType />
      <FilterByPriority />
    </Container>
  )
}
