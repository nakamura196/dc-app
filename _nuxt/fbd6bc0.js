(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{412:function(e,t,r){var content=r(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("b1bed018",content,!0,{sourceMap:!1})},413:function(e,t,r){var n=r(19)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},420:function(e,t,r){"use strict";r(8),r(6),r(10),r(12),r(9),r(14);var n=r(2),c=(r(78),r(412),r(87)),o=r(5);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),m=r(0),v=Object(m.g)("v-breadcrumbs__divider","li"),h=r(29);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(o.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(f,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},467:function(e,t,r){"use strict";r.r(t);r(79);var n=r(16),c=r(23),o=r(36),l=r(41),d=r(37),f=r(24),m=r(13),v=(r(62),r(12),r(25),r(26),r(154));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var y=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},O=function(e){Object(l.a)(d,e);var t,r=h(d);function d(){var e;return Object(c.a)(this,d),(e=r.apply(this,arguments)).baseUrl="https://nakamura196.github.io/dc-app",e.title="新編 日本古典文学全集 p."+Number(e.$route.params.id),e}return Object(o.a)(d,[{key:"asyncData",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o,l,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.payload,n=t.app,c=t.$axios,!r){e.next=5;break}return e.abrupt("return",{result:r});case 5:return o=n.context.params.collection,l=n.context.params.id,e.next=9,c.$get("https://raw.githubusercontent.com/nakamura196/dc/main/docs/item/".concat(o,"/").concat(l,".json"));case 9:return d=e.sent,f=d,e.abrupt("return",{item:f});case 12:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"head",value:function(){return{title:this.title}}},{key:"bh",get:function(){var e=this.$route.params.collection;return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t(e),disabled:!1,to:this.localePath({name:"collection",params:{collection:e}}),exact:!0},{text:this.title}]}}]),d}(v.Vue),j=O=y([Object(v.Component)({components:{}})],O),x=r(93),_=r(123),w=r.n(_),P=r(420),k=r(258),$=r(406),C=r(181),D=r(56),component=Object(x.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.bh},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),e._v(" "),r("v-container",{staticClass:"my-5"},[r("h3",{staticClass:"mb-10"},[e._v(e._s(e.title))]),e._v(" "),r("div",{staticClass:"text-center mt-5"},[r("v-btn",{staticClass:"mx-1",attrs:{color:"primary",depressed:"",rounded:"",to:e.localePath({})}},[e._v(e._s(e.$t("新編 日本古典文学全集 でみる")))])],1)]),e._v(" "),r("SimilarItems2",{attrs:{item:e.item}})],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{SimilarItems2:r(459).default}),w()(component,{VBreadcrumbs:P.a,VBtn:k.a,VContainer:$.a,VIcon:C.a,VSheet:D.a})}}]);