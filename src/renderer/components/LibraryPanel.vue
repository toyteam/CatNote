<template>
    <Collapse>
        <Panel name="1">
            first lib
            <p slot="content">
                <CellGroup>
                    <Cell title="References" />
                    <Cell title="Trash" label="label content" />
                </CellGroup>
                <Tree :data="groupdata"></Tree>
            </p>
        </Panel>
    </Collapse>
</template>

<script>
export default {
  name: 'library-panel',
  data: function () {
    return {
      groupdata: [
        {
          title: 'Group',
          expand: true,
          children: [
            {title: 'Group1'},
            {title: 'Group2'}
          ]
        }]
    }
  }
}
</script>
