import { useParams } from "react-router-dom";

import { PageTemplate } from "templates/PageTemplate/PageTemplate";
import { useGetPostsById } from "services/dws-api-react-query/useGetPostById";
import { useGetPosts } from "services/dws-api-react-query/useGetPosts";
import { PostList } from "components/PostList";
import { IconArrowLeft } from "components/Icons";
import { formatDate } from "utils/dates";

import * as S from "./BlogPost.styles";

export const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const { data: postData } = useGetPostsById({ postId: postId ?? "" });
  const { data: postsData } = useGetPosts();

  if (!postData) return <></>;
  return (
    <PageTemplate>
      <S.Wrapper>
        <div>
          <S.ReturnButton to="/">
            <IconArrowLeft size={20} />
            Back
          </S.ReturnButton>
        </div>
        <div>
          <S.Title>{postData?.title}</S.Title>
          <S.AuthorBox>
            <S.AuthorAvatar
              src={postData?.author.profilePicture}
              alt="avatar"
            />
            <div>
              <S.AuthorName>
                Written by: <strong>{postData?.author.name}</strong>
              </S.AuthorName>
              <S.PostDate>{formatDate(postData?.createdAt)}</S.PostDate>
            </div>
          </S.AuthorBox>
          <S.Thumbnail src={postData?.thumbnail_url} alt={postData?.title} />
          <S.Content>{postData?.content}</S.Content>
          <S.Divider />
          <S.LatestTitle>Latest articles</S.LatestTitle>
          <PostList posts={postsData?.slice(0, 3) ?? []} />
        </div>
        <div></div>
      </S.Wrapper>
    </PageTemplate>
  );
};
