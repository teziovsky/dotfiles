var Dn=Object.create;var B=Object.defineProperty,Xn=Object.defineProperties,zn=Object.getOwnPropertyDescriptor,Vn=Object.getOwnPropertyDescriptors,Kn=Object.getOwnPropertyNames,Be=Object.getOwnPropertySymbols,Wn=Object.getPrototypeOf,je=Object.prototype.hasOwnProperty,Zn=Object.prototype.propertyIsEnumerable;var Me=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))je.call(t,n)&&Me(e,n,t[n]);if(Be)for(var n of Be(t))Zn.call(t,n)&&Me(e,n,t[n]);return e},b=(e,t)=>Xn(e,Vn(t)),Fe=e=>B(e,"__esModule",{value:!0});var l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Yn=(e,t)=>{for(var n in t)B(e,n,{get:t[n],enumerable:!0})},Ue=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Kn(t))!je.call(e,o)&&(n||o!=="default")&&B(e,o,{get:()=>t[o],enumerable:!(r=zn(t,o))||r.enumerable});return e},E=(e,t)=>Ue(Fe(B(e!=null?Dn(Wn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Qn=(e=>(t,n)=>e&&e.get(t)||(n=Ue(Fe({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var Qe=l((is,Ye)=>{Ye.exports=Ze;Ze.sync=er;var Ke=require("fs");function Jn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function We(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Jn(t,n)}function Ze(e,t,n){Ke.stat(e,function(r,o){n(r,r?!1:We(o,e,t))})}function er(e,t){return We(Ke.statSync(e),e,t)}});var rt=l((as,nt)=>{nt.exports=et;et.sync=tr;var Je=require("fs");function et(e,t,n){Je.stat(e,function(r,o){n(r,r?!1:tt(o,t))})}function tr(e,t){return tt(Je.statSync(e),t)}function tt(e,t){return e.isFile()&&nr(e,t)}function nr(e,t){var n=e.mode,r=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),c=parseInt("010",8),u=parseInt("001",8),p=a|c,m=n&u||n&c&&o===i||n&a&&r===s||n&p&&s===0;return m}});var st=l((us,ot)=>{var cs=require("fs"),V;process.platform==="win32"||global.TESTING_WINDOWS?V=Qe():V=rt();ot.exports=ue;ue.sync=rr;function ue(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){ue(e,t||{},function(s,i){s?o(s):r(i)})})}V(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function rr(e,t){try{return V.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var ft=l((ls,dt)=>{var G=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",it=require("path"),or=G?";":":",at=st(),ct=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),ut=(e,t)=>{let n=t.colon||or,r=e.match(/\//)||G&&e.match(/\\/)?[""]:[...G?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=G?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=G?o.split(n):[""];return G&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:o}},lt=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:s}=ut(e,t),i=[],a=u=>new Promise((p,m)=>{if(u===r.length)return t.all&&i.length?p(i):m(ct(e));let f=r[u],S=/^".*"$/.test(f)?f.slice(1,-1):f,w=it.join(S,e),x=!S&&/^\.[\\\/]/.test(e)?e.slice(0,2)+w:w;p(c(x,u,0))}),c=(u,p,m)=>new Promise((f,S)=>{if(m===o.length)return f(a(p+1));let w=o[m];at(u+w,{pathExt:s},(x,C)=>{if(!x&&C)if(t.all)i.push(u+w);else return f(u+w);return f(c(u,p,m+1))})});return n?a(0).then(u=>n(null,u),n):a(0)},sr=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=ut(e,t),s=[];for(let i=0;i<n.length;i++){let a=n[i],c=/^".*"$/.test(a)?a.slice(1,-1):a,u=it.join(c,e),p=!c&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let m=0;m<r.length;m++){let f=p+r[m];try{if(at.sync(f,{pathExt:o}))if(t.all)s.push(f);else return f}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw ct(e)};dt.exports=lt;lt.sync=sr});var de=l((ds,le)=>{"use strict";var pt=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};le.exports=pt;le.exports.default=pt});var yt=l((fs,gt)=>{"use strict";var mt=require("path"),ir=ft(),ar=de();function ht(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=ir.sync(e.command,{path:n[ar({env:n})],pathExt:t?mt.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return i&&(i=mt.resolve(o?e.options.cwd:"",i)),i}function cr(e){return ht(e)||ht(e,!0)}gt.exports=cr});var St=l((ps,pe)=>{"use strict";var fe=/([()\][%!^"`<>&|;, *?])/g;function ur(e){return e=e.replace(fe,"^$1"),e}function lr(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(fe,"^$1"),t&&(e=e.replace(fe,"^$1")),e}pe.exports.command=ur;pe.exports.argument=lr});var xt=l((ms,wt)=>{"use strict";wt.exports=/^#!(.*)/});var bt=l((hs,Et)=>{"use strict";var dr=xt();Et.exports=(e="")=>{let t=e.match(dr);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var It=l((gs,vt)=>{"use strict";var me=require("fs"),fr=bt();function pr(e){let n=Buffer.alloc(150),r;try{r=me.openSync(e,"r"),me.readSync(r,n,0,150,0),me.closeSync(r)}catch{}return fr(n.toString())}vt.exports=pr});var Ct=l((ys,_t)=>{"use strict";var mr=require("path"),Tt=yt(),Pt=St(),hr=It(),gr=process.platform==="win32",yr=/\.(?:com|exe)$/i,Sr=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function wr(e){e.file=Tt(e);let t=e.file&&hr(e.file);return t?(e.args.unshift(e.file),e.command=t,Tt(e)):e.file}function xr(e){if(!gr)return e;let t=wr(e),n=!yr.test(t);if(e.options.forceShell||n){let r=Sr.test(t);e.command=mr.normalize(e.command),e.command=Pt.command(e.command),e.args=e.args.map(s=>Pt.argument(s,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Er(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:xr(r)}_t.exports=Er});var Rt=l((Ss,Gt)=>{"use strict";var he=process.platform==="win32";function ge(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function br(e,t){if(!he)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let s=At(o,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function At(e,t){return he&&e===1&&!t.file?ge(t.original,"spawn"):null}function vr(e,t){return he&&e===1&&!t.file?ge(t.original,"spawnSync"):null}Gt.exports={hookChildProcess:br,verifyENOENT:At,verifyENOENTSync:vr,notFoundError:ge}});var qt=l((ws,R)=>{"use strict";var Ot=require("child_process"),ye=Ct(),Se=Rt();function Lt(e,t,n){let r=ye(e,t,n),o=Ot.spawn(r.command,r.args,r.options);return Se.hookChildProcess(o,r),o}function Ir(e,t,n){let r=ye(e,t,n),o=Ot.spawnSync(r.command,r.args,r.options);return o.error=o.error||Se.verifyENOENTSync(o.status,r),o}R.exports=Lt;R.exports.spawn=Lt;R.exports.sync=Ir;R.exports._parse=ye;R.exports._enoent=Se});var $t=l((xs,Nt)=>{"use strict";Nt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Mt=l((Es,j)=>{"use strict";var M=require("path"),kt=de(),Bt=e=>{e=g({cwd:process.cwd(),path:process.env[kt()],execPath:process.execPath},e);let t,n=M.resolve(e.cwd),r=[];for(;t!==n;)r.push(M.join(n,"node_modules/.bin")),t=n,n=M.resolve(n,"..");let o=M.resolve(e.cwd,e.execPath,"..");return r.push(o),r.concat(e.path).join(M.delimiter)};j.exports=Bt;j.exports.default=Bt;j.exports.env=e=>{e=g({env:process.env},e);let t=g({},e.env),n=kt({env:t});return e.path=t[n],t[n]=j.exports(e),t}});var Ft=l((bs,we)=>{"use strict";var jt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};we.exports=jt;we.exports.default=jt});var Ht=l((vs,W)=>{"use strict";var Tr=Ft(),K=new WeakMap,Ut=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(K.set(s,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return Tr(s,e),K.set(s,r),s};W.exports=Ut;W.exports.default=Ut;W.exports.callCount=e=>{if(!K.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return K.get(e)}});var Dt=l(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.SIGNALS=void 0;var Pr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];Z.SIGNALS=Pr});var xe=l(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.SIGRTMAX=O.getRealtimeSignals=void 0;var _r=function(){let e=zt-Xt+1;return Array.from({length:e},Cr)};O.getRealtimeSignals=_r;var Cr=function(e,t){return{name:`SIGRT${t+1}`,number:Xt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Xt=34,zt=64;O.SIGRTMAX=zt});var Vt=l(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.getSignals=void 0;var Ar=require("os"),Gr=Dt(),Rr=xe(),Or=function(){let e=(0,Rr.getRealtimeSignals)();return[...Gr.SIGNALS,...e].map(Lr)};Y.getSignals=Or;var Lr=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:s}){let{signals:{[e]:i}}=Ar.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:o,standard:s}}});var Wt=l(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});L.signalsByNumber=L.signalsByName=void 0;var qr=require("os"),Kt=Vt(),Nr=xe(),$r=function(){return(0,Kt.getSignals)().reduce(kr,{})},kr=function(e,{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}){return b(g({},e),{[t]:{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}})},Br=$r();L.signalsByName=Br;var Mr=function(){let e=(0,Kt.getSignals)(),t=Nr.SIGRTMAX+1,n=Array.from({length:t},(r,o)=>jr(o,e));return Object.assign({},...n)},jr=function(e,t){let n=Fr(e,t);if(n===void 0)return{};let{name:r,description:o,supported:s,action:i,forced:a,standard:c}=n;return{[e]:{name:r,number:e,description:o,supported:s,action:i,forced:a,standard:c}}},Fr=function(e,t){let n=t.find(({name:r})=>qr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},Ur=Mr();L.signalsByNumber=Ur});var Yt=l((Cs,Zt)=>{"use strict";var{signalsByName:Hr}=Wt(),Dr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",Xr=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:c,isCanceled:u,killed:p,parsed:{options:{timeout:m}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let f=o===void 0?void 0:Hr[o].description,S=r&&r.code,x=`Command ${Dr({timedOut:c,timeout:m,errorCode:S,signal:o,signalDescription:f,exitCode:s,isCanceled:u})}: ${i}`,C=Object.prototype.toString.call(r)==="[object Error]",D=C?`${x}
${r.message}`:x,X=[D,t,e].filter(Boolean).join(`
`);return C?(r.originalMessage=r.message,r.message=X):r=new Error(X),r.shortMessage=D,r.command=i,r.escapedCommand=a,r.exitCode=s,r.signal=o,r.signalDescription=f,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(c),r.isCanceled=u,r.killed=p&&!c,r};Zt.exports=Xr});var Jt=l((As,Ee)=>{"use strict";var Q=["stdin","stdout","stderr"],zr=e=>Q.some(t=>e[t]!==void 0),Qt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return Q.map(r=>e[r]);if(zr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${Q.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,Q.length);return Array.from({length:n},(r,o)=>t[o])};Ee.exports=Qt;Ee.exports.node=e=>{let t=Qt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var en=l((Gs,J)=>{J.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&J.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&J.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var sn=l((Rs,$)=>{var h=global.process,T=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};T(h)?(tn=require("assert"),q=en(),nn=/^win/i.test(h.platform),F=require("events"),typeof F!="function"&&(F=F.EventEmitter),h.__signal_exit_emitter__?y=h.__signal_exit_emitter__:(y=h.__signal_exit_emitter__=new F,y.count=0,y.emitted={}),y.infinite||(y.setMaxListeners(1/0),y.infinite=!0),$.exports=function(e,t){if(!T(global.process))return function(){};tn.equal(typeof e,"function","a callback must be provided for exit handler"),N===!1&&be();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){y.removeListener(n,e),y.listeners("exit").length===0&&y.listeners("afterexit").length===0&&ee()};return y.on(n,e),r},ee=function(){!N||!T(global.process)||(N=!1,q.forEach(function(t){try{h.removeListener(t,te[t])}catch{}}),h.emit=ne,h.reallyExit=ve,y.count-=1)},$.exports.unload=ee,P=function(t,n,r){y.emitted[t]||(y.emitted[t]=!0,y.emit(t,n,r))},te={},q.forEach(function(e){te[e]=function(){if(!!T(global.process)){var n=h.listeners(e);n.length===y.count&&(ee(),P("exit",null,e),P("afterexit",null,e),nn&&e==="SIGHUP"&&(e="SIGINT"),h.kill(h.pid,e))}}}),$.exports.signals=function(){return q},N=!1,be=function(){N||!T(global.process)||(N=!0,y.count+=1,q=q.filter(function(t){try{return h.on(t,te[t]),!0}catch{return!1}}),h.emit=on,h.reallyExit=rn)},$.exports.load=be,ve=h.reallyExit,rn=function(t){!T(global.process)||(h.exitCode=t||0,P("exit",h.exitCode,null),P("afterexit",h.exitCode,null),ve.call(h,h.exitCode))},ne=h.emit,on=function(t,n){if(t==="exit"&&T(global.process)){n!==void 0&&(h.exitCode=n);var r=ne.apply(this,arguments);return P("exit",h.exitCode,null),P("afterexit",h.exitCode,null),r}else return ne.apply(this,arguments)}):$.exports=function(){return function(){}};var tn,q,nn,F,y,ee,P,te,N,be,ve,rn,ne,on});var cn=l((Os,an)=>{"use strict";var Vr=require("os"),Kr=sn(),Wr=1e3*5,Zr=(e,t="SIGTERM",n={})=>{let r=e(t);return Yr(e,t,n,r),r},Yr=(e,t,n,r)=>{if(!Qr(t,n,r))return;let o=eo(n),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Qr=(e,{forceKillAfterTimeout:t},n)=>Jr(e)&&t!==!1&&n,Jr=e=>e===Vr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",eo=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Wr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},to=(e,t)=>{e.kill()&&(t.isCanceled=!0)},no=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},ro=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,s=new Promise((a,c)=>{o=setTimeout(()=>{no(e,n,c)},t)}),i=r.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},oo=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},so=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=Kr(()=>{e.kill()});return r.finally(()=>{o()})};an.exports={spawnedKill:Zr,spawnedCancel:to,setupTimeout:ro,validateTimeout:oo,setExitHandler:so}});var ln=l((Ls,un)=>{"use strict";var v=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";v.writable=e=>v(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";v.readable=e=>v(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";v.duplex=e=>v.writable(e)&&v.readable(e);v.transform=e=>v.duplex(e)&&typeof e._transform=="function";un.exports=v});var fn=l((qs,dn)=>{"use strict";var{PassThrough:io}=require("stream");dn.exports=e=>{e=g({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let s=new io({objectMode:o});n&&s.setEncoding(n);let i=0,a=[];return s.on("data",c=>{a.push(c),o?i=a.length:i+=c.length}),s.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var pn=l((Ns,U)=>{"use strict";var{constants:ao}=require("buffer"),co=require("stream"),{promisify:uo}=require("util"),lo=fn(),fo=uo(co.pipeline),Ie=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function Te(e,t){if(!e)throw new Error("Expected a stream");t=g({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=lo(t);return await new Promise((o,s)=>{let i=a=>{a&&r.getBufferedLength()<=ao.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),s(a)};(async()=>{try{await fo(e,r),o()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new Ie)})}),r.getBufferedValue()}U.exports=Te;U.exports.buffer=(e,t)=>Te(e,b(g({},t),{encoding:"buffer"}));U.exports.array=(e,t)=>Te(e,b(g({},t),{array:!0}));U.exports.MaxBufferError=Ie});var hn=l(($s,mn)=>{"use strict";var{PassThrough:po}=require("stream");mn.exports=function(){var e=[],t=new po({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var wn=l((ks,Sn)=>{"use strict";var yn=ln(),gn=pn(),mo=hn(),ho=(e,t)=>{t===void 0||e.stdin===void 0||(yn(t)?t.pipe(e.stdin):e.stdin.end(t))},go=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=mo();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Pe=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},_e=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?gn(e,{encoding:t,maxBuffer:r}):gn.buffer(e,{maxBuffer:r})},yo=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:s},i)=>{let a=_e(e,{encoding:r,buffer:o,maxBuffer:s}),c=_e(t,{encoding:r,buffer:o,maxBuffer:s}),u=_e(n,{encoding:r,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,c,u])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},Pe(e,a),Pe(t,c),Pe(n,u)])}},So=({input:e})=>{if(yn(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Sn.exports={handleInput:ho,makeAllStream:go,getSpawnedResult:yo,validateInputSync:So}});var En=l((Bs,xn)=>{"use strict";var wo=(async()=>{})().constructor.prototype,xo=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(wo,e)]),Eo=(e,t)=>{for(let[n,r]of xo){let o=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,b(g({},r),{value:o}))}return e},bo=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});xn.exports={mergePromise:Eo,getSpawnedPromise:bo}});var In=l((Ms,vn)=>{"use strict";var bn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],vo=/^[\w.-]+$/,Io=/"/g,To=e=>typeof e!="string"||vo.test(e)?e:`"${e.replace(Io,'\\"')}"`,Po=(e,t)=>bn(e,t).join(" "),_o=(e,t)=>bn(e,t).map(n=>To(n)).join(" "),Co=/ +/g,Ao=e=>{let t=[];for(let n of e.trim().split(Co)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};vn.exports={joinCommand:Po,getEscapedCommand:_o,parseCommand:Ao}});var Ae=l((js,k)=>{"use strict";var Go=require("path"),Ce=require("child_process"),Ro=qt(),Oo=$t(),Lo=Mt(),qo=Ht(),re=Yt(),Pn=Jt(),{spawnedKill:No,spawnedCancel:$o,setupTimeout:ko,validateTimeout:Bo,setExitHandler:Mo}=cn(),{handleInput:jo,getSpawnedResult:Fo,makeAllStream:Uo,validateInputSync:Ho}=wn(),{mergePromise:Tn,getSpawnedPromise:Do}=En(),{joinCommand:_n,parseCommand:Cn,getEscapedCommand:An}=In(),Xo=1e3*1e3*100,zo=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let s=t?g(g({},process.env),e):e;return n?Lo.env({env:s,cwd:r,execPath:o}):s},Gn=(e,t,n={})=>{let r=Ro._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=g({maxBuffer:Xo,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=zo(n),n.stdio=Pn(n),process.platform==="win32"&&Go.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},H=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?Oo(t):t,oe=(e,t,n)=>{let r=Gn(e,t,n),o=_n(e,t),s=An(e,t);Bo(r.options);let i;try{i=Ce.spawn(r.file,r.args,r.options)}catch(S){let w=new Ce.ChildProcess,x=Promise.reject(re({error:S,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return Tn(w,x)}let a=Do(i),c=ko(i,r.options,a),u=Mo(i,r.options,c),p={isCanceled:!1};i.kill=No.bind(null,i.kill.bind(i)),i.cancel=$o.bind(null,i,p);let f=qo(async()=>{let[{error:S,exitCode:w,signal:x,timedOut:C},D,X,Hn]=await Fo(i,r.options,u),qe=H(r.options,D),Ne=H(r.options,X),$e=H(r.options,Hn);if(S||w!==0||x!==null){let ke=re({error:S,exitCode:w,signal:x,stdout:qe,stderr:Ne,all:$e,command:o,escapedCommand:s,parsed:r,timedOut:C,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return ke;throw ke}return{command:o,escapedCommand:s,exitCode:0,stdout:qe,stderr:Ne,all:$e,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return jo(i,r.options.input),i.all=Uo(i,r.options),Tn(i,f)};k.exports=oe;k.exports.sync=(e,t,n)=>{let r=Gn(e,t,n),o=_n(e,t),s=An(e,t);Ho(r.options);let i;try{i=Ce.spawnSync(r.file,r.args,r.options)}catch(u){throw re({error:u,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=H(r.options,i.stdout,i.error),c=H(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let u=re({stdout:a,stderr:c,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return u;throw u}return{command:o,escapedCommand:s,exitCode:0,stdout:a,stderr:c,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};k.exports.command=(e,t)=>{let[n,...r]=Cn(e);return oe(n,r,t)};k.exports.commandSync=(e,t)=>{let[n,...r]=Cn(e);return oe.sync(n,r,t)};k.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=Pn.node(n),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=n;return oe(s,[...i,e,...Array.isArray(t)?t:[]],b(g({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var rs={};Yn(rs,{default:()=>Un});var I=require("react"),d=require("@raycast/api");var Xe=E(require("os"),1),A=E(require("fs"),1),z=E(require("path"),1),ze=E(require("child_process"),1);function He(e){let t=/^: \d+:0;/;return e.trim().split(`
`).map(n=>t.test(n)?n.split(";").slice(1).join(";"):n)}function De({extraPaths:e=[]}={}){if(process.env.HISTFILE)return process.env.HISTFILE;let t=Xe.default.homedir(),n=new Set([z.default.join(t,".bash_history"),z.default.join(t,".zsh_history"),z.default.join(t,".history")]);for(let o of e)n.add(o);return(()=>{let o,s=0;for(let i of n)!A.default.existsSync(i)||A.default.statSync(i).size>s&&(s=A.default.statSync(i).size,o=i);return o})()}function Ve(e={}){if(process.platform==="win32"){let t=De(e);if(t)return He(A.default.readFileSync(t,"utf8"));let{stdout:n}=ze.default.spawnSync("doskey",["/history"],{encoding:"utf8"});return n.trim().split(`\r
`)}return He(A.default.readFileSync(De(e),"utf8"))}var ie=E(require("node:process"),1),Ln=E(Ae(),1);function Ge({onlyFirst:e=!1}={}){let t=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(t,e?void 0:"g")}function Re(e){if(typeof e!="string")throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);return e.replace(Ge(),"")}var se=E(require("node:process"),1),Rn=require("node:os"),Vo=()=>{let{env:e}=se.default;if(se.default.platform==="win32")return e.COMSPEC||"cmd.exe";try{let{shell:t}=(0,Rn.userInfo)();if(t)return t}catch{}return se.default.platform==="darwin"?e.SHELL||"/bin/zsh":e.SHELL||"/bin/sh"},Ko=Vo(),On=Ko;var Wo=["-ilc",'echo -n "_SHELL_ENV_DELIMITER_"; env; echo -n "_SHELL_ENV_DELIMITER_"; exit'],Zo={DISABLE_AUTO_UPDATE:"true"},Yo=e=>{e=e.split("_SHELL_ENV_DELIMITER_")[1];let t={};for(let n of Re(e).split(`
`).filter(r=>Boolean(r))){let[r,...o]=n.split("=");t[r]=o.join("=")}return t};async function qn(e){if(ie.default.platform==="win32")return ie.default.env;try{let{stdout:t}=await(0,Ln.default)(e||On,Wo,{env:Zo});return Yo(t)}catch(t){if(e)throw t;return ie.default.env}}var jn=require("child_process");var Nn=E(require("node:process"),1),$n=E(Ae(),1);async function ae(e){if(Nn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,$n.default)("osascript",["-e",e]);return t}var Qo=E(require("react"),1),Jo=require("react");var es=require("@raycast/api");var Oe=require("@raycast/api"),_=require("react");function Le(e,t){let[n,r]=(0,_.useState)(!0),[o,s]=(0,_.useState)(t);(0,_.useEffect)(()=>{let a=!1;return(async()=>{let c=await Oe.LocalStorage.getItem(e);typeof c=="string"&&(a||s(JSON.parse(c))),r(!1)})(),()=>{a=!0}},[]);let i=(0,_.useCallback)(a=>{s(c=>{let u=typeof a=="function"?a(c):a;return Oe.LocalStorage.setItem(e,JSON.stringify(u)),u})},[]);return[o,i,n]}var Fn=E(require("fs")),ce=null,ns=async()=>{if(ce)return ce;let e=await qn();return ce={env:e,cwd:e.HOME||`/Users/${process.env.USER}`,shell:e.SHELL},ce},kn=({cmd:e})=>{let[t,n]=(0,I.useState)(""),[r,o]=(0,I.useState)(!1);return(0,I.useEffect)(()=>{let s=!1,i=null;return(async()=>{let c=await ns();i=(0,jn.exec)(e,c),i.stderr?.on("data",u=>{s||n(p=>`${p}${u}`)}),i.stdout?.on("data",u=>{s||n(p=>`${p}${u}`)}),i.on("exit",()=>{s||o(!0)})})(),function(){s=!0,i!==null&&i.kill("SIGTERM")}},[e,n,o]),_jsx(d.Detail,{markdown:"```\n$ "+e+` 
`+t+"\n```",isLoading:!r,actions:_jsx(d.ActionPanel,null,_jsx(d.Action.CopyToClipboard,{content:t,shortcut:{modifiers:["cmd"],key:"c"}}))})},Bn=e=>{let t=`
    -- Set this property to true to open in a new window instead of a new tab
    property open_in_new_window : false
    
    on new_window()
    	tell application "iTerm" to create window with default profile
    end new_window
    
    on new_tab()
    	tell application "iTerm" to tell the first window to create tab with default profile
    end new_tab
    
    on call_forward()
    	tell application "iTerm" to activate
    end call_forward
    
    on is_running()
    	application "iTerm" is running
    end is_running
    
    on is_processing()
    	tell application "iTerm" to tell the first window to tell current session to get is processing
    end is_processing
    
    on has_windows()
    	if not is_running() then return false
    	if windows of application "iTerm" is {} then return false
    	true
    end has_windows
    
    on send_text(custom_text)
    	tell application "iTerm" to tell the first window to tell current session to write text custom_text
    end send_text
    
    -- Main
    if has_windows() then
    	-- Open the command in the current session unless it has a running command, e.g., ssh or top
    	if is_processing() then
    		if open_in_new_window then
    			new_window()
    		else
    			new_tab()
    		end if
    	end if
    else
    	-- If iTerm is not running and we tell it to create a new window, we get two
    	-- One from opening the application, and the other from the command
    	if is_running() then
    		new_window()
    	else
    		call_forward()
    	end if
    end if
    
    -- Make sure a window exists before we continue, or the write may fail
    repeat until has_windows()
    	delay 0.01
    end repeat
    
    send_text("${e.replaceAll('"','\\"')}")
    call_forward()
  `;ae(t)},Mn=e=>{let t=`
  tell application "Terminal"
    do script "${e.replaceAll('"','\\"')}"
    activate
  end tell
  `;ae(t)};function Un(e){let[t,n]=(0,I.useState)(""),[r,o]=(0,I.useState)(),[s,i]=Le("recently-used",[]),a=Fn.default.existsSync("/Applications/iTerm.app"),c=m=>{i(f=>f.find(S=>S===m)?f:[m,...f].slice(0,10))};(0,I.useEffect)(()=>{o([...new Set(Ve().reverse())])},[o]);let u=(0,d.getPreferenceValues)();if(e.arguments.command.length>0)return u.arguments_terminal?(c(e.arguments.command),(0,d.showHUD)("Ran command in iTerm/Terminal"),(0,d.popToRoot)(),(0,d.closeMainWindow)(),a?Bn(e.arguments.command):Mn(e.arguments.command)):_jsx(kn,{cmd:e.arguments.command});let p=[];return t&&p.push({category:"New command",items:[t]}),s.length>0&&p.push({category:"Raycast History",items:s.filter(m=>m.includes(t)).slice(0,50)}),r!==void 0&&r.length>0&&p.push({category:"Bash History",items:r.filter(m=>m.includes(t)).slice(0,50)}),_jsx(d.List,{isLoading:r===void 0,enableFiltering:!1,onSearchTextChange:n,navigationTitle:"Shell command",searchBarPlaceholder:"Enter shell-command"},p.map(m=>_jsx(d.List.Section,{title:m.category,key:m.category},m.items.map((f,S)=>_jsx(d.List.Item,{icon:d.Icon.Terminal,title:f,key:S,actions:_jsx(d.ActionPanel,null,_jsx(d.Action.Push,{title:"Execute",icon:d.Icon.List,onPush:()=>c(f),target:_jsx(kn,{cmd:f})}),a?_jsx(d.Action,{title:"Execute in iTerm.app",icon:d.Icon.Window,onAction:()=>{(0,d.closeMainWindow)(),(0,d.popToRoot)(),c(f),Bn(f)}}):null,_jsx(d.Action,{title:"Execute in Terminal.app",icon:d.Icon.Window,onAction:()=>{(0,d.closeMainWindow)(),(0,d.popToRoot)(),c(f),Mn(f)}}),_jsx(d.Action.CopyToClipboard,{title:"Copy to Clipboard",content:f,onCopy:()=>{c(f)}}))})))))}module.exports=Qn(rs);0&&(module.exports={});