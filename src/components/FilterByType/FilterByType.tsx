'use client'

import { useFilter } from '@/hooks/useFilter'
import { FilterType } from '@/types/filterTypes'

import { FilterItem, FilterList } from './FilterByType.styles'

const options = [
  {
    key: FilterType.ALL,
    name: 'All',
  },
  {
    key: FilterType.SHIRT,
    name: 'T-shirts',
  },
  {
    key: FilterType.MUG,
    name: 'Mugs',
  },
]

export function FilterByType() {
  const { type, setType } = useFilter()

  const handleChangeType = (value: FilterType) => setType(value)

  return (
    <FilterList>
      {options.map(option => (
        <FilterItem
          key={option.key}
          onClick={() => handleChangeType(option.key)}
          selected={type === option.key}
        >
          {option.name}
        </FilterItem>
      ))}
    </FilterList>
  )
}
