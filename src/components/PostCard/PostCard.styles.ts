import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    aspect-ratio: 0.74;
    overflow: hidden;
    background-color: ${theme.color.neutral.lightest};
  `}
`;

export const Thumbnail = styled.img`
  height: 46%;
  width: 100%;
  aspect-ratio: 1.6;
  border-radius: 16px 16px 0 0;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    height: 54%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;

    margin-top: -5px;
    padding: 16px;
    border-style: solid;
    border-width: 0 1px 1px 1px;
    border-color: ${theme.color.neutral.light};
    border-radius: 0 0 16px 16px;
  `}
`;

export const MetaData = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    font-size: ${theme.typography.caption.sizeRem};
    font-weight: ${theme.typography.caption.weight};
    line-height: ${theme.typography.caption.lineHeight};
    font-weight: ${theme.typography.caption.weight};
    color: ${theme.color.neutral.extraDark};
  `}
`;

export const Bullet = styled.div`
  ${({ theme }) => css`
    width: 5px;
    height: 5px;
    background-color: ${theme.color.secondary.medium};
    border-radius: 50%;
  `}
`;

export const MainText = styled.div`
  flex-grow: 1;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.typography.h3.sizeRem};
    font-weight: ${theme.typography.h3.weight};
    line-height: ${theme.typography.h3.lineHeight};
    font-weight: ${theme.typography.h3.weight};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: calc(2 * 1.2em);
    line-height: 1.2em;

    margin-bottom: 8px;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.bodySmall.sizeRem};
    font-weight: ${theme.typography.bodySmall.weight};
    line-height: ${theme.typography.bodySmall.lineHeight};
    font-weight: ${theme.typography.bodySmall.weight[0]};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: calc(2 * 1.2em);
    line-height: 1.2em;
  `}
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

export const Tag = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.color.neutral.extraLight};
    padding: 8px 12px;
    border-radius: 100px;

    font-size: ${theme.typography.caption.sizeRem};
    font-weight: ${theme.typography.caption.weight};
    line-height: ${theme.typography.caption.lineHeight};
    font-weight: ${theme.typography.caption.weight};
    color: ${theme.color.neutral.darkest};
  `}
`;
