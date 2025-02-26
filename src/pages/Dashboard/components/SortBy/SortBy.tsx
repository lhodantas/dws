import React, { useEffect, useRef, useState } from "react";

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

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOnMenuItem = (
    sortType: ESortBy,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    setSortBy(sortType);
    setShowMenu(false);
    handleSort();
  };

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Text>Sort by:</S.Text>
      <S.Sort onClick={(e) => toggleMenu(e)}>
        {sortBy} <IconUpDown />
        {showMenu && (
          <S.SortMenu ref={menuRef}>
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
