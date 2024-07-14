import { okBtnIcon } from 'constants/images';
import styled from 'styled-components';
import { ButtonPrimary } from 'styles/components';
import { fontStyleSmallDemiBold, fontStyleSmallNormal } from 'styles/typography';

interface MainProps {
  extended?: boolean;
}

export const Main = styled.main<MainProps>`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template-rows: ${({ extended }) => (extended ? 'auto 1fr auto' : '1fr auto')};
  overflow: hidden;

  @media (max-width: 1200px) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media (max-width: 1023px) {
    overflow: visible;
  }
`;

export const Logo = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  background: silver;
`;

export const Form = styled.form`
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
`;

export const FormTitle = styled.h2`
  ${fontStyleSmallDemiBold}
  text-transform: uppercase;
`;

export const InputWrap = styled.div`
  margin-top: 0.75rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.14rem;
  height: 3rem;
`;

export const Input = styled.input`
  padding-left: 0.85rem;
  background: ${({ theme }) => theme.colors.inputPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleSmallNormal}
`;

export const Button = styled(ButtonPrimary)`
  padding: 0px 0.85rem;

  ::after {
    background: url(${okBtnIcon}) no-repeat;
    background-size: contain;
    background-position: center;
    height: 1.25rem;
    width: 1.25rem;
  }

  :hover {
    padding: 0px 1.25rem;

    ::after {
      right: 1.25rem;
    }
  }
`;
