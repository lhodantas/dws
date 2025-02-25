import { dwsApi } from "services/dws-api/config";
import { useQuery } from "@tanstack/react-query";

import { IUseGetPostsParams } from "./types";

export const useGetPosts = (params?: IUseGetPostsParams) => {
  const { enabled, gcTime } = params ?? {};

  return useQuery({
    queryKey: ["listPosts"],
    queryFn: async () => {
      const res = await dwsApi.posts.getPosts();
      return res;
    },
    gcTime,
    enabled,
    refetchOnWindowFocus: false,
  });
};
