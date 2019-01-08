<template>
  <div class="layout">
    <Layout :style="{height: '100%'}">
      <!--<header></header>-->
      <Layout :style="{padding: '0px', height: '100%'}">
        <Sider hide-trigger width=58>
            <Menu active-name="1-1" theme="dark" width="auto" class="sidebar-menu">
              <router-link to="/library">
                <MenuItem name="1-1">
                    <Icon type="ios-book" size=28></Icon>
                </MenuItem>
              </router-link>
              <router-link to="/search">
                <MenuItem name="1-2">
                    <Icon type="ios-search" size=28></Icon>
                </MenuItem>
                </router-link>
                <router-link to="/setting">
                <MenuItem name="1-3">
                    <Icon type="ios-settings" size=28></Icon>
                </MenuItem>
                </router-link>
            </Menu>
        </Sider>
        <Content :style="{padding: '0px', minHeight: '280px', background: '#fff'}">
          <Split v-model="split" :min=0.2 :max=0.2>
            <div slot="left">
              <router-view name="sidepanel"></router-view>
            </div>
            <div slot="right" style="height:100%" ref="rightpanel">
              <router-view name="mainview" :height='height'></router-view>
            </div>
          </Split>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'main-page',
  data: function () {
    return {
      split: 0.2,
      height: 0
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.height = this.$refs.rightpanel.offsetHeight
      var that = this
      window.onresize = function temp () {
        that.height = that.$refs.rightpanel.offsetHeight
      }
    })
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
.sidebar-menu li{
  padding:16px
}
</style>
