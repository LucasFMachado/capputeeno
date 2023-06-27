import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { useDeferredValue } from 'react'

import { ProductsFetchResponse } from '@/types/products'
import { mountQuery } from '@/utils/setRequestFilters'

import { useFilter } from './useFilter'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query })
}

export function useProducts() {
  const { type, priority, search } = useFilter()
  const searchDeferred = useDeferredValue(search)
  const query = mountQuery(type, priority)

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority],
    staleTime: 1000 * 60 * 1, // 1 minute
  })

  const allProducts = data?.data?.data?.allProducts
  const filtredProducts = allProducts?.filter(product =>
    product.name
      .toLocaleLowerCase()
      .includes(searchDeferred.toLocaleLowerCase()),
  )

  return {
    data: filtredProducts,
  }
}
