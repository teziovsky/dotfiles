var d=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var $=Object.getOwnPropertyNames;var T=Object.prototype.hasOwnProperty;var x=n=>d(n,"__esModule",{value:!0});var v=(n,r)=>{for(var o in r)d(n,o,{get:r[o],enumerable:!0})},B=(n,r,o,c)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of $(r))!T.call(n,a)&&(o||a!=="default")&&d(n,a,{get:()=>r[a],enumerable:!(c=L(r,a))||c.enumerable});return n};var D=(n=>(r,o)=>n&&n.get(r)||(o=B(x({}),r,1),n&&n.set(r,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var E={};v(E,{default:()=>m});var t=require("@raycast/api"),f=require("child_process"),l=require("react");function m(){let[n,r]=(0,l.useState)([]),[o,c]=(0,l.useState)(void 0),a=t.preferences.shouldSearchInPaths?.value??!1,P=t.preferences.shouldPrioritizeAppsWhenFiltering?.value??!1,y=t.preferences.shouldShowPID?.value??!1,h=()=>{(0,f.exec)("ps -eo pid,pcpu,comm | sort -nrk 2,3",(e,i)=>{if(e!=null)return;let s=i.split(`
`).map(u=>{let[,b,w,p]=u.match(/(\d+)\s+(\d+[.|,]\d+)\s+(.*)/)??["","","",""],A=p.match(/[^/]*[^/]*$/i)?.[0]??"",S=p.includes(".prefPane"),k=p.includes(".app");return{id:b,cpu:w,path:p,name:A,type:S?"prefPane":k?"app":"binary"}}).filter(u=>u.name!=="");r(s)})};(0,l.useEffect)(()=>{h()},[]);let C=e=>e.type==="prefPane"?{fileIcon:e.path?.replace(/(.+\.prefPane)(.+)/,"$1")??""}:e.type==="app"?{fileIcon:e.path?.replace(/(.+\.app)(.+)/,"$1")??""}:"/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/ExecutableBinaryIcon.icns",g=e=>{(0,f.exec)(`kill -9 ${e.id}`),r(n.filter(i=>i.id!==e.id)),(0,t.clearSearchBar)({forceScrollToTop:!0}),(0,t.showHUD)(`\u2705 Killed ${e.name==="-"?`process ${e.id}`:e.name}`)},I=e=>e.path==null?null:_jsx(t.CopyToClipboardAction,{title:"Copy Path",content:e.path});return _jsx(t.List,{isLoading:n.length===0,searchBarPlaceholder:"Filter by name...",onSearchTextChange:e=>c(e)},n.filter(e=>{if(o==null)return!0;let i=e.name.toLowerCase().includes(o.toLowerCase()),s=e.path?.toLowerCase().match(new RegExp(`.+${o}.*\\.[app|framework|prefpane]`,"ig"))!=null;return i||a&&s}).sort((e,i)=>{if(o!=null&&P){if(e.type==="app"&&i.type!=="app")return-1;if(e.type!=="app"&&i.type==="app")return 1}return 0}).map((e,i)=>{let s=C(e);return _jsx(t.List.Item,{key:i,title:e.name,subtitle:y?e.id:void 0,icon:s,accessoryTitle:`${e.cpu}%`,actions:_jsx(t.ActionPanel,null,_jsx(t.ActionPanel.Item,{title:"Kill",icon:t.Icon.XmarkCircle,onAction:()=>g(e)}),I(e),_jsx(t.ActionPanel.Item,{title:"Reload",icon:t.Icon.ArrowClockwise,shortcut:{key:"r",modifiers:["cmd"]},onAction:()=>h()}))})}))}module.exports=D(E);0&&(module.exports={});
