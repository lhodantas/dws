import styled, { css } from "styled-components";

export const TBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 14px;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.typography.h1.sizeRem};
    line-height: ${theme.typography.h1.lineHeight};
    font-weight: ${theme.typography.h1.weight};

    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: start;
  gap: 20px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
