import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1% 4%;
    border-bottom: 2px solid ${theme.color.neutral.extraLight};
  `}
`;

export const Logo = styled.img`
  width: 14vw;
  height: auto;
`;
