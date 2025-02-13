<script>
    export let data;
</script>
<div class="flex justify-center gap-2 flex-wrap">
    {#each data.posts as post}
        <div class="w-[350px] rounded-md border bg-teal-100 dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                    <a data-sveltekit-prefetch href="/posts/{post.id}">{post.title}</a> &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
        </h1>
        <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
            {post.body}
        </p>
    </div>
</div>
{/each}
</div>                      