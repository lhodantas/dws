import { useEffect, useState } from "react";

import { PageTemplate } from "templates/PageTemplate/PageTemplate";
import { useGetAuthors } from "services/dws-api-react-query/useGetAuthors";
import { useGetCategories } from "services/dws-api-react-query/useGetCategories";
import { useGetPosts } from "services/dws-api-react-query/useGetPosts";
import { IPostDto } from "services/dws-api/dtos/outputs";

import { PostList } from "./components/PostList";
import { SideBar } from "./components/SideBar";
import * as S from "./Dashboard.styles";

export const Dashboard = () => {
  const [authorsFilter, setAuthorsFilter] = useState<string[]>([]);
  const [categoriesFilter, setCategoriesFilter] = useState<string[]>([]);
  const [shownPosts, setShownPosts] = useState<IPostDto[]>([]);

  const { data: authorsData } = useGetAuthors();
  const { data: categoriesData } = useGetCategories();
  const { data: postsData } = useGetPosts();

  console.log({ categoriesFilter, authorsFilter, shownPosts, postsData });

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
      <S.Title>DWS blog</S.Title>
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
