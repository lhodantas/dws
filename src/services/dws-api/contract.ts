import {
  IGetPostByIdDto,
  IGetCategoryByIdDto,
  IGetAuthorByIdDto,
} from "./dtos/inputs";
import { IPostDto, IAuthorDto, ICategoryDto } from "./dtos/outputs/post";

export type DWSApi = {
  posts: {
    getPosts(): Promise<IPostDto[]>;
    getPostById(data: IGetPostByIdDto): Promise<IPostDto>;
  };
  categories: {
    getCategories(): Promise<ICategoryDto[]>;
    getCategoryById(data: IGetCategoryByIdDto): Promise<ICategoryDto>;
  };
  authors: {
    getAuthors(): Promise<IAuthorDto[]>;
    getAuthorById(data: IGetAuthorByIdDto): Promise<IAuthorDto>;
  };
};
