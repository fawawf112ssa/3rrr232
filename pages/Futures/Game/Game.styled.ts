import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 1.5rem 2rem;

  @media (max-width: 1200px) {
    padding: 1rem;
  }

  @media (max-width: 1023px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  }
`;
