export const getAllPosts = async () => {
    const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40moditham");
    const data = await response.json();
    return data.items;
};