(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{127:function(t,s,i){"use strict";(function(t){var n=i(1);s.a={components:{},data:function(){return{site_url:t.env.MIX_APP_URL,fileUploadApiEndpoint:"/api/gallery"}},computed:{isSmallerScreen:function(){return this.$store.state.windowWidth<768}},methods:{successUpload:function(t){this.$vs.notify({color:"success",title:n.a.t("Success"),text:n.a.t("uploadSuccessfull")})}}}}).call(this,i(91))},128:function(t,s,i){var n=i(471);"string"==typeof n&&(n=[[t.i,n,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};i(9)(n,e);n.locals&&(t.exports=n.locals)},470:function(t,s,i){"use strict";var n=i(128);i.n(n).a},471:function(t,s,i){(t.exports=i(8)(!1)).push([t.i,"[dir] #profile-tabs .vs-tabs--content{padding:0}",""])},653:function(t,s,i){"use strict";i.r(s);var n=i(127).a,e=(i(470),i(0)),o=Object(e.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("vs-upload",{attrs:{multiple:"",id:"primaryImageUploadId",text:this.$t("FileUpload"),automatic:"",action:this.fileUploadApiEndpoint,fileName:"files[]"},on:{"on-success":this.successUpload}})}),[],!1,null,null,null);s.default=o.exports}}]);