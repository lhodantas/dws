import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IconSearch, IconArrowLeft } from "components/Icons";
import { useWindowSize } from "hooks/useWindowSize";
import { IPostDto } from "services/dws-api/dtos/outputs";
import { useGetPosts } from "services/dws-api-react-query/useGetPosts";

import * as S from "./SearchBar.styles";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<IPostDto[]>([]);
  const [showInput, setShowInput] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const width = useWindowSize();
  const isMobile = width < 768;

  const navigate = useNavigate();

  const { data: postsData } = useGetPosts();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!postsData) return;

    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setFilteredPosts([]);
      return;
    }

    const filtered = postsData.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredPosts(filtered);
  };

  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  if (isMobile) {
    return (
      <S.MobileWrapper>
        <S.IconWrapper onClick={() => setShowInput(true)}>
          <IconSearch color="#fff" size={25} />
        </S.IconWrapper>
        {showInput && (
          <S.FullSearchBar>
            <S.InputWrapper>
              <S.ClearButton onClick={() => setShowInput(false)}>
                <IconArrowLeft size={20} color={"#006C6E"} className="close" />
              </S.ClearButton>
              <S.TextInput
                ref={inputRef}
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearch}
                onFocus={handleSearch}
                onBlur={() => setTimeout(() => setFilteredPosts([]), 100)}
              />
              <S.ClearButton onClick={() => setSearch("")}>X</S.ClearButton>

              {filteredPosts.length > 0 && (
                <S.Dropdown>
                  {filteredPosts.map((post) => (
                    <S.DropdownItem
                      key={post.id}
                      onClick={() => navigate(`/post/${post.id}`)}
                    >
                      {post.title}
                    </S.DropdownItem>
                  ))}
                </S.Dropdown>
              )}
            </S.InputWrapper>
          </S.FullSearchBar>
        )}
      </S.MobileWrapper>
    );
  }
  return (
    <S.InputWrapper>
      <S.TextInput
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
        onFocus={handleSearch}
        onBlur={() => setTimeout(() => setFilteredPosts([]), 100)}
      />
      <S.IconWrapper>
        <IconSearch color="#fff" size={25} />
      </S.IconWrapper>

      {filteredPosts.length > 0 && (
        <S.Dropdown>
          {filteredPosts.map((post) => (
            <S.DropdownItem
              key={post.id}
              onClick={() => navigate(`/post/${post.id}`)}
            >
              {post.title}
            </S.DropdownItem>
          ))}
        </S.Dropdown>
      )}
    </S.InputWrapper>
  );
};
