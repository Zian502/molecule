"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3909],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),s=i,f=d["".concat(c,".").concat(s)]||d[s]||m[s]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5587:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={id:"molecule.model.IActivityBar",title:"Interface: IActivityBar",sidebar_label:"IActivityBar",custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/molecule.model.IActivityBar",id:"api/interfaces/molecule.model.IActivityBar",isDocsHomePage:!1,title:"Interface: IActivityBar",description:"molecule.model.IActivityBar",source:"@site/docs/api/interfaces/molecule.model.IActivityBar.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.model.IActivityBar",permalink:"/molecule/docs/api/interfaces/molecule.model.IActivityBar",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.model.IActivityBar",title:"Interface: IActivityBar",sidebar_label:"IActivityBar",custom_edit_url:null},sidebar:"api",previous:{title:"ITreeProps",permalink:"/molecule/docs/api/interfaces/molecule.component.ITreeProps"},next:{title:"IActivityBarItem",permalink:"/molecule/docs/api/interfaces/molecule.model.IActivityBarItem"}},u=[{value:"Implemented by",id:"implemented-by",children:[]},{value:"Properties",id:"properties",children:[{value:"contextMenu",id:"contextmenu",children:[]},{value:"data",id:"data",children:[]},{value:"selected",id:"selected",children:[]}]}],m={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".IActivityBar"),(0,a.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../classes/molecule.model.ActivityBarModel"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityBarModel")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"contextmenu"},"contextMenu"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"contextMenu"),": ",(0,a.kt)("a",{parentName:"p",href:"molecule.model.IActivityMenuItemProps"},(0,a.kt)("inlineCode",{parentName:"a"},"IActivityMenuItemProps")),"[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/bf7702b3/src/model/workbench/activityBar.ts#L37"},"src/model/workbench/activityBar.ts:37")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"data"),": ",(0,a.kt)("a",{parentName:"p",href:"molecule.model.IActivityBarItem"},(0,a.kt)("inlineCode",{parentName:"a"},"IActivityBarItem")),"[]"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/bf7702b3/src/model/workbench/activityBar.ts#L36"},"src/model/workbench/activityBar.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"selected"},"selected"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"selected"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"UniqueId")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/bf7702b3/src/model/workbench/activityBar.ts#L38"},"src/model/workbench/activityBar.ts:38")))}d.isMDXComponent=!0}}]);