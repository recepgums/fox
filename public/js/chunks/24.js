(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(t,e,a){var s=a(466);"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(9)(s,r);s.locals&&(t.exports=s.locals)},346:function(t,e){t.exports="/images/decore-left.png?2d9d23e097d9118c0aa4cc074b6c5b22"},347:function(t,e){t.exports="/images/decore-right.png?da0ab5cda39e974268cbe4da64f597b6"},465:function(t,e,a){"use strict";var s=a(125);a.n(s).a},466:function(t,e,a){(t.exports=a(8)(!1)).push([t.i,"#dashboard-analytics .greet-user{position:relative}#dashboard-analytics .greet-user .decore-left{position:absolute;left:0;top:0}#dashboard-analytics .greet-user .decore-right{position:absolute;right:0;top:0}@media (max-width:576px){#dashboard-analytics .decore-left,#dashboard-analytics .decore-right{width:140px}}",""])},638:function(t,e,a){"use strict";a.r(e);var s=a(14),r=a.n(s),i={data:function(){return{}},components:{},computed:{activeUser:function(){return r.a.get("user")?JSON.parse(r.a.get("user")):this.$store.state.auth.user}},methods:{},created:function(){}},o=(a(465),a(0)),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"dashboard-analytics"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full lg:w-1/1 mb-base"},[s("vx-card",{staticClass:"text-center bg-primary-gradient greet-user",attrs:{slot:"no-body"},slot:"no-body"},[s("img",{staticClass:"decore-left",attrs:{src:a(346),alt:"Decore Left",width:"200"}}),t._v(" "),s("img",{staticClass:"decore-right",attrs:{src:a(347),alt:"Decore Right",width:"175"}}),t._v(" "),s("feather-icon",{staticClass:"p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow",attrs:{icon:"AwardIcon",svgClasses:"h-8 w-8"}}),t._v(" "),s("h1",{staticClass:"mb-6 text-white"},[t._v(t._s(t.$t("Welcome"))+" "+t._s(t.activeUser.name))])],1)],1)])])}),[],!1,null,null,null);e.default=c.exports}}]);