var An=Object.create;var $=Object.defineProperty,Pn=Object.defineProperties,Cn=Object.getOwnPropertyDescriptor,Gn=Object.getOwnPropertyDescriptors,Nn=Object.getOwnPropertyNames,Ge=Object.getOwnPropertySymbols,On=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty,Rn=Object.prototype.propertyIsEnumerable;var Ne=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))Oe.call(t,n)&&Ne(e,n,t[n]);if(Ge)for(var n of Ge(t))Rn.call(t,n)&&Ne(e,n,t[n]);return e},v=(e,t)=>Pn(e,Gn(t)),Re=e=>$(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),qn=(e,t)=>{for(var n in t)$(e,n,{get:t[n],enumerable:!0})},qe=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Nn(t))!Oe.call(e,o)&&(n||o!=="default")&&$(e,o,{get:()=>t[o],enumerable:!(r=Cn(t,o))||r.enumerable});return e},ke=(e,t)=>qe(Re($(e!=null?An(On(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),kn=(e=>(t,n)=>e&&e.get(t)||(n=qe(Re({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var Be=c((Oo,Me)=>{Me.exports=Le;Le.sync=_n;var $e=require("fs");function $n(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function _e(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:$n(t,n)}function Le(e,t,n){$e.stat(e,function(r,o){n(r,r?!1:_e(o,e,t))})}function _n(e,t){return _e($e.statSync(e),e,t)}});var He=c((Ro,Ue)=>{Ue.exports=Fe;Fe.sync=Ln;var De=require("fs");function Fe(e,t,n){De.stat(e,function(r,o){n(r,r?!1:je(o,t))})}function Ln(e,t){return je(De.statSync(e),t)}function je(e,t){return e.isFile()&&Mn(e,t)}function Mn(e,t){var n=e.mode,r=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),p=a|u,y=n&l||n&u&&o===i||n&a&&r===s||n&p&&s===0;return y}});var Ke=c((ko,Xe)=>{var qo=require("fs"),U;process.platform==="win32"||global.TESTING_WINDOWS?U=Be():U=He();Xe.exports=ne;ne.sync=Bn;function ne(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){ne(e,t||{},function(s,i){s?o(s):r(i)})})}U(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function Bn(e,t){try{return U.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var Je=c(($o,Ze)=>{var P=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",We=require("path"),Dn=P?";":":",ze=Ke(),Ve=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Ye=(e,t)=>{let n=t.colon||Dn,r=e.match(/\//)||P&&e.match(/\\/)?[""]:[...P?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=P?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=P?o.split(n):[""];return P&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:o}},Qe=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:s}=Ye(e,t),i=[],a=l=>new Promise((p,y)=>{if(l===r.length)return t.all&&i.length?p(i):y(Ve(e));let S=r[l],g=/^".*"$/.test(S)?S.slice(1,-1):S,x=We.join(g,e),w=!g&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;p(u(w,l,0))}),u=(l,p,y)=>new Promise((S,g)=>{if(y===o.length)return S(a(p+1));let x=o[y];ze(l+x,{pathExt:s},(w,A)=>{if(!w&&A)if(t.all)i.push(l+x);else return S(l+x);return S(u(l,p,y+1))})});return n?a(0).then(l=>n(null,l),n):a(0)},Fn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=Ye(e,t),s=[];for(let i=0;i<n.length;i++){let a=n[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=We.join(u,e),p=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let y=0;y<r.length;y++){let S=p+r[y];try{if(ze.sync(S,{pathExt:o}))if(t.all)s.push(S);else return S}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Ve(e)};Ze.exports=Qe;Qe.sync=Fn});var oe=c((_o,re)=>{"use strict";var et=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};re.exports=et;re.exports.default=et});var ot=c((Lo,rt)=>{"use strict";var tt=require("path"),jn=Je(),Un=oe();function nt(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=jn.sync(e.command,{path:n[Un({env:n})],pathExt:t?tt.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return i&&(i=tt.resolve(o?e.options.cwd:"",i)),i}function Hn(e){return nt(e)||nt(e,!0)}rt.exports=Hn});var st=c((Mo,ie)=>{"use strict";var se=/([()\][%!^"`<>&|;, *?])/g;function Xn(e){return e=e.replace(se,"^$1"),e}function Kn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(se,"^$1"),t&&(e=e.replace(se,"^$1")),e}ie.exports.command=Xn;ie.exports.argument=Kn});var at=c((Bo,it)=>{"use strict";it.exports=/^#!(.*)/});var ut=c((Do,ct)=>{"use strict";var Wn=at();ct.exports=(e="")=>{let t=e.match(Wn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var dt=c((Fo,lt)=>{"use strict";var ae=require("fs"),zn=ut();function Vn(e){let n=Buffer.alloc(150),r;try{r=ae.openSync(e,"r"),ae.readSync(r,n,0,150,0),ae.closeSync(r)}catch{}return zn(n.toString())}lt.exports=Vn});var ht=c((jo,pt)=>{"use strict";var Yn=require("path"),ft=ot(),mt=st(),Qn=dt(),Zn=process.platform==="win32",Jn=/\.(?:com|exe)$/i,er=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function tr(e){e.file=ft(e);let t=e.file&&Qn(e.file);return t?(e.args.unshift(e.file),e.command=t,ft(e)):e.file}function nr(e){if(!Zn)return e;let t=tr(e),n=!Jn.test(t);if(e.options.forceShell||n){let r=er.test(t);e.command=Yn.normalize(e.command),e.command=mt.command(e.command),e.args=e.args.map(s=>mt.argument(s,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function rr(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:nr(r)}pt.exports=rr});var gt=c((Uo,yt)=>{"use strict";var ce=process.platform==="win32";function ue(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function or(e,t){if(!ce)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let s=St(o,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function St(e,t){return ce&&e===1&&!t.file?ue(t.original,"spawn"):null}function sr(e,t){return ce&&e===1&&!t.file?ue(t.original,"spawnSync"):null}yt.exports={hookChildProcess:or,verifyENOENT:St,verifyENOENTSync:sr,notFoundError:ue}});var bt=c((Ho,C)=>{"use strict";var xt=require("child_process"),le=ht(),de=gt();function wt(e,t,n){let r=le(e,t,n),o=xt.spawn(r.command,r.args,r.options);return de.hookChildProcess(o,r),o}function ir(e,t,n){let r=le(e,t,n),o=xt.spawnSync(r.command,r.args,r.options);return o.error=o.error||de.verifyENOENTSync(o.status,r),o}C.exports=wt;C.exports.spawn=wt;C.exports.sync=ir;C.exports._parse=le;C.exports._enoent=de});var Et=c((Xo,vt)=>{"use strict";vt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var At=c((Ko,L)=>{"use strict";var _=require("path"),It=oe(),Tt=e=>{e=m({cwd:process.cwd(),path:process.env[It()],execPath:process.execPath},e);let t,n=_.resolve(e.cwd),r=[];for(;t!==n;)r.push(_.join(n,"node_modules/.bin")),t=n,n=_.resolve(n,"..");let o=_.resolve(e.cwd,e.execPath,"..");return r.push(o),r.concat(e.path).join(_.delimiter)};L.exports=Tt;L.exports.default=Tt;L.exports.env=e=>{e=m({env:process.env},e);let t=m({},e.env),n=It({env:t});return e.path=t[n],t[n]=L.exports(e),t}});var Ct=c((Wo,fe)=>{"use strict";var Pt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};fe.exports=Pt;fe.exports.default=Pt});var Nt=c((zo,X)=>{"use strict";var ar=Ct(),H=new WeakMap,Gt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(H.set(s,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return ar(s,e),H.set(s,r),s};X.exports=Gt;X.exports.default=Gt;X.exports.callCount=e=>{if(!H.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return H.get(e)}});var Ot=c(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.SIGNALS=void 0;var cr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];K.SIGNALS=cr});var me=c(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.SIGRTMAX=G.getRealtimeSignals=void 0;var ur=function(){let e=qt-Rt+1;return Array.from({length:e},lr)};G.getRealtimeSignals=ur;var lr=function(e,t){return{name:`SIGRT${t+1}`,number:Rt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Rt=34,qt=64;G.SIGRTMAX=qt});var kt=c(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.getSignals=void 0;var dr=require("os"),fr=Ot(),mr=me(),pr=function(){let e=(0,mr.getRealtimeSignals)();return[...fr.SIGNALS,...e].map(hr)};W.getSignals=pr;var hr=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:s}){let{signals:{[e]:i}}=dr.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:o,standard:s}}});var _t=c(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.signalsByNumber=N.signalsByName=void 0;var Sr=require("os"),$t=kt(),yr=me(),gr=function(){return(0,$t.getSignals)().reduce(xr,{})},xr=function(e,{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}){return v(m({},e),{[t]:{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}})},wr=gr();N.signalsByName=wr;var br=function(){let e=(0,$t.getSignals)(),t=yr.SIGRTMAX+1,n=Array.from({length:t},(r,o)=>vr(o,e));return Object.assign({},...n)},vr=function(e,t){let n=Er(e,t);if(n===void 0)return{};let{name:r,description:o,supported:s,action:i,forced:a,standard:u}=n;return{[e]:{name:r,number:e,description:o,supported:s,action:i,forced:a,standard:u}}},Er=function(e,t){let n=t.find(({name:r})=>Sr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},Ir=br();N.signalsByNumber=Ir});var Mt=c((Jo,Lt)=>{"use strict";var{signalsByName:Tr}=_t(),Ar=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",Pr=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:p,parsed:{options:{timeout:y}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let S=o===void 0?void 0:Tr[o].description,g=r&&r.code,w=`Command ${Ar({timedOut:u,timeout:y,errorCode:g,signal:o,signalDescription:S,exitCode:s,isCanceled:l})}: ${i}`,A=Object.prototype.toString.call(r)==="[object Error]",F=A?`${w}
${r.message}`:w,j=[F,t,e].filter(Boolean).join(`
`);return A?(r.originalMessage=r.message,r.message=j):r=new Error(j),r.shortMessage=F,r.command=i,r.escapedCommand=a,r.exitCode=s,r.signal=o,r.signalDescription=S,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(u),r.isCanceled=l,r.killed=p&&!u,r};Lt.exports=Pr});var Dt=c((es,pe)=>{"use strict";var z=["stdin","stdout","stderr"],Cr=e=>z.some(t=>e[t]!==void 0),Bt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return z.map(r=>e[r]);if(Cr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${z.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,z.length);return Array.from({length:n},(r,o)=>t[o])};pe.exports=Bt;pe.exports.node=e=>{let t=Bt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Ft=c((ts,V)=>{V.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&V.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&V.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Kt=c((ns,q)=>{var d=global.process,I=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};I(d)?(jt=require("assert"),O=Ft(),Ut=/^win/i.test(d.platform),M=require("events"),typeof M!="function"&&(M=M.EventEmitter),d.__signal_exit_emitter__?h=d.__signal_exit_emitter__:(h=d.__signal_exit_emitter__=new M,h.count=0,h.emitted={}),h.infinite||(h.setMaxListeners(1/0),h.infinite=!0),q.exports=function(e,t){if(!I(global.process))return function(){};jt.equal(typeof e,"function","a callback must be provided for exit handler"),R===!1&&he();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){h.removeListener(n,e),h.listeners("exit").length===0&&h.listeners("afterexit").length===0&&Y()};return h.on(n,e),r},Y=function(){!R||!I(global.process)||(R=!1,O.forEach(function(t){try{d.removeListener(t,Q[t])}catch{}}),d.emit=Z,d.reallyExit=Se,h.count-=1)},q.exports.unload=Y,T=function(t,n,r){h.emitted[t]||(h.emitted[t]=!0,h.emit(t,n,r))},Q={},O.forEach(function(e){Q[e]=function(){if(!!I(global.process)){var n=d.listeners(e);n.length===h.count&&(Y(),T("exit",null,e),T("afterexit",null,e),Ut&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),q.exports.signals=function(){return O},R=!1,he=function(){R||!I(global.process)||(R=!0,h.count+=1,O=O.filter(function(t){try{return d.on(t,Q[t]),!0}catch{return!1}}),d.emit=Xt,d.reallyExit=Ht)},q.exports.load=he,Se=d.reallyExit,Ht=function(t){!I(global.process)||(d.exitCode=t||0,T("exit",d.exitCode,null),T("afterexit",d.exitCode,null),Se.call(d,d.exitCode))},Z=d.emit,Xt=function(t,n){if(t==="exit"&&I(global.process)){n!==void 0&&(d.exitCode=n);var r=Z.apply(this,arguments);return T("exit",d.exitCode,null),T("afterexit",d.exitCode,null),r}else return Z.apply(this,arguments)}):q.exports=function(){return function(){}};var jt,O,Ut,M,h,Y,T,Q,R,he,Se,Ht,Z,Xt});var zt=c((rs,Wt)=>{"use strict";var Gr=require("os"),Nr=Kt(),Or=1e3*5,Rr=(e,t="SIGTERM",n={})=>{let r=e(t);return qr(e,t,n,r),r},qr=(e,t,n,r)=>{if(!kr(t,n,r))return;let o=_r(n),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},kr=(e,{forceKillAfterTimeout:t},n)=>$r(e)&&t!==!1&&n,$r=e=>e===Gr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",_r=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Or;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Lr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Mr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Br=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,s=new Promise((a,u)=>{o=setTimeout(()=>{Mr(e,n,u)},t)}),i=r.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Dr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Fr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=Nr(()=>{e.kill()});return r.finally(()=>{o()})};Wt.exports={spawnedKill:Rr,spawnedCancel:Lr,setupTimeout:Br,validateTimeout:Dr,setExitHandler:Fr}});var Yt=c((os,Vt)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";Vt.exports=b});var Zt=c((ss,Qt)=>{"use strict";var{PassThrough:jr}=require("stream");Qt.exports=e=>{e=m({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let s=new jr({objectMode:o});n&&s.setEncoding(n);let i=0,a=[];return s.on("data",u=>{a.push(u),o?i=a.length:i+=u.length}),s.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var Jt=c((is,B)=>{"use strict";var{constants:Ur}=require("buffer"),Hr=require("stream"),{promisify:Xr}=require("util"),Kr=Zt(),Wr=Xr(Hr.pipeline),ye=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function ge(e,t){if(!e)throw new Error("Expected a stream");t=m({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=Kr(t);return await new Promise((o,s)=>{let i=a=>{a&&r.getBufferedLength()<=Ur.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),s(a)};(async()=>{try{await Wr(e,r),o()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new ye)})}),r.getBufferedValue()}B.exports=ge;B.exports.buffer=(e,t)=>ge(e,v(m({},t),{encoding:"buffer"}));B.exports.array=(e,t)=>ge(e,v(m({},t),{array:!0}));B.exports.MaxBufferError=ye});var tn=c((as,en)=>{"use strict";var{PassThrough:zr}=require("stream");en.exports=function(){var e=[],t=new zr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var sn=c((cs,on)=>{"use strict";var rn=Yt(),nn=Jt(),Vr=tn(),Yr=(e,t)=>{t===void 0||e.stdin===void 0||(rn(t)?t.pipe(e.stdin):e.stdin.end(t))},Qr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Vr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},xe=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},we=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?nn(e,{encoding:t,maxBuffer:r}):nn.buffer(e,{maxBuffer:r})},Zr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:s},i)=>{let a=we(e,{encoding:r,buffer:o,maxBuffer:s}),u=we(t,{encoding:r,buffer:o,maxBuffer:s}),l=we(n,{encoding:r,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,u,l])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},xe(e,a),xe(t,u),xe(n,l)])}},Jr=({input:e})=>{if(rn(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};on.exports={handleInput:Yr,makeAllStream:Qr,getSpawnedResult:Zr,validateInputSync:Jr}});var cn=c((us,an)=>{"use strict";var eo=(async()=>{})().constructor.prototype,to=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(eo,e)]),no=(e,t)=>{for(let[n,r]of to){let o=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,v(m({},r),{value:o}))}return e},ro=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});an.exports={mergePromise:no,getSpawnedPromise:ro}});var dn=c((ls,ln)=>{"use strict";var un=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],oo=/^[\w.-]+$/,so=/"/g,io=e=>typeof e!="string"||oo.test(e)?e:`"${e.replace(so,'\\"')}"`,ao=(e,t)=>un(e,t).join(" "),co=(e,t)=>un(e,t).map(n=>io(n)).join(" "),uo=/ +/g,lo=e=>{let t=[];for(let n of e.trim().split(uo)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};ln.exports={joinCommand:ao,getEscapedCommand:co,parseCommand:lo}});var gn=c((ds,k)=>{"use strict";var fo=require("path"),be=require("child_process"),mo=bt(),po=Et(),ho=At(),So=Nt(),J=Mt(),mn=Dt(),{spawnedKill:yo,spawnedCancel:go,setupTimeout:xo,validateTimeout:wo,setExitHandler:bo}=zt(),{handleInput:vo,getSpawnedResult:Eo,makeAllStream:Io,validateInputSync:To}=sn(),{mergePromise:fn,getSpawnedPromise:Ao}=cn(),{joinCommand:pn,parseCommand:hn,getEscapedCommand:Sn}=dn(),Po=1e3*1e3*100,Co=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let s=t?m(m({},process.env),e):e;return n?ho.env({env:s,cwd:r,execPath:o}):s},yn=(e,t,n={})=>{let r=mo._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=m({maxBuffer:Po,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=Co(n),n.stdio=mn(n),process.platform==="win32"&&fo.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},D=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?po(t):t,ee=(e,t,n)=>{let r=yn(e,t,n),o=pn(e,t),s=Sn(e,t);wo(r.options);let i;try{i=be.spawn(r.file,r.args,r.options)}catch(g){let x=new be.ChildProcess,w=Promise.reject(J({error:g,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return fn(x,w)}let a=Ao(i),u=xo(i,r.options,a),l=bo(i,r.options,u),p={isCanceled:!1};i.kill=yo.bind(null,i.kill.bind(i)),i.cancel=go.bind(null,i,p);let S=So(async()=>{let[{error:g,exitCode:x,signal:w,timedOut:A},F,j,Tn]=await Eo(i,r.options,l),Te=D(r.options,F),Ae=D(r.options,j),Pe=D(r.options,Tn);if(g||x!==0||w!==null){let Ce=J({error:g,exitCode:x,signal:w,stdout:Te,stderr:Ae,all:Pe,command:o,escapedCommand:s,parsed:r,timedOut:A,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return Ce;throw Ce}return{command:o,escapedCommand:s,exitCode:0,stdout:Te,stderr:Ae,all:Pe,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return vo(i,r.options.input),i.all=Io(i,r.options),fn(i,S)};k.exports=ee;k.exports.sync=(e,t,n)=>{let r=yn(e,t,n),o=pn(e,t),s=Sn(e,t);To(r.options);let i;try{i=be.spawnSync(r.file,r.args,r.options)}catch(l){throw J({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=D(r.options,i.stdout,i.error),u=D(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=J({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return l;throw l}return{command:o,escapedCommand:s,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};k.exports.command=(e,t)=>{let[n,...r]=hn(e);return ee(n,r,t)};k.exports.commandSync=(e,t)=>{let[n,...r]=hn(e);return ee.sync(n,r,t)};k.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=mn.node(n),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=n;return ee(s,[...i,e,...Array.isArray(t)?t:[]],v(m({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var Go={};qn(Go,{default:()=>In});var Ee=require("react"),f=require("@raycast/api");var E=require("@raycast/api");var xn=ke(require("node:process"),1),wn=ke(gn(),1);async function ve(e){if(xn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,wn.default)("osascript",["-e",e]);return t}var bn=require("@raycast/api");async function vn(){return!!(await(0,bn.getApplications)()).find(n=>n.bundleId==="com.if.Amphetamine")}var En="https://apps.apple.com/br/app/amphetamine/id937984704";async function te(e){let t=e?.duration,n=e?.interval,r=t===1?n?.substring(0,n.length-1):n,o=new E.Toast({title:"Starting a new session",style:E.Toast.Style.Animated});return o.show(),await vn()?await ve(`
    tell application "Amphetamine"
    		return session is active
    end tell
  `)==="true"?(o.title="A session is already running",o.style=E.Toast.Style.Failure,!1):(await ve(`
    tell application "Amphetamine"
        start new session ${t?`with options {duration: ${t}, interval: ${n}, displaySleepAllowed: false}`:""}
    end tell
  `),await(0,E.showHUD)(t?`New session started with ${t} ${r}`:"New default session started"),!0):(o.title="Amphetamine is no installed",o.message="Press Command + D to download",o.primaryAction={title:"Download",shortcut:{modifiers:["cmd"],key:"d"},onAction:async()=>await(0,E.open)(En)},o.style=E.Toast.Style.Failure,!1)}var Ie=(n=>(n.minutes="30",n.hours="1",n))(Ie||{});function In(){let[e,t]=(0,Ee.useState)("minutes"),[n,r]=(0,Ee.useState)(Ie[e]),o=new f.Toast({title:"Starting New Session",style:f.Toast.Style.Animated});async function s(){o.show();let a=Number(n);if(Number.isNaN(a))o.title="Failed to initialize a session.",o.message="The duration is invalid",o.style=f.Toast.Style.Failure;else{let u=!1;n?u=await te({duration:a,interval:e}):u=await te(),u&&(0,f.popToRoot)()}}function i(a){e!==a&&(t(a),r(Ie[a]))}return _jsx(f.Form,{actions:_jsx(f.ActionPanel,null,_jsx(f.Action.SubmitForm,{title:"Start Session",onSubmit:s,shortcut:{key:"enter",modifiers:[]},icon:f.Icon.List}),_jsx(f.Action,{title:"Select Hours",onAction:()=>i("hours"),shortcut:{key:"h",modifiers:["cmd"]},icon:f.Icon.Clock}),_jsx(f.Action,{title:"Select Minutes",onAction:()=>i("minutes"),shortcut:{key:"m",modifiers:["cmd"]},icon:f.Icon.Clock})),navigationTitle:"Configure Session"},_jsx(f.Form.TextField,{id:"duration",title:`Duration (in ${e})`,info:`Sets the session duration based on the unit selected.

Current: ${n} ${n==="1"?e.substring(0,e.length-1):e}`,value:n,onChange:a=>r(a)}),_jsx(f.Form.Dropdown,{id:"interval",title:"Unit",value:e,info:`Select whether the duration should be in minutes or in hours.

- Changing the duration to hours will set a default value of 1 hour.
- Changing the duration to minutes will set a default value of 30 minutes`,onChange:a=>i(a)},_jsx(f.Form.Dropdown.Item,{value:"minutes",title:"minutes"}),_jsx(f.Form.Dropdown.Item,{value:"hours",title:"hours"})))}module.exports=kn(Go);0&&(module.exports={});
