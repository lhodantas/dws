import { IconSearch } from "components/Icons";

import * as S from "./SearchBar.styles";

export const SearchBar = () => {
  return (
    <S.Wrapper>
      <S.TextInput type="text" placeholder="Search" />
      <S.IconWrapper>
        <IconSearch color="#fff" size={25} />
      </S.IconWrapper>
    </S.Wrapper>
  );
};
