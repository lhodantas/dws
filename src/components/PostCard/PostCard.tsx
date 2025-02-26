import { ICategoryDto } from "services/dws-api/dtos/outputs";

import * as S from "./PostCard.styles";

interface IPostCardProps {
  postId: string;
  thumbUrl: string;
  date: string;
  authorLastName: string;
  title: string;
  description: string;
  categories: ICategoryDto[];
}

export const PostCard = ({
  postId,
  authorLastName,
  categories,
  date,
  description,
  thumbUrl,
  title,
}: IPostCardProps) => {
  function formatDate(date: string) {
    const newDate = new Date(date);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    //@ts-ignore
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      newDate
    );
    return formattedDate;
  }

  function getLastName(fullName: string) {
    const nameParts = fullName.trim().split(/\s+/);
    return nameParts.length > 1
      ? nameParts[nameParts.length - 1]
      : nameParts[0];
  }

  return (
    <S.Wrapper to={`/post/${postId}`}>
      <S.Thumbnail src={thumbUrl} alt={title} />
      <S.Content>
        <S.MetaData>
          {formatDate(date)} <S.Bullet /> {getLastName(authorLastName)}
        </S.MetaData>

        <S.MainText>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.MainText>

        <S.TagsContainer>
          {categories.length === 0 ? (
            <S.Tag>Uncategorized</S.Tag>
          ) : (
            categories.map((category) => (
              <S.Tag key={category.id}>{category.name}</S.Tag>
            ))
          )}
        </S.TagsContainer>
      </S.Content>
    </S.Wrapper>
  );
};
