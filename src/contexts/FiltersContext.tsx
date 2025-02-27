import { createContext, useContext, useState, ReactNode } from "react";

interface IFiltersContextProps {
  selectedAuthors: string[];
  selectedCategories: string[];
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
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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

  const clearAuthors = () => {
    setSelectedAuthors([]);
  };

  const clearCategories = () => {
    setSelectedCategories([]);
  };

  const clearFilters = () => {
    setSelectedAuthors([]);
    setSelectedCategories([]);
  };

  return (
    <FiltersContext.Provider
      value={{
        selectedAuthors,
        selectedCategories,
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

// Custom hook to use the FiltersContext
export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
