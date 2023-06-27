import styled from 'styled-components'

export const CartContainer = styled.button`
  position: relative;
  color: var(--color-grey-700);
  width: 40px;

  svg {
    font-size: 30px;
  }

  @media (min-width: ${props => props.theme.tabletBreakpoint}) {
    width: 50px;

    svg {
      font-size: 35px;
    }
  }
`

export const CartBadge = styled.span`
  width: 15px;
  height: 15px;
  color: white;
  background-color: var(--color-red-900);
  border-radius: 50%;
  margin-left: -10px;
  font-size: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${props => props.theme.tabletBreakpoint}) {
    width: 17px;
    height: 17px;
    margin-left: -10px;
    font-size: 10px;
    right: 3px;
  }
`
