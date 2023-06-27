import { styled } from 'styled-components'

export const DefaultPageLayout = styled.div`
  min-height: 100vh;
  padding: 12px 24px;
  background-color: var(--color-grey-100);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`
