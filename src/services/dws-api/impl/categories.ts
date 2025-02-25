import { AxiosInstance } from "axios";

import { DWSApi } from "../contract";
import { IGetCategoryByIdDto } from "../dtos/inputs";
import { ICategoryDto } from "../dtos/outputs";

type ICategoriesResource = DWSApi["categories"];

export class CategoriesResource implements ICategoriesResource {
  constructor(private readonly dwsApi: AxiosInstance) {}

  async getCategories(): Promise<ICategoryDto[]> {
    const { data: result } = await this.dwsApi.get(`/categories`);
    return result;
  }

  async getCategoryById(data: IGetCategoryByIdDto): Promise<ICategoryDto> {
    const { data: result } = await this.dwsApi.get(
      `/categories/${data.categoryId}`
    );
    return result;
  }
}
