(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{515:function(t,e,n){"use strict";n.r(e);n(84);var r=n(20),c=n(29),o=n(30),l=n(49),f=n(45),d=n(31),v=n(16),h=(n(72),n(17),n(3),n(21),n(66),n(33),n(176));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},_=function(t){Object(l.a)(f,t);var e,n=m(f);function f(){return Object(c.a)(this,f),n.apply(this,arguments)}return Object(o.a)(f,[{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.payload,e.app,r=e.$axios,!n){t.next=5;break}return t.abrupt("return",{result:n});case 5:return t.next=7,r.$get("https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/update.json");case 7:return(c=t.sent).reverse(),t.next=11,r.$get("https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/bib.json");case 11:return o=t.sent,t.abrupt("return",{items:c,bib:o});case 13:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"title",get:function(){return this.$t("更新履歴")}},{key:"getDate",value:function(t){return new Date(1e3*t).toLocaleString("ja-JP")}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,href:"https://genji.dl.itc.u-tokyo.ac.jp",exact:!0},{text:this.$t("genji-ai"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}},{key:"getName",value:function(t){var e=t.id.split("-")[0],n=this.bib;return n[e]?n[e].name:e}}]),f}(h.Vue),j=_=y([Object(h.Component)({components:{}})],_),k=n(100),x=n(138),O=n.n(x),w=n(463),R=n(464),C=n(449),$=n(206),V=n(63),component=Object(k.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-4",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.bh},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),n("v-container",{staticClass:"my-5"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),t._l(t.items,(function(e,r){return n("v-card",{key:r,staticClass:"mt-5",attrs:{flat:"",outlined:""}},[n("div",{staticClass:"pa-4"},[n("span",{staticClass:"success--text"},[t._v(t._s(t.getDate(e.date)))]),n("br"),t._v(" "),n("b",[t._v(t._s(e.user))]),t._v(" さんが "),n("b",[t._v(t._s(t.getName(e)))]),t._v(" の第\n        "),n("b",[t._v(t._s(e.vol))]),t._v(" 巻を追加しました。\n      ")])])}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBreadcrumbs:w.a,VCard:R.a,VContainer:C.a,VIcon:$.a,VSheet:V.a})}}]);