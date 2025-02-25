import { dwsApi } from "services/dws-api/config";
import { useQuery } from "@tanstack/react-query";

import { IUseGetPostByIdParams } from "./types";

export const useGetPostsById = (params?: IUseGetPostByIdParams) => {
  const { postId, enabled, gcTime } = params ?? {};

  return useQuery({
    queryKey: ["listPost", postId],
    queryFn: async () => {
      const res = await dwsApi.posts.getPostById({ postId: postId ?? "" });
      return res;
    },
    gcTime,
    enabled,
    refetchOnWindowFocus: false,
  });
};
