import styled from 'styled-components'

interface FilterItemProps {
  selected: boolean
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`

export const FilterItem = styled.li<FilterItemProps>`
  color: var(--color-grey-700);
  font-size: 12px;
  font-weight: ${props => (props.selected ? '600' : '400')};
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  border-bottom: ${props =>
    props.selected ? '4px solid var(--color-red-100)' : 'none'};

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 16px;
    line-height: 22px;
  }
`
