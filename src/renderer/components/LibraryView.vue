<template>
<Layout style="height:100%">
    <reference-view v-if="closeBottomPanel"></reference-view>
    <Split v-model="vsplit" mode="vertical" :min=0.2 :max=0.2 v-else>
        <div slot="top">
            <reference-view></reference-view>
        </div>
        <div slot="bottom">
            <reference-list
            :height='bottomHeight'
            v-on:on-collapse='onCollapse'
            v-on:on-close='onClose'></reference-list>
        </div>
    </Split>
</Layout>
</template>

<script>
import ReferenceView from './ReferenceView'
import ReferenceList from './ReferenceList'
export default {
  name: 'library-view',
  components: {
    'reference-view': ReferenceView,
    'reference-list': ReferenceList
  },
  props: ['height'],
  data: function () {
    return {
      vsplit: 0.7,
      closeBottomPanel: false
    }
  },
  computed: {
    bottomHeight: function () {
      return this.height * (1 - this.vsplit)
    }
  },
  methods: {
    onCollapse: function (value) {
      if (value) {
        this.vsplit = 0.7
      } else {
        this.vsplit = 0.3
      }
    },
    onClose: function (value) {
      this.closeBottomPanel = value
      if (value) {
        this.vsplit = 0.9
      } else {
        this.vsplit = 0.7
      }
    }
  }
}
</script>
