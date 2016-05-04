<template lang="jade">
	.index
		v-table(:data-source="dataSource", :columns="columns", :row-selection="rowSelection")
</template>

<script>
	import vTable from '../components/Table/table.vue';
	export default {
		data () {
			return {
				dataSource: [
					{
						"kId": 1,
						"createTime": "2016-01-01" 
					},
					{
						"kId": 2,
						"createTime": "2016-01-01" 
					}
				],
				columns: [
					{
						width: 100,
						title: 'id',
						dataIndex: 'kId'
					},
					{
						width: 100,
						title: '创建时间',
						dataIndex: 'createTime'
					}
				],
				rowSelection: {
          onSelect(record, selected, selectedRows) {
                    
          }
				}
			}
		},
		methods: {

		},
		components: {
			vTable
		}
	}
</script>

<style lang="less">
	
</style>