var r=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var p=o=>r(o,"__esModule",{value:!0});var d=(o,e)=>{for(var n in e)r(o,n,{get:e[n],enumerable:!0})},w=(o,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of m(e))!s.call(o,i)&&(n||i!=="default")&&r(o,i,{get:()=>e[i],enumerable:!(l=c(e,i))||l.enumerable});return o};var b=(o=>(e,n)=>o&&o.get(e)||(n=w(p({}),e,1),o&&o.set(e,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var h={};d(h,{default:()=>a});var t=require("@raycast/api");function a(){async function o(e){let{label:n,subject:l,content:i}=e,u=`**${n}**: ${l}
${i}`;await(0,t.pasteText)(u),await(0,t.showHUD)("Comment pasted to foremost app"),await(0,t.closeMainWindow)()}return _jsx(t.Form,{actions:_jsx(t.ActionPanel,null,_jsx(t.SubmitFormAction,{icon:t.Icon.Clipboard,title:"Paste",onSubmit:o}),_jsx(t.OpenInBrowserAction,{title:"Open Reference Website",url:"https://conventionalcomments.org/"}))},_jsx(t.Form.Dropdown,{id:"label",title:"Label"},_jsx(t.Form.DropdownItem,{value:"suggestion",title:"Suggestion"}),_jsx(t.Form.DropdownItem,{value:"question",title:"Question"}),_jsx(t.Form.DropdownItem,{value:"praise",title:"Praise"}),_jsx(t.Form.DropdownItem,{value:"nitpick",title:"Nitpick"}),_jsx(t.Form.DropdownItem,{value:"issue",title:"Issue"}),_jsx(t.Form.DropdownItem,{value:"thought",title:"Thought"}),_jsx(t.Form.DropdownItem,{value:"chore",title:"Chore"})),_jsx(t.Form.Separator,null),_jsx(t.Form.TextField,{id:"subject",title:"Subject",placeholder:"Title of your comment"}),_jsx(t.Form.TextArea,{id:"content",title:"Content",placeholder:"Content of your comment"}))}module.exports=b(h);0&&(module.exports={});
