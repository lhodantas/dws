import { dwsApi } from "services/dws-api/config";
import { useQuery } from "@tanstack/react-query";

import { IUseGetCategoriesParams } from "./types";

export const useGetCategories = (params?: IUseGetCategoriesParams) => {
  const { enabled, gcTime } = params ?? {};

  return useQuery({
    queryKey: ["listCategories"],
    queryFn: async () => {
      const res = await dwsApi.categoires.getCategories();
      return res;
    },
    gcTime,
    enabled,
    refetchOnWindowFocus: false,
  });
};
