import styled, { css } from "styled-components";

export const TBar = styled.div``;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.typography.h1.sizeRem};
    font-weight: ${theme.typography.h1.weight};
    line-height: ${theme.typography.h1.lineHeight};
    font-weight: ${theme.typography.h1.weight};
  `}
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: start;
  gap: 20px;
  margin-top: 32px;
`;
