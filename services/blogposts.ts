import { BlogApiItem, BlogApiResponse } from "@/types";
import { apiClient } from "@/config/apiConfig";

export const getAllPosts = async (): Promise<BlogApiItem[]> => {
  try {
    const response = await apiClient.get<BlogApiResponse>(
      "https://api.rss2json.com/v1/api.json",
      { params: { rss_url: "https://medium.com/feed/@moditham" } },
    );
    return response.data.items;
  } catch {
    throw new Error("Failed to fetch blog posts");
  }
};
