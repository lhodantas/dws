import { useEffect, useState } from "react";

import { PostList } from "components/PostList";
import { PageTemplate } from "templates/PageTemplate/PageTemplate";
import { useGetAuthors } from "services/dws-api-react-query/useGetAuthors";
import { useGetCategories } from "services/dws-api-react-query/useGetCategories";
import { useGetPosts } from "services/dws-api-react-query/useGetPosts";
import { IPostDto } from "services/dws-api/dtos/outputs";

import { SideBar, SortBy, ESortBy } from "./components";
import * as S from "./Dashboard.styles";

export const Dashboard = () => {
  const [authorsFilter, setAuthorsFilter] = useState<string[]>([]);
  const [categoriesFilter, setCategoriesFilter] = useState<string[]>([]);
  const [shownPosts, setShownPosts] = useState<IPostDto[]>([]);
  const [sortBy, setSortBy] = useState<ESortBy>(ESortBy.DES);

  const { data: authorsData } = useGetAuthors();
  const { data: categoriesData } = useGetCategories();
  const { data: postsData } = useGetPosts();

  const sortingRules = {
    [ESortBy.ASC]: (a: IPostDto, b: IPostDto) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    [ESortBy.DES]: (a: IPostDto, b: IPostDto) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  };

  const handleSort = () => {
    setShownPosts((prev) => [...prev].sort(sortingRules[sortBy]));
  };

  const toggleAuthorFilter = (authorId: string) => {
    setAuthorsFilter((prev) =>
      prev.includes(authorId)
        ? prev.filter((id) => id !== authorId)
        : [...prev, authorId]
    );
  };

  const toggleCategoryFilter = (categoryId: string) => {
    setCategoriesFilter((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleFilters = () => {
    if (!postsData) return;

    if (!authorsFilter.length && !categoriesFilter.length) {
      setShownPosts(postsData);
      return;
    }

    const filteredPosts = postsData.filter((post) => {
      const postCategoriesIds = post.categories.map((category) => category.id);

      const isPostAuthorIncluded =
        authorsFilter.length === 0 || authorsFilter.includes(post.author.id);

      const arePostCategoriesIncluded =
        categoriesFilter.length === 0 ||
        (post.categories.length > 0 &&
          postCategoriesIds.some((id) => categoriesFilter.includes(id)));

      return isPostAuthorIncluded && arePostCategoriesIncluded;
    });

    setShownPosts(filteredPosts);
  };

  useEffect(() => {
    setShownPosts(postsData ?? []);
  }, [postsData]);

  return (
    <PageTemplate>
      <S.TBar>
        <S.Title>DWS blog</S.Title>
        <SortBy sortBy={sortBy} setSortBy={setSortBy} handleSort={handleSort} />
      </S.TBar>
      <S.ContentWrapper>
        <SideBar
          authors={authorsData ?? []}
          categories={categoriesData ?? []}
          toggleAuthorFilter={toggleAuthorFilter}
          selectedAuthorsFilter={authorsFilter}
          toggleCategoryFilter={toggleCategoryFilter}
          selectedCategoriesFilter={categoriesFilter}
          handleFilters={handleFilters}
        />
        <PostList posts={shownPosts} />
      </S.ContentWrapper>
    </PageTemplate>
  );
};
