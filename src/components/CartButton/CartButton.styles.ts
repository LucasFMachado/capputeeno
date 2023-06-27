import styled from 'styled-components'

export const CartContainer = styled.button`
  position: relative;
  color: var(--color-grey-700);

  svg {
    font-size: 40px;
  }
`

export const CartBadge = styled.span`
  width: 20px;
  height: 20px;
  color: white;
  background-color: var(--color-red-900);
  border-radius: 50%;
  margin-left: -10px;
  font-size: 10px;
  position: absolute;
  position: absolute;
  bottom: 0;
  right: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
`
