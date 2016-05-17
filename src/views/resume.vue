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
								| 个人信息
						li(class="item",:class="{current: active==2}",@click.stop.prevent="onTabClick($event, 2)", data-index="2")
							a(href="javascript:void(0);" class="item")
								| 技术特长
						li(class="item", :class="{current: active==3}", @click.stop.prevent="onTabClick($event, 3)",data-index="3")
							a(href="javascript:void(0);" class="item")
								| 工作经历
						li(class="item", :class="{current: active==4}", @click.stop.prevent="onTabClick($event, 4)",data-index="4")
							a(href="javascript:void(0);" class="item")
								| 关于我
				.right
					.line
					i(class="iconfont icon-control" style="font-size: 14px; color: rgb(94,94,94);")
					i(class="iconfont icon-close" style="font-size: 14px; margin: 0 15px;")
			.console-body
				section(v-show="active==1" transition="toggle")
					.introduce
						.content
							.control-group
								label.control-label
									| 姓名：
								.controls
									| 王天伦
							.control-group
								label.control-label
									| 性别：
								.controls
									| 男
							.control-group
								label.control-label
									| 出生日期：
								.controls
									| 1992-01-28
							.control-group
								label.control-label
									| 电话：
								.controls
									| 15858245184
							.control-group
								label.control-label
									| 学历：
								.controls
									| 本科
							.control-group
								label.control-label
									| 工作经验：
								.controls
									| 两年
							.control-group
								label.control-label
									| 应聘职位：
								.controls
									| 前端开发工程师
							
				section(v-show="active==2" transition="toggle")
					.technology
						.content
							ul
								li
									| 1. 了解 W3C 标准、(X)HTML 语义化、用户体验等相关知识；
								li
									| 2. 在解放生产力方面，可以熟练使用grunt, webpack等工具对项目代码进行构建或打包;
								li
									| 3. 能够做到预处理语言less及sass的熟练使用，rem计算，从而大大提高开发效率;
								li
									| 4. Jade, Handlebars等模板引擎也能熟练使用;
								li
									| 5. jQuery, Kissy, Kimi, Vue等Javascript库的熟练使用;
								li
									| 6. 了解页面优化的一些行之有效的方案;
								li
									| 7. 能够通过目前掌握的知识进行H5页面的开发，并做到较高的适配度;
								li
									| 8. 能够配合交互设计师，完成PC端页面及H5页面的高还原度的产出;
								li
									| 9. 熟练使用Chrome DevTool，wenire，FireBug，Charles，Fiddler等工具;
								li
									| 10. 能够在OS X 环境下进行开发;
								li
									| 11. 熟练使用Git，npm;
				section(v-show="active==3" transition="toggle")
					.experience
						.content
							ul
								li
									.desc
										.desc-header
											h2
												| 浙江移动GIS项目
											p.duty
												| 职责：基于百度地图，完成GIS项目后台录入页面及前端SDK的开发；
										.desc-footer
											| 2014-06-01 - 2014-08-14
								li
									.desc
										.desc-header
											h2
												| 辽宁移动ESOP项目
											p.duty
												| 职责：根据交互需求，完成相关页面开发以及代码重构，项目的日常维护；
										.desc-footer
											| 2014-08-14 - 2015-05-03
								li
									.desc
										.desc-header
											h2
												| 河南10085项目
											p.duty
												| 职责：配合后台开发人员，快速完成前端页面的编写，并做相关前端知识的指导；
										.desc-footer
											| 2015-05-04 - 2015-06-01
								li
									.desc
										.desc-header
											h2
												| 天猫网厅项目
											p.duty
												| 职责：新老天机变业务页面的编写，网厅直充类业务部分H5页面的开发，部分170号卡预约活动的H5页面的搭建，vue-conponent组件库的开发工作等；
										.desc-footer
											| 2015-06-01 - 至今
				section(v-show="active==4" transition="toggle")
					.other
						h1
							| 联系我
						.content
		.fixed-rt
			a(href="javascript:void(0);")
				i(class="iconfont icon-resume")
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
			.console-header {
				height: 28px;
				line-height: 28px;
				width: 100%;
				overflow: hidden;
				background-color: #f3f3f3;

				&:after, &:before{
					content:" "; 
			    display:block; 
			    height:0; 
			    visibility:hidden; 
			    clear:both; 
				}

				.left {
					float: left;
					height: 100%;
					.inspect {
						margin-top:-2px;
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
						margin-top:-4px;
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
							box-sizing: border-box;
							&.current {
								transition: border .3s linear;
								border-bottom: 1px solid #3e82f7;
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
				.control-group {
					height: 50px;
					line-height: 50px;
					padding-left: 30px;
					font-size: 25px;
					font-weight: bold;
					.control-label {
						text-align: right;
						display: inline-block;
						width: 200px;
					}
					.controls {
						text-align: left;	
						display: inline-block;
					}
				}
				.control-group:first-child {
					margin-top: 50px;
				}
				.introduce {
					position: relative;
					background-color: #3ca2e0;
					height: 700px;
					.content {
						position: absolute;
						left: 50%;
						top: 45%;
						width: 500px;
						height: 500px;
						margin-left: -250px;
						margin-top: -250px;
						border-radius: 8px;
						color: #fff;
						border: 3px solid rgba(255,255,255,.9);
					}
				}
				.technology {
					position: relative;
					width: 100%;
					height: 700px;
					background: linear-gradient(154deg, #008fe2 0%,#00b29c 100%);
					.content {
						position: absolute;
						top: 60px;
						left: 50%;
						width: 1000px;
						padding-left: 50px;
						margin-left: -525px;
						border: 1px solid #fff;
						border-radius: 3px;
						ul {
							li {
								line-height: 1.2;
								color: #fff;
								font-size: 24px;
								padding: 10px;
							}
						}
					}
				}
				.experience {
					width: 100%;
					height: 700px;
					background: #4f7f9b;
					background-image: linear-gradient(to bottom, #4f7f9b, #293c55);
					background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#4f7f9b), to(#293c55));

					background-repeat: repeat-x;
					.content {
						position: absolute;
						top: 100px;
						left: 50%;
						width: 1000px;
						padding-left: 50px;
						padding-top: 50px;
						padding-bottom: 50px;
						margin-left: -525px;
						border: 2px solid #fff;
						border-radius: 3px;
						ul{
							li {
								margin: 15px;
								float: left;
								.desc {
									width: 200px;
									height: 300px;
									border-radius: 4px;
									border: 1px solid #fff;
									.desc-header {
										height: 240px;
										background-color: #fff;
										text-align: center;
										color: #000;
										box-sizing: border-box;
										padding: 10px;
										h2 {
											font-size: 18px;
											font-weight: bold;
										}
										.duty {
											margin-top: 15px;
											text-align: left;
											line-height: 1.5;
										}
									}
									.desc-footer {
										height: 60px;
										line-height: 20px;
										box-sizing: border-box;
										padding: 20px 0;
										color: #fff;
										text-align: center;
										font-weight: bold;
									}
								}
							}
						}
					}
				}
				.other {
					width: 100%;
					height: 700px;
					background: url(../style/assets/bg4.jpg);
					background-size: 100%;
					position: relative;
					h1 {
						height: 100px;
						text-align: center;
						line-height: 80px;
						color: #fff;
						font-size: 28px;
					}
					.content {
						position: absolute;
						top: 100px;
						left: 50%;
						width: 1000px;
						height: 300px;
						padding-left: 50px;
						padding-top: 50px;
						padding-bottom: 50px;
						margin-left: -525px;
						border: 1px solid #fff;
						border-radius: 3px;
						background: url(../style/assets/json.png);
						background-size: 100%;
					}
				}
			}
		}
	}

.fixed-rt {
	position: fixed;
	right: 20px;
	bottom: 20px;
	a {
		text-decoration: none;
		color: #fff;
		i {
			font-size: 70px;
			color: #fff;
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