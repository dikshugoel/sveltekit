<script>
	export let data;
	const products  = data.products;
    const users  = data.users;
</script>

<div class="grid grid-cols-2 gap-2 sm:grid-cols-4 m-2">
    {#each products as product}
    <div class="p-4 bg-teal-900 rounded-lg">
        <h2 class="text-lg font-bold leading-tight text-white">
            <a data-sveltekit-prefetch href="/shop/{product?.id}">{product?.title}</a></h2>
        <p class="mt-2 text-white">{product?.price}</p>
    </div>
    {/each}  
</div>
  
<div class="grid grid-cols-1 gap-2 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    {#each users as user}
    <div class="flex items-center bg-teal-100 border rounded-sm overflow-hidden shadow">
        <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">{user?.firstName}</h3>
            <p class="text-3xl">{user?.lastName}</p>
        </div>
    </div>
    {/each}  
</div>                              