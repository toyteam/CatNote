<template>
  <div>
    <Affix :offset-top="50">
      <row>
        <ButtonGroup>
          <Button>
              <Icon type="ios-add-circle-outline"></Icon>
          </Button>
          <Button>
              <Icon type="ios-star"></Icon>
          </Button>
          <Button>
              <Icon type="ios-trash"></Icon>
          </Button>
        </ButtonGroup>
      </row>
    </Affix>
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
          type: 'pdf',
          size: '1200'
        },
        {
          name: 'test2',
          type: 'pdf',
          size: '1200'
        }
      ]
    }
  },
  methods: {
    rowDoubleClick (rowData, index) {
      console.log(index)
    }
  }
}
</script>

<style>
.document-list-header{
  padding: 12px;
}
</style>

