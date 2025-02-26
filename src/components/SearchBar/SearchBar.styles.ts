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

export const Dropdown = styled.div`
  position: absolute;
  top: 56px;
  left: 16px;
  width: calc(100% - 32px);

  background: white;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
`;
