(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{412:function(t,e,r){var content=r(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("b1bed018",content,!0,{sourceMap:!1})},413:function(t,e,r){var n=r(19)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},420:function(t,e,r){"use strict";r(8),r(6),r(10),r(12),r(9),r(14);var n=r(2),c=(r(78),r(412),r(87)),o=r(5);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=r(0),h=Object(v.g)("v-breadcrumbs__divider","li"),m=r(29);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(o.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(f,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},423:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("716cd89e",content,!0,{sourceMap:!1})},431:function(t,e,r){"use strict";var n=r(4),c=r(432).start;n({target:"String",proto:!0,forced:r(433)},{padStart:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},432:function(t,e,r){var n=r(42),c=r(193),o=r(53),l=Math.ceil,d=function(t){return function(e,r,d){var f,v,h=String(o(e)),m=h.length,y=void 0===d?" ":String(d),_=n(r);return _<=m||""==y?h:(f=_-m,(v=c.call(y,l(f/y.length))).length>f&&(v=v.slice(0,f)),t?h+v:v+h)}};t.exports={start:d(!1),end:d(!0)}},433:function(t,e,r){var n=r(125);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},434:function(t,e,r){"use strict";r(423)},435:function(t,e,r){var n=r(19)(!1);n.push([t.i,"#tbl-bdr table,#tbl-bdr td,#tbl-bdr th{border-collapse:collapse;border:1px solid #d3d3d3}",""]),t.exports=n},470:function(t,e,r){"use strict";r.r(e);r(79);var n=r(16),c=r(23),o=r(36),l=r(41),d=r(37),f=r(24),v=r(13),h=(r(62),r(12),r(431),r(154));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var y=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},_=function(t){Object(l.a)(d,t);var e,r=m(d);function d(){return Object(c.a)(this,d),r.apply(this,arguments)}return Object(o.a)(d,[{key:"asyncData",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,c,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.payload,e.app,n=e.$axios,!r){t.next=5;break}return t.abrupt("return",{result:r});case 5:return t.next=7,n.$get("https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/status.json");case 7:return c=t.sent,t.next=10,n.$get("https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/exists.json");case 10:return o=t.sent,t.next=13,n.$get("https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/bib.json");case 13:return l=t.sent,t.abrupt("return",{items:c,exists:o,bib:l});case 15:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"title",get:function(){return this.$t("登録状況")}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,href:"https://genji.dl.itc.u-tokyo.ac.jp",exact:!0},{text:this.$t("genji-ai"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}},{key:"getColor",value:function(t,e,r){var n=this.exists,c=String(e).padStart(2,"0");return n[r]&&n[r][c]?"black":t[c]?"#4CAF50":"#F44336"}}]),d}(h.Vue),O=_=y([Object(h.Component)({components:{}})],_),j=(r(434),r(93)),x=r(123),k=r.n(x),w=r(420),S=r(406),P=r(181),C=r(56),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.bh},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),r("v-container",{staticClass:"mt-5 mb-10",attrs:{fluid:""}},[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"mb-5"},[r("span",{staticStyle:{color:"#4caf50"}},[t._v("■")]),t._v(": 登録済み\n      "),r("span",{staticClass:"ml-5",staticStyle:{color:"#f44336"}},[t._v("■")]),t._v(": 未登録\n      "),r("span",{staticClass:"ml-5",staticStyle:{color:"black"}},[t._v("■")]),t._v(": 存在しない\n    ")]),t._v(" "),r("div",{attrs:{id:"tbl-bdr"}},[r("table",{staticStyle:{width:"100%"}},[r("tr",[r("th"),t._v(" "),r("th",{staticClass:"pa-1",attrs:{colspan:"54"}},[t._v("Volume")])]),t._v(" "),r("tr",[r("th"),t._v(" "),t._l(54,(function(e){return r("th",{key:e,staticClass:"pa-1"},[t._v(t._s(e))])}))],2),t._v(" "),t._l(t.items,(function(e,n){return r("tr",{key:n},[r("td",{staticClass:"pa-1",attrs:{id:n}},[t.bib[n]?[r("a",{attrs:{href:t.bib[n]["公開元サイト"],target:"_blank"}},[t._v(t._s(t.bib[n].name))])]:[t._v("\n              "+t._s("* "+n)+"\n            ")]],2),t._v(" "),t._l(54,(function(c){return r("td",{key:c,style:"background-color: "+t.getColor(e,c,n)+";"})}))],2)}))],2)])])],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VBreadcrumbs:w.a,VContainer:S.a,VIcon:P.a,VSheet:C.a})}}]);