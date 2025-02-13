<script>
	import { enhance, applyAction } from '$app/forms';
	import ContactsTable from '$lib/components/ContactsTable.svelte';
	import Alert from '$lib/components/Alert.svelte';

    export let data;
    export let formData;
    //console.log(formData)
</script>

<div class="p-8 mt-8 max-w-xl mx-auto">
    <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold mb-4">Contact Form</h1>
    <form action="?/create" method="POST" 
        use:enhance={({ action, formElement, formData }) => {
			// Before form submission to server
			return async ({ result, update }) => {
                //console.log(formElement);
                //console.log(result);
				// After form submission to server
				if (result.type === 'success') {
					formElement.reset();
				}
				if (result.type === 'error') {
					await applyAction(result);
				}
				update();
			};
		}}> 
        <div class="p-2 w-full">
            <div class="relative">
                <label for="name" class="leading-7 py-4 text-lg text-gray-900">Name</label>
                <input type="text" id="name" name="name" required=""
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out ">
            </div>
        </div>
        <div class="p-2 w-full">
            <div class="relative">
                <label for="email" class="leading-7 py-4 text-lg text-gray-900">Email</label>
                <input type="email" id="email" name="email" required=""
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out">
            </div>
        </div>
        <div class="p-2 w-full">
            <div class="relative">
                <label for="name" class="leading-7 py-4 text-lg text-gray-900">Company</label>
                <input type="text" id="company" name="company" required=""
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out ">
            </div>
        </div>
        <div class="p-2 w-full">
            <div class="relative">
                <label for="name" class="leading-7 py-4 text-lg text-gray-900">Job</label>
                <input type="text" id="job" name="job" required=""
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out ">
            </div>
        </div>
        <div class="p-2 w-full">
            <div>
                <button type="submit"
                    class="flex text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center">
                    Add Contact
                </button>
            </div>
        </div>
        <!-- {#if form?.error}
            <Alert message={form?.error}></Alert>
        {/if} -->
    </form>
    
</div>
<div class="p-8 mt-8 max-w-4xl mx-auto">
<ContactsTable contacts={data?.contacts}></ContactsTable>
</div>