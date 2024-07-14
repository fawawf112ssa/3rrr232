import styled, { css } from 'styled-components';

import {
  fontStyleSmallBold,
  fontStyleXSmallBold,
  fontStyleXSmallNormal,
  fontStyleXXSmallBold,
} from 'styles/typography';

export const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  overflow: auto;

  @media (max-width: 1200px) {
    background: none;
    border-radius: none;
    border: none;
    padding: 0;
  }

  @media (max-width: 1024px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  }

  @media (max-width: 767px) {
    margin-top: 1rem;
  }
`;

export const ControlBlock = styled.div`
  height: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 7.75rem 1fr;
  justify-items: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  ${fontStyleXSmallBold}
  text-transform: uppercase;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  &.blue {
    background: linear-gradient(
      180deg,
      rgba(148, 242, 255, 0.15) 0%,
      rgba(0, 59, 149, 0.15) 40.1%,
      rgba(0, 209, 255, 0.15) 100%
    );

    button {
      background: linear-gradient(182deg, #94f2ff 0%, #00d1ff 100%);
    }
  }
  &.orange {
    background: linear-gradient(
      180deg,
      rgba(255, 92, 0, 0.15) 0%,
      rgba(255, 55, 95, 0.15) 43.43%,
      rgba(255, 92, 0, 0.15) 100%
    );

    button {
      background: linear-gradient(182deg, #ff5c00 0%, #ff5c00 100%);
    }
  }
  &.purple {
    background: linear-gradient(
      181deg,
      rgba(170, 65, 251, 0.15) 0%,
      rgba(65, 63, 203, 0.15) 43.23%,
      rgba(187, 41, 255, 0.15) 100%
    );

    button {
      background: linear-gradient(181deg, #aa41fb 0%, #bb29ff 100%);
    }
  }

  img {
    background-position: center;
  }
`;

export const InfoBlock = styled.div`
  overflow: auto;
  padding: 1.2rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Button = styled.button`
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${fontStyleSmallBold}
  text-transform: uppercase;
`;
export const Long = styled.p`
  ${fontStyleSmallBold}
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.7rem;
  ${fontStyleXSmallBold}
`;

export const InGameUser = styled.p`
  padding-left: 1.7rem;
  position: relative;
  text-transform: uppercase;

  ::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    width: 1.15rem;
    height: 1.15rem;
    border-radius: 50%;
  }

  &.purple::before {
    background: linear-gradient(202deg, #aa41fb 0%, #bb29ff 100%);
  }

  &.blue::before {
    background: #00d1ff;
  }
  &.orange::before {
    background: rgba(255, 92, 0, 1);
  }
`;

export const InGameAmount = styled.label`
  text-transform: uppercase;
`;

export const listRouletteData = css`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.25rem;
  height: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(20rem, 1fr));
    column-gap: 1rem;
  }

  li {
    overflow: auto;
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 0.85rem;

    @media (max-width: 767px) {
      grid-template-rows: 1fr;
    }
  }

  @media (max-width: 767px) {
    margin-top: 1rem;
  }
`;

export const UserName = styled.p`
  ${fontStyleSmallBold}
`;

export const UserAmount = styled.p`
  justify-self: flex-end;
  &.purple {
    color: #bb29ff;
  }

  &.blue {
    color: #00d1ff;
  }
  &.orange {
    color: rgba(255, 92, 0, 1);
  }
`;

export const UserCoin = styled.p`
  text-transform: uppercase;
  justify-self: center;
`;

export const listRouletteUserData = css`
  overflow: auto;
  margin-top: 0.5rem;

  li {
    display: grid;
    grid-template-columns: 2rem 2fr repeat(2, 1fr);
    align-items: center;
    padding: 0.72rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.02);
  }
`;

export const NoBids = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const NoBidsTitle = styled.p`
  margin-top: 0.6rem;
  ${fontStyleXSmallBold}
  opacity: 0.5;
`;

export const NoBidsSubtitle = styled.p`
  margin-top: 0.3rem;
  ${fontStyleXXSmallBold}
  opacity: 0.25;
`;

export const MobControls = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 1rem;
`;

export const MobButtonsWrap = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
`;

export const InputWrap = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Label = styled.label`
  position: relative;
  width: 5rem;
  ${fontStyleXSmallBold}
  text-transform: uppercase;
  width: 100%;
`;

export const Input = styled.input`
  margin-top: 0.6rem;
  width: 100%;
  height: 2.85rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.inputPrimary};
  ${fontStyleXSmallNormal}
  text-align: center;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
