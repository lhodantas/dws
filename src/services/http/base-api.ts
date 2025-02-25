import axios, {
  AxiosInstance,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";

export function baseApiFactory(
  BASE_URL?: string,
  config?: CreateAxiosDefaults
): AxiosInstance {
  if (!BASE_URL) {
    throw new Error("BASE_URL missing");
  }

  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Client-Device": "browser",
      "Accept-Language": "pt-BR",
      ...config?.headers,
    },
    timeout: config?.timeout ?? 30000,
    validateStatus:
      config?.validateStatus ?? ((status) => status >= 200 && status < 300),
    ...config,
  });

  api.interceptors.request.use((requestConfig: InternalAxiosRequestConfig) => {
    return requestConfig;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      console.error("Axios Error:", error.message, {
        url: error.config?.url,
        status: error.response?.status,
        data: error.response?.data,
      });

      return Promise.reject(error);
    }
  );

  return api;
}
