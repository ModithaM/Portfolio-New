
export interface Post {
    title: string;
    description: string;
    pubDate: string;
    image: string;
    link: string;
    video?: string;
}

export interface BlogApiResponse {
    status: "ok" | "error";
    feed: BlogApiFeed;
    items: BlogApiItem[];
}

export interface BlogApiFeed {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
}

export interface BlogApiItem {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: Record<string, never>;
    categories: string[];
    image: string;
}

export interface ContactFormResponse {
    success: boolean;
    message: string;
    data?: unknown;
}