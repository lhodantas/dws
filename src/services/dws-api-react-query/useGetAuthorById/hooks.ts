import { dwsApi } from "services/dws-api/config";
import { useQuery } from "@tanstack/react-query";

import { IUseGetAuthorByIdParams } from "./types";

export const useGetAuthorById = (params?: IUseGetAuthorByIdParams) => {
  const { authorId, enabled, gcTime } = params ?? {};

  return useQuery({
    queryKey: ["listPost", authorId],
    queryFn: async () => {
      const res = await dwsApi.authors.getAuthorById({
        authorId: authorId ?? "",
      });
      return res;
    },
    gcTime,
    enabled,
    refetchOnWindowFocus: false,
  });
};
