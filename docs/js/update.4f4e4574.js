(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["update"],{"0e87":function(a,e,v){"use strict";v.r(e);var t=v("db47"),_=v("b0f9");for(var r in _)"default"!==r&&function(a){v.d(e,a,(function(){return _[a]}))}(r);var o=v("4e82"),s=Object(o["a"])(_["default"],t["a"],t["b"],!1,null,"3670a930",null);e["default"]=s.exports},6668:function(a,e,v){var t,_,r;(function(o,s){_=[e,v("c039")],t=s,r="function"===typeof t?t.apply(e,_):t,void 0===r||(a.exports=r)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(a,e){"use strict";var t=v("676a");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e=t(e);var _={name:"Update",components:{updateMd:e.default},props:{},watch:{},data:function(){return{}},computed:{},methods:{},created:function(){},mounted:function(){}};a.default=_}))},b0f9:function(a,e,v){"use strict";v.r(e);var t=v("6668"),_=v.n(t);for(var r in t)"default"!==r&&function(a){v.d(e,a,(function(){return t[a]}))}(r);e["default"]=_.a},c039:function(a,e,v){"use strict";v.r(e);var t=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},_=[function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("div",{staticClass:"markdown"},[v("h1",[a._v("更新日志")]),v("h4",[a._v("0.4.3")]),v("p",[v("code",[a._v("2020/03/16")]),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" 当"),v("code",[a._v("nav-data")]),a._v("匹配多个同名"),v("code",[a._v("path")]),a._v("时，会命中最深的那个"),v("br"),v("a",{attrs:{href:"#/header"}},[a._v("EaHeader")]),a._v(" 当"),v("code",[a._v("nav-data")]),a._v("匹配多个同名"),v("code",[a._v("path")]),a._v("时，"),v("code",[a._v("breadcrumbs")]),a._v("会命中最深的那个")]),v("h4",[a._v("0.4.2")]),v("p",[v("code",[a._v("2020/03/15")]),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" 修复tab的query参数在关闭回退时丢失的问题"),v("br"),v("a",{attrs:{href:"#/image"}},[a._v("EaImage")]),a._v(" "),v("code",[a._v('v-bind="$attrs"')])]),v("h4",[a._v("0.4.1")]),v("p",[v("code",[a._v("2020/03/08")]),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" "),v("br"),a._v("支持标签拖动功能"),v("br"),a._v("添加标签缓存功能")]),v("h4",[a._v("0.4.0")]),v("p",[v("code",[a._v("2020/03/08")]),v("br"),v("a",{attrs:{href:"#/utils"}},[a._v("Utils")]),a._v(" 新增"),v("code",[a._v("Utils.scrollTo")]),a._v("平滑滚动方法"),v("br"),v("a",{attrs:{href:"#/scrollbar"}},[a._v("EaScrollbar")]),a._v(" 新增滚动容器组件")]),v("h4",[a._v("0.3.16")]),v("p",[v("code",[a._v("2020/03/08")]),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" 添加"),v("code",[a._v("resize")]),a._v("事件")]),v("h4",[a._v("0.3.14 & 0.3.15")]),v("p",[v("code",[a._v("2020/03/05")]),v("br"),v("a",{attrs:{href:"#/image"}},[a._v("EaTabs")]),a._v(" 修复开启图片预览功能组件图片变更预览"),v("code",[a._v("index")]),a._v("不变的问题")]),v("h4",[a._v("0.3.12 & 0.3.13")]),v("p",[v("code",[a._v("2020/03/05")]),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" 添加溢出隐藏及弹层效果")]),v("h4",[a._v("0.3.10 & 0.3.11")]),v("p",[v("code",[a._v("2020/02/25")]),v("br"),v("a",{attrs:{href:"#/affix"}},[a._v("EaAffix")]),a._v(" 添加初始位置计算，修复窗口大小改变left没有更新的问题")]),v("h4",[a._v("0.3.9")]),v("p",[v("code",[a._v("2020/02/17")]),v("br"),a._v("修复"),v("code",[a._v("Utils.getElementHeight")]),a._v("偶发报错的问题")]),v("h4",[a._v("0.3.8")]),v("p",[v("code",[a._v("2020/02/13")]),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" 修复子标签没有对齐的问题")]),v("h4",[a._v("0.3.7")]),v("p",[v("code",[a._v("2020/01/11")]),v("br"),a._v("修复因全局"),v("code",[a._v("font: inherit")]),a._v("引起"),v("code",[a._v("element-ui")]),a._v("组件表现不一致的问题")]),v("h4",[a._v("0.3.6")]),v("p",[v("code",[a._v("2020/01/08")]),v("br"),v("a",{attrs:{href:"#/image"}},[a._v("EaImage")]),a._v(" "),v("code",[a._v("fit")]),a._v("默认值改为"),v("code",[a._v("cover")]),v("br"),v("a",{attrs:{href:"#/image-dialog"}},[a._v("EaImageDialog")]),a._v(" 确定按钮位置调整到右侧"),v("br"),v("a",{attrs:{href:"#/view"}},[a._v("EaView")]),a._v(" 添加配置项"),v("code",[a._v("body-class")])]),v("h4",[a._v("0.3.5")]),v("p",[v("code",[a._v("2019/12/27")]),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" 添加配置项"),v("code",[a._v("onOpen")]),a._v("，"),v("code",[a._v("onClose")]),a._v("钩子")]),v("h4",[a._v("0.3.4")]),v("p",[v("code",[a._v("2019/12/22")]),v("br"),v("a",{attrs:{href:"#/affix"}},[a._v("EaAffix")]),a._v(" 添加"),v("code",[a._v("affix")]),a._v("配置项 控制是否取消固定"),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" 修复标签切换query参数丢失的问题")]),v("h4",[a._v("0.3.3")]),v("p",[v("code",[a._v("2019/12/22")]),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" 修复全局"),v("code",[a._v("tabsClose")]),a._v("失效的问题")]),v("h4",[a._v("0.3.2")]),v("p",[v("code",[a._v("2019/12/21")]),v("br"),v("a",{attrs:{href:"#/nav-menu"}},[a._v("EaNavMenu")]),a._v(" "),v("code",[a._v("children")]),a._v("全部隐藏的状态下不渲染子菜单"),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" 修复无法匹配动态路由的问题"),v("br"),v("a",{attrs:{href:"#/view"}},[a._v("EaView")]),a._v(" 修复动态路由滚动条记录错误的问题"),v("br"),v("a",{attrs:{href:"#/view"}},[a._v("EaView")]),a._v(" 添加多页共活解决方案")]),v("h4",[a._v("0.3.0 & 0.3.1")]),v("p",[v("code",[a._v("2019/12/21")]),a._v(" "),v("br"),v("a",{attrs:{href:"#/affix"}},[a._v("EaAffix")]),a._v(" 新增组件")]),v("h4",[a._v("0.2.5")]),v("p",[v("code",[a._v("2019/12/20")]),a._v(" "),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" "),v("code",[a._v("title")]),a._v("自适应 "),v("br"),v("a",{attrs:{href:"#/nav-menu"}},[a._v("EaNavMenu")]),a._v(" 支持"),v("code",[a._v("visible")]),a._v("配置")]),v("h4",[a._v("0.2.4")]),v("p",[v("code",[a._v("2019/12/19")]),a._v(" "),v("br"),v("a",{attrs:{href:"#/tabs"}},[a._v("EaTabs")]),a._v(" 使用圆角样式 "),v("br"),v("a",{attrs:{href:"#/image"}},[a._v("EaImage")]),a._v(" 使用圆角样式 添加"),v("code",[a._v("shape")]),a._v("配置项 "),v("br"),v("a",{attrs:{href:"#/logo"}},[a._v("EaLogo")]),a._v(" 适配单logo样式")]),v("h4",[a._v("0.2.3")]),v("p",[v("code",[a._v("2019/12/14")]),a._v(" "),v("br"),a._v("暴露Utils")]),v("h4",[a._v("0.2.2")]),v("p",[v("a",{attrs:{href:"#/image-dialog"}},[a._v("EaImageDialog")]),a._v(" 新增组件")]),v("h4",[a._v("0.2.1")]),v("p",[v("a",{attrs:{href:"#/image"}},[a._v("EaImage")]),a._v(" 组件添加大图预览功能")]),v("h4",[a._v("0.2.0")]),v("p",[v("a",{attrs:{href:"#/image"}},[a._v("EaImage")]),a._v(" 新增组件")])])}],r=v("4e82"),o={},s=Object(r["a"])(o,t,_,!1,null,null,null);e["default"]=s.exports},db47:function(a,e,v){"use strict";var t=function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("ea-view",{attrs:{center:""}},[v("update-md")],1)},_=[];v.d(e,"a",(function(){return t})),v.d(e,"b",(function(){return _}))}}]);
//# sourceMappingURL=update.4f4e4574.js.map