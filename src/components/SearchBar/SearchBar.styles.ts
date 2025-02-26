import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  min-width: 25vw;
`;

export const InputWrapper = styled(Wrapper)`
  ${({ theme }) => css`
    position: relative;
    background-color: #fff;
    border: 1px solid ${theme.color.neutral.extraLight};
    border-radius: 100px;

    @media (max-width: 768px) {
      padding-inline: 16px;
      gap: 8px;
    }
  `}
`;

export const MobileWrapper = styled(Wrapper)`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const FullSearchBar = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0%;

    width: 100%;
    height: 100%;
    padding: 2% 4%;

    background-color: ${theme.color.neutral.lightest};
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

export const ClearButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
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

    @media (max-width: 768px) {
      position: relative;
    }
  `}
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 56px;
  left: 16px;
  width: calc(100% - 32px);

  background: ${({ theme }) => theme.color.neutral.lightest};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.neutral.dark};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 10px;
    border-radius: 10px;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.neutral.extraLight};
  }
`;
