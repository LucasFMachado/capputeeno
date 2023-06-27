'use client'

import { BackButton } from '@/components/BackButton/BackButton'
import { CartItem } from '@/components/CartItem/CartItem'
import { DefaultPageLayout } from '@/components/DefaultPageLayout/DefaultPageLayout'
import { Divider } from '@/components/Divider/Divider'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartProduct } from '@/types/products'
import { DELIVERY_FEE_IN_CENTS } from '@/utils/constants'
import { currencyFormatter } from '@/utils/currencyFormatter'

import {
  AmountItem,
  CartContainer,
  CartList,
  CartListContainer,
  CartSummaryContainer,
  CompleteOrderButton,
} from './styles'

export default function Cart() {
  const { cartItems, updateLocalStorage } = useLocalStorage('@cart-items', [])

  const calculateTotal = (value: CartProduct[]) => {
    return value.reduce(
      (sum, product) => (sum += product.price_in_cents * product.quantity),
      0,
    )
  }

  const cartTotal = currencyFormatter(calculateTotal(cartItems))
  const cartTotalWithDelivery = currencyFormatter(
    calculateTotal(cartItems) + DELIVERY_FEE_IN_CENTS,
  )

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = cartItems.map(product => {
      if (product.id !== id) {
        return product
      }

      return { ...product, quantity }
    })

    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    const newValue = cartItems.filter(product => product.id !== id)
    updateLocalStorage(newValue)
  }

  return (
    <DefaultPageLayout>
      <CartContainer>
        <CartListContainer>
          <BackButton navigate="/" />
          <h3>Your cart</h3>
          <p>
            {cartItems.length} products - <span>{cartTotal}</span>
          </p>
          <CartList>
            {cartItems?.map(product => (
              <CartItem
                key={product.id}
                product={product}
                updateQuantity={handleUpdateQuantity}
                deleteItem={handleDeleteItem}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartSummaryContainer>
          <h3>Order summary</h3>
          <AmountItem>
            <p>Product subtotal</p>
            <p>{cartTotal}</p>
          </AmountItem>
          <AmountItem>
            <p>Delivery</p>
            <p>{currencyFormatter(DELIVERY_FEE_IN_CENTS)}</p>
          </AmountItem>
          <Divider />
          <AmountItem isBold>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </AmountItem>
          <CompleteOrderButton>Checkout</CompleteOrderButton>
        </CartSummaryContainer>
      </CartContainer>
    </DefaultPageLayout>
  )
}
