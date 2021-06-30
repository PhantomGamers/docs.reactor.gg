(self.webpackChunkdropship_website_docs=self.webpackChunkdropship_website_docs||[]).push([[14],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6089:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={title:"Getting Started",slug:"/"},s=void 0,c={unversionedId:"introduction/getting_started",id:"introduction/getting_started",isDocsHomePage:!1,title:"Getting Started",description:"Preamble",source:"@site/docs/introduction/getting_started.md",sourceDirName:"introduction",slug:"/",permalink:"/",editUrl:"https://github.com/NuclearPowered/docs.reactor.gg/blob/master/docs/introduction/getting_started.md",version:"current",frontMatter:{title:"Getting Started",slug:"/"},sidebar:"docs",next:{title:"Install BepInEx",permalink:"/quick_start/install_bepinex"}},p=[{value:"Preamble",id:"preamble",children:[]},{value:"Prerequisite Information",id:"prerequisite-information",children:[]},{value:"What are the different parts of the Reactor Framework?",id:"what-are-the-different-parts-of-the-reactor-framework",children:[]},{value:"Overall Goals",id:"overall-goals",children:[]},{value:"Ready to start?",id:"ready-to-start",children:[{value:"Let's go \u2794",id:"lets-go-\u2794",children:[]}]}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"preamble"},"Preamble"),(0,o.kt)("p",null,"This guide will explain the tools necessary to install and setup in order to create\na modding environment. It contains a detailed explanation of how one would approach\nmodding the game Among Us. Finally, it walks through the process of getting your mod\ninstalled and playing it."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"prerequisite-information"},"Prerequisite Information"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Loading external mods requires ",(0,o.kt)("strong",{parentName:"li"},"BepInEx"),", also known as Bepis Injector Extensible."),(0,o.kt)("li",{parentName:"ol"},"BepInEx provides an environment for mods to patch Among Us functions, to change how they run, as well as call Among Us and Unity methods."),(0,o.kt)("li",{parentName:"ol"},"A quirk of Among Us is that it is compiled using ",(0,o.kt)("strong",{parentName:"li"},"il2cpp"),". Which makes decompilation really annoying."),(0,o.kt)("li",{parentName:"ol"},"Luckily, the Reactor Framework automatically handles all the hard parts for you.")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Mods for the game are programmed in ",(0,o.kt)("strong",{parentName:"p"},"C#"),". It is similar to other higher level languages\nlike Java. Though the programming concepts in this guide are simple to follow, prior\nprogramming experience is heavily recommended."))),(0,o.kt)("h2",{id:"what-are-the-different-parts-of-the-reactor-framework"},"What are the different parts of the Reactor Framework?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reactor Framework")," is the all-encompassing umbrella term for many NuclearPowered\nprojects. It may also be referred to as just Reactor in general language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reactor")," (Reactor.dll) refers to the client side mod. It provides helper extensions\nand utility functions for other client mods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reactor.MSBuild")," plugs directly into the C# build and automatically downloads, unhollows and references Among Us\nprocess.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overall-goals"},"Overall Goals"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install BepInEx."),(0,o.kt)("li",{parentName:"ol"},"Install the Reactor mod."),(0,o.kt)("li",{parentName:"ol"},"Install an the .NET SDK and the example mod template."),(0,o.kt)("li",{parentName:"ol"},"Download and configure a C# IDE to work with the template."),(0,o.kt)("li",{parentName:"ol"},"Compile the project and obtain the mod file."),(0,o.kt)("li",{parentName:"ol"},"Launch Among Us with the new mod!")),(0,o.kt)("h2",{id:"ready-to-start"},"Ready to start?"),(0,o.kt)("h3",{id:"lets-go-\u2794"},(0,o.kt)("a",{parentName:"h3",href:"/quick_start/install_bepinex"},"Let's go \u2794")))}m.isMDXComponent=!0}}]);