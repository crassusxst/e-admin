````html
<ea-admin>
  <template slot="header">
    <ea-admin-header
        collapse="false"
        :notice="0"
        :user="user"
        :menu-data="menuData"
    ></ea-admin-header>
  </template>
  <template slot="tabs">
    <ea-admin-tabs
        :menu-data="menuData"
    ></ea-admin-tabs>
  </template>
  <template slot="side">
    <ea-admin-logo
        name="e-admin"
        :logo="logo"
        logo-type="image"
    ></ea-admin-logo>
    <ea-admin-menu
        router
        :data="menuData"
        v-model="active"
    ></ea-admin-menu>
  </template>
</ea-admin>
````