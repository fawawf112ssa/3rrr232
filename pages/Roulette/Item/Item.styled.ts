import { diamondIcon } from 'constants/images';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  width: 80px;
`;

export const Row = styled.div`
  width: 70px;
  position: relative;
  margin-right: 10px;
`;

export const Slide = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;

  ::before {
    position: absolute;
    content: '';
    width: 45px;
    height: 45px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.blue {
    background: linear-gradient(
      180deg,
      rgba(148, 242, 255, 0.15) 0%,
      rgba(0, 59, 149, 0.15) 40.1%,
      rgba(0, 209, 255, 0.15) 100%
    );
    ::before {
      background: url(${diamondIcon.blue});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &.orange {
    background: linear-gradient(
      180deg,
      rgba(255, 92, 0, 0.15) 0%,
      rgba(255, 55, 95, 0.15) 43.43%,
      rgba(255, 92, 0, 0.15) 100%
    );
    ::before {
      background: url(${diamondIcon.orange});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  &.purple {
    background: linear-gradient(
      181deg,
      rgba(170, 65, 251, 0.15) 0%,
      rgba(65, 63, 203, 0.15) 43.23%,
      rgba(187, 41, 255, 0.15) 100%
    );
    ::before {
      background: url(${diamondIcon.purple});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;
