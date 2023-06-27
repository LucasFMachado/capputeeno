'use client'

import { ChangeEvent } from 'react'
import { IoTrashOutline } from 'react-icons/io5'

import { CartProduct } from '@/types/products'
import { currencyFormatter } from '@/utils/currencyFormatter'

import { Card, SelectQuantity } from './CartItem.styles'

interface ICartItemProps {
  product: CartProduct
  updateQuantity: (id: string, quantity: number) => void
  deleteItem: (id: string) => void
}

export function CartItem({
  product,
  updateQuantity,
  deleteItem,
}: ICartItemProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    updateQuantity(product.id, Number(e.target.value))

  const handleDelete = () => {
    deleteItem(product.id)
  }

  return (
    <Card>
      <button onClick={handleDelete} aria-label="Remove cart item">
        <IoTrashOutline />
      </button>
      <img src={product.image_url} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <SelectQuantity value={product.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{currencyFormatter(product.price_in_cents)}</span>
        </div>
      </div>
    </Card>
  )
}
