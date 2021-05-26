<p class="title is-size-4">Implementing AppSidebar</p>
Utilize the provided `logo` slot to insert the application logo.

The `links` slot accepts instances of `<SidebarLink />` or `<SidebarLinkMenu />` components to create navigation.
```html
<AppSidebar :open="showSidebar" @toggle="toggleSidebar">
    <template #logo>
        <img alt="app logo" :src="logoUrl" />
    </template>
    <template #links>
        <SidebarLink to="/home" label="Home" :active="route.name === 'home'" />
        <SidebarLink to="/billing" label="Billing" :active="route.name === 'billing'" />
    </template>
</AppSidebar>
```
