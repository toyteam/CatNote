<template>
  <div class="document-list">
    <row class="document-list-header">
      <ButtonGroup>
        <Button type="primary">
            <Icon type="ios-star"></Icon>
        </Button>
        <Button type="primary">
            <Icon type="ios-trash"></Icon>
        </Button>
      </ButtonGroup>
    </row>
    <row>
      <Table ref="selection" height="350" :columns="columns" :data="data"></Table>
    </row>
  </div>
</template>
<script>
export default {
  name: 'document-list',
  data: function () {
    return {
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name',
          sortable: true
        },
        {
          title: 'Time Modified',
          key: 'modifytime',
          sortable: true
        },
        {
          title: 'Time Created',
          key: 'createtime',
          sortable: true
        },
        {
          title: 'Type',
          key: 'type',
          sortable: true
        },
        {
          title: 'Size',
          key: 'size',
          sortable: true
        }
      ],
      data: [
        {
          name: 'test',
          modifytime: '2018-12-31',
          createtime: '2018-10-19',
          type: 'pdf',
          size: '1200'
        },
        {
          name: 'test2',
          modifytime: '2018-12-31',
          createtime: '2018-10-19',
          type: 'pdf',
          size: '1200'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
.document-list-header{
  padding: 12px;
}
</style>

