var gn=Object.create;var N=Object.defineProperty,xn=Object.defineProperties,bn=Object.getOwnPropertyDescriptor,wn=Object.getOwnPropertyDescriptors,vn=Object.getOwnPropertyNames,Ee=Object.getOwnPropertySymbols,En=Object.getPrototypeOf,Te=Object.prototype.hasOwnProperty,In=Object.prototype.propertyIsEnumerable;var Ie=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))Te.call(t,n)&&Ie(e,n,t[n]);if(Ee)for(var n of Ee(t))In.call(t,n)&&Ie(e,n,t[n]);return e},w=(e,t)=>xn(e,wn(t)),Pe=e=>N(e,"__esModule",{value:!0});var a=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Tn=(e,t)=>{for(var n in t)N(e,n,{get:t[n],enumerable:!0})},Ge=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of vn(t))!Te.call(e,s)&&(n||s!=="default")&&N(e,s,{get:()=>t[s],enumerable:!(r=bn(t,s))||r.enumerable});return e},Ce=(e,t)=>Ge(Pe(N(e!=null?gn(En(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Pn=(e=>(t,n)=>e&&e.get(t)||(n=Ge(Pe({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var Ne=a((Es,qe)=>{qe.exports=Re;Re.sync=Cn;var Ae=require("fs");function Gn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Oe(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Gn(t,n)}function Re(e,t,n){Ae.stat(e,function(r,s){n(r,r?!1:Oe(s,e,t))})}function Cn(e,t){return Oe(Ae.statSync(e),e,t)}});var Le=a((Is,Be)=>{Be.exports=ke;ke.sync=An;var _e=require("fs");function ke(e,t,n){_e.stat(e,function(r,s){n(r,r?!1:$e(s,t))})}function An(e,t){return $e(_e.statSync(e),t)}function $e(e,t){return e.isFile()&&On(e,t)}function On(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),c=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),p=c|u,S=n&l||n&u&&s===i||n&c&&r===o||n&p&&o===0;return S}});var je=a((Ps,Me)=>{var Ts=require("fs"),F;process.platform==="win32"||global.TESTING_WINDOWS?F=Ne():F=Le();Me.exports=J;J.sync=Rn;function J(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){J(e,t||{},function(o,i){o?s(o):r(i)})})}F(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function Rn(e,t){try{return F.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var We=a((Gs,Ke)=>{var T=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Fe=require("path"),qn=T?";":":",Ue=je(),De=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Xe=(e,t)=>{let n=t.colon||qn,r=e.match(/\//)||T&&e.match(/\\/)?[""]:[...T?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=T?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=T?s.split(n):[""];return T&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},He=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=Xe(e,t),i=[],c=l=>new Promise((p,S)=>{if(l===r.length)return t.all&&i.length?p(i):S(De(e));let h=r[l],y=/^".*"$/.test(h)?h.slice(1,-1):h,g=Fe.join(y,e),x=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+g:g;p(u(x,l,0))}),u=(l,p,S)=>new Promise((h,y)=>{if(S===s.length)return h(c(p+1));let g=s[S];Ue(l+g,{pathExt:o},(x,I)=>{if(!x&&I)if(t.all)i.push(l+g);else return h(l+g);return h(u(l,p,S+1))})});return n?c(0).then(l=>n(null,l),n):c(0)},Nn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=Xe(e,t),o=[];for(let i=0;i<n.length;i++){let c=n[i],u=/^".*"$/.test(c)?c.slice(1,-1):c,l=Fe.join(u,e),p=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let S=0;S<r.length;S++){let h=p+r[S];try{if(Ue.sync(h,{pathExt:s}))if(t.all)o.push(h);else return h}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw De(e)};Ke.exports=He;He.sync=Nn});var te=a((Cs,ee)=>{"use strict";var ze=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ee.exports=ze;ee.exports.default=ze});var Ze=a((As,Qe)=>{"use strict";var Ve=require("path"),_n=We(),kn=te();function Ye(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=_n.sync(e.command,{path:n[kn({env:n})],pathExt:t?Ve.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=Ve.resolve(s?e.options.cwd:"",i)),i}function $n(e){return Ye(e)||Ye(e,!0)}Qe.exports=$n});var Je=a((Os,re)=>{"use strict";var ne=/([()\][%!^"`<>&|;, *?])/g;function Bn(e){return e=e.replace(ne,"^$1"),e}function Ln(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ne,"^$1"),t&&(e=e.replace(ne,"^$1")),e}re.exports.command=Bn;re.exports.argument=Ln});var tt=a((Rs,et)=>{"use strict";et.exports=/^#!(.*)/});var rt=a((qs,nt)=>{"use strict";var Mn=tt();nt.exports=(e="")=>{let t=e.match(Mn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var ot=a((Ns,st)=>{"use strict";var se=require("fs"),jn=rt();function Fn(e){let n=Buffer.alloc(150),r;try{r=se.openSync(e,"r"),se.readSync(r,n,0,150,0),se.closeSync(r)}catch{}return jn(n.toString())}st.exports=Fn});var ut=a((_s,at)=>{"use strict";var Un=require("path"),it=Ze(),ct=Je(),Dn=ot(),Xn=process.platform==="win32",Hn=/\.(?:com|exe)$/i,Kn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Wn(e){e.file=it(e);let t=e.file&&Dn(e.file);return t?(e.args.unshift(e.file),e.command=t,it(e)):e.file}function zn(e){if(!Xn)return e;let t=Wn(e),n=!Hn.test(t);if(e.options.forceShell||n){let r=Kn.test(t);e.command=Un.normalize(e.command),e.command=ct.command(e.command),e.args=e.args.map(o=>ct.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Vn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:zn(r)}at.exports=Vn});var ft=a((ks,dt)=>{"use strict";var oe=process.platform==="win32";function ie(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Yn(e,t){if(!oe)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=lt(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function lt(e,t){return oe&&e===1&&!t.file?ie(t.original,"spawn"):null}function Qn(e,t){return oe&&e===1&&!t.file?ie(t.original,"spawnSync"):null}dt.exports={hookChildProcess:Yn,verifyENOENT:lt,verifyENOENTSync:Qn,notFoundError:ie}});var ht=a(($s,P)=>{"use strict";var pt=require("child_process"),ce=ut(),ae=ft();function mt(e,t,n){let r=ce(e,t,n),s=pt.spawn(r.command,r.args,r.options);return ae.hookChildProcess(s,r),s}function Zn(e,t,n){let r=ce(e,t,n),s=pt.spawnSync(r.command,r.args,r.options);return s.error=s.error||ae.verifyENOENTSync(s.status,r),s}P.exports=mt;P.exports.spawn=mt;P.exports.sync=Zn;P.exports._parse=ce;P.exports._enoent=ae});var yt=a((Bs,St)=>{"use strict";St.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var bt=a((Ls,k)=>{"use strict";var _=require("path"),gt=te(),xt=e=>{e=f({cwd:process.cwd(),path:process.env[gt()],execPath:process.execPath},e);let t,n=_.resolve(e.cwd),r=[];for(;t!==n;)r.push(_.join(n,"node_modules/.bin")),t=n,n=_.resolve(n,"..");let s=_.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(_.delimiter)};k.exports=xt;k.exports.default=xt;k.exports.env=e=>{e=f({env:process.env},e);let t=f({},e.env),n=gt({env:t});return e.path=t[n],t[n]=k.exports(e),t}});var vt=a((Ms,ue)=>{"use strict";var wt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};ue.exports=wt;ue.exports.default=wt});var It=a((js,D)=>{"use strict";var Jn=vt(),U=new WeakMap,Et=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(U.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return Jn(o,e),U.set(o,r),o};D.exports=Et;D.exports.default=Et;D.exports.callCount=e=>{if(!U.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return U.get(e)}});var Tt=a(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.SIGNALS=void 0;var er=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];X.SIGNALS=er});var le=a(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.SIGRTMAX=G.getRealtimeSignals=void 0;var tr=function(){let e=Gt-Pt+1;return Array.from({length:e},nr)};G.getRealtimeSignals=tr;var nr=function(e,t){return{name:`SIGRT${t+1}`,number:Pt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Pt=34,Gt=64;G.SIGRTMAX=Gt});var Ct=a(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.getSignals=void 0;var rr=require("os"),sr=Tt(),or=le(),ir=function(){let e=(0,or.getRealtimeSignals)();return[...sr.SIGNALS,...e].map(cr)};H.getSignals=ir;var cr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=rr.constants,c=i!==void 0;return{name:e,number:c?i:t,description:n,supported:c,action:r,forced:s,standard:o}}});var Ot=a(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.signalsByNumber=C.signalsByName=void 0;var ar=require("os"),At=Ct(),ur=le(),lr=function(){return(0,At.getSignals)().reduce(dr,{})},dr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:c}){return w(f({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:c}})},fr=lr();C.signalsByName=fr;var pr=function(){let e=(0,At.getSignals)(),t=ur.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>mr(s,e));return Object.assign({},...n)},mr=function(e,t){let n=hr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:c,standard:u}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:c,standard:u}}},hr=function(e,t){let n=t.find(({name:r})=>ar.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},Sr=pr();C.signalsByNumber=Sr});var qt=a((Hs,Rt)=>{"use strict";var{signalsByName:yr}=Ot(),gr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",xr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:c,timedOut:u,isCanceled:l,killed:p,parsed:{options:{timeout:S}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let h=s===void 0?void 0:yr[s].description,y=r&&r.code,x=`Command ${gr({timedOut:u,timeout:S,errorCode:y,signal:s,signalDescription:h,exitCode:o,isCanceled:l})}: ${i}`,I=Object.prototype.toString.call(r)==="[object Error]",M=I?`${x}
${r.message}`:x,j=[M,t,e].filter(Boolean).join(`
`);return I?(r.originalMessage=r.message,r.message=j):r=new Error(j),r.shortMessage=M,r.command=i,r.escapedCommand=c,r.exitCode=o,r.signal=s,r.signalDescription=h,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(u),r.isCanceled=l,r.killed=p&&!u,r};Rt.exports=xr});var _t=a((Ks,de)=>{"use strict";var K=["stdin","stdout","stderr"],br=e=>K.some(t=>e[t]!==void 0),Nt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return K.map(r=>e[r]);if(br(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${K.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,K.length);return Array.from({length:n},(r,s)=>t[s])};de.exports=Nt;de.exports.node=e=>{let t=Nt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var kt=a((Ws,W)=>{W.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&W.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&W.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var jt=a((zs,R)=>{var d=global.process,v=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};v(d)?($t=require("assert"),A=kt(),Bt=/^win/i.test(d.platform),$=require("events"),typeof $!="function"&&($=$.EventEmitter),d.__signal_exit_emitter__?m=d.__signal_exit_emitter__:(m=d.__signal_exit_emitter__=new $,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),R.exports=function(e,t){if(!v(global.process))return function(){};$t.equal(typeof e,"function","a callback must be provided for exit handler"),O===!1&&fe();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){m.removeListener(n,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&z()};return m.on(n,e),r},z=function(){!O||!v(global.process)||(O=!1,A.forEach(function(t){try{d.removeListener(t,V[t])}catch{}}),d.emit=Y,d.reallyExit=pe,m.count-=1)},R.exports.unload=z,E=function(t,n,r){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,n,r))},V={},A.forEach(function(e){V[e]=function(){if(!!v(global.process)){var n=d.listeners(e);n.length===m.count&&(z(),E("exit",null,e),E("afterexit",null,e),Bt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),R.exports.signals=function(){return A},O=!1,fe=function(){O||!v(global.process)||(O=!0,m.count+=1,A=A.filter(function(t){try{return d.on(t,V[t]),!0}catch{return!1}}),d.emit=Mt,d.reallyExit=Lt)},R.exports.load=fe,pe=d.reallyExit,Lt=function(t){!v(global.process)||(d.exitCode=t||0,E("exit",d.exitCode,null),E("afterexit",d.exitCode,null),pe.call(d,d.exitCode))},Y=d.emit,Mt=function(t,n){if(t==="exit"&&v(global.process)){n!==void 0&&(d.exitCode=n);var r=Y.apply(this,arguments);return E("exit",d.exitCode,null),E("afterexit",d.exitCode,null),r}else return Y.apply(this,arguments)}):R.exports=function(){return function(){}};var $t,A,Bt,$,m,z,E,V,O,fe,pe,Lt,Y,Mt});var Ut=a((Vs,Ft)=>{"use strict";var wr=require("os"),vr=jt(),Er=1e3*5,Ir=(e,t="SIGTERM",n={})=>{let r=e(t);return Tr(e,t,n,r),r},Tr=(e,t,n,r)=>{if(!Pr(t,n,r))return;let s=Cr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Pr=(e,{forceKillAfterTimeout:t},n)=>Gr(e)&&t!==!1&&n,Gr=e=>e===wr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Cr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Er;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Ar=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Or=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Rr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((c,u)=>{s=setTimeout(()=>{Or(e,n,u)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},qr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Nr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=vr(()=>{e.kill()});return r.finally(()=>{s()})};Ft.exports={spawnedKill:Ir,spawnedCancel:Ar,setupTimeout:Rr,validateTimeout:qr,setExitHandler:Nr}});var Xt=a((Ys,Dt)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";Dt.exports=b});var Kt=a((Qs,Ht)=>{"use strict";var{PassThrough:_r}=require("stream");Ht.exports=e=>{e=f({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new _r({objectMode:s});n&&o.setEncoding(n);let i=0,c=[];return o.on("data",u=>{c.push(u),s?i=c.length:i+=u.length}),o.getBufferedValue=()=>t?c:r?Buffer.concat(c,i):c.join(""),o.getBufferedLength=()=>i,o}});var Wt=a((Zs,B)=>{"use strict";var{constants:kr}=require("buffer"),$r=require("stream"),{promisify:Br}=require("util"),Lr=Kt(),Mr=Br($r.pipeline),me=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function he(e,t){if(!e)throw new Error("Expected a stream");t=f({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=Lr(t);return await new Promise((s,o)=>{let i=c=>{c&&r.getBufferedLength()<=kr.MAX_LENGTH&&(c.bufferedData=r.getBufferedValue()),o(c)};(async()=>{try{await Mr(e,r),s()}catch(c){i(c)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new me)})}),r.getBufferedValue()}B.exports=he;B.exports.buffer=(e,t)=>he(e,w(f({},t),{encoding:"buffer"}));B.exports.array=(e,t)=>he(e,w(f({},t),{array:!0}));B.exports.MaxBufferError=me});var Vt=a((Js,zt)=>{"use strict";var{PassThrough:jr}=require("stream");zt.exports=function(){var e=[],t=new jr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var Jt=a((eo,Zt)=>{"use strict";var Qt=Xt(),Yt=Wt(),Fr=Vt(),Ur=(e,t)=>{t===void 0||e.stdin===void 0||(Qt(t)?t.pipe(e.stdin):e.stdin.end(t))},Dr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Fr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Se=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ye=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Yt(e,{encoding:t,maxBuffer:r}):Yt.buffer(e,{maxBuffer:r})},Xr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let c=ye(e,{encoding:r,buffer:s,maxBuffer:o}),u=ye(t,{encoding:r,buffer:s,maxBuffer:o}),l=ye(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,c,u,l])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},Se(e,c),Se(t,u),Se(n,l)])}},Hr=({input:e})=>{if(Qt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Zt.exports={handleInput:Ur,makeAllStream:Dr,getSpawnedResult:Xr,validateInputSync:Hr}});var tn=a((to,en)=>{"use strict";var Kr=(async()=>{})().constructor.prototype,Wr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Kr,e)]),zr=(e,t)=>{for(let[n,r]of Wr){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,w(f({},r),{value:s}))}return e},Vr=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});en.exports={mergePromise:zr,getSpawnedPromise:Vr}});var sn=a((no,rn)=>{"use strict";var nn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Yr=/^[\w.-]+$/,Qr=/"/g,Zr=e=>typeof e!="string"||Yr.test(e)?e:`"${e.replace(Qr,'\\"')}"`,Jr=(e,t)=>nn(e,t).join(" "),es=(e,t)=>nn(e,t).map(n=>Zr(n)).join(" "),ts=/ +/g,ns=e=>{let t=[];for(let n of e.trim().split(ts)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};rn.exports={joinCommand:Jr,getEscapedCommand:es,parseCommand:ns}});var fn=a((ro,q)=>{"use strict";var rs=require("path"),ge=require("child_process"),ss=ht(),os=yt(),is=bt(),cs=It(),Q=qt(),cn=_t(),{spawnedKill:as,spawnedCancel:us,setupTimeout:ls,validateTimeout:ds,setExitHandler:fs}=Ut(),{handleInput:ps,getSpawnedResult:ms,makeAllStream:hs,validateInputSync:Ss}=Jt(),{mergePromise:on,getSpawnedPromise:ys}=tn(),{joinCommand:an,parseCommand:un,getEscapedCommand:ln}=sn(),gs=1e3*1e3*100,xs=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?f(f({},process.env),e):e;return n?is.env({env:o,cwd:r,execPath:s}):o},dn=(e,t,n={})=>{let r=ss._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=f({maxBuffer:gs,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=xs(n),n.stdio=cn(n),process.platform==="win32"&&rs.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},L=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?os(t):t,Z=(e,t,n)=>{let r=dn(e,t,n),s=an(e,t),o=ln(e,t);ds(r.options);let i;try{i=ge.spawn(r.file,r.args,r.options)}catch(y){let g=new ge.ChildProcess,x=Promise.reject(Q({error:y,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return on(g,x)}let c=ys(i),u=ls(i,r.options,c),l=fs(i,r.options,u),p={isCanceled:!1};i.kill=as.bind(null,i.kill.bind(i)),i.cancel=us.bind(null,i,p);let h=cs(async()=>{let[{error:y,exitCode:g,signal:x,timedOut:I},M,j,yn]=await ms(i,r.options,l),xe=L(r.options,M),be=L(r.options,j),we=L(r.options,yn);if(y||g!==0||x!==null){let ve=Q({error:y,exitCode:g,signal:x,stdout:xe,stderr:be,all:we,command:s,escapedCommand:o,parsed:r,timedOut:I,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return ve;throw ve}return{command:s,escapedCommand:o,exitCode:0,stdout:xe,stderr:be,all:we,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ps(i,r.options.input),i.all=hs(i,r.options),on(i,h)};q.exports=Z;q.exports.sync=(e,t,n)=>{let r=dn(e,t,n),s=an(e,t),o=ln(e,t);Ss(r.options);let i;try{i=ge.spawnSync(r.file,r.args,r.options)}catch(l){throw Q({error:l,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let c=L(r.options,i.stdout,i.error),u=L(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Q({stdout:c,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return l;throw l}return{command:s,escapedCommand:o,exitCode:0,stdout:c,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};q.exports.command=(e,t)=>{let[n,...r]=un(e);return Z(n,r,t)};q.exports.commandSync=(e,t)=>{let[n,...r]=un(e);return Z.sync(n,r,t)};q.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=cn.node(n),s=process.execArgv.filter(c=>!c.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return Z(o,[...i,e,...Array.isArray(t)?t:[]],w(f({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var ws={};Tn(ws,{default:()=>bs});var Sn=require("@raycast/api");var pn=Ce(require("node:process"),1),mn=Ce(fn(),1);async function hn(e){if(pn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,mn.default)("osascript",["-e",e]);return t}var bs=async()=>{await(0,Sn.closeMainWindow)(),await hn(`
    tell application "Notes" to activate
    tell application "System Events" to tell process "Notes" to \xAC
    click menu item 1 of menu 1 of \xAC
    menu bar item 3 of menu bar 1
  `)};module.exports=Pn(ws);0&&(module.exports={});
