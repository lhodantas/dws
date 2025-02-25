import { dwsApi } from "services/dws-api/config";
import { useQuery } from "@tanstack/react-query";

import { IUseGetPostsParams } from "./types";

export const useGetAuthors = (params?: IUseGetPostsParams) => {
  const { enabled, gcTime } = params ?? {};

  return useQuery({
    queryKey: ["listAuthors"],
    queryFn: async () => {
      const res = await dwsApi.authors.getAuthors();
      return res;
    },
    gcTime,
    enabled,
    refetchOnWindowFocus: false,
  });
};
