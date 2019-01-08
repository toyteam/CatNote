<template>
    <div>
        <Row>
            <Col span="4" offset="20">
                <ButtonGroup style="margin:8px">
                    <Button type="text" icon="ios-arrow-up" v-if="isCollapse" v-on:click="onCollapse">
                    </Button>
                    <Button type="text" icon="ios-arrow-down" v-else v-on:click="onCollapse">
                    </Button>
                    <Button type="text" icon="ios-close" v-on:click="onClose">
                    </Button>
                </ButtonGroup>
            </Col>
        </Row>
        <Row>
            <Table ref="selection" :columns="columns" :data="refdata" :height='height - 50'></Table>
        </Row>
    </div>
</template>

<script>
export default {
  name: 'reference-list',
  props: ['height'],
  data: function () {
    return {
      isCollapse: true,
      isClose: false,
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Author',
          key: 'author'
        },
        {
          title: 'Year',
          key: 'year'
        },
        {
          title: 'Title',
          key: 'title'
        }
      ],
      refdata: [
        {
          author: 'JasonWang',
          year: '2018',
          title: 'catnote'
        },
        {
          author: 'JasonWang',
          year: '2018',
          title: 'catnote'
        },
        {
          author: 'JasonWang',
          year: '2018',
          title: 'catnote'
        },
        {
          author: 'JasonWang',
          year: '2018',
          title: 'catnote'
        },
        {
          author: 'JasonWang',
          year: '2018',
          title: 'catnote'
        },
        {
          author: 'JasonWang',
          year: '2018',
          title: 'catnote'
        }
      ]
    }
  },
  methods: {
    onCollapse: function () {
      this.$emit('on-collapse', !this.isCollapse)
      this.isCollapse = !this.isCollapse
    },
    onClose: function () {
      this.$emit('on-close', !this.isClose)
      this.isClose = !this.isClose
    }
  }
}
</script>
