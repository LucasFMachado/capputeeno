import { styled } from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    font-size: 12px;
    font-family: inherit;
    color: var(--color-grey-700);
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
      font-size: 16px;
      line-height: 22px;
      gap: 16px;
    }
  }
`

export const FilterOptions = styled.ul`
  position: absolute;
  background-color: white;
  padding: 12px 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  width: 200px;
  top: 100%;
  right: 5px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 999;

  li {
    color: var(--color-grey-700);
    line-height: 22px;
    cursor: pointer;
  }
`
