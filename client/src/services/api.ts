/**
 * API Service - Centralized API client for all HTTP requests
 * Handles error handling, request/response transformation, and logging
 */

/**
 * API Error class for consistent error handling
 */
export class APIError extends Error {
  constructor(
    public status: number,
    public message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'APIError';
  }
}

/**
 * Base API configuration
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Fetch wrapper with error handling
 * @param url - The URL to fetch
 * @param options - Fetch options
 * @returns The response data
 * @throws APIError if the request fails
 */
async function fetchAPI<T>(url: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new APIError(
        response.status,
        `HTTP ${response.status}: ${response.statusText}`,
        data
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }

    console.error('API Error:', error);
    throw new APIError(
      0,
      error instanceof Error ? error.message : 'Unknown error occurred'
    );
  }
}

/**
 * GET request
 * @param url - The URL to fetch
 * @returns The response data
 */
export async function get<T>(url: string): Promise<T> {
  return fetchAPI<T>(url, { method: 'GET' });
}

/**
 * POST request
 * @param url - The URL to post to
 * @param data - The data to send
 * @returns The response data
 */
export async function post<T>(url: string, data: any): Promise<T> {
  return fetchAPI<T>(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * PUT request
 * @param url - The URL to put to
 * @param data - The data to send
 * @returns The response data
 */
export async function put<T>(url: string, data: any): Promise<T> {
  return fetchAPI<T>(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * DELETE request
 * @param url - The URL to delete
 * @returns The response data
 */
export async function del<T>(url: string): Promise<T> {
  return fetchAPI<T>(url, { method: 'DELETE' });
}

export default {
  get,
  post,
  put,
  del,
};
