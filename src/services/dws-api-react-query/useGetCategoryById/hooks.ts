import { dwsApi } from "services/dws-api/config";
import { useQuery } from "@tanstack/react-query";

import { iUseGetCategoriesByIdParams } from "./types";

export const useGetCategoryById = (params?: iUseGetCategoriesByIdParams) => {
  const { categoryId, enabled, gcTime } = params ?? {};

  return useQuery({
    queryKey: ["listCategory", categoryId],
    queryFn: async () => {
      const res = await dwsApi.categoires.getCategoryById({
        categoryId: categoryId ?? "",
      });
      return res;
    },
    gcTime,
    enabled,
    refetchOnWindowFocus: false,
  });
};
