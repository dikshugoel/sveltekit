export const load = async ({ fetch, url }) => {
  const limit = url.searchParams.get("limit") ?? "3";
  const skip = url.searchParams.get("skip") ?? "0";
  const fetchPosts = async () => {
    const postRes = await fetch(`/api/posts?limit=${limit}&skip=${skip}`).then(
      (r) => r.json()
    );
    return postRes.posts;
  };

  return { posts: await fetchPosts() };
};
