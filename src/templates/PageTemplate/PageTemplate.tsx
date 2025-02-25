import { Header } from "components/Header";

import * as S from "./PageTemplate.styles";

interface PageTemplateProps {
  children: React.ReactNode;
}

export const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
