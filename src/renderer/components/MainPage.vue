<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Input suffix="ios-search" placeholder="Enter text" style="width: auto"/>
            </MenuItem>
            <MenuItem name="2">
              <Badge :count="100" :offset="[14,-5]">
                <Icon type="ios-notifications-outline" size="26"></Icon>
              </Badge>
            </MenuItem>
            <Submenu name="3">
              <template slot="title">
                <Icon type="md-person" />
              </template>
              <MenuGroup title="Document">
                <MenuItem name="1-1">All Documents</MenuItem>
                <MenuItem name="1-2">Recent Documents</MenuItem>
                <MenuItem name="1-4">Group View</MenuItem>
                <MenuItem name="1-3">Favorites</MenuItem>
              </MenuGroup>
              <MenuGroup title="Trash">
                <MenuItem name="2-1">All deleted</MenuItem>
                <MenuItem name="2-2">History deleted</MenuItem>
              </MenuGroup>
              <MenuGroup title="Account">
                <MenuItem name="3-1">Settings</MenuItem>
                <MenuItem name="3-1">Exit</MenuItem>
              </MenuGroup>
            </Submenu>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px'}">
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <router-view name="content"></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'main-page',
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
