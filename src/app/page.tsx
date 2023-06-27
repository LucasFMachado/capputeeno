'use client'

import { DefaultPageLayout } from '@/components/DefaultPageLayout/DefaultPageLayout'
import { FilterBar } from '@/components/FilterBar/FilterBar'
import { ProductsList } from '@/components/ProductList/ProductList'

import { PageWrapper } from './styles'

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  )
}
