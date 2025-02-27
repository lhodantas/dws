import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items: start;
  margin-bottom: 6%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ReturnButton = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 12px 16px;
    margin-top: 18px;

    font-size: ${theme.typography.bodyLarge.sizeRem};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight[1]};
    color: ${theme.color.secondary.medium};
    text-decoration: none;

    border: 1px solid ${theme.color.secondary.medium};
    border-radius: 100px;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: ${theme.color.secondary.dark};
      border-color: ${theme.color.secondary.dark};
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.typography.h1.sizeRem};
    line-height: ${theme.typography.h1.lineHeight};
    font-weight: ${theme.typography.h1.weight};

    @media (max-width: 768px) {
      font-size: ${theme.typography.h2.sizeRem};
      margin-top: 24px;
    }
  `}
`;

export const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 16px;
`;

export const AuthorAvatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

export const AuthorName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.bodyLarge.sizeRem};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight[0]};

    margin-bottom: 4px;

    strong {
      font-weight: ${theme.typography.bodyLarge.weight[1]};
    }
  `}
`;

export const PostDate = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.bodyLarge.sizeRem};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight[0]};
    color: ${theme.color.neutral.extraDark};
  `}
`;

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 16px;
  margin: 24px 0;
`;

export const Content = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.typography.bodyLarge.sizeRem};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight[0]};
  `}
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    margin-block: 48px 64px;
    background-color: ${theme.color.neutral.light};
  `}
`;

export const LatestTitle = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.typography.h2.sizeRem};
    line-height: ${theme.typography.h2.lineHeight};
    font-weight: ${theme.typography.h2.weight};
    margin-bottom: 32px;
  `}
`;
