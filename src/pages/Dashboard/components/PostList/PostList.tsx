import { PostCard } from "components/PostCard";
import { IPostDto } from "services/dws-api/dtos/outputs";

import * as S from "./PostList.styles";

interface IPostListProps {
  posts: IPostDto[];
}

export const PostList = ({ posts }: IPostListProps) => {
  return (
    <S.Wrapper>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          postId={post.id}
          thumbUrl={post.thumbnail_url}
          authorLastName={post.author.name}
          title={post.title}
          categories={post.categories}
          date={post.createdAt}
          description={post.content}
        />
      ))}
    </S.Wrapper>
  );
};
