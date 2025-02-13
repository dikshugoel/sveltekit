import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {
  const fetchPost = async (id) => {
    const postRes = await fetch(`/api/posts/${id}`).then((r) => r.json());
    //console.log(postRes);
    if (postRes) {
      return postRes;
    }
    throw error(404, "Not found");
  };

  return { post: await fetchPost(params.postId) };
}
