import logo from "assets/logo.png";
import { SearchBar } from "components/SearchBar";

import * as S from "./Header.styles";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo src={logo} alt="DWS" />
      <SearchBar />
    </S.Wrapper>
  );
};
