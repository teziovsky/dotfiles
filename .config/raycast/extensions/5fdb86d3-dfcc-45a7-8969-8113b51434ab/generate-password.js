var Fn=Object.create;var B=Object.defineProperty,Ln=Object.defineProperties,qn=Object.getOwnPropertyDescriptor,Bn=Object.getOwnPropertyDescriptors,jn=Object.getOwnPropertyNames,Ne=Object.getOwnPropertySymbols,Dn=Object.getPrototypeOf,Re=Object.prototype.hasOwnProperty,$n=Object.prototype.propertyIsEnumerable;var ke=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))Re.call(t,n)&&ke(e,n,t[n]);if(Ne)for(var n of Ne(t))$n.call(t,n)&&ke(e,n,t[n]);return e},x=(e,t)=>Ln(e,Bn(t)),_e=e=>B(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Mn=(e,t)=>{for(var n in t)B(e,n,{get:t[n],enumerable:!0})},Fe=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of jn(t))!Re.call(e,s)&&(n||s!=="default")&&B(e,s,{get:()=>t[s],enumerable:!(r=qn(t,s))||r.enumerable});return e},Un=(e,t)=>Fe(_e(B(e!=null?Fn(Dn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Wn=(e=>(t,n)=>e&&e.get(t)||(n=Fe(_e({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var We=c((Js,Ue)=>{Ue.exports=Me;Me.sync=Xn;var De=require("fs");function Vn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function $e(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Vn(t,n)}function Me(e,t,n){De.stat(e,function(r,s){n(r,r?!1:$e(s,e,t))})}function Xn(e,t){return $e(De.statSync(e),e,t)}});var ze=c((Qs,Xe)=>{Xe.exports=He;He.sync=zn;var Ke=require("fs");function He(e,t,n){Ke.stat(e,function(r,s){n(r,r?!1:Ve(s,t))})}function zn(e,t){return Ve(Ke.statSync(e),t)}function Ve(e,t){return e.isFile()&&Yn(e,t)}function Yn(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),u=parseInt("001",8),h=a|l,p=n&u||n&l&&s===i||n&a&&r===o||n&h&&o===0;return p}});var Je=c((eo,Ye)=>{var Zs=require("fs"),H;process.platform==="win32"||global.TESTING_WINDOWS?H=We():H=ze();Ye.exports=oe;oe.sync=Jn;function oe(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){oe(e,t||{},function(o,i){o?s(o):r(i)})})}H(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function Jn(e,t){try{return H.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var st=c((to,rt)=>{var C=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Qe=require("path"),Qn=C?";":":",Ze=Je(),et=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),tt=(e,t)=>{let n=t.colon||Qn,r=e.match(/\//)||C&&e.match(/\\/)?[""]:[...C?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=C?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=C?s.split(n):[""];return C&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},nt=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=tt(e,t),i=[],a=u=>new Promise((h,p)=>{if(u===r.length)return t.all&&i.length?h(i):p(et(e));let f=r[u],y=/^".*"$/.test(f)?f.slice(1,-1):f,S=Qe.join(y,e),b=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+S:S;h(l(b,u,0))}),l=(u,h,p)=>new Promise((f,y)=>{if(p===s.length)return f(a(h+1));let S=s[p];Ze(u+S,{pathExt:o},(b,E)=>{if(!b&&E)if(t.all)i.push(u+S);else return f(u+S);return f(l(u,h,p+1))})});return n?a(0).then(u=>n(null,u),n):a(0)},Zn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=tt(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,u=Qe.join(l,e),h=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let p=0;p<r.length;p++){let f=h+r[p];try{if(Ze.sync(f,{pathExt:s}))if(t.all)o.push(f);else return f}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw et(e)};rt.exports=nt;nt.sync=Zn});var ae=c((no,ie)=>{"use strict";var ot=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ie.exports=ot;ie.exports.default=ot});var ut=c((ro,ct)=>{"use strict";var it=require("path"),er=st(),tr=ae();function at(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=er.sync(e.command,{path:n[tr({env:n})],pathExt:t?it.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=it.resolve(s?e.options.cwd:"",i)),i}function nr(e){return at(e)||at(e,!0)}ct.exports=nr});var lt=c((so,ue)=>{"use strict";var ce=/([()\][%!^"`<>&|;, *?])/g;function rr(e){return e=e.replace(ce,"^$1"),e}function sr(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ce,"^$1"),t&&(e=e.replace(ce,"^$1")),e}ue.exports.command=rr;ue.exports.argument=sr});var pt=c((oo,dt)=>{"use strict";dt.exports=/^#!(.*)/});var mt=c((io,ft)=>{"use strict";var or=pt();ft.exports=(e="")=>{let t=e.match(or);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var wt=c((ao,ht)=>{"use strict";var le=require("fs"),ir=mt();function ar(e){let n=Buffer.alloc(150),r;try{r=le.openSync(e,"r"),le.readSync(r,n,0,150,0),le.closeSync(r)}catch{}return ir(n.toString())}ht.exports=ar});var bt=c((co,St)=>{"use strict";var cr=require("path"),gt=ut(),yt=lt(),ur=wt(),lr=process.platform==="win32",dr=/\.(?:com|exe)$/i,pr=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function fr(e){e.file=gt(e);let t=e.file&&ur(e.file);return t?(e.args.unshift(e.file),e.command=t,gt(e)):e.file}function mr(e){if(!lr)return e;let t=fr(e),n=!dr.test(t);if(e.options.forceShell||n){let r=pr.test(t);e.command=cr.normalize(e.command),e.command=yt.command(e.command),e.args=e.args.map(o=>yt.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function hr(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:mr(r)}St.exports=hr});var Ot=c((uo,Pt)=>{"use strict";var de=process.platform==="win32";function pe(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function wr(e,t){if(!de)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=xt(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function xt(e,t){return de&&e===1&&!t.file?pe(t.original,"spawn"):null}function gr(e,t){return de&&e===1&&!t.file?pe(t.original,"spawnSync"):null}Pt.exports={hookChildProcess:wr,verifyENOENT:xt,verifyENOENTSync:gr,notFoundError:pe}});var vt=c((lo,N)=>{"use strict";var It=require("child_process"),fe=bt(),me=Ot();function Et(e,t,n){let r=fe(e,t,n),s=It.spawn(r.command,r.args,r.options);return me.hookChildProcess(s,r),s}function yr(e,t,n){let r=fe(e,t,n),s=It.spawnSync(r.command,r.args,r.options);return s.error=s.error||me.verifyENOENTSync(s.status,r),s}N.exports=Et;N.exports.spawn=Et;N.exports.sync=yr;N.exports._parse=fe;N.exports._enoent=me});var Gt=c((po,Tt)=>{"use strict";Tt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Nt=c((fo,D)=>{"use strict";var j=require("path"),At=ae(),Ct=e=>{e=m({cwd:process.cwd(),path:process.env[At()],execPath:process.execPath},e);let t,n=j.resolve(e.cwd),r=[];for(;t!==n;)r.push(j.join(n,"node_modules/.bin")),t=n,n=j.resolve(n,"..");let s=j.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(j.delimiter)};D.exports=Ct;D.exports.default=Ct;D.exports.env=e=>{e=m({env:process.env},e);let t=m({},e.env),n=At({env:t});return e.path=t[n],t[n]=D.exports(e),t}});var Rt=c((mo,he)=>{"use strict";var kt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};he.exports=kt;he.exports.default=kt});var Ft=c((ho,X)=>{"use strict";var Sr=Rt(),V=new WeakMap,_t=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(V.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return Sr(o,e),V.set(o,r),o};X.exports=_t;X.exports.default=_t;X.exports.callCount=e=>{if(!V.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return V.get(e)}});var Lt=c(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.SIGNALS=void 0;var br=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];z.SIGNALS=br});var we=c(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.SIGRTMAX=k.getRealtimeSignals=void 0;var xr=function(){let e=Bt-qt+1;return Array.from({length:e},Pr)};k.getRealtimeSignals=xr;var Pr=function(e,t){return{name:`SIGRT${t+1}`,number:qt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},qt=34,Bt=64;k.SIGRTMAX=Bt});var jt=c(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.getSignals=void 0;var Or=require("os"),Ir=Lt(),Er=we(),vr=function(){let e=(0,Er.getRealtimeSignals)();return[...Ir.SIGNALS,...e].map(Tr)};Y.getSignals=vr;var Tr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=Or.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var $t=c(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.signalsByNumber=R.signalsByName=void 0;var Gr=require("os"),Dt=jt(),Ar=we(),Cr=function(){return(0,Dt.getSignals)().reduce(Nr,{})},Nr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return x(m({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}})},kr=Cr();R.signalsByName=kr;var Rr=function(){let e=(0,Dt.getSignals)(),t=Ar.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>_r(s,e));return Object.assign({},...n)},_r=function(e,t){let n=Fr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:l}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},Fr=function(e,t){let n=t.find(({name:r})=>Gr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},Lr=Rr();R.signalsByNumber=Lr});var Ut=c((bo,Mt)=>{"use strict";var{signalsByName:qr}=$t(),Br=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",jr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:u,killed:h,parsed:{options:{timeout:p}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let f=s===void 0?void 0:qr[s].description,y=r&&r.code,b=`Command ${Br({timedOut:l,timeout:p,errorCode:y,signal:s,signalDescription:f,exitCode:o,isCanceled:u})}: ${i}`,E=Object.prototype.toString.call(r)==="[object Error]",W=E?`${b}
${r.message}`:b,K=[W,t,e].filter(Boolean).join(`
`);return E?(r.originalMessage=r.message,r.message=K):r=new Error(K),r.shortMessage=W,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=f,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(l),r.isCanceled=u,r.killed=h&&!l,r};Mt.exports=jr});var Kt=c((xo,ge)=>{"use strict";var J=["stdin","stdout","stderr"],Dr=e=>J.some(t=>e[t]!==void 0),Wt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return J.map(r=>e[r]);if(Dr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${J.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,J.length);return Array.from({length:n},(r,s)=>t[s])};ge.exports=Wt;ge.exports.node=e=>{let t=Wt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Ht=c((Po,Q)=>{Q.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&Q.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&Q.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Jt=c((Oo,L)=>{var w=global.process,G=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};G(w)?(Vt=require("assert"),_=Ht(),Xt=/^win/i.test(w.platform),$=require("events"),typeof $!="function"&&($=$.EventEmitter),w.__signal_exit_emitter__?g=w.__signal_exit_emitter__:(g=w.__signal_exit_emitter__=new $,g.count=0,g.emitted={}),g.infinite||(g.setMaxListeners(1/0),g.infinite=!0),L.exports=function(e,t){if(!!G(global.process)){Vt.equal(typeof e,"function","a callback must be provided for exit handler"),F===!1&&ye();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){g.removeListener(n,e),g.listeners("exit").length===0&&g.listeners("afterexit").length===0&&Z()};return g.on(n,e),r}},Z=function(){!F||!G(global.process)||(F=!1,_.forEach(function(t){try{w.removeListener(t,ee[t])}catch{}}),w.emit=te,w.reallyExit=Se,g.count-=1)},L.exports.unload=Z,A=function(t,n,r){g.emitted[t]||(g.emitted[t]=!0,g.emit(t,n,r))},ee={},_.forEach(function(e){ee[e]=function(){if(!!G(global.process)){var n=w.listeners(e);n.length===g.count&&(Z(),A("exit",null,e),A("afterexit",null,e),Xt&&e==="SIGHUP"&&(e="SIGINT"),w.kill(w.pid,e))}}}),L.exports.signals=function(){return _},F=!1,ye=function(){F||!G(global.process)||(F=!0,g.count+=1,_=_.filter(function(t){try{return w.on(t,ee[t]),!0}catch{return!1}}),w.emit=Yt,w.reallyExit=zt)},L.exports.load=ye,Se=w.reallyExit,zt=function(t){!G(global.process)||(w.exitCode=t||0,A("exit",w.exitCode,null),A("afterexit",w.exitCode,null),Se.call(w,w.exitCode))},te=w.emit,Yt=function(t,n){if(t==="exit"&&G(global.process)){n!==void 0&&(w.exitCode=n);var r=te.apply(this,arguments);return A("exit",w.exitCode,null),A("afterexit",w.exitCode,null),r}else return te.apply(this,arguments)}):L.exports=function(){};var Vt,_,Xt,$,g,Z,A,ee,F,ye,Se,zt,te,Yt});var Zt=c((Io,Qt)=>{"use strict";var $r=require("os"),Mr=Jt(),Ur=1e3*5,Wr=(e,t="SIGTERM",n={})=>{let r=e(t);return Kr(e,t,n,r),r},Kr=(e,t,n,r)=>{if(!Hr(t,n,r))return;let s=Xr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Hr=(e,{forceKillAfterTimeout:t},n)=>Vr(e)&&t!==!1&&n,Vr=e=>e===$r.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Xr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Ur;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},zr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Yr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Jr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{Yr(e,n,l)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Qr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Zr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=Mr(()=>{e.kill()});return r.finally(()=>{s()})};Qt.exports={spawnedKill:Wr,spawnedCancel:zr,setupTimeout:Jr,validateTimeout:Qr,setExitHandler:Zr}});var tn=c((Eo,en)=>{"use strict";var I=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";I.writable=e=>I(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";I.readable=e=>I(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";I.duplex=e=>I.writable(e)&&I.readable(e);I.transform=e=>I.duplex(e)&&typeof e._transform=="function";en.exports=I});var rn=c((vo,nn)=>{"use strict";var{PassThrough:es}=require("stream");nn.exports=e=>{e=m({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new es({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var sn=c((To,M)=>{"use strict";var{constants:ts}=require("buffer"),ns=require("stream"),{promisify:rs}=require("util"),ss=rn(),os=rs(ns.pipeline),be=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function xe(e,t){if(!e)throw new Error("Expected a stream");t=m({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=ss(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=ts.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await os(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new be)})}),r.getBufferedValue()}M.exports=xe;M.exports.buffer=(e,t)=>xe(e,x(m({},t),{encoding:"buffer"}));M.exports.array=(e,t)=>xe(e,x(m({},t),{array:!0}));M.exports.MaxBufferError=be});var an=c((Go,on)=>{"use strict";var{PassThrough:is}=require("stream");on.exports=function(){var e=[],t=new is({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var dn=c((Ao,ln)=>{"use strict";var un=tn(),cn=sn(),as=an(),cs=(e,t)=>{t===void 0||e.stdin===void 0||(un(t)?t.pipe(e.stdin):e.stdin.end(t))},us=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=as();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Pe=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Oe=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?cn(e,{encoding:t,maxBuffer:r}):cn.buffer(e,{maxBuffer:r})},ls=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=Oe(e,{encoding:r,buffer:s,maxBuffer:o}),l=Oe(t,{encoding:r,buffer:s,maxBuffer:o}),u=Oe(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,u])}catch(h){return Promise.all([{error:h,signal:h.signal,timedOut:h.timedOut},Pe(e,a),Pe(t,l),Pe(n,u)])}},ds=({input:e})=>{if(un(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};ln.exports={handleInput:cs,makeAllStream:us,getSpawnedResult:ls,validateInputSync:ds}});var fn=c((Co,pn)=>{"use strict";var ps=(async()=>{})().constructor.prototype,fs=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(ps,e)]),ms=(e,t)=>{for(let[n,r]of fs){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,x(m({},r),{value:s}))}return e},hs=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});pn.exports={mergePromise:ms,getSpawnedPromise:hs}});var wn=c((No,hn)=>{"use strict";var mn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],ws=/^[\w.-]+$/,gs=/"/g,ys=e=>typeof e!="string"||ws.test(e)?e:`"${e.replace(gs,'\\"')}"`,Ss=(e,t)=>mn(e,t).join(" "),bs=(e,t)=>mn(e,t).map(n=>ys(n)).join(" "),xs=/ +/g,Ps=e=>{let t=[];for(let n of e.trim().split(xs)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};hn.exports={joinCommand:Ss,getEscapedCommand:bs,parseCommand:Ps}});var On=c((ko,q)=>{"use strict";var Os=require("path"),Ie=require("child_process"),Is=vt(),Es=Gt(),vs=Nt(),Ts=Ft(),ne=Ut(),yn=Kt(),{spawnedKill:Gs,spawnedCancel:As,setupTimeout:Cs,validateTimeout:Ns,setExitHandler:ks}=Zt(),{handleInput:Rs,getSpawnedResult:_s,makeAllStream:Fs,validateInputSync:Ls}=dn(),{mergePromise:gn,getSpawnedPromise:qs}=fn(),{joinCommand:Sn,parseCommand:bn,getEscapedCommand:xn}=wn(),Bs=1e3*1e3*100,js=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?m(m({},process.env),e):e;return n?vs.env({env:o,cwd:r,execPath:s}):o},Pn=(e,t,n={})=>{let r=Is._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=m({maxBuffer:Bs,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=js(n),n.stdio=yn(n),process.platform==="win32"&&Os.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},U=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?Es(t):t,re=(e,t,n)=>{let r=Pn(e,t,n),s=Sn(e,t),o=xn(e,t);Ns(r.options);let i;try{i=Ie.spawn(r.file,r.args,r.options)}catch(y){let S=new Ie.ChildProcess,b=Promise.reject(ne({error:y,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return gn(S,b)}let a=qs(i),l=Cs(i,r.options,a),u=ks(i,r.options,l),h={isCanceled:!1};i.kill=Gs.bind(null,i.kill.bind(i)),i.cancel=As.bind(null,i,h);let f=Ts(async()=>{let[{error:y,exitCode:S,signal:b,timedOut:E},W,K,_n]=await _s(i,r.options,u),Te=U(r.options,W),Ge=U(r.options,K),Ae=U(r.options,_n);if(y||S!==0||b!==null){let Ce=ne({error:y,exitCode:S,signal:b,stdout:Te,stderr:Ge,all:Ae,command:s,escapedCommand:o,parsed:r,timedOut:E,isCanceled:h.isCanceled,killed:i.killed});if(!r.options.reject)return Ce;throw Ce}return{command:s,escapedCommand:o,exitCode:0,stdout:Te,stderr:Ge,all:Ae,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Rs(i,r.options.input),i.all=Fs(i,r.options),gn(i,f)};q.exports=re;q.exports.sync=(e,t,n)=>{let r=Pn(e,t,n),s=Sn(e,t),o=xn(e,t);Ls(r.options);let i;try{i=Ie.spawnSync(r.file,r.args,r.options)}catch(u){throw ne({error:u,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=U(r.options,i.stdout,i.error),l=U(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let u=ne({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return u;throw u}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};q.exports.command=(e,t)=>{let[n,...r]=bn(e);return re(n,r,t)};q.exports.commandSync=(e,t)=>{let[n,...r]=bn(e);return re.sync(n,r,t)};q.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=yn.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return re(o,[...i,e,...Array.isArray(t)?t:[]],x(m({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var Hs={};Mn(Hs,{default:()=>Rn});var d=require("@raycast/api");var O=require("@raycast/api"),v=require("react");var Le={lowercase:!0,uppercase:!0,number:!1,special:!1,passphrase:!1,length:14,words:3,separator:"-",capitalize:!1,includeNumber:!1},T={PASSWORD_OPTIONS:"bw-generate-password-options",PASSWORD_ONE_TIME_WARNING:"bw-generate-password-warning-accepted"},se={password:{length:{label:"Length of the password",hint:"5 - 128",type:"number",errorMessage:"Field must be a number between 5 and 128"},uppercase:{label:"Uppercase characters",hint:"ABCDEFGHIJLMNOPQRSTUVWXYZ",type:"boolean"},lowercase:{label:"Lowercase characters",hint:"abcdefghijklmnopqrstuvwxyz",type:"boolean"},number:{label:"Numeric characters",hint:"0123456789",type:"boolean"},special:{label:"Special characters",hint:"!@#$%^&*()_+-=[]{}|;:,./<>?",type:"boolean"}},passphrase:{words:{label:"Number of words",hint:"3 - 20",type:"number",errorMessage:"Field must be a number between 3 and 20"},separator:{label:"Word separator",hint:"this-is-a-passphrase",type:"string",errorMessage:"Field must be a single character"},capitalize:{label:"Capitalise",hint:"This-Is-A-Passphrase",type:"boolean"},includeNumber:{label:"Include number",hint:"This2-Is-A-Passphrase",type:"boolean"}}};var Kn={password:void 0,isGenerating:!1},Hn=(e,t)=>{switch(t.type){case"generate":return x(m({},e),{isGenerating:!0});case"setPassword":return{password:t.password,isGenerating:!1};case"fail":return x(m({},e),{isGenerating:!1});case"clear":return{isGenerating:!1,password:void 0}}};function qe(e,t,n){let{regenerateOnOptionChange:r=!0}=n??{},[s,o]=(0,v.useReducer)(Hn,Kn),i=async()=>{try{if(s.isGenerating)return;o({type:"generate"});let a=await e.generatePassword(t);o({type:"setPassword",password:a})}catch{o({type:"fail"})}};return(0,v.useEffect)(()=>{!r||!t||i()},[t]),x(m({},s),{regeneratePassword:i})}var Be=()=>{let[e,t]=(0,v.useState)(),n=async(s,o)=>{if(!e||e[s]===o)return;let i=x(m({},e),{[s]:o});t(i),await O.LocalStorage.setItem(T.PASSWORD_OPTIONS,JSON.stringify(i))},r=async()=>{let s=await O.LocalStorage.getItem(T.PASSWORD_OPTIONS),o=m(m({},Le),s?JSON.parse(s):{});t(o)};return(0,v.useEffect)(()=>{r()},[]),{options:e,setOption:n}},je=async()=>{let e=()=>(0,O.popToRoot)({clearSearchBar:!1}),t=()=>O.LocalStorage.setItem(T.PASSWORD_ONE_TIME_WARNING,!0),n=async()=>{await O.LocalStorage.getItem(T.PASSWORD_ONE_TIME_WARNING)||await(0,O.confirmAlert)({title:"Warning",message:"Password history is not available yet, so make sure to store the password after generating it!",icon:O.Icon.ExclamationMark,dismissAction:{title:"Go back",onAction:e},primaryAction:{title:"I understand",onAction:t}})};(0,v.useEffect)(()=>{n()},[])};var vn=Un(On()),Tn=require("fs"),Gn=require("path/posix");var Ds=require("@raycast/api");var Ee=e=>Object.entries(e);function In(e){return Object.entries(e).flatMap(([t,n])=>n?[`--${t}`,n]:[])}var En=e=>e.charAt(0).toUpperCase()+e.slice(1);var ve=class{constructor(t,n,r){if(r||(r=process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw"),!(0,Tn.existsSync)(r))throw new Error(`Bitwarden CLI not found at ${r}`);this.cliPath=r,this.env={BW_CLIENTSECRET:n.trim(),BW_CLIENTID:t.trim(),PATH:(0,Gn.dirname)(process.execPath)}}async sync(t){await this.exec(["sync","--session",t])}async login(){await this.exec(["login","--apikey"])}async logout(){await this.exec(["logout"])}async listItems(t){let{stdout:n}=await this.exec(["list","items","--session",t]);return JSON.parse(n).filter(s=>!!s.name)}async getTotp(t,n){let{stdout:r}=await this.exec(["get","totp","--session",n,t]);return r}async unlock(t){let{stdout:n}=await this.exec(["unlock",t,"--raw"]);return n}async lock(){await this.exec(["lock"])}async status(){let{stdout:t}=await this.exec(["status"]);return JSON.parse(t)}async generatePassword(t){let n=t?In(t):[],{stdout:r}=await this.exec(["generate",...n]);return r}async exec(t){return(0,vn.default)(this.cliPath,t,{env:this.env,input:""})}};function An(e,t,n,r){var s,o=!1,i=0;function a(){s&&clearTimeout(s)}function l(){a(),o=!0}typeof t!="boolean"&&(r=n,n=t,t=void 0);function u(){for(var h=arguments.length,p=new Array(h),f=0;f<h;f++)p[f]=arguments[f];var y=this,S=Date.now()-i;if(o)return;function b(){i=Date.now(),n.apply(y,p)}function E(){s=void 0}r&&!s&&b(),a(),r===void 0&&S>e?b():t!==!0&&(s=setTimeout(r?E:b,r===void 0?e-S:e))}return u.cancel=l,u}function Cn(e,t,n){return n===void 0?An(e,t,!1):An(e,n,t!==!1)}var P=require("@raycast/api"),Nn=require("react");function kn(){return(0,P.showToast)(P.Toast.Style.Failure,"Bitwarden CLI not found"),_jsx(P.Detail,{markdown:`# The Bitwarden CLI was not found
## Please check that:

1. The Bitwarden CLI is [correctly installed](https://bitwarden.com/help/article/cli/#download-and-install)
1. If you did not install bitwarden using brew, please check that path of the installation matches the \`Bitwarden CLI Installation Path\` extension setting
`,actions:_jsx(P.ActionPanel,null,_jsx(P.Action.CopyToClipboard,{title:"Copy Homebrew Installation Command",content:"brew install bitwarden-cli"}),_jsx(P.Action.OpenInBrowser,{url:"https://bitwarden.com/help/article/cli/#download-and-install"}))})}var $s=()=>_jsx(d.Form.Description,{text:""});function Rn(){let{cliPath:e,clientId:t,clientSecret:n}=(0,d.getPreferenceValues)();try{let r=new ve(t,n,e);return _jsx(Ms,{bitwardenApi:r})}catch{return _jsx(kn,null)}}function Ms(e){let{options:t,setOption:n}=Be(),{password:r,regeneratePassword:s,isGenerating:o}=qe(e.bitwardenApi,t);if(je(),!t)return _jsx(d.Detail,{isLoading:!0});let i=Cn(1e3,d.showToast),a=()=>s(),l=p=>{n("passphrase",p==="passphrase")},u=(p,f)=>async y=>{if(Ws(p,y)){i.cancel(),n(p,y);return}f&&i(d.Toast.Style.Failure,f)},h=t?.passphrase?"passphrase":"password";return _jsx(d.Form,{isLoading:o,actions:_jsx(d.ActionPanel,null,!!r&&_jsx(_jsxFragment,null,_jsx(d.Action.CopyToClipboard,{title:"Copy password",icon:d.Icon.Clipboard,content:r,shortcut:{key:"enter",modifiers:["cmd"]}}),_jsx(d.Action.Paste,{title:"Paste password to active app",icon:d.Icon.Text,content:r,shortcut:{key:"enter",modifiers:["cmd","shift"]}})),_jsx(d.Action,{title:"Regenerate password",icon:d.Icon.ArrowClockwise,onAction:a,shortcut:{key:"backspace",modifiers:["cmd"]}}),process.env.NODE_ENV==="development"&&_jsx(d.Action,{title:"Clear storage",icon:d.Icon.Trash,onAction:Us}))},_jsx(d.Form.Description,{title:"\u{1F511}  Password",text:r??"Generating..."}),_jsx($s,null),_jsx(d.Form.Separator,null),_jsx(d.Form.Dropdown,{id:"type",title:"Type",value:h,onChange:l,defaultValue:"password"},Ee(se).map(([p])=>_jsx(d.Form.Dropdown.Item,{key:p,value:p,title:En(p)}))),Ee(se[h]).map(([p,f])=>_jsx(Ks,{key:p,option:p,field:f,currentOptions:t,handleFieldChange:u(p,f.errorMessage)})))}async function Us(){for(let e of Object.values(T))await d.LocalStorage.removeItem(e)}function Ws(e,t){return e==="length"?!isNaN(Number(t))&&Number(t)>=5&&Number(t)<=128:e==="separator"?t.length===1:e==="words"?!isNaN(Number(t))&&Number(t)>=3&&Number(t)<=20:!0}function Ks({option:e,currentOptions:t,handleFieldChange:n,field:r}){let{hint:s="",label:o,type:i}=r;return i==="boolean"?_jsx(d.Form.Checkbox,{key:e,id:e,title:o,label:s,value:Boolean(t?.[e]),onChange:n}):_jsx(d.Form.TextField,{key:e,id:e,title:o,placeholder:s,value:String(t?.[e]??""),onChange:n})}module.exports=Wn(Hs);0&&(module.exports={});
