import { styled } from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`

export const CartListContainer = styled.div`
  margin-top: 24px;

  h3 {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-grey-800);
  }

  p {
    font-weight: 300;
    line-height: 150%;
    color: var(--color-grey-800);

    span {
      font-weight: 600;
    }
  }
`

export const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`

export const CartSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: white;
  min-width: 300px;
  padding: 16px 24px;

  h3 {
    font-size: 22px;
    font-weight: 600;
    color: var(--color-grey-800);
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`

export const AmountItem = styled.div<{ isBold?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
  font-weight: ${props => (props.isBold ? 600 : 400)};
`

export const CompleteOrderButton = styled.button`
  color: white;
  border-radius: 4px;
  background-color: var(--color-green-900);
  width: 100%;
  padding: 12px 12px;
  text-transform: uppercase;
  margin-top: 24px;
`
