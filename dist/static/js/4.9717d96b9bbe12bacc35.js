webpackJsonp([4],{"8e9K":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"addHomeAdvertise",components:{HomeAdvertiseDetail:i("vD65").a}},s={render:function(){var e=this.$createElement;return(this._self._c||e)("home-advertise-detail",{attrs:{isEdit:!1}})},staticRenderFns:[]};var o=i("VU/8")(r,s,!1,function(e){i("WWVY")},null,null);t.default=o.exports},WWVY:function(e,t){},vD65:function(e,t,i){"use strict";var r=i("woOf"),s=i.n(r),o=i("TZVV"),l=i("Speo"),n=[{label:"PC首页轮播",value:0},{label:"APP首页轮播",value:1}],a={grouponRuleName:null,grouponRuleType:1,imageUrl:null,startDate:null,endDate:null,status:0,jumpUrl:null,description:null,sortIndex:0},d={name:"HomeAdvertiseDetail",components:{SingleUpload:o.a},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{homeAdvertise:{provinceCode:"",cityCode:"",districtCode:"",age:"",grouponRuleType:"",latitude:"",longitude:""},provinceList:null,cityList:null,districtList:null,rules:{grouponRuleName:[{required:!0,message:"请输入场景名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],jumpUrl:[{required:!0,message:"请输入广告链接",trigger:"blur"}],startDate:[{required:!0,message:"请选择开始时间",trigger:"blur"}],endDate:[{required:!0,message:"请选择到期时间",trigger:"blur"}],imageUrl:[{required:!0,message:"请选择广告图片",trigger:"blur"}]},typeOptions:s()({},n)}},created:function(){var e=this;this.isEdit?(console.log("ruleId is"+this.$route.query.ruleId),Object(l.e)(this.$route.query.ruleId).then(function(t){e.homeAdvertise=t.data})):this.homeAdvertise=s()({},a);Object(l.d)(cityQuery).then(function(t){e.provinceList=t.data,console.log(e.provinceList)})},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(i){if(!i)return t.$message({message:"验证失败",type:"error",duration:1e3}),!1;t.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.isEdit?Object(l.f)(t.$route.query.ruleId,t.homeAdvertise).then(function(i){t.$refs[e].resetFields(),t.$message({message:"修改成功",type:"success",duration:1e3}),t.$router.back()}):Object(l.a)(t.homeAdvertise).then(function(i){t.$refs[e].resetFields(),t.homeAdvertise=s()({},a),t.$message({message:"提交成功",type:"success",duration:1e3})})})})},tirggerIconFile:function(e){this.homeAdvertise.iconFile=e.target.files[0],console.log("iconFile"+this.homeAdvertise.iconFile)},tirggerBlFile:function(e){this.homeAdvertise.blFile=e.target.files[0],console.log("blFile"+this.homeAdvertise.blFile)},tirggerIfFile:function(e){this.homeAdvertise.ifFile=e.target.files[0],console.log("ifFile"+this.homeAdvertise.ifFile)},tirggerIbFile:function(e){this.homeAdvertise.ibFile=e.target.files[0],console.log("ibFile"+this.homeAdvertise.ibFile)},tirggerIhFile:function(e){this.homeAdvertise.ihFile=e.target.files[0],console.log("ihFile"+this.homeAdvertise.ihFile)},getCitys:function(){var e=this;console.log("getCitys");var t={level:3};t.parentCode=this.homeAdvertise.provinceCode,this.homeAdvertise.cityCode=null,this.homeAdvertise.districtCode=null,this.cityList=null,this.districtList=null,Object(l.d)(t).then(function(t){e.cityList=t.data,console.log(e.cityList)})},getDistricts:function(){var e=this;console.log("getDistricts");var t={level:4};t.parentCode=this.homeAdvertise.cityCode,this.homeAdvertise.districtCode=null,this.districtList=null,Object(l.d)(t).then(function(t){e.districtList=t.data,console.log(e.districtList)})},selectCity:function(){console.log("districtCode"+this.homeAdvertise.districtCode),this.homeAdvertise.cityId=this.homeAdvertise.districtCode},resetForm:function(e){this.$refs[e].resetFields(),this.homeAdvertise=s()({},a)}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[i("el-form",{ref:"homeAdvertiseFrom",attrs:{model:e.homeAdvertise,rules:e.rules,"label-width":"150px",size:"small"}},[i("el-form-item",{attrs:{label:"商品名称：",prop:"name"}},[i("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(t){return e.selectProduct()}}},[e._v("选择商品")]),e._v(" "),i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.productName,callback:function(t){e.$set(e.homeAdvertise,"productName",t)},expression:"homeAdvertise.productName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"初始价格：",prop:"name"}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.originalPrice,callback:function(t){e.$set(e.homeAdvertise,"originalPrice",t)},expression:"homeAdvertise.originalPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"团购价格：",prop:"name"}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.grouponPrice,callback:function(t){e.$set(e.homeAdvertise,"grouponPrice",t)},expression:"homeAdvertise.grouponPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"人数限制：",prop:"name"}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.numberLimitation,callback:function(t){e.$set(e.homeAdvertise,"numberLimitation",t)},expression:"homeAdvertise.numberLimitation"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"总数量：",prop:"name"}},[i("el-input",{staticClass:"input-width",model:{value:e.homeAdvertise.provideNumber,callback:function(t){e.$set(e.homeAdvertise,"provideNumber",t)},expression:"homeAdvertise.provideNumber"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"开始时间："}},[i("el-date-picker",{attrs:{type:"date","value-format":"timestamp",format:"yyyy 年 MM 月 dd 日",placeholder:"请选择时间"},model:{value:e.homeAdvertise.startTime,callback:function(t){e.$set(e.homeAdvertise,"startTime",t)},expression:"homeAdvertise.startTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"结束时间："}},[i("el-date-picker",{attrs:{type:"date","value-format":"timestamp",format:"yyyy 年 MM 月 dd 日",placeholder:"请选择时间"},model:{value:e.homeAdvertise.endTime,callback:function(t){e.$set(e.homeAdvertise,"endTime",t)},expression:"homeAdvertise.endTime"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("homeAdvertiseFrom")}}},[e._v("提交")]),e._v(" "),e.isEdit?e._e():i("el-button",{on:{click:function(t){return e.resetForm("homeAdvertiseFrom")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var u=i("VU/8")(d,c,!1,function(e){i("xITv")},"data-v-78b3623d",null);t.a=u.exports},xITv:function(e,t){}});
//# sourceMappingURL=4.9717d96b9bbe12bacc35.js.map