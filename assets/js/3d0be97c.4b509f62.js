(self.webpackChunkdropship_website_docs=self.webpackChunkdropship_website_docs||[]).push([[956],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5354:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Harmony Guide"},l={unversionedId:"bepinex_and_harmony/harmony_guide",id:"bepinex_and_harmony/harmony_guide",isDocsHomePage:!1,title:"Harmony Guide",description:"Intro to Prefixes and Postfixes",source:"@site/docs/bepinex_and_harmony/harmony_guide.md",sourceDirName:"bepinex_and_harmony",slug:"/bepinex_and_harmony/harmony_guide",permalink:"/bepinex_and_harmony/harmony_guide",editUrl:"https://github.com/NuclearPowered/docs.reactor.gg/blob/master/docs/bepinex_and_harmony/harmony_guide.md",version:"current",frontMatter:{title:"Harmony Guide"},sidebar:"docs",previous:{title:"BepInEx Guide",permalink:"/bepinex_and_harmony/bepinex_guide"},next:{title:"Debugging",permalink:"/bepinex_and_harmony/debugging"}},c=[{value:"Intro to Prefixes and Postfixes",id:"intro-to-prefixes-and-postfixes",children:[]},{value:"Understanding how to Patch Classes",id:"understanding-how-to-patch-classes",children:[]}],p={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"intro-to-prefixes-and-postfixes"},"Intro to Prefixes and Postfixes"),(0,o.kt)("p",null,"Harmony Patches are defined as Prefixes and Postfixes.\nExtensive Harmony patch documentation is ",(0,o.kt)("a",{parentName:"p",href:"https://harmony.pardeike.net/articles/patching.html"},"here"),"."),(0,o.kt)("p",null,"Prefixes run before the original method. It can be used to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access and edit the arguments of the original method."),(0,o.kt)("li",{parentName:"ul"},"Set the result of the original method."),(0,o.kt)("li",{parentName:"ul"},"Skip the original method."),(0,o.kt)("li",{parentName:"ul"},"One key difference to keep in mind is that while in true Harmony, patched prefixes can cancel out\nother prefixes, this is ",(0,o.kt)("strong",{parentName:"li"},"NOT THE CASE")," with HarmonyX, the fork of Harmony that BepInEx uses.\nWith HarmonyX, you cannot cancel out other prefixes when returning ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," and attempting to skip the original method.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Detailed rationale and implementation differences found here ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/BepInEx/HarmonyX/wiki/Prefix-changes"},"https://github.com/BepInEx/HarmonyX/wiki/Prefix-changes"))))),(0,o.kt)("p",null,"Postfixes run after the original method. They can be used to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read or change the result of the original method."),(0,o.kt)("li",{parentName:"ul"},"Access the arguments of the original method."),(0,o.kt)("li",{parentName:"ul"},"Run custom code after the logic of the original method has executed.")),(0,o.kt)("p",null,"They are usually defined as ",(0,o.kt)("strong",{parentName:"p"},"attributes")," above a patch class,\nwhich contains static methods named ",(0,o.kt)("inlineCode",{parentName:"p"},"Prefix")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"Postfix"),". You can\naccess the current instance by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"__instance")," parameter to the method (with the type\nof the class you are patching)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aside from ",(0,o.kt)("inlineCode",{parentName:"li"},"__instance"),", there are many more special parameters that can be added to the method,\nsuch as the ability to access arguments that are passed in from the existing method. They can all\nbe found at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/BepInEx/HarmonyX/wiki/Patch-parameters"},"https://github.com/BepInEx/HarmonyX/wiki/Patch-parameters"),".")),(0,o.kt)("h2",{id:"understanding-how-to-patch-classes"},"Understanding how to Patch Classes"),(0,o.kt)("p",null,"An example patch is below.\nIn particular, we call which class we want to detect, for instance, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerControl")," class.",(0,o.kt)("br",{parentName:"p"}),"\n","After that, we would like to define what method we want to detect in that class. In this scenario, we will\nuse the ",(0,o.kt)("inlineCode",{parentName:"p"},"FixedUpdate")," method which runs every time the engine updates physics."),(0,o.kt)("p",null,"In order for us to patch this class and method, we can use the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// The type in the typeof() is the class being patched.\n// The method in the nameof() is the method of the class that is being patched\n[HarmonyPatch(typeof(PlayerControl), nameof(PlayerControl.FixedUpdate))]\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Make sure that this is above your class")),(0,o.kt)("p",null,"After that, we can create a Postfix method since it is not necessary to use a Prefix",(0,o.kt)("br",{parentName:"p"}),"\n","It is easy practice to make sure your method is public, static, and that your variable is called ",(0,o.kt)("inlineCode",{parentName:"p"},"__instance"),(0,o.kt)("br",{parentName:"p"}),"\n","You then can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerControl")," from the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"__instance")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using HarmonyLib;\n\nnamespace ExampleMod\n{\n    [HarmonyPatch(typeof(PlayerControl), nameof(PlayerControl.FixedUpdate))]\n    public static class PlayerControlPatch\n    {\n        // It is nice to know that this method runs for all players so all player\'s names are changed to "Apollo was here"\n        public static void Postfix(PlayerControl __instance)\n        {\n            // This changes all player\'s name into "Apollo was here" \n            __instance.nameText.Text = "Apollo was here";\n        }\n    }\n}\n')))}h.isMDXComponent=!0}}]);