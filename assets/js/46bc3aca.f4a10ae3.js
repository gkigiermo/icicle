"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[708],{5680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>m});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=t.createContext({}),c=function(e){var n=t.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=c(e.components);return t.createElement(g.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(g,".").concat(d)]||p[d]||u[d]||i;return a?t.createElement(m,o(o({ref:n},s),{},{components:a})):t.createElement(m,o({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3139:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=a(8168),r=(a(6540),a(5680));a(1873);const i={},o="Golang bindings",l={unversionedId:"icicle/golang-bindings",id:"icicle/golang-bindings",title:"Golang bindings",description:"Golang bindings allow you to use ICICLE as a golang library.",source:"@site/docs/icicle/golang-bindings.md",sourceDirName:"icicle",slug:"/icicle/golang-bindings",permalink:"/icicle/golang-bindings",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings.md",tags:[],version:"current",lastUpdatedBy:"release-bot",lastUpdatedAt:1714594302,formattedLastUpdatedAt:"5/1/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"ICICLE Core",permalink:"/icicle/core"},next:{title:"MSM",permalink:"/icicle/golang-bindings/msm"}},g={},c=[{value:"Using ICICLE Golang bindings in your project",id:"using-icicle-golang-bindings-in-your-project",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"How do Golang bindings work?",id:"how-do-golang-bindings-work",level:2}],s={toc:c},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"golang-bindings"},"Golang bindings"),(0,r.yg)("p",null,"Golang bindings allow you to use ICICLE as a golang library.\nThe source code for all Golang libraries can be found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang"},"here"),"."),(0,r.yg)("p",null,"The Golang bindings are comprised of multiple packages."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/core"},(0,r.yg)("inlineCode",{parentName:"a"},"core"))," which defines all shared methods and structures, such as configuration structures, or memory slices."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/cuda_runtime"},(0,r.yg)("inlineCode",{parentName:"a"},"cuda-runtime"))," which defines abstractions for CUDA methods for allocating memory, initializing and managing streams, and ",(0,r.yg)("inlineCode",{parentName:"p"},"DeviceContext")," which enables users to define and keep track of devices."),(0,r.yg)("p",null,"Each curve has its own package which you can find ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/curves"},"here"),". If your project uses BN254 you only need to install that single package named ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/golang/curves/bn254"},(0,r.yg)("inlineCode",{parentName:"a"},"bn254")),"."),(0,r.yg)("h2",{id:"using-icicle-golang-bindings-in-your-project"},"Using ICICLE Golang bindings in your project"),(0,r.yg)("p",null,"To add ICICLE to your ",(0,r.yg)("inlineCode",{parentName:"p"},"go.mod")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"go get github.com/ingonyama-zk/icicle\n")),(0,r.yg)("p",null,"If you want to specify a specific branch"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"go get github.com/ingonyama-zk/icicle@<branch_name>\n")),(0,r.yg)("p",null,"For a specific commit"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"go get github.com/ingonyama-zk/icicle@<commit_id>\n")),(0,r.yg)("p",null,"To build the shared libraries you can run this script:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./build.sh [-curve=<curve> | -field=<field>] [-cuda_version=<version>] [-g2] [-ecntt] [-devmode]\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"curve")),' - The name of the curve to build or "all" to build all curves'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"field")),' - The name of the field to build or "all" to build all fields'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"g2"))," - Optional - build with G2 enabled "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"ecntt"))," - Optional - build with ECNTT enabled"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"devmode"))," - Optional - build in devmode"),(0,r.yg)("li",{parentName:"ul"},"Usage can be displayed with the flag ",(0,r.yg)("inlineCode",{parentName:"li"},"-help"))),(0,r.yg)("p",null,"To build ICICLE libraries for all supported curves with G2 and ECNTT enabled."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./build.sh all -g2 -ecntt\n")),(0,r.yg)("p",null,"If you wish to build for a specific curve, for example bn254, without G2 or ECNTT enabled."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./build.sh -curve=bn254\n")),(0,r.yg)("p",null,"Now you can import ICICLE into your project"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/stretchr/testify/assert"\n    "testing"\n\n    "github.com/ingonyama-zk/icicle/v2/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/v2/wrappers/golang/cuda_runtime"\n)\n...\n')),(0,r.yg)("h2",{id:"running-tests"},"Running tests"),(0,r.yg)("p",null,"To run all tests, for all curves:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"go test --tags=g2 ./... -count=1\n")),(0,r.yg)("p",null,"If you dont want to include g2 tests then drop ",(0,r.yg)("inlineCode",{parentName:"p"},"--tags=g2"),"."),(0,r.yg)("p",null,"If you wish to run test for a specific curve:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"go test <path_to_curve> -count=1\n")),(0,r.yg)("h2",{id:"how-do-golang-bindings-work"},"How do Golang bindings work?"),(0,r.yg)("p",null,"The libraries produced from the CUDA code compilation are used to bind Golang to ICICLE's CUDA code."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"These libraries (named ",(0,r.yg)("inlineCode",{parentName:"p"},"libingo_curve_<curve>.a")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"libingo_field_<curve>.a"),") can be imported in your Go project to leverage the GPU accelerated functionalities provided by ICICLE.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In your Go project, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"cgo")," to link these libraries. Here's a basic example on how you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"cgo")," to link these libraries:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'/*\n#cgo LDFLAGS: -L/path/to/shared/libs -lingo_curve_bn254 -L$/path/to/shared/libs -lingo_field_bn254 -lstdc++ -lm\n#include "icicle.h" // make sure you use the correct header file(s)\n*/\nimport "C"\n\nfunc main() {\n    // Now you can call the C functions from the ICICLE libraries.\n    // Note that C function calls are prefixed with \'C.\' in Go code.\n}\n')),(0,r.yg)("p",null,"Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"/path/to/shared/libs")," with the actual path where the shared libraries are located on your system."))}u.isMDXComponent=!0},1873:(e,n,a)=>{a(6540)}}]);