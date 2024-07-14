import styled from 'styled-components';

import { colors } from 'styles/colors';
import {
  fontStyleSmallBold,
  fontStyleSmallDemiBold,
  fontStyleSmallNormal,
  fontStyleXSmallBold,
  fontStyleXXSmallNormal,
} from 'styles/typography';

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

export const HistoryBlock = styled.div`
  padding: 0.85rem 0 0.85rem 1.15rem;
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  overflow: hidden;

  @media (max-width: 1023px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  }
`;

export const Title = styled.h3`
  ${fontStyleSmallBold}
  text-transform: uppercase;
`;

export const HistoryList = styled.div`
  margin-top: 0.6rem;
  display: flex;
  column-gap: 0.4rem;
  color: ${colors.green200};
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;

interface HistoryItemProps {
  num: number;
}

export const HistoryItem = styled.div<HistoryItemProps>`
  padding: 0.5rem 0.8rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ num }) =>
    num <= 1.2
      ? 'rgba(255, 55, 95, 0.15)'
      : num <= 1.7
      ? 'rgba(49, 93, 241, 0.15)'
      : num <= 4
      ? 'rgba(170, 65, 251, 0.15)'
      : 'rgba(91, 201, 87, 0.15)'};

  color: ${({ num }) =>
    num <= 1.2
      ? 'rgba(255, 55, 95, 1)'
      : num <= 1.7
      ? 'rgba(49, 93, 241, 1)'
      : num <= 4
      ? 'rgba(170, 65, 251, 1)'
      : 'rgba(91, 201, 87, 1)'};
`;

export const TableWrap = styled.div`
  margin-top: 1.15rem;

  @media (max-width: 1023px) {
    margin-top: 0.85rem;
    max-height: 30rem;
    overflow: auto;
  }
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
`;

export const UserLogo = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  padding: 0.21rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const UserName = styled.div`
  padding-left: 0.72rem;
  ${fontStyleSmallNormal}
`;

export const Params = styled.div`
  padding-left: 2.36rem;
  display: flex;
  flex-direction: column;

  span {
    ${fontStyleXXSmallNormal}
    text-transform: uppercase;

    :last-child {
      margin-top: 0.21rem;
      ${fontStyleSmallDemiBold}
    }
  }
`;

export const Result = styled.div`
  margin-left: auto;
  padding: 0.4rem 0.72rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: rgba(91, 201, 87, 0.15);
  color: ${colors.green200};
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;
