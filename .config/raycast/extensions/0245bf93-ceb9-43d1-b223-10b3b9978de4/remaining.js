var En=Object.create;var q=Object.defineProperty,In=Object.defineProperties,vn=Object.getOwnPropertyDescriptor,Tn=Object.getOwnPropertyDescriptors,Pn=Object.getOwnPropertyNames,ve=Object.getOwnPropertySymbols,Cn=Object.getPrototypeOf,Pe=Object.prototype.hasOwnProperty,An=Object.prototype.propertyIsEnumerable;var Te=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))Pe.call(t,n)&&Te(e,n,t[n]);if(ve)for(var n of ve(t))An.call(t,n)&&Te(e,n,t[n]);return e},w=(e,t)=>In(e,Tn(t)),Ce=e=>q(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Nn=(e,t)=>{for(var n in t)q(e,n,{get:t[n],enumerable:!0})},Ae=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Pn(t))!Pe.call(e,s)&&(n||s!=="default")&&q(e,s,{get:()=>t[s],enumerable:!(r=vn(t,s))||r.enumerable});return e},Ne=(e,t)=>Ae(Ce(q(e!=null?En(Cn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Gn=(e=>(t,n)=>e&&e.get(t)||(n=Ae(Ce({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var qe=c((Cs,_e)=>{_e.exports=Re;Re.sync=Rn;var Ge=require("fs");function On(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Oe(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:On(t,n)}function Re(e,t,n){Ge.stat(e,function(r,s){n(r,r?!1:Oe(s,e,t))})}function Rn(e,t){return Oe(Ge.statSync(e),e,t)}});var Be=c((As,Me)=>{Me.exports=ke;ke.sync=_n;var $e=require("fs");function ke(e,t,n){$e.stat(e,function(r,s){n(r,r?!1:Le(s,t))})}function _n(e,t){return Le($e.statSync(e),t)}function Le(e,t){return e.isFile()&&qn(e,t)}function qn(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),p=a|u,S=n&l||n&u&&s===i||n&a&&r===o||n&p&&o===0;return S}});var je=c((Gs,Ue)=>{var Ns=require("fs"),D;process.platform==="win32"||global.TESTING_WINDOWS?D=qe():D=Be();Ue.exports=ee;ee.sync=$n;function ee(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){ee(e,t||{},function(o,i){o?s(o):r(i)})})}D(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function $n(e,t){try{return D.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var ze=c((Os,We)=>{var P=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",De=require("path"),kn=P?";":":",Fe=je(),He=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Xe=(e,t)=>{let n=t.colon||kn,r=e.match(/\//)||P&&e.match(/\\/)?[""]:[...P?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=P?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=P?s.split(n):[""];return P&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},Ke=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=Xe(e,t),i=[],a=l=>new Promise((p,S)=>{if(l===r.length)return t.all&&i.length?p(i):S(He(e));let h=r[l],g=/^".*"$/.test(h)?h.slice(1,-1):h,y=De.join(g,e),x=!g&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;p(u(x,l,0))}),u=(l,p,S)=>new Promise((h,g)=>{if(S===s.length)return h(a(p+1));let y=s[S];Fe(l+y,{pathExt:o},(x,T)=>{if(!x&&T)if(t.all)i.push(l+y);else return h(l+y);return h(u(l,p,S+1))})});return n?a(0).then(l=>n(null,l),n):a(0)},Ln=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=Xe(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=De.join(u,e),p=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let S=0;S<r.length;S++){let h=p+r[S];try{if(Fe.sync(h,{pathExt:s}))if(t.all)o.push(h);else return h}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw He(e)};We.exports=Ke;Ke.sync=Ln});var ne=c((Rs,te)=>{"use strict";var Ve=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};te.exports=Ve;te.exports.default=Ve});var Je=c((_s,Ze)=>{"use strict";var Ye=require("path"),Mn=ze(),Bn=ne();function Qe(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Mn.sync(e.command,{path:n[Bn({env:n})],pathExt:t?Ye.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=Ye.resolve(s?e.options.cwd:"",i)),i}function Un(e){return Qe(e)||Qe(e,!0)}Ze.exports=Un});var et=c((qs,se)=>{"use strict";var re=/([()\][%!^"`<>&|;, *?])/g;function jn(e){return e=e.replace(re,"^$1"),e}function Dn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(re,"^$1"),t&&(e=e.replace(re,"^$1")),e}se.exports.command=jn;se.exports.argument=Dn});var nt=c(($s,tt)=>{"use strict";tt.exports=/^#!(.*)/});var st=c((ks,rt)=>{"use strict";var Fn=nt();rt.exports=(e="")=>{let t=e.match(Fn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var it=c((Ls,ot)=>{"use strict";var oe=require("fs"),Hn=st();function Xn(e){let n=Buffer.alloc(150),r;try{r=oe.openSync(e,"r"),oe.readSync(r,n,0,150,0),oe.closeSync(r)}catch{}return Hn(n.toString())}ot.exports=Xn});var lt=c((Ms,ut)=>{"use strict";var Kn=require("path"),at=Je(),ct=et(),Wn=it(),zn=process.platform==="win32",Vn=/\.(?:com|exe)$/i,Yn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Qn(e){e.file=at(e);let t=e.file&&Wn(e.file);return t?(e.args.unshift(e.file),e.command=t,at(e)):e.file}function Zn(e){if(!zn)return e;let t=Qn(e),n=!Vn.test(t);if(e.options.forceShell||n){let r=Yn.test(t);e.command=Kn.normalize(e.command),e.command=ct.command(e.command),e.args=e.args.map(o=>ct.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Jn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Zn(r)}ut.exports=Jn});var pt=c((Bs,ft)=>{"use strict";var ie=process.platform==="win32";function ae(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function er(e,t){if(!ie)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=dt(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function dt(e,t){return ie&&e===1&&!t.file?ae(t.original,"spawn"):null}function tr(e,t){return ie&&e===1&&!t.file?ae(t.original,"spawnSync"):null}ft.exports={hookChildProcess:er,verifyENOENT:dt,verifyENOENTSync:tr,notFoundError:ae}});var St=c((Us,C)=>{"use strict";var mt=require("child_process"),ce=lt(),ue=pt();function ht(e,t,n){let r=ce(e,t,n),s=mt.spawn(r.command,r.args,r.options);return ue.hookChildProcess(s,r),s}function nr(e,t,n){let r=ce(e,t,n),s=mt.spawnSync(r.command,r.args,r.options);return s.error=s.error||ue.verifyENOENTSync(s.status,r),s}C.exports=ht;C.exports.spawn=ht;C.exports.sync=nr;C.exports._parse=ce;C.exports._enoent=ue});var yt=c((js,gt)=>{"use strict";gt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var wt=c((Ds,k)=>{"use strict";var $=require("path"),xt=ne(),bt=e=>{e=f({cwd:process.cwd(),path:process.env[xt()],execPath:process.execPath},e);let t,n=$.resolve(e.cwd),r=[];for(;t!==n;)r.push($.join(n,"node_modules/.bin")),t=n,n=$.resolve(n,"..");let s=$.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join($.delimiter)};k.exports=bt;k.exports.default=bt;k.exports.env=e=>{e=f({env:process.env},e);let t=f({},e.env),n=xt({env:t});return e.path=t[n],t[n]=k.exports(e),t}});var It=c((Fs,le)=>{"use strict";var Et=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};le.exports=Et;le.exports.default=Et});var Tt=c((Hs,H)=>{"use strict";var rr=It(),F=new WeakMap,vt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(F.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return rr(o,e),F.set(o,r),o};H.exports=vt;H.exports.default=vt;H.exports.callCount=e=>{if(!F.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return F.get(e)}});var Pt=c(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.SIGNALS=void 0;var sr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];X.SIGNALS=sr});var de=c(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.SIGRTMAX=A.getRealtimeSignals=void 0;var or=function(){let e=At-Ct+1;return Array.from({length:e},ir)};A.getRealtimeSignals=or;var ir=function(e,t){return{name:`SIGRT${t+1}`,number:Ct+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Ct=34,At=64;A.SIGRTMAX=At});var Nt=c(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.getSignals=void 0;var ar=require("os"),cr=Pt(),ur=de(),lr=function(){let e=(0,ur.getRealtimeSignals)();return[...cr.SIGNALS,...e].map(dr)};K.getSignals=lr;var dr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=ar.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var Ot=c(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.signalsByNumber=N.signalsByName=void 0;var fr=require("os"),Gt=Nt(),pr=de(),mr=function(){return(0,Gt.getSignals)().reduce(hr,{})},hr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return w(f({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}})},Sr=mr();N.signalsByName=Sr;var gr=function(){let e=(0,Gt.getSignals)(),t=pr.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>yr(s,e));return Object.assign({},...n)},yr=function(e,t){let n=xr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:u}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:u}}},xr=function(e,t){let n=t.find(({name:r})=>fr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},br=gr();N.signalsByNumber=br});var _t=c((Vs,Rt)=>{"use strict";var{signalsByName:wr}=Ot(),Er=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",Ir=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:p,parsed:{options:{timeout:S}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let h=s===void 0?void 0:wr[s].description,g=r&&r.code,x=`Command ${Er({timedOut:u,timeout:S,errorCode:g,signal:s,signalDescription:h,exitCode:o,isCanceled:l})}: ${i}`,T=Object.prototype.toString.call(r)==="[object Error]",U=T?`${x}
${r.message}`:x,j=[U,t,e].filter(Boolean).join(`
`);return T?(r.originalMessage=r.message,r.message=j):r=new Error(j),r.shortMessage=U,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=h,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(u),r.isCanceled=l,r.killed=p&&!u,r};Rt.exports=Ir});var $t=c((Ys,fe)=>{"use strict";var W=["stdin","stdout","stderr"],vr=e=>W.some(t=>e[t]!==void 0),qt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return W.map(r=>e[r]);if(vr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${W.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,W.length);return Array.from({length:n},(r,s)=>t[s])};fe.exports=qt;fe.exports.node=e=>{let t=qt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var kt=c((Qs,z)=>{z.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&z.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&z.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var jt=c((Zs,R)=>{var d=global.process,I=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};I(d)?(Lt=require("assert"),G=kt(),Mt=/^win/i.test(d.platform),L=require("events"),typeof L!="function"&&(L=L.EventEmitter),d.__signal_exit_emitter__?m=d.__signal_exit_emitter__:(m=d.__signal_exit_emitter__=new L,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),R.exports=function(e,t){if(!I(global.process))return function(){};Lt.equal(typeof e,"function","a callback must be provided for exit handler"),O===!1&&pe();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){m.removeListener(n,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&V()};return m.on(n,e),r},V=function(){!O||!I(global.process)||(O=!1,G.forEach(function(t){try{d.removeListener(t,Y[t])}catch{}}),d.emit=Q,d.reallyExit=me,m.count-=1)},R.exports.unload=V,v=function(t,n,r){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,n,r))},Y={},G.forEach(function(e){Y[e]=function(){if(!!I(global.process)){var n=d.listeners(e);n.length===m.count&&(V(),v("exit",null,e),v("afterexit",null,e),Mt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),R.exports.signals=function(){return G},O=!1,pe=function(){O||!I(global.process)||(O=!0,m.count+=1,G=G.filter(function(t){try{return d.on(t,Y[t]),!0}catch{return!1}}),d.emit=Ut,d.reallyExit=Bt)},R.exports.load=pe,me=d.reallyExit,Bt=function(t){!I(global.process)||(d.exitCode=t||0,v("exit",d.exitCode,null),v("afterexit",d.exitCode,null),me.call(d,d.exitCode))},Q=d.emit,Ut=function(t,n){if(t==="exit"&&I(global.process)){n!==void 0&&(d.exitCode=n);var r=Q.apply(this,arguments);return v("exit",d.exitCode,null),v("afterexit",d.exitCode,null),r}else return Q.apply(this,arguments)}):R.exports=function(){return function(){}};var Lt,G,Mt,L,m,V,v,Y,O,pe,me,Bt,Q,Ut});var Ft=c((Js,Dt)=>{"use strict";var Tr=require("os"),Pr=jt(),Cr=1e3*5,Ar=(e,t="SIGTERM",n={})=>{let r=e(t);return Nr(e,t,n,r),r},Nr=(e,t,n,r)=>{if(!Gr(t,n,r))return;let s=Rr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Gr=(e,{forceKillAfterTimeout:t},n)=>Or(e)&&t!==!1&&n,Or=e=>e===Tr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Rr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Cr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},_r=(e,t)=>{e.kill()&&(t.isCanceled=!0)},qr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},$r=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,u)=>{s=setTimeout(()=>{qr(e,n,u)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},kr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Lr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=Pr(()=>{e.kill()});return r.finally(()=>{s()})};Dt.exports={spawnedKill:Ar,spawnedCancel:_r,setupTimeout:$r,validateTimeout:kr,setExitHandler:Lr}});var Xt=c((eo,Ht)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";Ht.exports=b});var Wt=c((to,Kt)=>{"use strict";var{PassThrough:Mr}=require("stream");Kt.exports=e=>{e=f({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new Mr({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",u=>{a.push(u),s?i=a.length:i+=u.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var zt=c((no,M)=>{"use strict";var{constants:Br}=require("buffer"),Ur=require("stream"),{promisify:jr}=require("util"),Dr=Wt(),Fr=jr(Ur.pipeline),he=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function Se(e,t){if(!e)throw new Error("Expected a stream");t=f({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=Dr(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=Br.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await Fr(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new he)})}),r.getBufferedValue()}M.exports=Se;M.exports.buffer=(e,t)=>Se(e,w(f({},t),{encoding:"buffer"}));M.exports.array=(e,t)=>Se(e,w(f({},t),{array:!0}));M.exports.MaxBufferError=he});var Yt=c((ro,Vt)=>{"use strict";var{PassThrough:Hr}=require("stream");Vt.exports=function(){var e=[],t=new Hr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var en=c((so,Jt)=>{"use strict";var Zt=Xt(),Qt=zt(),Xr=Yt(),Kr=(e,t)=>{t===void 0||e.stdin===void 0||(Zt(t)?t.pipe(e.stdin):e.stdin.end(t))},Wr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Xr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},ge=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ye=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Qt(e,{encoding:t,maxBuffer:r}):Qt.buffer(e,{maxBuffer:r})},zr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=ye(e,{encoding:r,buffer:s,maxBuffer:o}),u=ye(t,{encoding:r,buffer:s,maxBuffer:o}),l=ye(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,u,l])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},ge(e,a),ge(t,u),ge(n,l)])}},Vr=({input:e})=>{if(Zt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Jt.exports={handleInput:Kr,makeAllStream:Wr,getSpawnedResult:zr,validateInputSync:Vr}});var nn=c((oo,tn)=>{"use strict";var Yr=(async()=>{})().constructor.prototype,Qr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Yr,e)]),Zr=(e,t)=>{for(let[n,r]of Qr){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,w(f({},r),{value:s}))}return e},Jr=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});tn.exports={mergePromise:Zr,getSpawnedPromise:Jr}});var on=c((io,sn)=>{"use strict";var rn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],es=/^[\w.-]+$/,ts=/"/g,ns=e=>typeof e!="string"||es.test(e)?e:`"${e.replace(ts,'\\"')}"`,rs=(e,t)=>rn(e,t).join(" "),ss=(e,t)=>rn(e,t).map(n=>ns(n)).join(" "),os=/ +/g,is=e=>{let t=[];for(let n of e.trim().split(os)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};sn.exports={joinCommand:rs,getEscapedCommand:ss,parseCommand:is}});var pn=c((ao,_)=>{"use strict";var as=require("path"),xe=require("child_process"),cs=St(),us=yt(),ls=wt(),ds=Tt(),Z=_t(),cn=$t(),{spawnedKill:fs,spawnedCancel:ps,setupTimeout:ms,validateTimeout:hs,setExitHandler:Ss}=Ft(),{handleInput:gs,getSpawnedResult:ys,makeAllStream:xs,validateInputSync:bs}=en(),{mergePromise:an,getSpawnedPromise:ws}=nn(),{joinCommand:un,parseCommand:ln,getEscapedCommand:dn}=on(),Es=1e3*1e3*100,Is=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?f(f({},process.env),e):e;return n?ls.env({env:o,cwd:r,execPath:s}):o},fn=(e,t,n={})=>{let r=cs._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=f({maxBuffer:Es,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=Is(n),n.stdio=cn(n),process.platform==="win32"&&as.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},B=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?us(t):t,J=(e,t,n)=>{let r=fn(e,t,n),s=un(e,t),o=dn(e,t);hs(r.options);let i;try{i=xe.spawn(r.file,r.args,r.options)}catch(g){let y=new xe.ChildProcess,x=Promise.reject(Z({error:g,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return an(y,x)}let a=ws(i),u=ms(i,r.options,a),l=Ss(i,r.options,u),p={isCanceled:!1};i.kill=fs.bind(null,i.kill.bind(i)),i.cancel=ps.bind(null,i,p);let h=ds(async()=>{let[{error:g,exitCode:y,signal:x,timedOut:T},U,j,wn]=await ys(i,r.options,l),be=B(r.options,U),we=B(r.options,j),Ee=B(r.options,wn);if(g||y!==0||x!==null){let Ie=Z({error:g,exitCode:y,signal:x,stdout:be,stderr:we,all:Ee,command:s,escapedCommand:o,parsed:r,timedOut:T,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return Ie;throw Ie}return{command:s,escapedCommand:o,exitCode:0,stdout:be,stderr:we,all:Ee,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return gs(i,r.options.input),i.all=xs(i,r.options),an(i,h)};_.exports=J;_.exports.sync=(e,t,n)=>{let r=fn(e,t,n),s=un(e,t),o=dn(e,t);bs(r.options);let i;try{i=xe.spawnSync(r.file,r.args,r.options)}catch(l){throw Z({error:l,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=B(r.options,i.stdout,i.error),u=B(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Z({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return l;throw l}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};_.exports.command=(e,t)=>{let[n,...r]=ln(e);return J(n,r,t)};_.exports.commandSync=(e,t)=>{let[n,...r]=ln(e);return J.sync(n,r,t)};_.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=cn.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return J(o,[...i,e,...Array.isArray(t)?t:[]],w(f({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var Ts={};Nn(Ts,{default:()=>bn});var E=require("@raycast/api");var mn=Ne(require("node:process"),1),hn=Ne(pn(),1);async function Sn(e){if(mn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,hn.default)("osascript",["-e",e]);return t}var gn=require("@raycast/api");async function yn(){return!!(await(0,gn.getApplications)()).find(n=>n.bundleId==="com.if.Amphetamine")}var xn="https://apps.apple.com/br/app/amphetamine/id937984704";var vs={"0":"Your current session has infinite duration.","-1":"Your session is Trigger-based.","-2":"Your session is whether app-based (while X app is running) or date-based (until XX:XX time).","-3":"There is no session running."};async function bn(){let n=new E.Toast({title:"Getting remaining time",style:E.Toast.Style.Animated});if(n.show(),!await yn()){n.title="Amphetamine is not installed",n.message="Press Command + D to download",n.primaryAction={title:"Download",shortcut:{modifiers:["cmd"],key:"d"},onAction:async()=>await(0,E.open)(xn)},n.style=E.Toast.Style.Failure;return}let s=await Sn(`
    tell application "Amphetamine"
    		return session time remaining
    end tell
  `);if(Number(s)>0){let o=~~(Number(s)/3600),i=~~(Number(s)%3600/60);if(o>0)s=`${o.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}h`;else{let a=~~(Number(s)%60);s=`${i.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}min`}}await(0,E.showHUD)(vs[s]??`Remaining time: ${s}`)}module.exports=Gn(Ts);0&&(module.exports={});