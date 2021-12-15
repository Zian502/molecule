"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3081],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,s=u["".concat(i,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(s,o(o({ref:t},m),{},{components:n})):a.createElement(s,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3229:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],p={id:"molecule.react.IComponent",title:"Interface: IComponent<S>",sidebar_label:"IComponent",custom_edit_url:null},i=void 0,d={unversionedId:"api/interfaces/molecule.react.IComponent",id:"api/interfaces/molecule.react.IComponent",isDocsHomePage:!1,title:"Interface: IComponent<S>",description:"molecule.react.IComponent",source:"@site/docs/api/interfaces/molecule.react.IComponent.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.react.IComponent",permalink:"/docs/api/interfaces/molecule.react.IComponent",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.react.IComponent",title:"Interface: IComponent<S>",sidebar_label:"IComponent",custom_edit_url:null},sidebar:"api",previous:{title:"TokenColor",permalink:"/docs/api/interfaces/molecule.model.TokenColor"},next:{title:"MoleculeProvider",permalink:"/docs/api/classes/MoleculeProvider"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"forceUpdate",id:"forceupdate",children:[]},{value:"getState",id:"getstate",children:[]},{value:"onUpdateState",id:"onupdatestate",children:[]},{value:"removeOnUpdateState",id:"removeonupdatestate",children:[]},{value:"render",id:"render",children:[]},{value:"setState",id:"setstate",children:[]}]}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule.react"},"react"),".IComponent"),(0,l.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"S")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any"))))),(0,l.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../classes/molecule.react.Component"},(0,l.kt)("inlineCode",{parentName:"a"},"Component")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"forceupdate"},"forceUpdate"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"forceUpdate"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Force to update the Component"),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/react/component.ts#L32"},"src/react/component.ts:32")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getstate"},"getState"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getState"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"S")),(0,l.kt)("p",null,"Get the Component state"),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"S")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/react/component.ts#L36"},"src/react/component.ts:36")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onupdatestate"},"onUpdateState"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"onUpdateState"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Listen to the Component state update event"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"callback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"(",(0,l.kt)("inlineCode",{parentName:"td"},"prevState"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"S"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"nextState"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"S"),") => ",(0,l.kt)("inlineCode",{parentName:"td"},"void"))))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/react/component.ts#L24"},"src/react/component.ts:24")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removeonupdatestate"},"removeOnUpdateState"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"removeOnUpdateState"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Remove the Component update event listening"),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/react/component.ts#L28"},"src/react/component.ts:28")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"render"},"render"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"render"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"nextState?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Trigger the Component update event"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nextState?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"S"))))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/react/component.ts#L19"},"src/react/component.ts:19")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"setstate"},"setState"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"setState"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"values"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"callback?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Set the Component state"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"S")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The next values of state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"callback?")),(0,l.kt)("td",{parentName:"tr",align:"left"},"(",(0,l.kt)("inlineCode",{parentName:"td"},"prevState"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"S"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"nextState"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"S"),") => ",(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:"left"},"calling after setState")))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b54d154/src/react/component.ts#L14"},"src/react/component.ts:14")))}u.isMDXComponent=!0}}]);