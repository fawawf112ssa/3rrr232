import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fontStyleXSmallBemiBold } from 'styles/typography';

export const Controls = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.85rem;

  @media (max-width: 1200px) {
    grid-row: 1/3;
    justify-content: center;
  }

  @media (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/3;
  }

  button {
    width: 7rem;
    height: 7rem;
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    ${fontStyleXSmallBemiBold}
    text-transform: uppercase;
    transition: ${({ theme }) => theme.transition};

    @media (max-width: 1200px) {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 767px) {
      padding: 1.5rem 0;
    }

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.25);
    }
  }

  p {
    margin-top: 0.3rem;
  }
`;

export const UpBtn = styled.button`
  border: 1px solid rgba(82, 171, 79, 0.15);
  background: rgba(82, 171, 79, 0.1);

  :hover {
    color: ${colors.green200};
  }
`;

export const DownBtn = styled.button`
  border: 1px solid rgba(233, 66, 53, 0.15);
  background: rgba(233, 66, 53, 0.1);

  :hover {
    color: ${colors.red100};
  }
`;
