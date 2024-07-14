import styled, { css } from 'styled-components';

import {
  settingIcon,
  infoIcon,
  card,
  chipIcon,
  copyIcon,
  shield,
  shieldIcon,
  inputBtnIcon,
} from 'constants/images';
import {
  fontStyleMediumBold,
  fontStyleSmallDemiBold,
  fontStyleXSmallBemiBold,
  fontStyleXSmallBold,
  fontStyleXSmallNormal,
} from 'styles/typography';
import { mainMediaPadding } from 'styles/fragments';
import { ButtonPrimary } from 'styles/components';

export const Main = styled.main`
  overflow: auto;
  padding-top: 1.5rem;
  margin-bottom: 0.85rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template-rows: auto 1fr;

  @media (max-width: 1200px) {
    background: none;
    border-radius: 0;
    border: none;
    padding-top: 1rem;
  }
`;

export const Title = styled.h2`
  margin-left: 2rem;
  padding-left: 1.5rem;
  position: relative;
  ${fontStyleMediumBold}

  @media (max-width: 1500px) {
    margin-left: 1.5rem;
  }

  @media (max-width: 1200px) {
    margin-left: 0rem;
  }

  ::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    width: 1.15rem;
    height: 1.15rem;
    background: url(${settingIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const Wrapper = styled.div`
  overflow: auto;
  padding: 1.5rem 2rem;
  margin-top: 1.2rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 1.15rem;

  ${mainMediaPadding}

  @media (max-width: 1200px) {
    background: none;
    border-radius: none;
    padding: 1.5rem 0 0 0;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template: 80px auto 2.86rem / 1fr 2fr;
  gap: 1.15rem;

  @media (max-width: 767px) {
    grid-template: repeat(4, auto) / 1fr;
    column-gap: 0rem;
    height: auto;
  }
`;

export const InputFileWrapp = styled.div`
  align-self: center;
  justify-self: center;
  overflow: hidden;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;

  grid-row: 1/2;
  grid-column: 1/2;
`;

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  opacity: 0;
  cursor: ${({ theme }) => theme.cursor};
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  object-fit: cover;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* row-gap: 1.3rem; */
  row-gap: 1rem;

  grid-row: 2/3;
  grid-column: 1/2;

  @media (max-width: 767px) {
    grid-row: 3/4;
    grid-column: 1/2;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  ${fontStyleXSmallBold}
  text-transform: uppercase;

  p {
    span {
      margin-left: 0.36rem;
      display: inline-block;
      width: 0.85rem;
      height: 0.85rem;
      background: url(${infoIcon}) no-repeat;
      background-size: contain;
      background-position: center;
      cursor: ${({ theme }) => theme.cursor};
    }
  }
`;

export const Input = styled.input`
  height: 2.86rem;
  padding-left: 0.85rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.inputPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-variant-numeric: lining-nums proportional-nums;
  ${fontStyleSmallDemiBold}
`;

export const InfoBlock = styled.div`
  background: url(${card}) no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid rgba(255, 255, 255, 0.02);
  display: grid;
  grid-template: 6rem 1fr / 1fr;

  grid-row: 1/3;
  grid-column: 2/3;

  @media (max-width: 767px) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;

export const UserInfo = styled.div`
  position: relative;
  padding: 0 1.15rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid rgba(255, 255, 255, 0.02);
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 1.7rem;

  ::before {
    position: absolute;
    top: 50%;
    left: 1.15rem;
    transform: translateY(-50%);
    content: '';
    width: 3rem;
    height: 2.14rem;
    background: url(${chipIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }

  @media (max-width: 767px) {
    background: ${({ theme }) => theme.colors.buttonPrimary};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const UserInfoTitle = styled.p`
  ${fontStyleXSmallNormal}
  text-transform: uppercase;
`;

export const UserInfoSubtitle = styled.p`
  margin-top: 0.15rem;
  ${fontStyleSmallDemiBold}
  text-transform: uppercase;
  display: flex;
  column-gap: 0.6rem;
`;

export const ReferalInfo = styled.div`
  padding: 0 1.15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 767px) {
    height: 9rem;
  }
`;

export const ReferalWrap = styled.div`
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  align-items: center;
`;

export const ReferalText = styled.div`
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;

export const ReferalHref = styled.div`
  position: relative;
  height: 2.85rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.85rem;
  ${fontStyleXSmallBold}
  cursor: ${({ theme }) => theme.cursor};

  ::after {
    position: absolute;
    content: '';
    top: 50%;
    right: 0.85rem;
    transform: translateY(-50%);
    width: 1.3rem;
    height: 1.3rem;
    background: url(${copyIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const ReferalLabel = styled.label`
  position: relative;
  height: 2.85rem;
`;

export const ReferalInput = styled.input`
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0 0.85rem;
  ${fontStyleXSmallBold}
`;

export const ReferalButton = styled.button`
  position: absolute;
  right: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.2rem;
  height: 1.2rem;
  background: url(${inputBtnIcon}) no-repeat;
  background-position: center;
  background-size: contain;
`;

export const ReferalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'AberMono';
  ${fontStyleMediumBold}

  img {
    width: 4.28rem;
    height: 1.2rem;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const ControlBlock = styled.div`
  grid-row: 3/4;
  grid-column: 1/4;

  @media (max-width: 767px) {
    grid-column: 1/2;
    grid-row: 5/6;
    height: 2.86rem;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  ${fontStyleXSmallBemiBold}
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.72rem;
`;

export const TableBlock = styled.div`
  overflow: auto;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid rgba(255, 255, 255, 0.02);

  @media (max-width: 1200px) {
    border: none;
  }
`;

export const Tabs = styled.div`
  padding: 0.85rem;
  display: flex;
  column-gap: 8px;

  @media (max-width: 1200px) {
    padding: 0.85rem 0;
  }
`;

export const TabBtn = styled.button`
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleXSmallBold}
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  padding: 0.72rem 0.8rem;

  &.active {
    background: ${({ theme }) => theme.colors.buttonPrimary};
  }
`;

export const CardBlock = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const Select = styled.select`
  width: 13rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
`;

export const cardListCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 0.65rem;
`;

export const CardWrap = styled.div`
  margin-top: 1rem;
`;

export const Card = styled.div`
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template: repeat(2, auto) / repeat(2, 1fr);
  column-gap: 0.5rem;
  text-transform: uppercase;

  h2 {
    padding-top: 0.25rem;
    ${fontStyleSmallDemiBold}
  }

  p {
    ${fontStyleXSmallBemiBold}
    opacity: 0.5;
  }
`;

export const CardId = styled.div`
  padding: 0.5rem 0;
`;

export const CardDate = styled.div`
  align-self: center;
  justify-self: end;
`;

export const CardWallet = styled.div`
  position: relative;
  padding: 0.75rem 0.85rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  overflow: hidden;

  ::after {
    position: absolute;
    content: '';
    right: -1.2rem;
    bottom: -1rem;
    width: 4.75rem;
    height: 4.75rem;
    background: url(${shield}) no-repeat;
  }

  h2 {
    display: flex;
    justify-content: center;

    span {
      display: inline-block;
      position: relative;
      padding-left: 1.5rem;

      ::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background: url(${shieldIcon}) no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
  }
`;

export const CardAmount = styled.div`
  padding: 0.75rem 0.85rem;
  text-align: center;
  /* background-color: #282e35; */
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid #22222d;

  &.win {
    background: #282e35;
  }
  &.lost {
    background: rgba(41, 34, 45, 1);
  }
`;

export const UpdatePassBtn = styled(ButtonPrimary)`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  ${fontStyleXSmallBemiBold}
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.72rem;
`;
