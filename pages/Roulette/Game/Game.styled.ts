import { diamondIcon, gameUserIcon, pointerIcon } from 'constants/images';
import styled, { css } from 'styled-components';
import { colors } from 'styles/colors';
import { fontStyleLargeBold, fontStyleSmallBold, fontStyleXSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  overflow: auto;

  @media (max-width: 1024px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  }
`;

export const InfoBlock = styled.div`
  padding: 0.8rem 2rem;
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;

  @media (max-width: 1200px) {
    padding: 0.8rem 1rem;
  }

  @media (max-width: 767px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
`;

export const LastGame = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.85rem;
  ${fontStyleSmallBold}

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    column-gap: 0rem;
    row-gap: 0.85rem;
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;

export const LastGameTitle = styled.p`
  opacity: 0.25;
  text-transform: uppercase;
`;

export const LastGameWrap = styled.div`
  display: flex;
  column-gap: 0.85rem;
`;

export const LastGameItem = styled.div`
  position: relative;
  padding-left: 1.7rem;

  ::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1.15rem;
    height: 1.15rem;
    border-radius: 50%;
  }

  &.blue {
    ::before {
      background: #00d1ff;
      border: 3px solid #261f43;
    }
  }
  &.orange {
    ::before {
      background: rgba(255, 92, 0, 1);
      border: 3px solid #212c40;
    }
  }

  &.purple {
    ::before {
      background: #bb29ff;
      border: 3px solid #261f43;
    }
  }
`;
export const Timer = styled.div`
  justify-self: center;
  text-align: center;
  height: 2rem;

  @media (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/3;
  }
`;

export const Time = styled.div`
  ${fontStyleLargeBold}
  color: ${colors.yellow100};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1rem 1fr;

  p {
    ${fontStyleLargeBold}
    :nth-child(1) {
      justify-self: end;
    }
    :nth-child(2) {
      justify-self: center;
    }
  }
`;

export const TimerText = styled.p`
  margin-top: 3px;
  ${fontStyleXSmallBold}
  opacity: 0.25;
  text-transform: uppercase;
`;

export const HistoryGame = styled.div`
  display: flex;
  column-gap: 0.28rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 767px) {
    align-items: flex-end;
  }

  div {
    width: 1.15rem;
    height: 1.15rem;
    border-radius: 50%;

    &.blue {
      background: #00d1ff;
      border: 3px solid #261f43;
    }
    &.orange {
      background: rgba(255, 92, 0, 1);
      border: 3px solid #212c40;
    }

    &.purple {
      background: #bb29ff;
      border: 3px solid #261f43;
    }
  }
`;

export const Roulette = styled.div`
  position: relative;
  padding: 1.5rem 2rem 0 2rem;

  @media (max-width: 1200px) {
    padding: 1.5rem 1rem 0 1rem;
  }
`;

export const RouletteWrap = styled.div`
  padding: 0.28rem 0;
  background: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  overflow: auto;

  @media (max-width: 767px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  }
`;

export const Pointer = styled.div`
  position: absolute;
  top: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 1.15rem;
  height: 1.5rem;
  background: url(${pointerIcon}) no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Slider = styled.div`
  position: relative;
  transform: translateX(-25px);
  display: inline-flex;
  align-items: center;
  column-gap: 0.28rem;
`;

export const Slide = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;

  ::before {
    position: absolute;
    content: '';
    width: 2.43rem;
    height: 2.43rem;
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

export const TransferBlock = styled.div`
  margin-top: 0.9rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1200px) {
    padding: 1rem 1rem;
  }

  @media (max-width: 1024px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrap = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.bgTertiary};
  border-radius: 50%;
  cursor: ${({ theme }) => theme.cursor};

  img {
    width: 1.6rem;
    height: 1.6rem;
  }

  &.active {
    border: 2px solid rgb(49, 93, 241);
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.7rem;
  justify-self: flex-end;
  grid-column: 3/4;

  @media (max-width: 479px) {
    column-gap: 1rem;
  }
`;

export const InGameUser = styled.p`
  padding-left: 1.7rem;
  position: relative;
  ${fontStyleXSmallBold}
  text-transform: uppercase;
  align-self: center;
  justify-self: center;

  ::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    width: 1.15rem;
    height: 1.15rem;
    background: url(${gameUserIcon}) no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const Label = styled.label`
  ${fontStyleXSmallBold}
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-left: 0.5rem;
  padding-left: 0.72rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: rgba(255, 255, 255, 0.05);
  height: 2rem;
  width: 6rem;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const criptoListCss = css`
  display: flex;
  column-gap: 0.3rem;
`;
