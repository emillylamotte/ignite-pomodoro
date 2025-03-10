import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.gray8};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.white};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors.greenDark};
      }

      &.active {
        color: ${({ theme }) => theme.colors.greenDark};
      }
    }
  }
`
