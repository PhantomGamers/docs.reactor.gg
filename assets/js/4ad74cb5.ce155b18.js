(self.webpackChunkdropship_website_docs=self.webpackChunkdropship_website_docs||[]).push([[444],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7977:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={title:"Install and configure C# IDE"},c={unversionedId:"quick_start/install_configure_ide",id:"quick_start/install_configure_ide",isDocsHomePage:!1,title:"Install and configure C# IDE",description:"Downloading and configuring the C# IDE for the example template is the fourth step",source:"@site/docs/quick_start/install_configure_ide.md",sourceDirName:"quick_start",slug:"/quick_start/install_configure_ide",permalink:"/quick_start/install_configure_ide",editUrl:"https://github.com/NuclearPowered/docs.reactor.gg/blob/master/docs/quick_start/install_configure_ide.md",version:"current",frontMatter:{title:"Install and configure C# IDE"},sidebar:"docs",previous:{title:"Install .NET SDK and Example template",permalink:"/quick_start/install_netsdk_example_template"},next:{title:"Compile the Example mod",permalink:"/quick_start/compile_example_mod"}},p=[{value:"Install C# IDE",id:"install-c-ide",children:[]},{value:"Initial configuration of the project",id:"initial-configuration-of-the-project",children:[{value:"Inside the project file",id:"inside-the-project-file",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Downloading and configuring the C# IDE for the example template is the fourth step\n",(0,o.kt)("a",{parentName:"p",href:"/#overall-goals"},"Overall Goals"),"."),(0,o.kt)("h2",{id:"install-c-ide"},"Install C# IDE"),(0,o.kt)("p",null,"Download Rider or Visual Studio. If you prefer, you can also use a text editor, or a\nlightweight environment like Visual Studio Code."),(0,o.kt)("h2",{id:"initial-configuration-of-the-project"},"Initial configuration of the project"),(0,o.kt)("p",null,"Now, Open the project in your IDE or text editor. Do not worry if your IDE shows a lot of\nerrors. They will disappear at the end of this section. There are a few steps to follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},".csproj")," file.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Rider, right click on the project and go under ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit > Edit .csproj"),". Note that the\nimage below is a sample image, and some information, particularly the name of the\nproject, will not match with our Example mod project."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.stack.imgur.com/uj5yP.png",alt:"open_csproj_rider"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Visual Studio Code, open up the ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," file from the explorer view.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can also navigate to the directory in which you cloned the git repository,\nand open the .csproj with a text editor."))))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you can't find the ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," file, make sure you are in the right directory.\nThe project is organized in a nested structure. Here is an example directory\nstructure. Note that the exact name of the ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," file depends on what you\npassed as the name to ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new reactor -n")," when you created the project."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 ModExperiment\n    \u251c\u2500\u2500 ModExperiment\n    \u2502\xa0\xa0 \u251c\u2500\u2500 ModExperiment.csproj\n    \u2502\xa0\xa0 \u2514\u2500\u2500 TemplatePlugin.cs\n    \u2514\u2500\u2500 ModExperiment.sln\n")))),(0,o.kt)("h3",{id:"inside-the-project-file"},"Inside the project file"),(0,o.kt)("p",null,"Reactor.MSBuild docs are WIP"),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you still have any errors, you should refresh your IDE, and IDE should do this\nautomatically. Otherwise, restart the IDE, and it will pick up the proper information\nfrom the project."))}u.isMDXComponent=!0}}]);