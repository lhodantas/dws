import { AxiosInstance } from "axios";

import { DWSApi } from "../contract";
import { IGetPostByIdDto } from "../dtos/inputs";
import { IPostDto } from "../dtos/outputs";

type IPostsResource = DWSApi["posts"];

export class PostsResource implements IPostsResource {
  constructor(private readonly dwsApi: AxiosInstance) {}

  async getPosts(): Promise<IPostDto[]> {
    const { data: result } = await this.dwsApi.get(`/posts`);
    return result;
  }

  async getPostById(data: IGetPostByIdDto): Promise<IPostDto> {
    const { data: result } = await this.dwsApi.get(`/posts/${data.postId}`);
    return result;
  }
}
