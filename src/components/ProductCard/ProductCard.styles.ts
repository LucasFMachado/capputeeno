import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  width: 256px;
  cursor: pointer;
`

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 8px 16px;
  width: 100%;

  h3 {
    font-weight: 300;
    line-height: 150%;
    color: var(--color-grey-800);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-grey-900);
  }
`
