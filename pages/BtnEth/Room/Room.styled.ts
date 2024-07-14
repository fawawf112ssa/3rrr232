import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fontStyleLargeBold, fontStyleSmallBold, fontStyleXSmallBold } from 'styles/typography';

export const GameWrap = styled.div`
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template-columns: 1fr 11rem 1fr;
  height: 100%;

  &.active-game {
    border: 1px solid rgba(91, 201, 87, 0.5);
  }

  &.my-room {
    border: 1px solid rgba(255, 55, 95, 0.3);
  }

  @media (max-width: 767px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  }
`;

export const GameControlBlock = styled.div`
  display: grid;
  grid-template: max-content 1fr / repeat(2, 1fr);
  padding: 1.5rem 1rem;

  &.right-side {
    justify-items: end;
  }

  &.userNull {
    grid-template: 1fr / 1fr;

    button {
      width: 100%;
    }
  }

  h2 {
    grid-column: 1/3;
    ${fontStyleSmallBold}
    text-transform: uppercase;
  }
`;

export const GameIcon = styled.div`
  margin-top: 0.85rem;
  position: relative;

  img {
    width: 1.43rem;
    height: 1.43rem;
    position: absolute;
    top: 0;
    left: 1.75rem;
  }

  &.right-side-icon {
    img {
      left: -0.4rem;
    }
  }
`;

export const UserLogo = styled.div<{ url: string | null }>`
  width: 2.85rem;
  height: 2.85rem;
  border-radius: 50%;
  background: ${({ url }) => (url !== null ? `url(${url}) no-repeat` : 'silver')};
  background-position: center;
  background-size: cover;
`;

export const GameControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.9rem;
  ${fontStyleSmallBold}

  button {
    margin-top: 0.2rem;
    padding: 0.29rem 0;
    width: 5.5rem;
    ${fontStyleSmallBold}
    background: ${({ theme }) => theme.colors.buttonPrimary};
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-transform: uppercase;

    &.join {
      background: ${colors.red100};
    }
  }

  &.right-side-control {
    align-items: flex-end;
  }
`;

export const GameInfo = styled.div`
  padding: 1.3rem 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.43rem;
  background: linear-gradient(216deg, #003b95 0%, #00d1ff 100%), var(--button, #315df1);
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  ${fontStyleXSmallBold}
  text-transform: uppercase;

  p.game-info {
    opacity: 0.5;
  }
  p:nth-child(2) {
    ${fontStyleLargeBold}
  }
  p:nth-child(3) {
    display: flex;
    align-items: center;
    column-gap: 0.43rem;

    span {
      display: inline-block;

      :nth-child(2) {
        padding: 0.29rem 0.45rem;
        border-radius: 0.29rem;
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
`;

export const Time = styled.div`
  ${fontStyleLargeBold}
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1rem 1fr;
  opacity: 1;

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
