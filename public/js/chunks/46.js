(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{643:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a.n(n),s=a(26),c=a.n(s),u=(a(38),a(13)),i=a.n(u),o=a(7),r=a.n(o),g=a(1),v={components:{flatPickr:c.a,vSelect:i.a},data:function(){return{language:"",selectedLanguage:[],languages:[{text:g.a.t("English"),value:"en"},{text:g.a.t("Deutsch"),value:"de"},{text:g.a.t("Turkish"),value:"tr"}]}},watch:{language:function(e){this.langFetcher(e)}},methods:{SaveData:function(e,t){var a=this;r.a.post("/api/lang/front-side-write",{language:e,file:"lang",data:t}).then((function(e){a.$vs.notify({title:"Başarılı",text:" İçerik Başarıyla Eklendi",iconPack:"feather",icon:"icon-success",color:"success"})})).catch((function(e){a.$vs.notify({title:"Hata",text:"İçerik Eklenemedi.",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},langFetcher:function(e){var t=this;return this.$vs.loading(),new l.a((function(a,n){r.a.post("/api/lang/front-side-read",{language:e,file:"lang"}).then((function(e){console.log(e.data),t.selectedLanguage=e.data,t.$vs.loading.close()})).catch((function(e){n(e)}))}))}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}},created:function(){}},d=a(0),f=Object(d.a)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vx-col w-full md:w-1/1 mb-base"},[a("vs-select",{staticClass:"mt-5 w-full",attrs:{label:e.$t("Languages"),name:"dataStatus"},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}},e._l(e.languages,(function(e){return a("vs-select-item",{key:e.value,attrs:{value:e.value,text:e.text}})})),1),e._v(" "),a("vs-divider"),e._v(" "),a("vs-button",{staticClass:"ml-auto mt-5 mt-5",on:{click:function(t){return e.SaveData(e.language,e.selectedLanguage)}}},[e._v(e._s(e.$t("save")))]),e._v(" "),e._l(e.selectedLanguage,(function(t,n){return a("vx-card",{key:n,attrs:{"no-shadow":""}},[a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:n},model:{value:e.selectedLanguage[n],callback:function(t){e.$set(e.selectedLanguage,n,t)},expression:"selectedLanguage[index]"}})],1)})),e._v(" "),a("vs-button",{staticClass:"ml-auto mt-5 mt-5",on:{click:function(t){return e.SaveData(e.language,e.selectedLanguage)}}},[e._v(e._s(e.$t("save")))])],2)}),[],!1,null,null,null);t.default=f.exports}}]);