import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(100%, 35vw);
    height: 50px;

    background-color: #fff;
    border: 1px solid ${theme.color.neutral.extraLight};
    border-radius: 100px;
  `}
`;

export const TextInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding-inline: 20px;
  border-radius: 100px;
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.color.primary.dark};
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `}
`;
