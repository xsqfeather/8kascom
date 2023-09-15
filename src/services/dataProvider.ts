import { getCookie } from "cookies-next";
import queryString from "query-string";
import { GetListQuery } from "../types/query";

export const GlobalControllers: AbortController[] = [];

export const getHeaders = () => {
  const token =
    typeof window !== "undefined"
      ? window?.localStorage.getItem("access_token")
      : getCookie("access_token");
  const headers = new Headers();
  headers.append("authorization", token?.toString() || "");
  return headers;
};

export const getOne = async ([resource, id]: [
  resource: string,
  id: string
]) => {
  const headers = getHeaders();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${resource}/${id}`,
    {
      headers,
    }
  );
  const json = await res.json();
  return json;
};

export const deleteOne = async (resource: string, id: string) => {
  const headers = getHeaders();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WRITE_API_URL}/${resource}/${id}`,
    {
      method: "DELETE",
      headers,
    }
  );
  const json = await res.json();
  return json;
};

export const deleteMany = async (resource: string, checkedIds: string[]) => {
  const headers = getHeaders();
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_WRITE_API_URL
    }/${resource}?checkedIds=${JSON.stringify(checkedIds)}`,
    {
      method: "DELETE",
      headers,
    }
  );
  const json = await res.json();
  return json;
};

export const getList = async ([
  resource,
  filter,
  pagination,
  sort,
]: GetListQuery) => {
  const headers = getHeaders();
  const { page, perPage } = pagination || { page: 1, perPage: 10 };
  const { field, order } = sort || { field: "createdAt", order: "DESC" };
  const query = {
    sort: JSON.stringify({
      [field]: order,
    }),
    page,
    perPage,
    filter: JSON.stringify(filter || {}),
  };
  const url = `${
    process.env.NEXT_PUBLIC_API_URL
  }/${resource}?${queryString.stringify(query)}`;
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await fetch(url, {
    headers,
    signal: controller.signal,
  });
  const json = await res.json();
  GlobalControllers.unshift();
  return json;
};

export const getManyReference = async (
  resource: string,
  target: string,
  id: string,
  filter: {
    [x: string]: any;
  },
  sort: {
    field: string;
    order: "ASC" | "DESC";
  },
  pagination: {
    page: string;
    perPage: string;
  }
) => {
  const headers = getHeaders();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${resource}?${new URLSearchParams(
      filter
    )}&${new URLSearchParams(sort)}&${new URLSearchParams(pagination)}`,
    {
      headers,
    }
  );
  const json = await res.json();
  return json;
};

export async function createOne<T>(resource: string, data: T) {
  const headers = getHeaders();

  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WRITE_API_URL}/${resource}`,
    {
      headers,
      method: "POST",
      signal: controller.signal,
      body: JSON.stringify(data),
    }
  );
  GlobalControllers.unshift();
  return res.json();
}

export const createOneSub = async (resource: string, id: string, data: any) => {
  const headers = getHeaders();
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${resource}/${id}`,
    {
      signal: controller.signal,
      headers,
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  GlobalControllers.unshift();
  return res.json();
};

export async function updateOne<T>(resource: string, id: string, data: T) {
  const headers = getHeaders();
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${resource}/${id}`,
    {
      headers,
      method: "PUT",
      signal: controller.signal,
      body: JSON.stringify(data),
    }
  );
  GlobalControllers.unshift();
  return res.json();
}

export const patchOne = async (resource: string, id: string, data: any) => {
  const headers = getHeaders();
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WRITE_API_URL}/${resource}/${id}`,
    {
      headers,
      method: "PATCH",
      signal: controller.signal,
      body: JSON.stringify(data),
    }
  );
  const json = await res.json();
  GlobalControllers.unshift();
  return json;
};
