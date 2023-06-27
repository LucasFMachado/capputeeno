import { styled } from 'styled-components'

export const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
  position: relative;

  button {
    position: absolute;
    top: 16px;
    right: 24px;

    svg {
      height: 20px;
      width: 20px;
      color: red;
    }
  }

  img {
    max-height: 100%;
    width: 256px;
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;

    padding: 16px 24px;
    color: var(--color-grey-800);
    line-height: 150%;

    h4 {
      font-weight: 300;
      font-size: 22px;
    }

    p {
      font-size: 12px;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      span {
        font-weight: 600;
        color: var(--color-grey-900);
      }
    }
  }
`

export const SelectQuantity = styled.select`
  padding: 8px;
  border: 1px solid var(--color-grey-500);
  border-radius: 8px;
  background-color: var(--color-grey-100);
  color: var(--color-grey-700);
`
