import { baseApiFactory } from "services/http/base-api";

import { PostsResource } from "./impl/posts";
import { CategoriesResource } from "./impl/categories";
import { AuthorsResource } from "./impl/authors";

const apiInstance = (() => {
  let instance: ReturnType<typeof baseApiFactory> | null = null;

  return () => {
    if (!instance) {
      instance = baseApiFactory(`${process.env.VITE_APP_DWS_API_BASE_URL}`);
    }
    return instance;
  };
})();

export const dwsApi = (() => {
  const api = apiInstance();

  return {
    posts: new PostsResource(api),
    categoires: new CategoriesResource(api),
    authors: new AuthorsResource(api),
  };
})();
