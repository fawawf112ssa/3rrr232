import styled from 'styled-components';

import { closeModalIcon } from 'constants/images';
import { fontStyleLargeBold, fontStyleSmallDemiBold } from './typography';

export const ButtonPrimary = styled.button`
  position: relative;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleSmallDemiBold}
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  transition: ${({ theme }) => theme.transition};

  ::after {
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    content: '';
    top: 50%;
    right: 0.85rem;
    transform: translateY(-50%);
    transition: ${({ theme }) => theme.transition};
  }
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 1.7rem;
  right: 1.7rem;
  width: 1.7rem;
  height: 1.7rem;
  background: url(${closeModalIcon}) no-repeat;
  background-position: center;
  background-size: contain;
`;
