<template lang="jade">
	.resume
		.console
			.console-header
				.left
					.inspect
						a(href="javascript: void(0);" class="J_Select")
							i(class="iconfont icon-select")
						a(href="javascript: void(0);" class="J_ToggleMode")
						.line
					ul.category
						li(class="item", :class="{current: active==1}", @click.stop.prevent="onTabClick($event, 1)", data-index="1")
							a(href="javascript:void(0);")
								| self
						li(class="item",:class="{current: active==2}",@click.stop.prevent="onTabClick($event, 2)", data-index="2")
							a(href="javascript:void(0);" class="item")
								| 自我介绍
						li(class="item", :class="{current: active==3}", @click.stop.prevent="onTabClick($event, 3)",data-index="3")
							a(href="javascript:void(0);" class="item")
								| 自我介绍
						li(class="item", :class="{current: active==4}", @click.stop.prevent="onTabClick($event, 4)",data-index="4")
							a(href="javascript:void(0);" class="item")
								| 自我介绍
				.right
					.line
					i(class="iconfont icon-control" style="font-size: 14px; color: rgb(94,94,94);")
					i(class="iconfont icon-close" style="font-size: 14px; margin: 0 15px;")
			.console-body
				section(v-show="active==1" transition="toggle")
					.introduce
						.content
				section(v-show="active==2" transition="toggle")
					| 2
				section(v-show="active==3" transition="toggle")
					| 3
				section(v-show="active==4" transition="toggle")
					| 4

</template>

<script>
	export default {
		data () {
			return {
				active: 1
			}
		},
		methods: {
			onTabClick (event, idx) {
				this.active = idx;
			}
		},
		components: {
			
		}
	}
</script>

<style lang="less" scoped>
	.resume {
		.console {
			width: 100%;
			height: 300px;
			border: none;
			// border-top: 1px solid #a3a3a3;
			.console-header {
				height: 28px;
				line-height: 28px;
				width: 100%;
				border-top: 1px solid #a3a3a3;
				overflow: hidden;
				background-color: #f3f3f3;
				&:after, &:before{
					display: table;
					clear: both;
				}

				.left {
					float: left;
					height: 100%;
					.inspect {
						margin-top:-3px;
						display: inline-block;
						vertical-align: middle;
						height: 28px;
						overflow-y: hidden;
						a.J_Select{
							display: inline-block;
							width: 28px;
							height: 28px;
							vertical-align: middle;
							text-decoration: none;
							color: #5a5a5a;
							cursor: default;
							i {
								margin-left: 5px;
								font-size: 18px;
								color: #5a5a5a;
							}
						}
						a.J_ToggleMode {
							display: inline-block;
							vertical-align: middle;
							margin-left: 3px;
							width: 26px;
							height: 26px;
							background: url(../style/assets/toggle.png);
							background-size: 26px;
							margin-bottom: 3px;
							cursor: default;
						}
						.line {
							width: 1px;
							height: 18px;
							display: inline-block;
							vertical-align: middle;
							background-color: #ccc;
							margin-left: 8px;
							margin-bottom: 3px;
						}
					}
					.category {
						margin-left: 5px;
						margin-top:-3px;
						display: inline-block;
						vertical-align: middle;
						height: 28px;
						line-height: 28px;
						li {
							float: left;
							padding: 0 10px;
							cursor: pointer;
							display: inline-block;
							height: 28px;
							&.current {
								transition: border .3s linear;
								border-bottom: 1px solid #3e82f7;
								height: 27px;
							}
							&:hover {
								background-color: rgba(218,218,218,.5)
							}
							a {
								color: #000;
								text-decoration: none;
								font-size: 16px;
							}
						}
					}
				}

				.right {
					float: right;
					.line {
						margin-right:10px;
						width: 1px;
						height: 18px;
						display: inline-block;
						vertical-align: middle;
						background-color: #ccc;
						margin-left: 8px;
						margin-bottom: 3px;
					}
				}
			}
			.console-body {
				width: 100%;
				height: auto;
				border-top: 1px solid #ccc;
				background-color: #fff;
				.introduce {

					background-color: #3ca2e0;
					height: 700px;
				}
			}
		}
	}

.toggle-transition {
  transition: all .3s ease;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.toggle-enter, .toggle-leave {
  height: 0;
  opacity: 0;
}
</style>