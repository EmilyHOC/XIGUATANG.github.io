(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1a6Z":function(t,e,a){},"7K7z":function(t,e,a){"use strict";var n=a("VTLY");a.n(n).a},VTLY:function(t,e,a){},pUbZ:function(t,e,a){"use strict";var n=a("1a6Z");a.n(n).a},unop:function(t,e,a){"use strict";a.r(e);var n={data:function(){return{activeIndex:0,tabItems:[{label:"tab1",vlaue:"1"},{label:"tab2",vlaue:"2"},{label:"tab3",vlaue:"3"},{label:"tab4",vlaue:"4"}]}},computed:{inkStyle:function(){return{left:(this.activeIndex/this.tabItems.length*100||0)+"%",right:(this.tabItems.length-this.activeIndex-1)/this.tabItems.length*100+"%"}}}},l=(a("pUbZ"),a("KHd+")),i={name:"TabDemo",components:{Tab:Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"t-tab"},[t._l(t.tabItems,function(e,n){return a("div",{key:e.value,staticClass:"t-tab-item",class:{active:n===t.activeIndex},on:{click:function(e){t.activeIndex=n}}},[t._v(t._s(e.label))])}),t._v(" "),a("div",{staticClass:"t-tab-ink-bar",style:t.inkStyle},[a("span",{staticClass:"t-tab-bar-inner"})])],2)},[],!1,null,null,null).exports}},s=(a("7K7z"),Object(l.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("Tab")},[],!1,null,null,null));e.default=s.exports}}]);