import styled, { css } from "styled-components";

interface IFilterProps {
  selected: boolean;
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    border: 1px solid ${theme.color.neutral.extraLight};
    border-radius: 16px;
  `}
`;

export const IconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 24px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.typography.h2.sizeRem};
    line-height: ${theme.typography.h2.lineHeight};
    font-weight: ${theme.typography.h2.weight};
    color: ${theme.color.primary.dark};
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.typography.h3.sizeRem};
    line-height: ${theme.typography.h3.lineHeight};
    font-weight: ${theme.typography.h3.weight};
    color: ${theme.color.primary.dark};

    margin-bottom: 16px;
  `}
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Filter = styled.button<IFilterProps>`
  ${({ theme, selected }) => css`
    font-size: ${theme.typography.bodyLarge.sizeRem};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight[0]};
    color: ${theme.color.primary.dark};

    border: none;
    text-align: left;
    padding: 8px 12px;
    border-bottom: 1px solid ${theme.color.neutral.extraLight};
    cursor: pointer;
    transition: color 0.2s, font-weight 0.2s;

    &:hover {
      color: ${theme.color.accent.dark};
      font-weight: 700;
    }

    ${selected &&
    css`
      color: ${theme.color.accent.dark};
      border: 1px solid ${theme.color.accent.dark};
      font-weight: 700;
      border-radius: 8px;
    `}
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    border: none;
    text-align: center;

    background-color: ${theme.color.secondary.medium};
    transition: all 0.2s;
    padding-block: 12px;
    cursor: pointer;
    border-radius: 100px;

    font-size: ${theme.typography.bodyLarge.sizeRem};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight[1]};
    color: ${theme.color.neutral.lightest};

    &:hover {
      background-color: ${theme.color.secondary.dark};
    }
  `}
`;
