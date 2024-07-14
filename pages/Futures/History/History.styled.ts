import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 1.5rem 2rem;
  overflow: auto;

  @media (max-width: 1200px) {
    background: none;
    border-radius: none;
    border: none;
    padding: 0;
  }

  @media (max-width: 1023px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  }
`;
