'use client'

import { useProducts } from '@/hooks/useProducts'
import { Product } from '@/types/products'

import { ProductCard } from '../ProductCard/ProductCard'
import { ListContainer } from './ProductList.styles'

export function ProductsList() {
  const { data } = useProducts()

  return (
    <ListContainer>
      {data?.map((product: Product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        />
      ))}
    </ListContainer>
  )
}
