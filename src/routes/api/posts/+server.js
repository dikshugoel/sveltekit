//import { SECRET_API_KEY } from "$env/static/private";

export const GET = async ({ request, url }) => {
  //const authHeader = request.headers.get("Authorization");

  //http://localhost:5173/api/posts
  //Authorization: 1234

  //   if (authHeader !== SECRET_API_KEY) {
  //     return new Response(
  //       JSON.stringify({
  //         message: "InValid Credentials",
  //         status: 400,
  //       })
  //     );
  //   }

  const limit = url.searchParams.get("limit") ?? "3";
  const skip = url.searchParams.get("skip") ?? "0";

  const postRes = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
  ).then((r) => r.json());
  return new Response(
    JSON.stringify({
      posts: await postRes.posts,
      status: 200,
    })
  );
};

export const POST = async ({ request }) => {
  const body = await request.json();
  //console.log(body);
  return new Response(
    JSON.stringify({
      message: "Success",
      status: 201,
    })
  );
};
