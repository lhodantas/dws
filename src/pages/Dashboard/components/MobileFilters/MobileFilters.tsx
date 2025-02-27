import { useState, useRef, useEffect } from "react";

import { IconAngleDown } from "components/Icons";
import { IAuthorDto, ICategoryDto } from "services/dws-api/dtos/outputs";
import { getLastName } from "utils/strings";

import * as S from "./MobileFilters.styles";

interface IMobileFiltersProps {
  authors: IAuthorDto[];
  categories: ICategoryDto[];
  toggleAuthorFilter: (authorId: string) => void;
  selectedAuthorsFilter: string[];
  toggleCategoryFilter: (categoryId: string) => void;
  selectedCategoriesFilter: string[];
  handleFilters: () => void;
}

type TSelectedFilter = "author" | "category";

export const MobileFilters = ({
  authors,
  categories,
  toggleAuthorFilter,
  selectedAuthorsFilter,
  toggleCategoryFilter,
  selectedCategoriesFilter,
  handleFilters,
}: IMobileFiltersProps) => {
  const [selectedFilter, setSelectedFilter] = useState<TSelectedFilter | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setSelectedFilter(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    handleFilters();
  }, [selectedAuthorsFilter, selectedCategoriesFilter]);

  const filters = [
    {
      key: "category",
      label: "Category",
      items: categories,
      toggle: toggleCategoryFilter,
    },
    {
      key: "author",
      label: "Author",
      items: authors,
      toggle: toggleAuthorFilter,
    },
  ] as const;

  if (!authors || !categories) return null;

  return (
    <>
      <S.Wrapper ref={dropdownRef}>
        {filters.map(({ key, label, items, toggle }) => (
          <div key={key}>
            <S.Filter
              onClick={() =>
                setSelectedFilter((prev) => (prev === key ? null : key))
              }
            >
              {label}
              <IconAngleDown size={14} />
            </S.Filter>

            {selectedFilter === key && (
              <S.DropdownWrapper>
                <S.Dropdown>
                  {items.map((item) => {
                    const selected =
                      selectedAuthorsFilter.includes(item.id) ||
                      selectedCategoriesFilter.includes(item.id);
                    return (
                      <S.DropdownItem
                        key={item.id}
                        selected={selected}
                        onClick={() => {
                          toggle(item.id);
                          handleFilters();
                        }}
                      >
                        <span>
                          {selectedFilter === "author"
                            ? getLastName(item.name)
                            : item.name}
                        </span>
                        {selected && <span>X</span>}
                      </S.DropdownItem>
                    );
                  })}
                </S.Dropdown>
              </S.DropdownWrapper>
            )}
          </div>
        ))}
      </S.Wrapper>
    </>
  );
};
