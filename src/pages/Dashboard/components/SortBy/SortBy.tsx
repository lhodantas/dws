import React, { useState } from "react";

import { IconUpDown } from "components/Icons";

import * as S from "./SortBy.styles";

export enum ESortBy {
  DES = "Newest first",
  ASC = "Oldest first",
}

interface ISortByProps {
  sortBy: ESortBy;
  setSortBy: React.Dispatch<React.SetStateAction<ESortBy>>;
  handleSort: () => void;
}

export const SortBy = ({ setSortBy, sortBy, handleSort }: ISortByProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickOnMenuItem = (
    sortType: ESortBy,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    setSortBy(sortType);
    setShowMenu(false);
    handleSort();
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.Text>Sort by:</S.Text>
      <S.Sort onClick={toggleMenu}>
        {sortBy} <IconUpDown />
        {showMenu && (
          <S.SortMenu>
            {Object.values(ESortBy).map((sortType) => (
              <S.SortChild
                key={sortType}
                onClick={(e) => handleClickOnMenuItem(sortType, e)}
              >
                {sortType} <IconUpDown />
              </S.SortChild>
            ))}
          </S.SortMenu>
        )}
      </S.Sort>
    </S.Wrapper>
  );
};
