<template>
	<table cellspacing="0" width="100%" class="vue_table" :id="id">
	</table>
</template>
<script>
	import '../dependence/css/jquery.dataTables.min.css'
	import '../dependence/js/jquery.dataTables.min'
	export default {
		name:'dataTable',
		data(){
			return{
				dataTable:'',
			}
		},
		props:{
			options:Object,
			id:String,
		},
		methods:{
			createTable(selector,option){
				this.dataTable=selector.DataTable({
	                language:{ 
	                    "sProcessing": "处理中...",       
	                    "sLengthMenu": "显示 _MENU_ 项结果",       
	                    "sZeroRecords": "没有匹配结果",      
	                    "sInfo": "显示第 _START_ 至 _END_ 条，共 _TOTAL_ 条",
	                    "sInfoEmpty": "显示第 0 至 0 条，共 0 条",       
	                    "sInfoFiltered": "(由 _MAX_ 项结果过滤)",       
	                    "sInfoPostFix": "",       
	                    "sSearch": "搜索",       
	                    "sUrl": "",       
	                    "sEmptyTable": "无数据",       
	                    "sLoadingRecords": "载入中...",       
	                    "sInfoThousands": ",",      
	                    "oPaginate":{                    
	                        "sPrevious": "<",           
	                        "sNext": ">",                 
	                    },       
	                    "oAria":{           
	                        "sSortAscending": ": 以升序排列此列",           
	                        "sSortDescending": ": 以降序排列此列"       
	                    }
	                }, 
	                "bInfo":option.bInfo,
	                "searching":option.searching==undefined?false:option.searching,
	                /*scroll的设置，可以使表格在滚动时，表头固定*/
	              //  "scrollY": option.scrollY,
	              //  "scrollCollapse": option.scrollCollapse,
	                "paging": option.paging,
	                "ordering": option.ordering,
	                "columns":option.columns,
	                "dom":option.dom==undefined?'':option.dom,
				    "columnDefs": option.columnDefs==undefined?'':option.columnDefs,
				    "pagingType":'simple_numbers'
	            });
			},
			refresh(datas){
				this.dataTable.clear().draw();
				for(var i=0;i<datas.length;i++){
					var value=datas[i]
					this.dataTable.row.add(value).draw()
				}
			},
			getRowValue($row){
				var data = this.dataTable.row($row).data()
				return data
			},
			addRow(data){
				this.dataTable.row.add(data).draw()
				
			},
			deleteRow($td){
				this.dataTable.row($td.parents('tr')).remove().draw();
			},
			getValue(){
				var value = this.dataTable.data(),content=[],item
				for(var i=0;i<value.length;i++){
					content.push(value[i])
				}
				return content
			},
			// 搜索
			searchValue(data){
				var table = $('#'+this.id).DataTable();
				table.search(data).draw();
			}
		},
		mounted(){
			var selector = $('#'+this.id)
			// console.log(this.options);
			this.createTable(selector,this.options)
		}
	}
</script>
<style>
	.float_left{
		float: left;
	}
	.float_right{
		float:right;
	}
	.margin_top{
		margin-top:0.9em;
	}
	.margin_bottom{
		margin-bottom: 8px;
	}
	table{
		border-top:1px solid #424242;
	}
	table tr:last-child>td{
		border-bottom:none;
	}
	.dataTables_filter>label>input{
		width: 300px;
	    height: 35px;
	    border-radius: 4px;
	    border-style: solid;
	    border-width:1px;
	    opacity:0.8;
	}
	table thead th{
		text-align:center;
		font-size:14px;
		border-bottom:0px solid #111;
		background-color:#eee;
	}
	table>tbody>tr>td{
		text-align:center;
		border-bottom:1px solid #a6a6a6;
		font-size:12px;
	}
	.addproject{
		width:50px;
		height:50px;
		float:right;
	}
</style>