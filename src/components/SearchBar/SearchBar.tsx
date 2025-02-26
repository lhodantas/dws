import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IconSearch } from "components/Icons";
import { IPostDto } from "services/dws-api/dtos/outputs";
import { useGetPosts } from "services/dws-api-react-query/useGetPosts";

import * as S from "./SearchBar.styles";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<IPostDto[]>([]);

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

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
};
