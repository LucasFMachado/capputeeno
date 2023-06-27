'use client'

import { useRouter } from 'next/navigation'
import { AiOutlineShopping } from 'react-icons/ai'

import { useLocalStorage } from '@/hooks/useLocalStorage'

import { CartBadge, CartContainer } from './CartButton.styles'

export function CartButton() {
  const router = useRouter()
  const { cartItems } = useLocalStorage('@cart-items', [])

  const handleNavigate = () => {
    router.push('/cart')
  }

  return (
    <CartContainer onClick={handleNavigate} disabled={cartItems.length === 0}>
      <AiOutlineShopping />
      {cartItems.length > 0 && <CartBadge>{cartItems.length}</CartBadge>}
    </CartContainer>
  )
}
