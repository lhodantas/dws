import { AxiosInstance } from "axios";

import { DWSApi } from "../contract";
import { IGetAuthorByIdDto } from "../dtos/inputs";
import { IAuthorDto } from "../dtos/outputs";

type IAuthorsResource = DWSApi["authors"];

export class AuthorsResource implements IAuthorsResource {
  constructor(private readonly dwsApi: AxiosInstance) {}

  async getAuthors(): Promise<IAuthorDto[]> {
    const { data: result } = await this.dwsApi.get(`/authors`);
    return result;
  }

  async getAuthorById(data: IGetAuthorByIdDto): Promise<IAuthorDto> {
    const { data: result } = await this.dwsApi.get(`/authors/${data.authorId}`);
    return result;
  }
}
