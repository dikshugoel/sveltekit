import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {
  const fetchProduct = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`).then(
      (r) => r.json()
    );
    if (response) {
      return response;
    }
    throw error(404, "Not found");
  };

  return {
    products: await fetchProduct(params.productId),
  };
}
