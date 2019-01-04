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
              <Avatar icon="ios-person"/>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px'}">
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu theme="light" active-name="1">
                <MenuGroup title="My Library">
                  <MenuItem name="alldoc">
                    <Icon type="md-document" />
                    All Documents
                  </MenuItem>
                  <MenuItem name="recentadd">
                    <Icon type="md-chatbubbles" />
                    Recent Added
                  </MenuItem>
                  <MenuItem name="favorites">
                    <Icon type="md-heart" />
                    Favorites
                  </MenuItem>
                </MenuGroup>
                <MenuGroup title="Groups">
                  <MenuItem name="xxx">
                    <Icon type="md-heart" />
                    first group
                  </MenuItem>
                </MenuGroup>
                <MenuGroup title="Trash">
                  <MenuItem name="recentdeleted">
                    <Icon type="md-leaf" />
                    Recent deleted
                  </MenuItem>
                  <MenuItem name="alldeleted">
                    <Icon type="md-heart" />
                    All deleted documents
                  </MenuItem>
                </MenuGroup>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px 24px 24px 64px', minHeight: '280px', background: '#fff'}">
              <router-view name="content"></router-view>
            </Content>
          </Layout>
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
  methods: {
  }
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
