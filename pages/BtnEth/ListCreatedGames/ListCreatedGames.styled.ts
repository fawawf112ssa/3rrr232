import styled, { css } from 'styled-components';
import { fontStyleLargeBold, fontStyleSmallBold, fontStyleXSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 1.5rem 2rem;
  overflow: auto;

  @media (max-width: 1200px) {
    background: none;
    border-radius: 0;
    border: none;
    padding: 0;
  }
`;

export const listCreatedGamesCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.14rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    row-gap: 0.85rem;
  }
`;
