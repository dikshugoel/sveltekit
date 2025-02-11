// export async function load({ fetch }) {
//   const productData = await fetch(
//     "https://dummyjson.com/products?limit=5"
//   ).then((r) => r.json());
//   return { products: productData.products };
// }

export async function load({ fetch }) {
  const [productData, usersData] = await Promise.all([
    fetch("https://dummyjson.com/products?limit=4").then((r) => r.json()),
    fetch("https://dummyjson.com/users?limit=4").then((r) => r.json()),
  ]);
  return { products: productData.products, users: usersData.users };
}
