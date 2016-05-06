<template lang="jade">
	.example
		v-table(:data-source="dataSource", :columns="columns", :row-selection="rowSelection", :row-key="rowKey", :loading="false")
</template>

<script>
	import vTable from 'src/components/Table/table.vue'
	export default {
		data () {
			return {
				loading: true,
				rowKey: "kId",
				dataSource: [
					{
						"kId": 1,
						"createTime": "2016-01-01"
					},
					{
						"kId": 2,
						"createTime": "2016-01-01" 
					},
					{
						"kId": 3,
						"createTime": "2016-01-01" 
					}
					,{
						"kId": 4,
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
					},
					{
						title: '操作',
						dataIndex: 'operation',
						render(text, record, index) {
							let html = '';

							html += '<a href="#">详情</a>'

							return html;
						}
					}
				],
				rowSelection: {
					getCheckboxProps(record) {
              return {};
          },
          onSelect(record, selected, selectedRows) {
                    
          }
				}
			}
		},
		components: {
			vTable
		}
	}
</script>

<style lang="less">
	
</style>