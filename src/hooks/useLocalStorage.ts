import { useEffect, useState } from 'react'

import { CartProduct } from '@/types/products'

export function useLocalStorage(item: string, initialValue: CartProduct[]) {
  const [cartItems, setCartItems] = useState(initialValue)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const cartItems = localStorage.getItem(item)
    if (cartItems) {
      setCartItems(JSON.parse(cartItems))
    }
  }, [window])

  const updateLocalStorage = (newValue: CartProduct[]) => {
    setCartItems(newValue)
    localStorage.setItem(item, JSON.stringify(newValue))
  }

  return {
    cartItems,
    updateLocalStorage,
  }
}
