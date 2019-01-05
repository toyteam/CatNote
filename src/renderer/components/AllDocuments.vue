<template>
    <row>
        <div>
            <Affix :offset-top="50">
                <row class="document-list-header">
                    <ButtonGroup>
                    <Button>
                        <Icon type="ios-add-circle-outline"></Icon>
                    </Button>
                    <Button>
                        <Icon type="ios-star"></Icon>
                    </Button>
                    <Button>
                        <Icon type="ios-information-circle"></Icon>
                    </Button>
                    <Button>
                        <Icon type="ios-trash"></Icon>
                    </Button>
                    </ButtonGroup>
                </row>
            </Affix>
            <row>
                <Table ref="selection" @on-row-dblclick="rowDoubleClick" height="350" :columns="columns" :data="data"></Table>
            </row>
        </div>
        <Drawer :closable="false" width="360" v-model="showInfo">
            <Tabs>
                <TabPane label="Details" icon="ios-book">
                    <Form :model="infoForm">
                        <FormItem label="ContentType">
                            <Select v-model="infoForm.contentType" style="width:300px">
                                <Option v-for="item in infoForm.contentTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="Title">
                            <Input v-model="infoForm.title" type="textarea" :autosize="true" placeholder="Enter title..." />
                        </FormItem>
                    </Form>
                </TabPane>
                <TabPane label="Notes" icon="ios-paper">
                    
                </TabPane>
            </Tabs>
        </Drawer>
    </row>
</template>

<script>
import DocumentList from './DocumentList'
export default {
  name: 'all-documents',
  components: {'DocumentList': DocumentList},
  data: function () {
    return {
      showInfo: false,
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
      ],
      infoForm: {
        contentTypeList: [{
          value: 'Book',
          label: 'Book'
        },
        {
          value: 'Journal Article',
          label: 'Journal Article'
        }],
        contentType: '',
        title: 'My First Book'
      }
    }
  },
  methods: {
    rowDoubleClick (rowData, index) {
      console.log(index)
      this.$router.push('reader')
    }
  }
}
</script>
<style>
.document-list-header{
  padding: 12px;
}
</style>
