import { css } from 'styled-components';

export const mainMediaSize = css`
  @media (max-width: 1920px) {
    grid-template-columns: 22rem 1fr 22rem;
  }

  @media (max-width: 1650px) {
    column-gap: 1.5rem;
  }

  @media (max-width: 1500px) {
    grid-template-columns: 20rem 1fr 20rem;
    column-gap: 1rem;
  }
`;

export const mainMediaPadding = css`
  @media (max-width: 1500px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
