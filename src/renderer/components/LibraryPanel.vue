<template>
    <Collapse>
        <Panel name="1">
            first lib
            <p slot="content">
                <CellGroup>
                    <Cell title="References" />
                    <Cell title="Trash" label="label content" />
                    <Cell title="Display right content" extra="details" />
                    <Cell title="Link" extra="details" to="/components/button" />
                    <Cell title="Open link in new window" to="/components/button" target="_blank" />
                    <Cell title="Disabled" disabled />
                    <Cell title="Selected" selected />
                    <Cell title="With Badge" to="/components/badge">
                        <Badge :count="10" slot="extra" />
                    </Cell>
                    <Cell title="With Switch">
                        <Switch v-model="switchValue" slot="extra" />
                    </Cell>
                </CellGroup>
            </p>
        </Panel>
    </Collapse>
</template>

<script>
export default {
  name: 'library-panel'
}
</script>
