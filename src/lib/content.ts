import { api } from "./api";

export type ContentItem = {
  _id: string;
  title: string;
  link: string;
  type: string;
  uploadedAt?: string;
};

type ContentResponse = {
  contents: ContentItem[];
};

export async function fetchContents(type?: string, query?: string) {
  const params = new URLSearchParams();
  if (query) params.append("q", query);

  const url = `/user/contents${params.toString() ? `?${params.toString()}` : ""}`;
  const response = await api.get<ContentResponse>(url);
  const items = response.data.contents ?? [];

  return type ? items.filter((content) => content.type === type) : items;
}

export async function shareBrain() {
  const response = await api.post<{ shareUrl: string }>("/user/share");
  return response.data.shareUrl;
}

export async function fetchSharedContents(hash: string) {
  const response = await api.get<ContentResponse>(`/user/share/${hash}`);
  return response.data.contents ?? [];
}

export async function deleteContent(id: string) {
  await api.delete(`/user/contents/${id}`);
}
