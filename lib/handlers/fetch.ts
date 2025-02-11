import { ActionResponse } from "@/types/global";

interface FetchOptions extends RequestInit {
  timeout?: number;
}

function isError(error: unknown) : error is Error{
    return error instanceof Error;
}
export async function fetchHandler<T>(
  url: string,
  options: FetchOptions = {}
): Promise<ActionResponse<T>> {
  const {
    timeout = 5000,
    headers: customHeaders = {},
    ...restOptions
  } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const headers: HeadersInit = { ...defaultHeaders, ...customHeaders };
  const config: RequestInit = {
    ...restOptions,
    headers,
    signal: controller.signal,
  };

  try {
    
  } catch (err) {
    const error = isError(err) ? err : new Error("Unknown error");

    if (error.name === "AbortError") {
        logger.warn(`Request to ${url} timed out`)
     
      } else {
        logger.error(`Error fetching ${url}: ${error.message}`,);
      }
    }
  }
}
