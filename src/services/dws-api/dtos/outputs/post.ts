export interface IPostDto {
  id: string;
  title: string;
  content: string;
  thumbnail_url: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  categories: ICategoryDto[];
  author: IAuthorDto;
}

export interface ICategoryDto {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  postId: string;
}

export interface IAuthorDto {
  id: string;
  name: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
}
