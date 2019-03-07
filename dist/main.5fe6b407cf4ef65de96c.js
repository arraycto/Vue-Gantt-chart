!function(t){function e(e){for(var i,l,u=e[0],s=e[1],o=e[2],d=0,f=[];d<u.length;d++)l=u[d],a[l]&&f.push(a[l][0]),a[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);for(c&&c(e);f.length;)f.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},a={0:0},r=[];function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var c=s;r.push([38,1]),n()}([,,,function(t,e,n){"use strict";n.r(e);var i=n(4),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(n(44)),a=u(n(47)),r=n(48),l=u(n(2));function u(t){return t&&t.__esModule?t:{default:t}}var s=[1,2,3,4,5,6,10,12,15,20,30,60,120,180,240,360,720,1440];e.default={name:"App",components:{Test:i.default,TestLeft:a.default},data:function(){return{timeLines:[{time:(0,l.default)().add(2,"h").format("YYYY-MM-DD HH:mm:ss")},{time:(0,l.default)().add(5,"h").format("YYYY-MM-DD HH:mm:ss"),color:"#747e80"}],startTime:(0,l.default)().toString(),endTime:(0,l.default)().add(2,"d").add(2,"h").add(5,"s").toString(),cellWidth:50,cellHeight:20,titleHeight:40,titleWidth:200,scale:60,datasNum:100,datas:(0,r.mockDatas)(100),scaleList:s}},watch:{datasNum:function(t,e){this.datas=(0,r.mockDatas)(t)}}}},function(t,e,n){"use strict";n.r(e);var i=n(6),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n(2),r=(i=a)&&i.__esModule?i:{default:i};e.default={name:"Test",props:{data:Object,item:Object},data:function(){return{moment:r.default}}}},function(t,e,n){"use strict";n.r(e);var i=n(8),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TestLeft",props:{data:Object}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(11),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(n(1)),a=n(34),r=n(35),l=d(n(57)),u=d(n(58)),s=d(n(59)),o=d(n(61)),c=d(n(36));function d(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Gantt",components:{Timeline:l.default,LeftBar:s.default,Blocks:o.default,MarkLine:c.default,CurrentTime:u.default},props:{startTime:{required:!0,validator:function(t){return(0,i.default)(t).isValid()}},endTime:{required:!0,validator:function(t){return(0,i.default)(t).isValid()}},cellWidth:{type:Number,default:50},cellHeight:{type:Number,default:20},titleHeight:{type:Number,default:40},titleWidth:{type:Number,default:200},scale:{type:Number,default:60,validator:function(t){return a.scaleList.includes(t)}},datas:{type:Array,required:!0},dataKey:{type:String,default:void 0},itemKey:{type:String,default:void 0},showCurrentTime:{type:Boolean,default:!1},timeLines:{type:Array}},data:function(){return{selector:{gantt_leftbar:{},gantt_table:{},gantt_scroll_y:{},gantt_timeline:{},gantt_scroll_x:{},gantt_markArea:{}},scrollTop:0,scrollLeft:0}},computed:{start:function(){return(0,i.default)(this.startTime)},end:function(){return(0,i.default)(this.endTime)},totalWidth:function(){return this.titleWidth+this.cellWidth*this.totalScales},totalScales:function(){var t=this.start,e=this.end,n=this.scale;return(0,a.calcScalesAbout2Times)(t,e,n)},totalHeight:function(){var t=this.datas,e=this.cellHeight;return t.length*e},beginTimeOfTimeLine:function(){return(0,a.getBeginTimeOfTimeLine)(this.start,this.scale)}},watch:{cellWidth:function(){this.resetCss()},cellHeight:function(){this.resetCss()}},created:function(){},mounted:function(){this.resetCss(),this.getSelector()},updated:function(){},methods:{getTimeLinePosition:function(t){var e=this.cellWidth,n=this.scale,i=this.beginTimeOfTimeLine,a=this.titleWidth,l={cellWidth:e,scale:n};return(0,r.getPositonOffset)(t,i.format("YYYY-MM-DD HH:mm:ss"),l)+a},getSelector:function(){this.selector.gantt_leftbar=document.querySelector(".gantt-leftbar-wrapper"),this.selector.gantt_table=document.querySelector(".gantt-blocks-wrapper"),this.selector.gantt_scroll_y=document.querySelector(".gantt-scroll-y"),this.selector.gantt_timeline=document.querySelector(".gantt-header-timeline"),this.selector.gantt_scroll_x=document.querySelector(".gantt-scroll-x"),this.selector.gantt_markArea=document.querySelector(".gantt-markline-area")},wheelHandle:function(t){var e=this,n=t.deltaX,i=t.deltaY,a=(t.deltaZ,this.selector),r=a.gantt_leftbar,l=a.gantt_table,u=a.gantt_scroll_y,s=a.gantt_timeline,o=a.gantt_scroll_x,c=a.gantt_markArea;this.$nextTick(function(){0!=i&&(r.scrollTop+=i,l.scrollTop+=i,u.scrollTop+=i,e.scrollTop=l.scrollTop),0!=n&&(s.scrollLeft+=n,o.scrollLeft+=n,c.style.left=c.style.left+n,e.scrollLeft+n<0&&(e.scrollLeft=0))})},syncScrollY:function(t){var e=this,n=this.selector,i=n.gantt_leftbar,a=n.gantt_table;this.$nextTick(function(){var n=t.target.scrollTop;i.scrollTop=n,a.scrollTop=n,e.scrollTop=n})},syncScrollX:function(t){var e=this,n=this.selector,i=n.gantt_table,a=n.gantt_timeline,r=n.gantt_markArea;this.$nextTick(function(){var n=t.target.scrollLeft;i.scrollLeft=n,a.scrollLeft=n,r.style.left="-"+n+"px",e.scrollLeft=n})},resetCss:function(){var t=document.getElementById("gantt-cell-style"),e=this.cellWidth,n=this.cellHeight,i=(this.totalWidth,".gantt-cell-width{width:"+e+"px;}\n        .gantt-cell-height{height:"+n+"px;}\n        .gantt-block{background-size: "+e+"px "+n+"px;");if(null==t){var a=document.createElement("style");a.setAttribute("id","gantt-cell-style"),a.setAttribute("type","text/css"),a.innerText=i,document.head.appendChild(a)}else t.innerText=i}}}},function(t,e,n){"use strict";n.r(e);var i=n(13),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n(1),r=(i=a)&&i.__esModule?i:{default:i},l=n(34);function u(t,e){return t.isSame(e,"day")}e.default={name:"Timeline",props:{start:{type:r.default,required:!0},end:{type:r.default,required:!0},cellWidth:{type:Number,default:50},titleHeight:{type:Number,default:40},scale:{type:Number,default:60}},computed:{getDays:function(){for(var t=[],e=this.start.clone(),n=this.end;!u(e,n);e.add(1,"d"))t.push(e.clone());return t.push(e.clone()),t}},methods:{getTimeScales:function(t){var e=this.start,n=this.end;return u(t,e)?this.generateTimeScale(0):u(t,n)?this.generateTimeScale(2):this.generateTimeScale(1)},generateTimeScale:function(t){var e=[],n=this.start,i=this.end,a=this.scale,r=void 0,s=void 0;switch(t){case 0:r=(0,l.getBeginTimeOfTimeLine)(n,a),s=u(n,i)?i:n.clone().endOf("day");break;case 2:r=i.clone().startOf("day"),s=i.clone();break;case 1:r=n.clone().startOf("day"),s=n.clone().endOf("day");break;default:throw new TypeError("错误的计算类型")}for(;!r.isAfter(s);)a>=60?e.push(r.format("HH")):e.push(r.format("HH:mm")),r.add(a,"m");return e}}}},function(t,e,n){"use strict";n.r(e);var i=n(15),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(1)),a=r(n(36));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"CurrentTime",components:{MarkLine:a.default},props:{getTimeLinePosition:{type:Function,required:!0}},data:function(){return{currentTime:(0,i.default)().format("YYYY-MM-DD HH:mm:ss")}},created:function(){var t=this;setInterval(function(){t.currentTime=(0,i.default)().format("YYYY-MM-DD HH:mm:ss")},1e3);this.$once("hook:beforeDestroy",function(t){clearInterval(t)})}}},function(t,e,n){"use strict";n.r(e);var i=n(17),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n(1),r=(i=a)&&i.__esModule?i:{default:i};e.default={name:"MarkLine",props:{markLineTime:{validator:function(t){return(0,r.default)(t).isValid()}},color:{type:String,default:"#0ca30a"},getTimeLinePosition:{type:Function,required:!0}},data:function(){return{visible:!1,moment:r.default}},methods:{getPosition:function(){return null==this.markLineTime?(this.visible=!1,0):(this.visible=!0,this.getTimeLinePosition(this.markLineTime))}}}},function(t,e,n){"use strict";n.r(e);var i=n(19),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n(37),r=(i=a)&&i.__esModule?i:{default:i};e.default={name:"LeftBar",mixins:[r.default],props:{dataKey:String,datas:{type:Array,required:!0}}}},function(t,e,n){"use strict";n.r(e);var i=n(21),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(n(1)),a=l(n(37)),r=n(35);function l(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Blocks",mixins:[a.default],props:{dataKey:String,itemKey:String,scrollLeft:Number,beginTimeOfTimeLine:{type:i.default,required:!0},cellWidth:{type:Number,required:!0},scale:{type:Number,required:!0}},data:function(){return{startTime:null,endTime:null}},created:function(){this.getTimeRange()},mounted:function(){},computed:{beginTimeOfTimeLineFormat:function(){return this.beginTimeOfTimeLine.format("YYYY-MM-DD HH:mm:ss")}},watch:{scrollLeft:function(){this.getTimeRange()}},methods:{getTimeRange:function(){var t=this.beginTimeOfTimeLine,e=this.scrollLeft,n=this.cellWidth,i=this.scale,a=this.containerWidth;this.startTime=t.clone().add(e/n*i,"m").toDate().getTime(),this.endTime=t.clone().add((e+a)/n*i,"m").toDate().getTime()},isInTimeRange:function(t){var e=this.startTime,n=this.endTime,i=new Date(t.start).getTime(),a=new Date(t.end).getTime();return e<=i&&i<=n||e<=a&&a<=n},getWidth:function(t){var e={scale:this.scale,cellWidth:this.cellWidth};return(0,r.getWidthAbout2Times)(t.start,t.end,e)},getPosition:function(t){var e={scale:this.scale,cellWidth:this.cellWidth};return(0,r.getPositonOffset)(t.start,this.beginTimeOfTimeLineFormat,e)}}}},function(t,e,n){},,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{staticClass:"top-bar"},[t._v("Vue-Gantt-Chart\n    "),n("label",{attrs:{for:"cellWidth"}},[t._v("cellWidth")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.cellWidth,expression:"cellWidth",modifiers:{number:!0,lazy:!0}}],attrs:{id:"cellWidth"},domProps:{value:t.cellWidth},on:{change:function(e){t.cellWidth=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),n("label",{attrs:{for:"cellHeight"}},[t._v("cellHeight")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.cellHeight,expression:"cellHeight",modifiers:{number:!0,lazy:!0}}],attrs:{id:"cellHeight"},domProps:{value:t.cellHeight},on:{change:function(e){t.cellHeight=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),n("label",{attrs:{for:"datasNum"}},[t._v("datasNum")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.datasNum,expression:"datasNum",modifiers:{number:!0,lazy:!0}}],attrs:{id:"datasNum"},domProps:{value:t.datasNum},on:{change:function(e){t.datasNum=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),n("label",{attrs:{for:"scale"}},[t._v("scale")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.scale,expression:"scale",modifiers:{number:!0}}],attrs:{id:"scale"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var n="_value"in e?e._value:e.value;return t._n(n)});t.scale=e.target.multiple?n:n[0]}}},t._l(t.scaleList,function(e){return n("option",{key:e},[t._v(t._s(e))])}),0),t._v(" "),n("span",[t._v("minute")])]),t._v(" "),n("div",{style:{height:"calc(100vh - 30px - 30px)"}},[n("v-gantt-chart",{attrs:{startTime:t.startTime,endTime:t.endTime,cellWidth:t.cellWidth,cellHeight:t.cellHeight,timeLines:t.timeLines,titleHeight:t.titleHeight,scale:t.scale,titleWidth:t.titleWidth,showCurrentTime:"",datas:t.datas},scopedSlots:t._u([{key:"block",fn:function(t){var e=t.data,i=t.item;return[n("Test",{attrs:{data:e,item:i}})]}},{key:"left",fn:function(t){var e=t.data;return[n("TestLeft",{attrs:{data:e}})]}},{key:"title",fn:function(){return[t._v("\n        hola\n      ")]},proxy:!0}])})],1),t._v(" "),n("footer",{staticClass:"main-footer"},[t._v("wuchouchou")])])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gantt-chart",on:{wheel:t.wheelHandle}},[n("div",{staticClass:"gantt-header"},[n("div",{staticClass:"gantt-header-title",style:{"line-height":t.titleHeight+"px",height:t.titleHeight+"px","max-width":t.titleWidth+"px","min-width":t.titleWidth+"px"}},[t._t("title")],2),t._v(" "),n("div",{staticClass:"gantt-header-timeline"},[n("timeline",{style:{width:t.totalWidth+"px"},attrs:{start:t.start,end:t.end,cellWidth:t.cellWidth,titleHeight:t.titleHeight,scale:t.scale}})],1)]),t._v(" "),n("div",{staticClass:"gantt-body",style:{height:"calc(100% - "+t.titleHeight+"px)"}},[n("div",{staticClass:"gantt-table"},[n("div",{staticClass:"gantt-markline-area"},[t.showCurrentTime?n("CurrentTime",{attrs:{getTimeLinePosition:t.getTimeLinePosition}}):t._e(),t._v(" "),t._l(t.timeLines,function(e,i){return n("mark-line",{key:i,attrs:{markLineTime:e.time,getTimeLinePosition:t.getTimeLinePosition,color:e.color}})})],2),t._v(" "),n("div",{staticClass:"gantt-leftbar-wrapper",style:{"max-width":t.titleWidth+"px","min-width":t.titleWidth+"px"}},[n("LeftBar",{style:{height:t.totalHeight+"px"},attrs:{datas:t.datas,dataKey:t.dataKey,scrollTop:t.scrollTop,cellHeight:t.cellHeight},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return[t._t("left",null,{data:n})]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"gantt-blocks-wrapper"},[n("blocks",{style:{width:t.totalWidth+"px"},attrs:{scrollTop:t.scrollTop,scrollLeft:t.scrollLeft,dataKey:t.dataKey,datas:t.datas,cellWidth:t.cellWidth,cellHeight:t.cellHeight,scale:t.scale,beginTimeOfTimeLine:t.beginTimeOfTimeLine},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data,i=e.item;return[t._t("block",null,{data:n,item:i})]}}],null,!0)})],1)]),t._v(" "),n("div",{staticClass:"gantt-scroll-y",style:{height:"calc(100% - 17px)"},on:{scroll:t.syncScrollY}},[n("div",{style:{height:t.totalHeight+"px"}})]),t._v(" "),n("div",{staticClass:"gantt-scroll-x",on:{scroll:t.syncScrollX}},[n("div",{style:{width:t.totalWidth-17+"px"}})])])])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"plan"},[this._v(this._s(this.data.name)+this._s(this.moment(this.item.start).format("HH:mm:ss")))])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"name "},[this._v(this._s(this.data.id)+"."+this._s(this.data.name))])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gantt-timeline",style:{"margin-left":-t.cellWidth/2+"px"}},t._l(t.getDays,function(e,i){return n("div",{key:i,staticClass:"gantt-timeline-block"},[n("div",{staticClass:"gantt-timeline-day ",style:{height:t.titleHeight/2+"px","line-height":t.titleHeight/2+"px"}},[t._v(t._s(e.format("MM/DD")))]),t._v(" "),n("div",{staticClass:"gantt-timeline-scale ",style:{height:t.titleHeight/2+"px","line-height":t.titleHeight/2+"px"}},t._l(t.getTimeScales(e),function(e,i){return n("div",{key:i,staticClass:"gantt-cell-width"},[t._v("\n        "+t._s(e)+"\n      ")])}),0)])}),0)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gantt-blocks",style:{height:t.blockHeight+"px"}},[n("div",{staticClass:"gantt-block gantt-block-top-space",style:{height:t.calTopSpace()+"px"}}),t._v(" "),t._l(t.showDatas,function(e,i){return n("div",{key:t.dataKey?e[t.dataKey]:i,staticClass:"gantt-block gantt-cell-height"},t._l(e.gtArray,function(i,a){return t.isInTimeRange(i)?n("div",{key:t.itemKey?i[t.itemKey]:a,staticClass:"gantt-block-item",style:{width:t.getWidth(i)+"px",left:t.getPosition(i)+"px"}},[t._t("default",null,{data:e,item:i})],2):t._e()}),0)})],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("mark-line",{attrs:{markLineTime:this.currentTime,getTimeLinePosition:this.getTimeLinePosition,color:"rgba(255,0,0,.4)"}})},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gantt-leftbar"},[n("div",{staticClass:"gantt-leftbar-item gantt-block-top-space",style:{height:t.calTopSpace()+"px"}}),t._v(" "),t._l(t.showDatas,function(e,i){return n("div",{key:t.dataKey?e[t.dataKey]:i,staticClass:"gantt-leftbar-item gantt-cell-height"},[t._t("default",null,{data:e})],2)})],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"gantt-markline",style:{"background-color":t.color,left:t.getPosition()+"px"}},[n("div",{staticClass:"gantt-markline-label",style:{"background-color":t.color}},[t._v(t._s(t.moment(t.markLineTime).format("HH:mm:ss")))])])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.scaleList=void 0,e.validateScale=u,e.getBeginTimeOfTimeLine=s,e.calcScalesAbout2Times=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:60;if(!r.default.isMoment(t)||!r.default.isMoment(e))throw new TypeError("参数必须为moment 对象");if(t.isAfter(e))throw new TypeError("错误的参数顺序，函数calcScalesAbout2Times的第一个时间参数必须大于第二个时间参数");u(n);var i=s(t,n),a=0;for(;!i.isAfter(e);)a++,i.add(n,"m");return a};var i,a=n(1),r=(i=a)&&i.__esModule?i:{default:i};var l=e.scaleList=[1,2,3,4,5,6,10,12,15,20,30,60,120,180,240,360,720,1440];function u(t){if(!l.includes(t))throw new RangeError("错误的scale值，输入值为"+t+",可用的scale值为"+l.join(","));return!0}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;u(e);var n=void 0,i=t.clone(),a=e/60;return e>60?(n=Math.floor(t.hour()/a),i.hour(n*a).minute(0).seconds(0)):(n=Math.floor(t.minutes()/e),i.minutes(n*e).seconds(0)),i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getWidthAbout2Times=function(t,e,n){var i=n.scale,a=n.cellWidth,s=r("pStart",t),o=l(e);return u(s,o)/i*a},e.getPositonOffset=function(t,e,n){var i=n.scale,a=n.cellWidth,l=r("pStart",t);return u(r("pBeginTimeOfTimeLine",e),l)/i*a};var i,a,r=(i={},a={},function(t,e){return i[t]!==e&&(i[t]=e,a[t]=l(e)),a[t]});function l(t){return new Date(t)}function u(t,e){return((e.getTime()-t.getTime())/1e3/60).toFixed(4)}},function(t,e,n){"use strict";n.r(e);var i=n(32),a=n(16);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var l=n(0),u=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n(60),r=(i=a)&&i.__esModule?i:{default:i};var l={props:{scrollTop:Number,cellHeight:{type:Number,required:!0},datas:{type:Array,required:!0}},data:function(){return{showDatas:[],containerHeight:960,containerWidth:1920,initSize_:"",oldCurrentIndex:0,preload:2}},computed:{blockHeight:function(){var t=this.datas,e=this.cellHeight;return t.length*e},currentIndex:function(){return Math.ceil(this.scrollTop/this.cellHeight)}},watch:{currentIndex:function(t){var e=this.oldCurrentIndex,n=this.preload;(t<e-n||t>e+n)&&(this.oldCurrentIndex=t,this.spliceData())}},created:function(){this.spliceData(),this.initSize_=(0,r.default)(this.getContainerSize)},mounted:function(){var t=this;this.initSize_(),window.addEventListener("resize",this.initSize_),this.$once("hook:beforeDestroy",function(){window.removeEventListener("resize",t.initSize_)})},methods:{getContainerSize:function(){var t=document.querySelector(".gantt-blocks-wrapper");this.containerHeight=t.clientHeight,this.containerWidth=t.clientWidth},spliceData:function(){var t=this.containerHeight,e=this.currentIndex,n=this.cellHeight,i=this.preload,a=e+Math.ceil(t/n),r=e-i>=0?e-i:0;this.showDatas=this.datas.slice(r,a+i)},calTopSpace:function(){var t=this.oldCurrentIndex,e=this.cellHeight,n=this.preload;return(t-n>=0?t-n:0)*e}}};e.default=l},function(t,e,n){"use strict";var i=l(n(39)),a=l(n(43));n(51);var r=l(n(52));function l(t){return t&&t.__esModule?t:{default:t}}i.default.config.debug=!1,i.default.config.devtools=!1,i.default.config.productionTip=!1,i.default.use(r.default),new i.default({el:"#app",components:{App:a.default},template:"<App/>"})},,,,,function(t,e,n){"use strict";n.r(e);var i=n(24),a=n(3);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n(50);var l=n(0),u=Object(l.a)(a.default,i.a,i.b,!1,null,"2ea64348",null);e.default=u.exports},function(t,e,n){"use strict";n.r(e);var i=n(26),a=n(5);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var l=n(0),u=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);e.default=u.exports},function(t,e,n){var i={"./zh-cn":46};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id=45},,function(t,e,n){"use strict";n.r(e);var i=n(27),a=n(7);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var l=n(0),u=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mockDatas=void 0;var i=r(n(2)),a=r(n(49));function r(t){return t&&t.__esModule?t:{default:t}}var l={id:function(){return"Plan "+a.default.Random.natural(1e3,9999)},name:function(){return a.default.Random.word(4,5)},gtArray:function(){for(var t=[],e=0,n=a.default.Random.natural(9,9),r=(0,i.default)(),l=(0,i.default)();e<n;)r=l.clone().add(a.default.Random.natural(1,5),"h"),l=r.clone().add(a.default.Random.natural(1,5),"h"),t.push({id:a.default.Random.natural(1e3,9999),name:a.default.Random.word(2,3),start:r.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss")}),e++;return t}};e.mockDatas=function(t){for(var e=[],n=0,i=a.default.Random.natural(t,t);n<i;n++)e.push(a.default.mock(l));return e}},,function(t,e,n){"use strict";var i=n(9);n.n(i).a},function(t,e,n){},function(t,e,n){"use strict";t.exports=n(53)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=n(54),r=(i=a)&&i.__esModule?i:{default:i};var l={install:function(t,e){t.component("v-gantt-chart",r.default)}};e.default=l},function(t,e,n){"use strict";n.r(e);var i=n(25),a=n(10);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n(62);var l=n(0),u=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);e.default=u.exports},function(t,e,n){var i={"./zh-cn":56};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id=55},,function(t,e,n){"use strict";n.r(e);var i=n(28),a=n(12);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var l=n(0),u=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";n.r(e);var i=n(30),a=n(14);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var l=n(0),u=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";n.r(e);var i=n(31),a=n(18);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var l=n(0),u=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var a=this,r=arguments,l=i&&!e;clearTimeout(e),e=setTimeout(function(){e=null,i||t.apply(a,r)},n),l&&t.apply(a,r)}}},function(t,e,n){"use strict";n.r(e);var i=n(29),a=n(20);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var l=n(0),u=Object(l.a)(a.default,i.a,i.b,!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";var i=n(22);n.n(i).a}]);