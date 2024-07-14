import styled from 'styled-components';

import { fontStyleMediumBold } from 'styles/typography';

export const Title = styled.h2`
  ${fontStyleMediumBold}
`;

export const ContentWrap = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  opacity: 0.7;
`;
