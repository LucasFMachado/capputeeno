'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { currencyFormatter } from '@/utils/currencyFormatter'

import { Divider } from '../Divider/Divider'
import { Card, ProductInformation } from './ProductCard.styles'

interface IProductCardProps {
  id: string
  name: string
  image: string
  price: number
}

export function ProductCard({ id, name, image, price }: IProductCardProps) {
  const router = useRouter()

  const handleNavigate = () => {
    router.push(`/product?id=${id}`)
  }

  return (
    <Card onClick={handleNavigate}>
      <Image
        src={image}
        width={256}
        height={300}
        alt={`Product ${name} image`}
      />
      <ProductInformation>
        <h3>{name}</h3>
        <Divider />
        <p>{currencyFormatter(price)}</p>
      </ProductInformation>
    </Card>
  )
}
