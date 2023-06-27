import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 250px;
  font-family: inherit;

  svg {
    position: absolute;
    right: 20px;
    font-size: 25px;
    height: 100%;
    color: var(--color-grey-700);
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    width: 352px;
  }
`

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  background-color: var(--color-grey-100);
  padding: 10px 16px;
  line-height: 20px;
  font-size: 12px;
  color: var(--color-grey-700);
  border: none;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`
