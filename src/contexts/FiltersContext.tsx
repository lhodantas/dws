import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useGetPosts } from "services/dws-api-react-query/useGetPosts";
import { IPostDto } from "services/dws-api/dtos/outputs";

interface IFiltersContextProps {
  selectedAuthors: string[];
  selectedCategories: string[];
  filteredPosts: IPostDto[];
  toggleAuthor: (authorId: string) => void;
  toggleCategory: (categoryId: string) => void;
  clearFilters: () => void;
  clearAuthors: () => void;
  clearCategories: () => void;
}

const FiltersContext = createContext<IFiltersContextProps | undefined>(
  undefined
);

interface FiltersProviderProps {
  children: ReactNode;
}

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const { data: postsData = [] } = useGetPosts();

  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPostDto[]>([]);

  const toggleAuthor = (authorId: string) => {
    setSelectedAuthors((prev) =>
      prev.includes(authorId)
        ? prev.filter((id) => id !== authorId)
        : [...prev, authorId]
    );
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearAuthors = () => setSelectedAuthors([]);

  const clearCategories = () => setSelectedCategories([]);

  const clearFilters = () => {
    clearAuthors();
    clearCategories();
  };

  useEffect(() => {
    const filtered = postsData.filter((post) => {
      const postCategoriesIds = post.categories.map((c) => c.id);
      const isAuthorSelected =
        selectedAuthors.length === 0 ||
        selectedAuthors.includes(post.author.id);
      const isCategorySelected =
        selectedCategories.length === 0 ||
        postCategoriesIds.some((id) => selectedCategories.includes(id));

      return isAuthorSelected && isCategorySelected;
    });

    setFilteredPosts(filtered);
  }, [postsData, selectedAuthors, selectedCategories]);

  return (
    <FiltersContext.Provider
      value={{
        selectedAuthors,
        selectedCategories,
        filteredPosts,
        toggleAuthor,
        toggleCategory,
        clearFilters,
        clearAuthors,
        clearCategories,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
