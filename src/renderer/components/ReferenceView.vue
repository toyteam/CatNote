<template>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane v-for="item in pages" v-bind:key="item.title" :label="item.title">
          {{item.path}}
        </TabPane>
    </Tabs>
</template>


<script>
export default {
  name: 'reference-view',
  data: function () {
    return {
      pages: [{
        title: 'first doc',
        path: ''
      },
      {
        title: 'second doc',
        path: ''
      },
      {
        title: 'third doc',
        path: ''
      }]
    }
  },
  methods: {
    handleTabRemove: function (name) {
      this.pages = this.pages.filter(function (value) { return value.title !== name })
    }
  }
}
</script>
