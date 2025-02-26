import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1% 4%;
    border-bottom: 2px solid ${theme.color.neutral.extraLight};

    @media (max-width: 768px) {
      padding: 2% 4%;
    }
  `}
`;

export const Logo = styled.img`
  width: 14vw;
  height: auto;

  @media (max-width: 768px) {
    width: 50%;
  }
`;
