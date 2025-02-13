export const GET = async ({ params }) => {
  //const fetchPost = async () => {
  const postRes = await fetch(`https://dummyjson.com/posts/${params.postId}`);
  const data = await postRes.json();
  //return postRes.post;
  //};

  return new Response(JSON.stringify(data));
};
