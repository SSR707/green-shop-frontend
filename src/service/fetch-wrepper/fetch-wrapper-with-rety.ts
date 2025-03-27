import fetchWrapper from "./fetcher";
interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

type FetchWrapper = <T>(
  url: string,
  options?: FetchOptions,
  revalidate?: string
) => Promise<T>;

const fetchWrapperWithRetry: FetchWrapper = async <T>(
  url: string,
  options: FetchOptions = {},
  revalidate?: string,
  retries: number = 3,
  retryDelay: number = 1000
): Promise<T> => {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await fetchWrapper<T>(url, options, revalidate);
      return result;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }
  throw new Error("Max retries reached");
};

export { fetchWrapper, fetchWrapperWithRetry };
