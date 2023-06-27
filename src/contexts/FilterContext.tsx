'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

import { FilterPriority } from '@/types/filterPriority'
import { FilterType } from '@/types/filterTypes'

interface IFilterContextProps {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  page: number
  setPage: Dispatch<SetStateAction<number>>
  type: FilterType
  setType: Dispatch<SetStateAction<FilterType>>
  priority: FilterPriority
  setPriority: Dispatch<SetStateAction<FilterPriority>>
}

const FilterContext = createContext<IFilterContextProps>(
  {} as IFilterContextProps,
)

interface IFilterProviderProps {
  children: ReactNode
}

function FilterContextProvider({ children }: IFilterProviderProps) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [type, setType] = useState(FilterType.ALL)
  const [priority, setPriority] = useState(FilterPriority.POPULARITY)

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        page,
        setPage,
        type,
        setType,
        priority,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterContextProvider }
