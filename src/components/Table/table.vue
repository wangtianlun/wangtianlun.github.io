<template lang="jade">
	.wtl-table-container(:class="{loading: loading}")
		.wtl-table-body
			table.wtl-table
				thead.table-thead
					tr
						th(v-if="rowSelection" class="table-selection-column")
							input(type="checkbox" class="wtl-checkbox-input" v-bind="{checked: isCheckedAll}" @change="onCheckAll")
						th(v-for="column in columns" ,:width="column.width")
							| {{ column.title }}
				tbody.table-tbody
					tr(v-if="!dataSource.length")
						td(colspan="10000" style="text-align: center;")
							| {{ noDataTip }}
					tr(v-for="(rowIndex, record) in dataSource" ,:track-by="$index")
						td(v-if="rowSelection" class="table-selection-column")
							input(type="checkbox" @change.stop="onCheckOne($event,record)" v-model="checkedValues", :value="record[rowKey]" v-bind="rowSelection.getCheckboxProps(record)")
						td(v-for="column in columns")
							template(v-if="column.render")
								| {{{ column.render(record[column.dataIndex], record, rowIndex) }}}
							template(v-else)
								| {{ record[column.dataIndex] }}
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
	    rowKey: String,
			rowSelection: Object,
			loading: Boolean
		},
		data () {
			return {
				isCheckedAll: false,
				checkedRows: []
			}
		},
		watch: {
			dataSource: {
				handler(data) {
					let me = this;

					me.checkedRows = data.filter((record) => {
						if(me.checkedValues) {
							return me.checkedRows.indexOf(record[me.rowKey]) >= 0;
						}
					});

					if(me.checkableRows) {
						me.isCheckedAll = me.checkedRows.length === me.checkableRows.length;
					} else {
						me.isCheckedAll = false;
					}
				}
			}
		},
		computed: {
			checkedValues() {
				let self = this;
				let checkedKeys = self.checkedRows.map((record) => {
					return record[self.rowKey];
				});

				return checkedKeys;
			},

			checkableRows() {
				return this.dataSource.filter((record) => {
					if(this.rowSelection) {
						return !this.rowSelection.getCheckboxProps || !this.rowSelection.getCheckboxProps(record).disabled
					}
				})
			}
		},
		methods: {
			onCheckAll() {
				let me = this;
				var changeRows = [];
				const checked = event.target.checked;

				if(checked) {
					me.checkableRows.forEach((record, i) => {
						if(me.checkedRows.indexOf(record) < 0) {
							me.checkedRows.push(record);
							changeRows.push(record)
						}
					});
				} else {
					me.checkableRows.forEach((record, i) => {
						if(me.checkedRows.indexOf(record) >= 0) {
							changeRows.push(record);
						}
					})
					me.checkedRows = [];
				}

				if(me.rowSelection.onSelectAll) {
					me.rowSelection.onSelectAll(checked, me.checkedRows, changeRows);
				}

				me.$dispatch('table-change')

			},
			onCheckOne(event, record) {
				const	self = this;
				const checked = event.target.checked;
				if(checked) {
					if(self.checkedRows.indexOf(record) === -1) {
						self.checkedRows.push(record);
					}
				} else {
					self.checkedRows = self.checkedRows.filter(function(item) {
						return record[self.rowKey] != item[self.rowKey]
					});
				}

				if(self.rowSelection.onSelect) {
					self.rowSelection.onSelect(record, checked, self.checkedRows);
				}

				self.isCheckedAll = self.checkedRows.length === self.checkableRows.length;
			}
		}
	}
</script>

<style lang="less">
	
</style>