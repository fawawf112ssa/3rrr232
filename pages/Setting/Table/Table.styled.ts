import styled from 'styled-components';

import { fontStyleSmallBold, fontStyleXSmallNormal } from 'styles/typography';

interface ICountColumns {
  count: number;
}

export const StyledTable = styled.table<ICountColumns>`
  margin-top: 0.85rem;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(${({ count }) => count}, minmax(10.7rem, 1fr));
  ${fontStyleSmallBold}
  text-transform: uppercase;
  text-align: left;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;

  thead,
  tbody,
  tr {
    display: contents;
  }

  tbody tr {
    &.win td {
      background: rgba(34, 39, 48, 1);
    }
    &.lost td {
      background: rgba(41, 34, 45, 1);
    }
  }

  th {
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.order.lastIndex};
    background: ${({ theme }) => theme.colors.bgTertiary};
    color: rgba(255, 255, 255, 0.25);
    padding: 0 0.85rem 0.85rem 0.85rem;

    @media (max-width: 1200px) {
      padding-top: 0.85rem;
    }
  }

  td {
    padding: 0.72rem 0.85rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.02);

    span {
      :last-child {
        margin-top: 2px;
        ${fontStyleXSmallNormal}
        opacity: 0.5;
      }
    }
  }
`;
