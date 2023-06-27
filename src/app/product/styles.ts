import { styled } from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    gap: 32px;
    width: 100%;

    img {
      max-width: 640px;
      width: 50%;
    }

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        background-color: var(--color-blue-900);
        border-radius: 4px;
        color: white;
        padding: 10px 0;
        text-align: center;
        font-weight: 500px;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        svg {
          height: 22px;
          width: 22px;
        }
      }
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    color: var(--color-grey-800);
    line-height: 150%;
    text-transform: uppercase;
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--color-grey-800);
    margin-top: 12px;
  }

  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 20px;
    color: var(--color-grey-900);
    margin-bottom: 12px;
  }

  p {
    font-size: 12px;
    color: var(--color-grey-700);
  }

  div {
    margin: 24px 0;

    h3 {
      text-transform: uppercase;
      color: var(--color-grey-700);
      font-weight: 500;
    }

    p {
      font-size: 14px;
      color: var(--color-grey-700);
    }
  }
`
