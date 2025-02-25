import { QueryClient } from "@tanstack/react-query";

const MINUTE = 1000 * 60;

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * MINUTE, // 10 minutos
        gcTime: 15 * MINUTE, // 15 minutos
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });
}

export const queryClient = generateQueryClient();
