import { useEffect, useState } from "react";

import { PostList } from "components/PostList";
import { useFilters } from "contexts/FiltersContext";
import { useWindowSize } from "hooks/useWindowSize";
import { PageTemplate } from "templates/PageTemplate/PageTemplate";
import { useGetAuthors } from "services/dws-api-react-query/useGetAuthors";
import { useGetCategories } from "services/dws-api-react-query/useGetCategories";
import { useGetPosts } from "services/dws-api-react-query/useGetPosts";
import { IPostDto } from "services/dws-api/dtos/outputs";

import { SideBar, SortBy, ESortBy, MobileFilters } from "./components";
import * as S from "./Dashboard.styles";

export const Dashboard = () => {
  const {
    selectedAuthors,
    selectedCategories,
    toggleAuthor,
    toggleCategory,
    clearFilters,
    filteredPosts,
  } = useFilters();

  const [shownPosts, setShownPosts] = useState<IPostDto[]>([]);
  const [sortBy, setSortBy] = useState<ESortBy>(ESortBy.DES);

  const width = useWindowSize();
  const isMobile = width < 768;

  const { data: authorsData } = useGetAuthors();
  const { data: categoriesData } = useGetCategories();

  const sortingRules = {
    [ESortBy.ASC]: (a: IPostDto, b: IPostDto) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    [ESortBy.DES]: (a: IPostDto, b: IPostDto) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  };

  const handleSort = () => {
    setShownPosts((prev) => [...prev].sort(sortingRules[sortBy]));
  };

  useEffect(() => {
    setShownPosts(filteredPosts);
  }, [filteredPosts]);

  return (
    <PageTemplate>
      <S.TBar>
        {isMobile && (
          <MobileFilters
            authors={authorsData ?? []}
            categories={categoriesData ?? []}
            toggleAuthorFilter={toggleAuthor}
            selectedAuthorsFilter={selectedAuthors}
            toggleCategoryFilter={toggleCategory}
            selectedCategoriesFilter={selectedCategories}
            handleFilters={() => {}}
          />
        )}

        <S.Title>DWS blog</S.Title>
        <SortBy sortBy={sortBy} setSortBy={setSortBy} handleSort={handleSort} />
      </S.TBar>
      <S.ContentWrapper>
        {!isMobile && (
          <SideBar
            authors={authorsData ?? []}
            categories={categoriesData ?? []}
            toggleAuthorFilter={toggleAuthor}
            selectedAuthorsFilter={selectedAuthors}
            toggleCategoryFilter={toggleCategory}
            selectedCategoriesFilter={selectedCategories}
            handleFilters={() => {}}
          />
        )}
        <PostList posts={shownPosts} />
      </S.ContentWrapper>
    </PageTemplate>
  );
};
