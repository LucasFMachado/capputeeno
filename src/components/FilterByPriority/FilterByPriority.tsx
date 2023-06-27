'use client'

import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { useFilter } from '@/hooks/useFilter'
import { FilterPriority } from '@/types/filterPriority'

import { FilterContainer, FilterOptions } from './FilterByPriority.styles'

const options = [
  {
    name: 'News',
    key: FilterPriority.NEWS,
  },
  {
    name: 'Biggest price',
    key: FilterPriority.BIGGEST_PRICE,
  },
  {
    name: 'Lower price',
    key: FilterPriority.LOWER_PRICE,
  },
  {
    name: 'Popularity',
    key: FilterPriority.POPULARITY,
  },
]

export function FilterByPriority() {
  const { setPriority } = useFilter()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(!isOpen)

  const handleUpdatePriority = (value: FilterPriority) => setPriority(value)

  return (
    <FilterContainer onClick={handleOpen}>
      <button>
        Order by
        <MdKeyboardArrowDown />
      </button>
      {isOpen && (
        <FilterOptions>
          {options.map(option => (
            <li
              key={option.key}
              onClick={() => handleUpdatePriority(option.key)}
            >
              {option.name}
            </li>
          ))}
        </FilterOptions>
      )}
    </FilterContainer>
  )
}
