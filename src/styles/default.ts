import { createGlobalStyle } from "styled-components";

type DefaultStylesProps = Record<string, unknown>;

const DefaultStyles = createGlobalStyle<DefaultStylesProps>`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.color.primary.dark};
    background-color: ${({ theme }) => theme.color.neutral.lightest};
    height: 100vh;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default DefaultStyles;
