import styled, { css } from "styled-components";

interface IDropdownItemProps {
  selected: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Filter = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-size: ${theme.typography.bodyLarge.sizeRem};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight[1]};
    color: ${theme.color.secondary.medium};
    background-color: transparent;
    border: none;
    cursor: pointer;

    padding: 8px 16px;
    border: 1px solid ${theme.color.secondary.medium};
    border-radius: 100px;

    &:hover {
      background-color: ${theme.color.secondary.medium}0D;
    }
  `}
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  background: ${({ theme }) => theme.color.neutral.lightest};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  z-index: 10;
  max-height: 400px;
  overflow-y: auto;
  padding: 8px;

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

export const DropdownItem = styled.div<IDropdownItemProps>`
  ${({ theme, selected }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 100px;
    padding: 8px 16px;

    ${selected &&
    css`
      border-color: ${theme.color.secondary.medium};
      background-color: ${theme.color.secondary.medium}0D;
      font-weight: ${theme.typography.bodyLarge.weight[1]};
      color: ${theme.color.secondary.medium};
    `}
  `}
`;
