"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import pLimit from "p-limit";

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export interface ErrorData {
  error: {
    message: string;
  };
}

type FetchWrapper = <T>(
  url: string,
  options?: FetchOptions,
  revalidate?: string
) => Promise<T>;

const limit = pLimit(3);

const fetchWrapper: FetchWrapper = async <T>(
  url: string,
  options: FetchOptions = {},
  revalidate?: string
): Promise<T> => {
  return limit(async () => {
    const tokenCookie = cookies();
    const token = (await tokenCookie).get("accessToken");

    const defaultHeaders: HeadersInit = {};

    if (token) {
      defaultHeaders["Authorization"] = `Bearer ${token}`;
    }

    if (options.body instanceof FormData) {
      defaultHeaders["Content-Type"] = "multipart/form-data";
    } else {
      defaultHeaders["Content-Type"] = "application/json";
    }

    const baseUrl = process.env.BASE_URL as string;
    const response = await fetch(`${baseUrl}${url}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData: ErrorData = await response?.json();

      if (response.status === 401) {
        redirect("/login");
      }

      throw new Error(errorData.error?.message);
    }

    if (revalidate) {
      revalidateTag(revalidate);
    }

    return response?.json() as Promise<T>;
  });
};

export default fetchWrapper;
