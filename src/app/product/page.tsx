'use client'

import { AiOutlineShopping } from 'react-icons/ai'

import { BackButton } from '@/components/BackButton/BackButton'
import { DefaultPageLayout } from '@/components/DefaultPageLayout/DefaultPageLayout'
import { useProduct } from '@/hooks/useProduct'
import { CartProduct } from '@/types/products'
import { DELIVERY_FEE_IN_CENTS } from '@/utils/constants'
import { currencyFormatter } from '@/utils/currencyFormatter'

import { ProductContainer, ProductInfo } from './styles'

interface IProductProps {
  searchParams: {
    id: string
  }
}

export default function Product({ searchParams }: IProductProps) {
  const { data } = useProduct(searchParams.id)

  const handleAddToCart = () => {
    const cartItems = localStorage.getItem('@cart-items')

    if (cartItems) {
      const cartItemsList = JSON.parse(cartItems)

      const existingProductIndex = cartItemsList.findIndex(
        (product: CartProduct) => product.id === searchParams.id,
      )

      if (existingProductIndex != -1) {
        cartItemsList[existingProductIndex].quantity += 1
      } else {
        cartItemsList.push({ ...data, quantity: 1, id: searchParams.id })
      }

      localStorage.setItem('@cart-items', JSON.stringify(cartItemsList))
    } else {
      const newCartItem = [{ ...data, quantity: 1, id: searchParams.id }]
      localStorage.setItem('@cart-items', JSON.stringify(newCartItem))
    }
  }

  return (
    <DefaultPageLayout>
      <ProductContainer>
        <BackButton navigate="/" />
        <section>
          <img src={data?.image_url} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{currencyFormatter(data?.price_in_cents ?? 0)}</span>
              <p>
                Free shipping for orders over{' '}
                {currencyFormatter(DELIVERY_FEE_IN_CENTS)}
              </p>
              <div>
                <h3>Description:</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button onClick={handleAddToCart}>
              <AiOutlineShopping />
              Add to cart
            </button>
          </div>
        </section>
      </ProductContainer>
    </DefaultPageLayout>
  )
}
