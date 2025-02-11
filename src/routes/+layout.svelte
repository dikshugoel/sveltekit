<script>
  import "../app.css";
</script>
<nav class="flex gap-3 underline [&>a]:hover:text-teal-900">
	<a href="/">Home</a>
	<a href="/shop" data-sveltekit-prefetch>Shop</a>
	<a href="/movies" data-sveltekit-prefetch>Movies</a>
</nav>
<slot />