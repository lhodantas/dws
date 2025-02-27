import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.bodyLarge.sizeRem};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight[1]};
    color: ${theme.color.neutral.extraDark};

    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

export const Sort = styled.div`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px;

    border: none;
    background-color: transparent;
    font-size: ${theme.typography.bodyLarge.sizeRem};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight[0]};
    color: ${theme.color.neutral.extraDark};

    cursor: pointer;
  `}
`;

export const SortChild = styled(Sort)`
  ${({ theme }) => css`
    border-radius: 100px;
    width: 100%;
    transition: all 0.2s;

    &:hover {
      background-color: ${theme.color.accent.medium};
      color: #fff;

      svg path {
        fill: #fff;
      }
    }
  `}
`;

export const SortMenu = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: calc(-100% - 80px);
    left: -8px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    padding: 12px 8px;
    background-color: ${theme.color.neutral.lightest};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    width: max-content;
  `}
`;
