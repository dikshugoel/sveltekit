<script>
	export let data;
    const product = data.products;
</script>

<div class="grid grid-cols-2 gap-2 sm:grid-cols-4 m-2">
    <div class="p-4 bg-teal-900 rounded-lg">
        <h2 class="text-lg font-bold leading-tight text-white">
            {product?.title}</h2>
            <h3 class="text-sm font-bold leading-tight text-white">
            {product?.sku}</h3>
        <p class="mt-2 text-white">{product?.price}</p>
    </div>
</div>
  