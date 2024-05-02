"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[773],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return t?r.createElement(m,o(o({ref:n},g),{},{components:t})):r.createElement(m,o({ref:n},g))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(8168),i=(t(6540),t(5680));t(1873);const a={},o="NTT",l={unversionedId:"icicle/golang-bindings/ntt",id:"icicle/golang-bindings/ntt",title:"NTT",description:"Supported curves",source:"@site/docs/icicle/golang-bindings/ntt.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/ntt",permalink:"/icicle/golang-bindings/ntt",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/ntt.md",tags:[],version:"current",lastUpdatedBy:"release-bot",lastUpdatedAt:1714594302,formattedLastUpdatedAt:"5/1/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"MSM Pre computation",permalink:"/icicle/golang-bindings/msm-pre-computation"},next:{title:"ECNTT",permalink:"/icicle/golang-bindings/ecntt"}},c={},s=[{value:"Supported curves",id:"supported-curves",level:3},{value:"NTT Example",id:"ntt-example",level:2},{value:"NTT Method",id:"ntt-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"NTT Configuration (NTTConfig)",id:"ntt-configuration-nttconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Initializing the NTT Domain",id:"initializing-the-ntt-domain",level:3},{value:"Releasing the domain",id:"releasing-the-domain",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return Value",id:"return-value-1",level:3},{value:"Example",id:"example",level:3}],g={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ntt"},"NTT"),(0,i.yg)("h3",{id:"supported-curves"},"Supported curves"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"bls12-377"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"bls12-381"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"bn254"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"bw6-761")),(0,i.yg)("h2",{id:"ntt-example"},"NTT Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/v2/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/v2/wrappers/golang/cuda_runtime"\n    bn254 "github.com/ingonyama-zk/icicle/v2/wrappers/golang/curves/bn254"\n\n    "github.com/consensys/gnark-crypto/ecc/bn254/fr/fft"\n)\n\nfunc init() {\n    cfg := bn254.GetDefaultNttConfig()\n    initDomain(18, cfg)\n}\n\nfunc initDomain[T any](largestTestSize int, cfg core.NTTConfig[T]) core.IcicleError {\n    rouMont, _ := fft.Generator(uint64(1 << largestTestSize))\n    rou := rouMont.Bits()\n    rouIcicle := bn254.ScalarField{}\n\n    rouIcicle.FromLimbs(rou[:])\n    e := bn254.InitDomain(rouIcicle, cfg.Ctx, false)\n    return e\n}\n\nfunc main() {\n    // Obtain the default NTT configuration with a predefined coset generator.\n    cfg := bn254.GetDefaultNttConfig()\n\n    // Define the size of the input scalars.\n    size := 1 << 18\n\n    // Generate scalars for the NTT operation.\n    scalars := bn254.GenerateScalars(size)\n\n    // Set the direction of the NTT (forward or inverse).\n    dir := core.KForward\n\n    // Allocate memory for the results of the NTT operation.\n    results := make(core.HostSlice[bn254.ScalarField], size)\n\n    // Perform the NTT operation.\n    err := bn254.Ntt(scalars, dir, &cfg, results)\n    if err.CudaErrorCode != cr.CudaSuccess {\n        panic("NTT operation failed")\n    }\n}\n')),(0,i.yg)("h2",{id:"ntt-method"},"NTT Method"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func Ntt[T any](scalars core.HostOrDeviceSlice, dir core.NTTDir, cfg *core.NTTConfig[T], results core.HostOrDeviceSlice) core.IcicleError\n")),(0,i.yg)("h3",{id:"parameters"},"Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"scalars")),": A slice containing the input scalars for the transform. It can reside either in host memory or device memory."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"dir")),": The direction of the NTT operation (",(0,i.yg)("inlineCode",{parentName:"li"},"KForward")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"KInverse"),")."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"cfg")),": A pointer to an ",(0,i.yg)("inlineCode",{parentName:"li"},"NTTConfig")," object, containing configuration options for the NTT operation."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"results")),": A slice where the results of the NTT operation will be stored. This slice can be in host or device memory.")),(0,i.yg)("h3",{id:"return-value"},"Return Value"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"CudaError")),": Returns a CUDA error code indicating the success or failure of the NTT operation.")),(0,i.yg)("h2",{id:"ntt-configuration-nttconfig"},"NTT Configuration (NTTConfig)"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"NTTConfig")," structure holds configuration parameters for the NTT operation, allowing customization of its behavior to optimize performance based on the specifics of your protocol."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type NTTConfig[T any] struct {\n    Ctx cr.DeviceContext\n    CosetGen T\n    BatchSize int32\n    ColumnsBatch bool\n    Ordering Ordering\n    areInputsOnDevice  bool\n    areOutputsOnDevice bool\n    IsAsync bool\n    NttAlgorithm NttAlgorithm\n}\n")),(0,i.yg)("h3",{id:"fields"},"Fields"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"Ctx")),": Device context containing details like device ID and stream ID."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"CosetGen")),": Coset generator used for coset (i)NTTs, defaulting to no coset being used."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"BatchSize")),": The number of NTTs to compute in one operation, defaulting to 1."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"ColumnsBatch")),": If true the function will compute the NTTs over the columns of the input matrix and not over the rows. Defaults to ",(0,i.yg)("inlineCode",{parentName:"li"},"false"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"Ordering")),": Ordering of inputs and outputs (",(0,i.yg)("inlineCode",{parentName:"li"},"KNN"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"KNR"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"KRN"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"KRR"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"KMN"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"KNM"),"), affecting how data is arranged."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"areInputsOnDevice")),": Indicates if input scalars are located on the device."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"areOutputsOnDevice")),": Indicates if results are stored on the device."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"IsAsync")),": Controls whether the NTT operation runs asynchronously."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"NttAlgorithm")),": Explicitly select the NTT algorithm. Default value: Auto (the implementation selects radix-2 or mixed-radix algorithm based on heuristics).")),(0,i.yg)("h3",{id:"default-configuration"},"Default Configuration"),(0,i.yg)("p",null,"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"GetDefaultNTTConfig")," to obtain a default configuration, customizable as needed."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func GetDefaultNTTConfig[T any](cosetGen T) NTTConfig[T]\n")),(0,i.yg)("h3",{id:"initializing-the-ntt-domain"},"Initializing the NTT Domain"),(0,i.yg)("p",null,"Before performing NTT operations, it's necessary to initialize the NTT domain; it only needs to be called once per GPU since the twiddles are cached."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func InitDomain(primitiveRoot ScalarField, ctx cr.DeviceContext, fastTwiddles bool) core.IcicleError\n")),(0,i.yg)("p",null,"This function initializes the domain with a given primitive root, optionally using fast twiddle factors to optimize the computation."),(0,i.yg)("h3",{id:"releasing-the-domain"},"Releasing the domain"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ReleaseDomain")," function is responsible for releasing the resources associated with a specific domain in the CUDA device context."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func ReleaseDomain(ctx cr.DeviceContext) core.IcicleError\n")),(0,i.yg)("h3",{id:"parameters-1"},"Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"ctx")),": a reference to the ",(0,i.yg)("inlineCode",{parentName:"li"},"DeviceContext")," object, which represents the CUDA device context.")),(0,i.yg)("h3",{id:"return-value-1"},"Return Value"),(0,i.yg)("p",null,"The function returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"core.IcicleError"),", which represents the result of the operation. If the operation is successful, the function returns ",(0,i.yg)("inlineCode",{parentName:"p"},"core.IcicleErrorCode(0)"),"."),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/icicle-crypto/icicle-core/cr"\n    "github.com/icicle-crypto/icicle-core/core"\n)\n\nfunc example() {\n    cfg := GetDefaultNttConfig()\n    err := ReleaseDomain(cfg.Ctx)\n    if err != nil {\n        // Handle the error\n    }\n}\n')))}p.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);