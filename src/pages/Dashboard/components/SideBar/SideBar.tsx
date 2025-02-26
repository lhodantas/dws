import { IconFilters } from "components/Icons";

import { ICategoryDto, IAuthorDto } from "services/dws-api/dtos/outputs";

import * as S from "./SideBar.styles";

interface ISideBarProps {
  authors: IAuthorDto[];
  categories: ICategoryDto[];
  toggleAuthorFilter: (authorId: string) => void;
  selectedAuthorsFilter: string[];
  toggleCategoryFilter: (categoryId: string) => void;
  selectedCategoriesFilter: string[];
  handleFilters: () => void;
}

export const SideBar = ({
  authors,
  categories,
  toggleAuthorFilter,
  selectedAuthorsFilter,
  toggleCategoryFilter,
  selectedCategoriesFilter,
  handleFilters,
}: ISideBarProps) => {
  function getLastName(fullName: string) {
    const nameParts = fullName.trim().split(/\s+/);
    return nameParts.length > 1
      ? nameParts[nameParts.length - 1]
      : nameParts[0];
  }
  return (
    <S.Wrapper>
      <S.IconTitle>
        <IconFilters size={30} />
        <S.Title>Filters</S.Title>
      </S.IconTitle>
      <S.Subtitle>Category</S.Subtitle>
      <S.FilterWrapper>
        {categories.map((category) => (
          <S.Filter
            key={category.id}
            onClick={() => toggleCategoryFilter(category.id)}
            selected={selectedCategoriesFilter.includes(category.id)}
          >
            {category.name}
          </S.Filter>
        ))}
      </S.FilterWrapper>
      <S.Subtitle>Author</S.Subtitle>
      <S.FilterWrapper>
        {authors.map((author) => (
          <S.Filter
            key={author.id}
            onClick={() => toggleAuthorFilter(author.id)}
            selected={selectedAuthorsFilter.includes(author.id)}
          >
            {getLastName(author.name)}
          </S.Filter>
        ))}
      </S.FilterWrapper>
      <S.Button onClick={handleFilters}>Apply Filters</S.Button>
    </S.Wrapper>
  );
};
