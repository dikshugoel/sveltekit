<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  const routes = [
    {
      label: 'Settings',
      href: '/settings'
    },
    {
      label: 'Profile',
      href: '/settings/profile'
    },
    {
      label: 'Appearance',
      href: '/settings/appearance'
    }
  ];
  const myaction = (label) => {
    console.log('Hello ', label);
  };
</script>



<div class="flex h-screen bg-gray-100">

    <!-- sidebar -->
    <div class="hidden md:flex flex-col w-64 bg-gray-800">
        <div class="flex items-center justify-center h-16 bg-gray-900">
            <span class="text-white font-bold uppercase">Sidebar</span>
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
            <Sidebar >
            <SidebarWrapper>
                <SidebarGroup>
                {#each routes as {label, href}}
                <SidebarItem {label} {href} action={myaction(label)}/>
                {/each}
                </SidebarGroup>
            </SidebarWrapper>
            </Sidebar>
        </div>
    </div>

    <!-- Main content -->
    <div class="flex flex-col flex-1 overflow-y-auto">
       
        <div class="p-4">
            <h1 class="text-2xl font-bold">Welcome to Settings!</h1>
            <slot />
        </div>
    </div>
    
</div>