webpackJsonp([37],{kykS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("woOf"),n=a.n(l),i=a("xT6B"),s=a("vLgD");var r={pageNum:1,pageSize:10,id:null,receiverKeyword:null,status:null,createTime:null,handleMan:null,handleTime:null},u=[{label:"待处理",value:0},{label:"退货中",value:1},{label:"已完成",value:2},{label:"已拒绝",value:3}],o={name:"returnApplyList",data:function(){return{listQuery:n()({},r),statusOptions:n()({},u),list:null,total:null,listLoading:!1,multipleSelection:[],operateType:1,operateOptions:[{label:"批量删除",value:1}]}},created:function(){this.getList()},filters:{formatTime:function(e){if(null==e||""===e)return" ";var t=new Date(e);return Object(i.a)(t,"yyyy-MM-dd hh:mm:ss")},formatStatus:function(e){return 0===e?"待处理":1===e?"退货中":2===e?"已处理":3===e?"已拒绝":"待处理"},formatReturnAmount:function(e){return null==e.actualAmount||""===e.actualAmount?"0":e.actualAmount}},methods:{handleSelectionChange:function(e){this.multipleSelection=e},handleResetSearch:function(){this.listQuery=n()({},r)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleViewDetail:function(e,t){this.$router.push({path:"/oms/returnApplyDetail",query:{id:t.appealId}})},handleBatchOperate:function(){var e=this;null==this.multipleSelection||this.multipleSelection.length<1?this.$message({message:"请选择要操作的申请",type:"warning",duration:1e3}):1===this.operateType&&this.$confirm("是否要进行删除操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){for(var t,a=new URLSearchParams,l=[],n=0;n<e.multipleSelection.length;n++)l.push(e.multipleSelection[n].opId);a.append("ids",l),(t=a,Object(s.a)({url:"/appeal/deleteAppealBatch",method:"post",data:t})).then(function(t){e.getList(),e.$message({type:"success",message:"删除成功!"})})})},handleSizeChange:function(e){this.listQuery.pageNum=1,this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageNum=e,this.getList()},getList:function(){var e,t=this;this.listLoading=!0,(e=this.listQuery,Object(s.a)({url:"/appeal/getAppealList",method:"get",params:e})).then(function(e){t.listLoading=!1,t.list=e.data,t.total=e.total})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[a("div",[a("i",{staticClass:"el-icon-search"}),e._v(" "),a("span",[e._v("筛选搜索")]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleSearchList()}}},[e._v("\n        查询搜索\n      ")]),e._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(t){return e.handleResetSearch()}}},[e._v("\n        重置\n      ")])],1),e._v(" "),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-form",{attrs:{inline:!0,model:e.listQuery,size:"small","label-width":"140px"}},[a("el-form-item",{attrs:{label:"输入搜索："}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"服务单号"},model:{value:e.listQuery.id,callback:function(t){e.$set(e.listQuery,"id",t)},expression:"listQuery.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"处理状态："}},[a("el-select",{staticClass:"input-width",attrs:{placeholder:"全部",clearable:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"申请时间："}},[a("el-date-picker",{staticClass:"input-width",attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"请选择时间"},model:{value:e.listQuery.createTime,callback:function(t){e.$set(e.listQuery,"createTime",t)},expression:"listQuery.createTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"操作人员："}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"全部"},model:{value:e.listQuery.handleMan,callback:function(t){e.$set(e.listQuery,"handleMan",t)},expression:"listQuery.handleMan"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"处理时间："}},[a("el-date-picker",{staticClass:"input-width",attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"请选择时间"},model:{value:e.listQuery.handleTime,callback:function(t){e.$set(e.listQuery,"handleTime",t)},expression:"listQuery.handleTime"}})],1)],1)],1)]),e._v(" "),a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("i",{staticClass:"el-icon-tickets"}),e._v(" "),a("span",[e._v("数据列表")])]),e._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"returnApplyTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"服务单号",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.orderId))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"申请时间",width:"195",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatTime")(t.row.createdDate)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户账号",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.nickName))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"退款金额",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("￥"+e._s(e._f("formatReturnAmount")(t.row)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"处理状态",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatStatus")(t.row.activated)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"处理时间",width:"195",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatTime")(t.row.updatedDate)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"处理结果",width:"260",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.content))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"评论",width:"252",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.result))]}}])})],1)],1),e._v(" "),a("div",{staticClass:"batch-operate-container"},[a("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:e.operateType,callback:function(t){e.operateType=t},expression:"operateType"}},e._l(e.operateOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-button",{staticClass:"search-button",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleBatchOperate()}}},[e._v("\n      确定\n    ")])],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","current-page":e.listQuery.pageNum,"page-size":e.listQuery.pageSize,"page-sizes":[5,10,15],total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.listQuery,"pageNum",t)},"update:current-page":function(t){return e.$set(e.listQuery,"pageNum",t)}}})],1)],1)},staticRenderFns:[]};var d=a("VU/8")(o,c,!1,function(e){a("vS1z")},"data-v-ff7ce076",null);t.default=d.exports},vS1z:function(e,t){}});
//# sourceMappingURL=37.54ac1e563e362c2f3ffd.js.map