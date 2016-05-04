<template lang="jade">
	.wtl-table-container(:class="{loading: loading}")
		.wtl-table-body
			table.wtl-table
				thead.table-thead
					tr
						th(v-if="rowSelection" class="table-selection-column")
							input(type="checkbox" class="wtl-checkbox-input" v-bind="{checked: isCheckedAll}" @change="onCheckAll")
						th(v-for="column in columns" ,:width="column.width")
							| {{column.title}}
				tbody.table-tbody
					tr(v-if="!dataSource.length")
						td(colspan="10000" style="text-align: center;")
							| {{noDataTip}}
					tr(v-for="(rowIndex, record) in dataSource" ,:track-by="$index")
						td(v-if="rowSelection" class="table-selection-column")
							input(type="checkbox")
						td(v-for="column in columns")
							template(v-if="column.render")
								{{{column.render(record[column.dataIndex], record, rowIndex)}}}
							template(v-else)
								{{record[column.dataIndex]}}
</template>

<script>
	export default {
		props: {
			dataSource: Array,
			columns: Array,
			noDataTip: {
				type: String,
				default: '没有更多数据了'
			},
			rowSelection: Object,
			loading: Boolean
		},
		data () {
			return {
				isCheckedAll: false
			}
		},
		methods: {
			onCheckAll() {
				console.log('checked')
			}
		}
	}
</script>

<style lang="less">
	
</style>