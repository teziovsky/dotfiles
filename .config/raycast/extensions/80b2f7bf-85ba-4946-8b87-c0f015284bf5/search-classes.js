var s=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var j=Object.prototype.hasOwnProperty;var G=e=>s(e,"__esModule",{value:!0});var P=(e,o)=>{for(var i in o)s(e,i,{get:o[i],enumerable:!0})},k=(e,o,i,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of C(o))!j.call(e,r)&&(i||r!=="default")&&s(e,r,{get:()=>o[r],enumerable:!(t=w(o,r))||t.enumerable});return e};var M=(e=>(o,i)=>e&&e.get(o)||(i=k(G({}),o,1),e&&e.set(o,i),i))(typeof WeakMap!="undefined"?new WeakMap:0);var B={};P(B,{default:()=>y});var a=require("@raycast/api");var p=[{key:"auto",v:"auto"},{key:"px",v:"1px"},{key:"1/2",v:"50%"},{key:"1/3",v:"33.333333%"},{key:"2/3",v:"66.666667%"},{key:"1/4",v:"25%"},{key:"2/4",v:"50%"},{key:"3/4",v:"75%"},{key:"full",v:"100%"},{key:"0.5",v:"0.125rem",desc:"2px"},{key:"1.5",v:"0.375rem",desc:"6px"},{key:"2.5",v:"0.625rem",desc:"10px"},{key:"3.5",v:"0.875rem",desc:"14px"}],l=[0,1,2,3,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96],u=[1,2,3,4,5,6,7,8,9,10,11,12],m=[1,2,3,4,5,6];var v=[0,5,10,20,25,30,40,50,60,70,75,80,90,95,100];var g=e=>{l.forEach(o=>{e["padding"][`p-${o}`]={value:`padding: ${o}rem`,description:` ${o*4}px `},e["padding"][`-p-${o}`]={value:`padding: -${o}rem`,description:` -${o*4}px `},e["padding"][`px-${o}`]={value:`padding-left: ${o}rem; padding-right: ${o}rem`,description:` ${o*4}px `},e["padding"][`-px-${o}`]={value:`padding-left: -${o}rem; padding-right: -${o}rem`,description:` -${o*4}px `},e["padding"][`py-${o}`]={value:`padding-top: ${o}rem; padding-bottom: ${o}rem`,description:` ${o*4}px `},e["padding"][`-py-${o}`]={value:`padding-top: -${o}rem; padding-bottom: -${o}rem`,description:` -${o*4}px `},e["padding"][`pt-${o}`]={value:`padding-top: ${o}rem`,description:` ${o*4}px `},e["padding"][`-pt-${o}`]={value:`padding-top: -${o}rem`,description:` -${o*4}px `},e["padding"][`pb-${o}`]={value:`padding-bottom: ${o}rem`,description:` ${o*4}px `},e["padding"][`-pb-${o}`]={value:`padding-bottom: -${o}rem`,description:` -${o*4}px `},e["padding"][`pl-${o}`]={value:`padding-left: ${o}rem`,description:` ${o*4}px `},e["padding"][`-pl-${o}`]={value:`padding-left: -${o}rem`,description:` -${o*4}px `},e["padding"][`pr-${o}`]={value:`padding-right: ${o}rem`,description:` ${o*4}px `},e["padding"][`-pr-${o}`]={value:`padding-right: -${o}rem`,description:` -${o*4}px `}}),p.filter(({desc:o})=>Boolean(o)).forEach(({v:o,desc:i="",key:t})=>{e["padding"][`p-${t}`]={value:`padding: ${o}`,description:i},e["padding"][`-p-${t}`]={value:`padding: -${o}`,description:i},e["padding"][`-pt-${t}`]={value:`padding: -${o}`,description:i},e["padding"][`-pb-${t}`]={value:`padding: -${o}`,description:i}})};var x=e=>{l.forEach(o=>{let i=e["Top / Right / Bottom / Left"];i[`inset-${o}`]={value:`top: ${o}rem; right: ${o}rem; bottom: ${o}rem; left: ${o}rem`,description:` ${o*4}px `},i[`inset-x-${o}`]={value:`top: ${o}rem; right: ${o}rem`,description:` ${o*4}px `},i[`inset-y-${o}`]={value:`top: ${o}rem; bottom: ${o}rem`,description:` ${o*4}px `},i[`top-${o}`]={value:`top: ${o}rem`,description:` ${o*4}px `},i[`right-${o}`]={value:`right: ${o}rem`,description:` ${o*4}px `},i[`bottom-${o}`]={value:`bottom: ${o}rem`,description:` ${o*4}px `},i[`left-${o}`]={value:`left: ${o}rem`,description:` ${o*4}px `}}),p.forEach(o=>{let{key:i,v:t,desc:r=""}=o,n=e["Top / Right / Bottom / Left"];n[`inset-${i}`]={value:`top: ${t}; right: ${t}; bottom: ${t}; left: ${t}`,description:r},n[`inset-x-${i}`]={value:`top: ${t}; right: ${t}`,description:r},n[`inset-y-${i}`]={value:`top: ${t}; bottom: ${t}`,description:r},n[`top-${i}`]={value:`top: ${t}`,description:r},n[`right-${i}`]={value:`right: ${t}`,description:r},n[`bottom-${i}`]={value:`bottom: ${t}`,description:r},n[`left-${i}`]={value:`left: ${t}`,description:r}})};var $=e=>{m.forEach(o=>{e["grid-template-rows"][`grid-rows-${o}`]={value:`grid-template-rows: repeat(${o}, minmax(0, 1fr))`,description:""}}),u.forEach(o=>{e["grid-template-columns"][`grid-cols-${o}`]={value:`grid-template-columns: repeat(${o}, minmax(0, 1fr))`,description:""}}),[...u,13].forEach(o=>{e["grid-column, start/end"][`col-start-${o}`]={value:`grid-column-start: ${o}`,description:""},e["grid-column, start/end"][`col-end-${o}`]={value:`grid-column-end: ${o}`,description:""},e["grid-column, start/end"][`col-span-${o}`]={value:`grid-column: span ${o} / span ${o}`,description:""},delete e["grid-column, start/end"][`col-span-${13}`]}),[...m,7].forEach(o=>{e["grid-row, start/end"][`row-start-${o}`]={value:`grid-row-start: ${o}`,description:""},e["grid-row, start/end"][`row-end-${o}`]={value:`grid-row-end: ${o}`,description:""},e["grid-row, start/end"][`row-span-${o}`]={value:`grid-row: ${o}`,description:""},delete e["grid-row, start/end"][`row-span-${7}`]}),l.forEach(o=>{e["gap"][`gap-${o}`]={value:`gap: ${o}rem`,description:` ${o*4}px `},e["gap"][`gap-x-${o}`]={value:`columns-gap: ${o}rem`,description:` ${o*4}px `},e["gap"][`gap-y-${o}`]={value:`rows-gap: ${o}rem`,description:` ${o*4}px `}}),p.filter(({desc:o})=>Boolean(o)).forEach(({v:o,desc:i="",key:t})=>{e["gap"][`gap-${t}`]={value:`gap: ${o}`,description:i},e["gap"][`gap-x-${t}`]={value:`column-gap: ${o}`,description:i},e["gap"][`gap-y-${t}`]={value:`row-gap: ${o}`,description:i}})};var f=e=>{l.forEach(o=>{e["margin"][`m-${o}`]={value:`margin: ${o}rem`,description:` ${o*4}px `},e["margin"][`-m-${o}`]={value:`margin: -${o}rem`,description:` -${o*4}px `},e["margin"][`mx-${o}`]={value:`margin-left: ${o}rem; margin-right: ${o}rem`,description:` ${o*4}px `},e["margin"][`-mx-${o}`]={value:`margin-left: -${o}rem; margin-right: -${o}rem`,description:` -${o*4}px `},e["margin"][`my-${o}`]={value:`margin-top: ${o}rem; margin-bottom: ${o}rem`,description:` ${o*4}px `},e["margin"][`-my-${o}`]={value:`margin-top: -${o}rem; margin-bottom: -${o}rem`,description:` -${o*4}px `},e["margin"][`mt-${o}`]={value:`margin-top: ${o}rem`,description:` ${o*4}px `},e["margin"][`-mt-${o}`]={value:`margin-top: -${o}rem`,description:` -${o*4}px `},e["margin"][`mb-${o}`]={value:`margin-bottom: ${o}rem`,description:` ${o*4}px `},e["margin"][`-mb-${o}`]={value:`margin-bottom: -${o}rem`,description:` -${o*4}px `},e["margin"][`ml-${o}`]={value:`margin-left: ${o}rem`,description:` ${o*4}px `},e["margin"][`-ml-${o}`]={value:`margin-left: -${o}rem`,description:` -${o*4}px `},e["margin"][`mr-${o}`]={value:`margin-right: ${o}rem`,description:` ${o*4}px `},e["margin"][`-mr-${o}`]={value:`margin-right: -${o}rem`,description:` -${o*4}px `}}),p.filter(({desc:o})=>Boolean(o)).forEach(({v:o,desc:i="",key:t})=>{e["margin"][`m-${t}`]={value:`margin: ${o}`,description:i},e["margin"][`-m-${t}`]={value:`margin: -${o}`,description:i},e["margin"][`-mt-${t}`]={value:`margin: -${o}`,description:i},e["margin"][`-mb-${t}`]={value:`margin: -${o}`,description:i}}),l.forEach(o=>{e["space between"][`space-x-${o}`]={value:`margin-left: ${o}rem`,description:`.space-x-${o} > * + * { margin-left: ${o}rem /* ${o}px */ } `},e["space between"][`space-y-${o}`]={value:`margin-top: ${o}rem`,description:`.space-y-${o} > * + * { margin-top: ${o}rem /* ${o}px */ } `}}),p.filter(({desc:o})=>Boolean(o)).forEach(({key:o,v:i,desc:t=""})=>{e["space between"][`space-x-${o}`]={value:i,description:t}})};var b=e=>{v.forEach(o=>{e["opacity"][`opacity-${o}`]={value:`opacity: ${o/100}`,description:""}})};var d={["Breakpoints"]:{sm:{description:"Minimum width 640px",value:"@media (min-width: 640px) { ... }"},md:{description:"Minimum width 768px",value:"@media (min-width: 768px) { ... }"},lg:{description:"Minimum width 1024px",value:"@media (min-width: 1024px) { ... }"},xl:{description:"Minimum width 1280px",value:"@media (min-width: 1280px) { ... }"},"2xl":{description:"Minimum width 1536px",value:"@media (min-width: 1536px) { ... }"}},["Box Decoration Break"]:{"box-decoration-clone":{value:"box-decoration-break: clone",description:""},"box-decoration-slice":{value:"box-decoration-break: slice;",description:""}},["Container"]:{container:{value:"container",description:"sm max-width: 640px; md max-width: 768px; lg	max-width: 1024px; xl	max-width: 1280px; 2xl	max-width: 1536px"}},["box-sizing"]:{"box-border":{value:"box-sizing: border-box",description:""},"box-content":{value:"box-sizing: content-box",description:""}},["display"]:{hidden:{value:"display: none",description:""},block:{value:"display: block",description:""},"inline-block":{value:"display: inline-block",description:""},inline:{value:"display: inline",description:""},flex:{value:"display: flex",description:""},"inline-flex":{value:"display: inline-flex",description:""},table:{value:"display: table",description:""},"inline-table":{value:"display: inline-table",description:""},"table-caption":{value:"display: table-caption",description:""},"table-cell":{value:"display: table-cell",description:""},"table-column":{value:"display: table-column",description:""},"table-column-group":{value:"display: table-column-group",description:""},"table-footer-group":{value:"display: table-footer-group",description:""},"table-header-group":{value:"display: table-header-group",description:""},"table-row":{value:"display: table-row",description:""},"table-row-group":{value:"display: table-row-group",description:""},"flow-root":{value:"display: flow-root",description:""},grid:{value:"display: grid",description:""},"inline-grid":{value:"display: inline-grid",description:""},contents:{value:"display: contents",description:""},"list-item":{value:"display: list-item",description:""}},["float"]:{"float-right":{value:"float: right;",description:""},"float-left":{value:"float: left;",description:""},"float-none":{value:"float: none;",description:""}},["clear"]:{"clear-right":{value:"clear: right;",description:""},"clear-left":{value:"clear: left;",description:""},"clear-both":{value:"clear: both;",description:""},"clear-none":{value:"clear: none;",description:""}},["isolation"]:{isolate:{value:"isolation: isolate;",description:""},"isolate-auto":{value:"isolation: auto;",description:""}},["object-fit"]:{"object-cover":{value:"object-fit: cover;",description:""},"object-contain":{value:"object-fit: contain;",description:""},"object-fill":{value:"object-fit: fill;",description:""},"object-none":{value:"object-fit: none;",description:""},"object-scale-down":{value:"object-fit: scale-down;",description:""}},["object-position"]:{"object-bottom":{value:"object-position: bottom;",description:""},"object-center":{value:"object-position: center;",description:""},"object-left":{value:"object-position: left;",description:""},"object-right":{value:"object-position: right;",description:""},"object-top":{value:"object-position: top;",description:""},"object-right-bottom":{value:"object-position: right bottom;",description:""},"object-right-top":{value:"object-position: right top;",description:""},"object-left-bottom":{value:"object-position: left bottom;",description:""},"object-left-top":{value:"object-position: left top;",description:""}},["overflow"]:{"overflow-auto":{value:"overflow: auto;",description:""},"overflow-hidden":{value:"overflow: hidden;",description:""},"overflow-scroll":{value:"overflow: scroll;",description:""},"overflow-visible":{value:"overflow: visible;",description:""},"overflow-x-auto":{value:"overflow-x: auto;",description:""},"overflow-x-hidden":{value:"overflow-x: hidden;",description:""},"overflow-x-scroll":{value:"overflow-x: scroll;",description:""},"overflow-x-visible":{value:"overflow-x: visible;",description:""},"overflow-y-auto":{value:"overflow-y: auto;",description:""},"overflow-y-hidden":{value:"overflow-y: hidden;",description:""},"overflow-y-scroll":{value:"overflow-y: scroll;",description:""},"overflow-y-visible":{value:"overflow-y: visible;",description:""}},["overscroll"]:{"overscroll-auto":{value:"overscroll-behavior: auto;",description:""},"overscroll-contain":{value:"overscroll-behavior: contain;",description:""},"overscroll-none":{value:"overscroll-behavior: none;",description:""},"overscroll-y-auto":{value:"overscroll-behavior-y: auto;",description:""},"overscroll-y-contain":{value:"overscroll-behavior-y: contain;",description:""},"overscroll-y-none":{value:"overscroll-behavior-y: none;",description:""},"overscroll-x-auto":{value:"overscroll-behavior-x: auto;",description:""},"overscroll-x-contain":{value:"overscroll-behavior-x: contain;",description:""},"overscroll-x-none":{value:"overscroll-behavior-x: none;",description:""}},["position"]:{static:{value:"position: static;",description:""},absolute:{value:"position: absolute;",description:""},fixed:{value:"position: fixed;",description:""},relative:{value:"position: relative;",description:""},sticky:{value:"position: sticky;",description:""}},["Top / Right / Bottom / Left"]:{},["visibility"]:{visible:{value:"visibility: visible;",description:""},invisible:{value:"visibility: hidden;",description:""}},["z-index"]:{"z-0":{value:"z-index: 0;",description:""},"z-10":{value:"z-index: 10;",description:""},"z-20":{value:"z-index: 20;",description:""},"z-30":{value:"z-index: 30;",description:""},"z-40":{value:"z-index: 40;",description:""},"z-50":{value:"z-index: 50;",description:""},"z-auto":{value:"z-index: auto;",description:""}},["grid-template-columns"]:{"grid-cols-none":{value:"grid-template-columns: none;",description:""}},["grid-column, start/end"]:{"col-auto":{value:"grid-column: auto;",description:""},"col-start-auto":{value:"grid-column-start: auto;",description:""},"col-end-auto":{value:"grid-column-end: auto;",description:""},"col-span-full":{value:"grid-column: 1 / -1;",description:""}},["grid-template-rows"]:{"grid-rows-none":{value:"grid-template-rows: none;",description:""}},["grid-row, start/end"]:{"row-span-full":{value:"grid-row: 1 / -1;",description:""},"row-start-auto":{value:"grid-row-start: auto;",description:""},"row-end-auto":{value:"grid-row-end: auto;",description:""}},["gird-auto-flow"]:{"grid-flow-row":{value:"grid-auto-flow: row;",description:""},"grid-flow-col":{value:"grid-auto-flow: column;",description:""},"grid-flow-row-dens":{value:"grid-auto-flow: row dense;",description:""},"grid-flow-col-dens":{value:"grid-auto-flow: column dense;",description:""}},["grid-auto-columns"]:{"auto-cols-auto":{value:"grid-auto-columns: auto;",description:""},"auto-cols-min":{value:"grid-auto-columns: min-content;",description:""},"auto-cols-max":{value:"grid-auto-columns: max-content;",description:""},"auto-cols-fr":{value:"grid-auto-columns: minmax(0, 1fr);",description:""}},["grid-auto-rows"]:{"auto-rows-auto":{value:"grid-auto-rows: auto;",description:""},"auto-rows-min":{value:"grid-auto-rows: min-content;",description:""},"auto-rows-max":{value:"grid-auto-rows: max-content;",description:""},"auto-rows-fr":{value:"grid-auto-rows: minmax(0, 1fr);",description:""}},["gap"]:{"gap-px":{value:"gap: 1px;",description:""}},["padding"]:{"-p-px":{value:"padding: -1px",description:""},"-pl-px":{value:"padding-left: -1px",description:""},"-pr-px":{value:"padding-right: -1px",description:""},"-pt-px":{value:"padding-top: -1px",description:""},"-pb-px":{value:"padding-bottom: -1px",description:""},"p-px":{value:"padding: 1px",description:""},"pl-px":{value:"padding-left: 1px",description:""},"pr-px":{value:"padding-right: 1px",description:""},"pt-px":{value:"padding-top: 1px",description:""},"pb-px":{value:"padding-bottom: 1px",description:""}},["margin"]:{"-m-px":{value:"margin: -1px",description:""},"-ml-px":{value:"margin-left: -1px",description:""},"-mr-px":{value:"margin-right: -1px",description:""},"-mt-px":{value:"margin-top: -1px",description:""},"-b-px":{value:"margin-bottom: -1px",description:""},"m-px":{value:"margin: 1px",description:""},"ml-px":{value:"margin-left: 1px",description:""},"mr-px":{value:"margin-right: 1px",description:""},"mt-px":{value:"margin-top: 1px",description:""},"mb-px":{value:"margin-bottom: 1px",description:""}},["space between"]:{"space-x-reverse > * + *":{value:"--tw-space-x-reverse: 1;",description:""},"space-y-reverse > * + *":{value:"--tw-space-y-reverse: 1;",description:""},"space-x-px > * + *":{value:"margin-left: 1px;",description:""},"space-y-px > * + *":{value:"margin-top: 1px;",description:""}},["opacity"]:{}};g(d);x(d);$(d);f(d);b(d);var h=d;function y(){return _jsx(a.List,null,Object.entries(h).map(([e,o])=>_jsx(a.List.Section,{key:e,title:e},Object.entries(o).map(([i,t])=>_jsx(a.List.Item,{title:i,key:i,subtitle:t.description,accessories:[{text:t.value}],actions:_jsx(a.ActionPanel,null,_jsx(a.Action.CopyToClipboard,{title:"Copy Class Name",content:i,shortcut:{modifiers:["cmd"],key:"."}}),_jsx(a.Action.CopyToClipboard,{title:"Copy Description",content:t.description,shortcut:{modifiers:["cmd","shift"],key:"."}}),_jsx(a.Action.CopyToClipboard,{title:"Copy Generated CSS",content:t.value,shortcut:{modifiers:["cmd"],key:","}}))})))))}module.exports=M(B);0&&(module.exports={});
