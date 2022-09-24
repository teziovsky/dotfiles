"use strict";var En=Object.create;var V=Object.defineProperty;var Tn=Object.getOwnPropertyDescriptor;var An=Object.getOwnPropertyNames;var On=Object.getPrototypeOf,Cn=Object.prototype.hasOwnProperty;var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),kn=(e,t)=>{for(var n in t)V(e,n,{get:t[n],enumerable:!0})},Ge=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of An(t))!Cn.call(e,o)&&o!==n&&V(e,o,{get:()=>t[o],enumerable:!(r=Tn(t,o))||r.enumerable});return e};var v=(e,t,n)=>(n=e!=null?En(On(e)):{},Ge(t||!e||!e.__esModule?V(n,"default",{value:e,enumerable:!0}):n,e)),Gn=e=>Ge(V({},"__esModule",{value:!0}),e);var je=S((Qr,$e)=>{$e.exports=Me;Me.sync=Ln;var Ue=require("fs");function Rn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Be(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Rn(t,n)}function Me(e,t,n){Ue.stat(e,function(r,o){n(r,r?!1:Be(o,e,t))})}function Ln(e,t){return Be(Ue.statSync(e),e,t)}});var He=S((Zr,We)=>{We.exports=Ve;Ve.sync=Nn;var De=require("fs");function Ve(e,t,n){De.stat(e,function(r,o){n(r,r?!1:qe(o,t))})}function Nn(e,t){return qe(De.statSync(e),t)}function qe(e,t){return e.isFile()&&Fn(e,t)}function Fn(e,t){var n=e.mode,r=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),c=parseInt("100",8),d=parseInt("010",8),u=parseInt("001",8),m=c|d,l=n&u||n&d&&o===i||n&c&&r===s||n&m&&s===0;return l}});var Xe=S((to,Ke)=>{var eo=require("fs"),H;process.platform==="win32"||global.TESTING_WINDOWS?H=je():H=He();Ke.exports=oe;oe.sync=_n;function oe(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){oe(e,t||{},function(s,i){s?o(s):r(i)})})}H(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function _n(e,t){try{return H.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var tt=S((no,et)=>{var G=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",ze=require("path"),Un=G?";":":",Ye=Xe(),Je=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Qe=(e,t)=>{let n=t.colon||Un,r=e.match(/\//)||G&&e.match(/\\/)?[""]:[...G?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=G?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=G?o.split(n):[""];return G&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:o}},Ze=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:s}=Qe(e,t),i=[],c=u=>new Promise((m,l)=>{if(u===r.length)return t.all&&i.length?m(i):l(Je(e));let f=r[u],w=/^".*"$/.test(f)?f.slice(1,-1):f,x=ze.join(w,e),y=!w&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;m(d(y,u,0))}),d=(u,m,l)=>new Promise((f,w)=>{if(l===o.length)return f(c(m+1));let x=o[l];Ye(u+x,{pathExt:s},(y,I)=>{if(!y&&I)if(t.all)i.push(u+x);else return f(u+x);return f(d(u,m,l+1))})});return n?c(0).then(u=>n(null,u),n):c(0)},Bn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=Qe(e,t),s=[];for(let i=0;i<n.length;i++){let c=n[i],d=/^".*"$/.test(c)?c.slice(1,-1):c,u=ze.join(d,e),m=!d&&/^\.[\\\/]/.test(e)?e.slice(0,2)+u:u;for(let l=0;l<r.length;l++){let f=m+r[l];try{if(Ye.sync(f,{pathExt:o}))if(t.all)s.push(f);else return f}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Je(e)};et.exports=Ze;Ze.sync=Bn});var rt=S((ro,se)=>{"use strict";var nt=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};se.exports=nt;se.exports.default=nt});var at=S((oo,it)=>{"use strict";var ot=require("path"),Mn=tt(),$n=rt();function st(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Mn.sync(e.command,{path:n[$n({env:n})],pathExt:t?ot.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return i&&(i=ot.resolve(o?e.options.cwd:"",i)),i}function jn(e){return st(e)||st(e,!0)}it.exports=jn});var ct=S((so,ae)=>{"use strict";var ie=/([()\][%!^"`<>&|;, *?])/g;function Dn(e){return e=e.replace(ie,"^$1"),e}function Vn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ie,"^$1"),t&&(e=e.replace(ie,"^$1")),e}ae.exports.command=Dn;ae.exports.argument=Vn});var ut=S((io,lt)=>{"use strict";lt.exports=/^#!(.*)/});var ft=S((ao,dt)=>{"use strict";var qn=ut();dt.exports=(e="")=>{let t=e.match(qn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var mt=S((co,pt)=>{"use strict";var ce=require("fs"),Wn=ft();function Hn(e){let n=Buffer.alloc(150),r;try{r=ce.openSync(e,"r"),ce.readSync(r,n,0,150,0),ce.closeSync(r)}catch{}return Wn(n.toString())}pt.exports=Hn});var yt=S((lo,wt)=>{"use strict";var Kn=require("path"),ht=at(),gt=ct(),Xn=mt(),zn=process.platform==="win32",Yn=/\.(?:com|exe)$/i,Jn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Qn(e){e.file=ht(e);let t=e.file&&Xn(e.file);return t?(e.args.unshift(e.file),e.command=t,ht(e)):e.file}function Zn(e){if(!zn)return e;let t=Qn(e),n=!Yn.test(t);if(e.options.forceShell||n){let r=Jn.test(t);e.command=Kn.normalize(e.command),e.command=gt.command(e.command),e.args=e.args.map(s=>gt.argument(s,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function er(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Zn(r)}wt.exports=er});var xt=S((uo,bt)=>{"use strict";var le=process.platform==="win32";function ue(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function tr(e,t){if(!le)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let s=St(o,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function St(e,t){return le&&e===1&&!t.file?ue(t.original,"spawn"):null}function nr(e,t){return le&&e===1&&!t.file?ue(t.original,"spawnSync"):null}bt.exports={hookChildProcess:tr,verifyENOENT:St,verifyENOENTSync:nr,notFoundError:ue}});var vt=S((fo,R)=>{"use strict";var Pt=require("child_process"),de=yt(),fe=xt();function It(e,t,n){let r=de(e,t,n),o=Pt.spawn(r.command,r.args,r.options);return fe.hookChildProcess(o,r),o}function rr(e,t,n){let r=de(e,t,n),o=Pt.spawnSync(r.command,r.args,r.options);return o.error=o.error||fe.verifyENOENTSync(o.status,r),o}R.exports=It;R.exports.spawn=It;R.exports.sync=rr;R.exports._parse=de;R.exports._enoent=fe});var _t=S((Ro,Y)=>{Y.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&Y.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&Y.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var jt=S((Lo,_)=>{var g=global.process,O=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};O(g)?(Ut=require("assert"),N=_t(),Bt=/^win/i.test(g.platform),M=require("events"),typeof M!="function"&&(M=M.EventEmitter),g.__signal_exit_emitter__?b=g.__signal_exit_emitter__:(b=g.__signal_exit_emitter__=new M,b.count=0,b.emitted={}),b.infinite||(b.setMaxListeners(1/0),b.infinite=!0),_.exports=function(e,t){if(!O(global.process))return function(){};Ut.equal(typeof e,"function","a callback must be provided for exit handler"),F===!1&&ye();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){b.removeListener(n,e),b.listeners("exit").length===0&&b.listeners("afterexit").length===0&&J()};return b.on(n,e),r},J=function(){!F||!O(global.process)||(F=!1,N.forEach(function(t){try{g.removeListener(t,Q[t])}catch{}}),g.emit=Z,g.reallyExit=Se,b.count-=1)},_.exports.unload=J,C=function(t,n,r){b.emitted[t]||(b.emitted[t]=!0,b.emit(t,n,r))},Q={},N.forEach(function(e){Q[e]=function(){if(!!O(global.process)){var n=g.listeners(e);n.length===b.count&&(J(),C("exit",null,e),C("afterexit",null,e),Bt&&e==="SIGHUP"&&(e="SIGINT"),g.kill(g.pid,e))}}}),_.exports.signals=function(){return N},F=!1,ye=function(){F||!O(global.process)||(F=!0,b.count+=1,N=N.filter(function(t){try{return g.on(t,Q[t]),!0}catch{return!1}}),g.emit=$t,g.reallyExit=Mt)},_.exports.load=ye,Se=g.reallyExit,Mt=function(t){!O(global.process)||(g.exitCode=t||0,C("exit",g.exitCode,null),C("afterexit",g.exitCode,null),Se.call(g,g.exitCode))},Z=g.emit,$t=function(t,n){if(t==="exit"&&O(global.process)){n!==void 0&&(g.exitCode=n);var r=Z.apply(this,arguments);return C("exit",g.exitCode,null),C("afterexit",g.exitCode,null),r}else return Z.apply(this,arguments)}):_.exports=function(){return function(){}};var Ut,N,Bt,M,b,J,C,Q,F,ye,Se,Mt,Z,$t});var Jt=S((_o,Yt)=>{"use strict";var{PassThrough:Ar}=require("stream");Yt.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let s=new Ar({objectMode:o});n&&s.setEncoding(n);let i=0,c=[];return s.on("data",d=>{c.push(d),o?i=c.length:i+=d.length}),s.getBufferedValue=()=>t?c:r?Buffer.concat(c,i):c.join(""),s.getBufferedLength=()=>i,s}});var Qt=S((Uo,$)=>{"use strict";var{constants:Or}=require("buffer"),Cr=require("stream"),{promisify:kr}=require("util"),Gr=Jt(),Rr=kr(Cr.pipeline),ee=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function be(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=Gr(t);return await new Promise((o,s)=>{let i=c=>{c&&r.getBufferedLength()<=Or.MAX_LENGTH&&(c.bufferedData=r.getBufferedValue()),s(c)};(async()=>{try{await Rr(e,r),o()}catch(c){i(c)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new ee)})}),r.getBufferedValue()}$.exports=be;$.exports.buffer=(e,t)=>be(e,{...t,encoding:"buffer"});$.exports.array=(e,t)=>be(e,{...t,array:!0});$.exports.MaxBufferError=ee});var en=S((Bo,Zt)=>{"use strict";var{PassThrough:Lr}=require("stream");Zt.exports=function(){var e=[],t=new Lr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var zr={};kn(zr,{ItemList:()=>Pn,default:()=>xn});module.exports=Gn(zr);var a=require("@raycast/api"),A=require("react");var q=require("@raycast/api"),re=require("url");Object.typedEntries=function(e){return Object.entries(e)};function Re(e){return"```\n"+e+"\n```"}function W(){let{serverUrl:e}=(0,q.getPreferenceValues)();return e===""||e==="bitwarden.com"||e==="https://bitwarden.com"?"":e}function Le(e){try{return`https://icons.bitwarden.net/${new re.URL(e).hostname}/icon.png`}catch{return q.Icon.Globe}}function Ne(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Fe(e){return Object.entries(e).flatMap(([t,n])=>n?[`--${t}`,n]:[])}function _e(e){let t=[e.name];if(e.card){let{brand:r,number:o}=e.card;if(t.push(r),o!==null){let s=/^3[47]/.test(o);t.push(o.substring(o.length-(s?5:4),o.length))}}if(t.push(e.login?.username),e.login?.uris){for(let r of e.login.uris)if(r.uri!==null)try{t.push(...new re.URL(r.uri).hostname.split("."))}catch{}}return[...new Set(t.filter(r=>!!r))]}var P=require("@raycast/api");var un=require("node:buffer"),dn=v(require("node:path"),1),Te=v(require("node:child_process"),1),j=v(require("node:process"),1),fn=v(vt(),1);function pe(e){let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===n&&(e=e.slice(0,-1)),e}var B=v(require("node:process"),1),L=v(require("node:path"),1),Et=v(require("node:url"),1);function K(e={}){let{env:t=process.env,platform:n=process.platform}=e;return n!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"}function or(e={}){let{cwd:t=B.default.cwd(),path:n=B.default.env[K()],execPath:r=B.default.execPath}=e,o,s=t instanceof URL?Et.default.fileURLToPath(t):t,i=L.default.resolve(s),c=[];for(;o!==i;)c.push(L.default.join(i,"node_modules/.bin")),o=i,i=L.default.resolve(i,"..");return c.push(L.default.resolve(s,r,"..")),[...c,n].join(L.default.delimiter)}function Tt({env:e=B.default.env,...t}={}){e={...e};let n=K({env:e});return t.path=e[n],e[n]=or(t),e}var sr=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;let o=Object.getOwnPropertyDescriptor(e,n),s=Object.getOwnPropertyDescriptor(t,n);!ir(o,s)&&r||Object.defineProperty(e,n,s)},ir=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},ar=(e,t)=>{let n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},cr=(e,t)=>`/* Wrapped ${e}*/
${t}`,lr=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),ur=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),dr=(e,t,n)=>{let r=n===""?"":`with ${n.trim()}() `,o=cr.bind(null,r,t.toString());Object.defineProperty(o,"name",ur),Object.defineProperty(e,"toString",{...lr,value:o})};function me(e,t,{ignoreNonConfigurable:n=!1}={}){let{name:r}=e;for(let o of Reflect.ownKeys(t))sr(e,t,o,n);return ar(e,t),dr(e,t,r),e}var X=new WeakMap,At=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(X.set(s,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return me(s,e),X.set(s,r),s};At.callCount=e=>{if(!X.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return X.get(e)};var Ot=At;var Lt=require("os");var Ct=function(){let e=he-kt+1;return Array.from({length:e},fr)},fr=function(e,t){return{name:`SIGRT${t+1}`,number:kt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},kt=34,he=64;var Rt=require("os");var Gt=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];var ge=function(){let e=Ct();return[...Gt,...e].map(pr)},pr=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:s}){let{signals:{[e]:i}}=Rt.constants,c=i!==void 0;return{name:e,number:c?i:t,description:n,supported:c,action:r,forced:o,standard:s}};var mr=function(){return ge().reduce(hr,{})},hr=function(e,{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:c}){return{...e,[t]:{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:c}}},Nt=mr(),gr=function(){let e=ge(),t=64+1,n=Array.from({length:t},(r,o)=>wr(o,e));return Object.assign({},...n)},wr=function(e,t){let n=yr(e,t);if(n===void 0)return{};let{name:r,description:o,supported:s,action:i,forced:c,standard:d}=n;return{[e]:{name:r,number:e,description:o,supported:s,action:i,forced:c,standard:d}}},yr=function(e,t){let n=t.find(({name:r})=>Lt.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},Ao=gr();var Sr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",we=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:s,command:i,escapedCommand:c,timedOut:d,isCanceled:u,killed:m,parsed:{options:{timeout:l}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let f=o===void 0?void 0:Nt[o].description,w=r&&r.code,y=`Command ${Sr({timedOut:d,timeout:l,errorCode:w,signal:o,signalDescription:f,exitCode:s,isCanceled:u})}: ${i}`,I=Object.prototype.toString.call(r)==="[object Error]",k=I?`${y}
${r.message}`:y,D=[k,t,e].filter(Boolean).join(`
`);return I?(r.originalMessage=r.message,r.message=D):r=new Error(D),r.shortMessage=k,r.command=i,r.escapedCommand=c,r.exitCode=s,r.signal=o,r.signalDescription=f,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(d),r.isCanceled=u,r.killed=m&&!d,r};var z=["stdin","stdout","stderr"],br=e=>z.some(t=>e[t]!==void 0),Ft=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return z.map(r=>e[r]);if(br(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${z.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,z.length);return Array.from({length:n},(r,o)=>t[o])};var Dt=v(require("node:os"),1),Vt=v(jt(),1),xr=1e3*5,qt=(e,t="SIGTERM",n={})=>{let r=e(t);return Pr(e,t,n,r),r},Pr=(e,t,n,r)=>{if(!Ir(t,n,r))return;let o=Er(n),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Ir=(e,{forceKillAfterTimeout:t},n)=>vr(e)&&t!==!1&&n,vr=e=>e===Dt.default.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Er=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return xr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Wt=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Tr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Ht=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,s=new Promise((c,d)=>{o=setTimeout(()=>{Tr(e,n,d)},t)}),i=r.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Kt=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Xt=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=(0,Vt.default)(()=>{e.kill()});return r.finally(()=>{o()})};function zt(e){return e!==null&&typeof e=="object"&&typeof e.pipe=="function"}var Ie=v(Qt(),1),tn=v(en(),1),nn=(e,t)=>{t===void 0||e.stdin===void 0||(zt(t)?t.pipe(e.stdin):e.stdin.end(t))},rn=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=(0,tn.default)();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},xe=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Pe=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?(0,Ie.default)(e,{encoding:t,maxBuffer:r}):Ie.default.buffer(e,{maxBuffer:r})},on=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:s},i)=>{let c=Pe(e,{encoding:r,buffer:o,maxBuffer:s}),d=Pe(t,{encoding:r,buffer:o,maxBuffer:s}),u=Pe(n,{encoding:r,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,c,d,u])}catch(m){return Promise.all([{error:m,signal:m.signal,timedOut:m.timedOut},xe(e,c),xe(t,d),xe(n,u)])}};var Nr=(async()=>{})().constructor.prototype,Fr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Nr,e)]),ve=(e,t)=>{for(let[n,r]of Fr){let o=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:o})}return e},sn=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});var an=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],_r=/^[\w.-]+$/,Ur=/"/g,Br=e=>typeof e!="string"||_r.test(e)?e:`"${e.replace(Ur,'\\"')}"`,cn=(e,t)=>an(e,t).join(" "),ln=(e,t)=>an(e,t).map(n=>Br(n)).join(" ");var Mr=1e3*1e3*100,$r=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let s=t?{...j.default.env,...e}:e;return n?Tt({env:s,cwd:r,execPath:o}):s},jr=(e,t,n={})=>{let r=fn.default._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:Mr,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||j.default.cwd(),execPath:j.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=$r(n),n.stdio=Ft(n),j.default.platform==="win32"&&dn.default.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},Ee=(e,t,n)=>typeof t!="string"&&!un.Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?pe(t):t;function pn(e,t,n){let r=jr(e,t,n),o=cn(e,t),s=ln(e,t);Kt(r.options);let i;try{i=Te.default.spawn(r.file,r.args,r.options)}catch(w){let x=new Te.default.ChildProcess,y=Promise.reject(we({error:w,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return ve(x,y)}let c=sn(i),d=Ht(i,r.options,c),u=Xt(i,r.options,d),m={isCanceled:!1};i.kill=qt.bind(null,i.kill.bind(i)),i.cancel=Wt.bind(null,i,m);let f=Ot(async()=>{let[{error:w,exitCode:x,signal:y,timedOut:I},k,D,vn]=await on(i,r.options,u),Ae=Ee(r.options,k),Oe=Ee(r.options,D),Ce=Ee(r.options,vn);if(w||x!==0||y!==null){let ke=we({error:w,exitCode:x,signal:y,stdout:Ae,stderr:Oe,all:Ce,command:o,escapedCommand:s,parsed:r,timedOut:I,isCanceled:m.isCanceled||(r.options.signal?r.options.signal.aborted:!1),killed:i.killed});if(!r.options.reject)return ke;throw ke}return{command:o,escapedCommand:s,exitCode:0,stdout:Ae,stderr:Oe,all:Ce,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return nn(i,r.options.input),i.all=rn(i,r.options),ve(i,f)}var hn=require("fs"),gn=require("path/posix");var te="sessionToken",mn="https://bitwarden.com";var ne=class{constructor(){let{cliPath:t,clientId:n,clientSecret:r,serverCertsPath:o}=(0,P.getPreferenceValues)(),s=W();if(this.cliPath=t||(process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw"),!(0,hn.existsSync)(this.cliPath))throw new Error(`Bitwarden CLI not found at ${this.cliPath}`);this.env={BITWARDENCLI_APPDATA_DIR:P.environment.supportPath,BW_CLIENTSECRET:r.trim(),BW_CLIENTID:n.trim(),PATH:(0,gn.dirname)(process.execPath)},s&&o&&(this.env.NODE_EXTRA_CA_CERTS=o),this.initPromise=this.checkServerUrl(s)}async checkServerUrl(t){if((await P.LocalStorage.getItem("cliServer")||"")===t)return;let r=await(0,P.showToast)({style:P.Toast.Style.Animated,title:"Switching server...",message:"Bitwarden server preference changed."});try{try{await this.exec(["logout"],{waitForInit:!1})}catch{}await this.exec(["config","server",t||mn],{waitForInit:!1}),await P.LocalStorage.setItem("cliServer",t),r.style=P.Toast.Style.Success,r.title="Success!",r.message="Bitwarden server changed."}catch(o){r.style=P.Toast.Style.Failure,r.title="Unable to switch server.",o instanceof Error?r.message=o.message:r.message="Unknown error occurred."}}async sync(t){await this.exec(["sync","--session",t])}async login(){await this.exec(["login","--apikey"])}async logout(){await this.exec(["logout"])}async listItems(t){let{stdout:n}=await this.exec(["list","items","--session",t]);return JSON.parse(n).filter(o=>!!o.name)}async listFolders(t){let{stdout:n}=await this.exec(["list","folders","--session",t]);return JSON.parse(n)}async getTotp(t,n){let{stdout:r}=await this.exec(["get","totp","--session",n,t]);return r}async unlock(t){let{stdout:n}=await this.exec(["unlock",t,"--raw"]);return n}async lock(){await this.exec(["lock"])}async status(){let{stdout:t}=await this.exec(["status"]);return JSON.parse(t)}async generatePassword(t,n){let r=t?Fe(t):[],{stdout:o}=await this.exec(["generate",...r],{abortController:n});return o}async exec(t,n={}){let{abortController:r,waitForInit:o=!0}=n;return o&&await this.initPromise,pn(this.cliPath,t,{env:this.env,input:"",signal:r?.signal})}};var h=require("@raycast/api"),yn=require("react");var E=require("@raycast/api"),U=require("react");function wn(e){let[t,n]=(0,U.useState)(null);(0,U.useEffect)(()=>{e.status().then(i=>{n(i)})},[]);let r=!!W(),o="...",s="...";if(t){let{status:i,userEmail:c,serverUrl:d}=t;o=i=="unauthenticated"?"Logged out":`Locked (${c})`,d?s=d||"":(!d&&r||d&&!r)&&(0,E.confirmAlert)({icon:E.Icon.ExclamationMark,title:"Restart Required",message:"Bitwarden server URL preference has been changed since the extension was opened.",primaryAction:{title:"Close Extension"},dismissAction:{title:"Close Raycast",style:E.Alert.ActionStyle.Cancel}}).then(u=>{u?(0,E.popToRoot)():(0,E.closeMainWindow)()})}return{userMessage:o,serverMessage:s,shouldShowServer:r}}var T=require("react/jsx-runtime");function Sn(){return(0,h.showToast)(h.Toast.Style.Failure,"Bitwarden CLI not found"),(0,T.jsx)(h.Detail,{markdown:`# The Bitwarden CLI was not found
## Please check that:

1. The Bitwarden CLI is [correctly installed](https://bitwarden.com/help/article/cli/#download-and-install)
1. If you did not install bitwarden using brew, please check that path of the installation matches the \`Bitwarden CLI Installation Path\` extension setting
`,actions:(0,T.jsxs)(h.ActionPanel,{children:[(0,T.jsx)(h.Action.CopyToClipboard,{title:"Copy Homebrew Installation Command",content:"brew install bitwarden-cli"}),(0,T.jsx)(h.Action.OpenInBrowser,{url:"https://bitwarden.com/help/article/cli/#download-and-install"})]})})}function bn(e){let{bitwardenApi:t,onUnlock:n}=e,[r,o]=(0,yn.useState)(!1),{userMessage:s,serverMessage:i,shouldShowServer:c}=wn(t);async function d(u){if(u.password.length==0){(0,h.showToast)(h.Toast.Style.Failure,"Failed to unlock vault.","Missing password.");return}try{o(!0);let m=await(0,h.showToast)(h.Toast.Style.Animated,"Unlocking Vault...","Please wait.");if((await t.status()).status=="unauthenticated")try{await t.login()}catch{(0,h.showToast)(h.Toast.Style.Failure,"Failed to unlock vault.",`Please check your ${c&&"Server URL, "}API Key and Secret.`);return}let f=await t.unlock(u.password);m.hide(),n(f)}catch{(0,h.showToast)(h.Toast.Style.Failure,"Failed to unlock vault.","Invalid credentials."),o(!1)}}return(0,T.jsxs)(h.Form,{actions:(0,T.jsx)(h.ActionPanel,{children:!r&&(0,T.jsx)(h.Action.SubmitForm,{title:"Unlock",onSubmit:d,shortcut:{key:"enter",modifiers:[]}})}),children:[c&&(0,T.jsx)(h.Form.Description,{title:"Server URL",text:i}),(0,T.jsx)(h.Form.Description,{title:"Vault Status",text:s}),(0,T.jsx)(h.Form.PasswordField,{autoFocus:!0,id:"password",title:"Master Password"})]})}var p=require("react/jsx-runtime"),{fetchFavicons:Dr,primaryAction:Vr}=(0,a.getPreferenceValues)();function qr(){let[e,t]=(0,A.useState)({isLoading:!0});return(0,A.useEffect)(()=>{a.LocalStorage.getItem(te).then(n=>t({isLoading:!1,token:n}))},[]),{token:e.token,active:!e.isLoading,setToken:async n=>{await a.LocalStorage.setItem(te,n),t({isLoading:!1,token:n})},deleteToken:async()=>{await a.LocalStorage.removeItem(te),t({isLoading:!1})}}}function xn(){try{let e=new ne;return(0,p.jsx)(Pn,{api:e})}catch{return(0,p.jsx)(Sn,{})}}function Pn(e){let t=e.api,n=qr(),[r,o]=(0,A.useState)({items:[],folders:[],isLocked:!1,isLoading:!0});async function s(l){try{let[f,w]=await Promise.all([t.listFolders(l),t.listItems(l)]);o(x=>({...x,isLoading:!1,items:w,folders:f}))}catch{o(w=>({...w,isLocked:!0}))}}async function i(l){if(n.token){let f=await(0,a.showToast)(a.Toast.Style.Success,"Copying TOTP Code..."),w=await t.getTotp(l,n.token);await a.Clipboard.copy(w),await f.hide(),await(0,a.closeMainWindow)({clearRootSearch:!0})}else(0,a.showToast)(a.Toast.Style.Failure,"Failed to fetch TOTP.")}(0,A.useEffect)(()=>{let l=n.token;!n.active||(l?s(l):o(f=>({...f,isLocked:!0})))},[n.token,n.active]);async function c(){if(n.token){let l=await(0,a.showToast)(a.Toast.Style.Animated,"Syncing Items...");try{await t.sync(n.token),await s(n.token),await l.hide()}catch{await t.logout(),await n.deleteToken(),l.style=a.Toast.Style.Failure,l.message="Failed to sync. Please try logging in again."}}}async function d(){let l=await(0,a.showToast)({title:"Locking Vault...",style:a.Toast.Style.Animated});await t.lock(),await n.deleteToken(),await l.hide()}async function u(){let l=await(0,a.showToast)({title:"Logging Out...",style:a.Toast.Style.Animated});await t.logout(),await n.deleteToken(),await l.hide()}if(r.isLocked)return(0,p.jsx)(bn,{bitwardenApi:t,onUnlock:async l=>{await n.setToken(l),o(f=>({...f,isLocked:!1}))}});let m=r.items.length==0;return(0,p.jsxs)(a.List,{isLoading:r.isLoading,children:[r.items.sort((l,f)=>l.favorite&&f.favorite?0:l.favorite?-1:1).map(l=>{let f=r.folders.find(w=>w.id===l.folderId);return(0,p.jsx)(Hr,{item:l,folder:f,lockVault:d,logoutVault:u,syncItems:c,copyTotp:i},l.id)}),r.isLoading?(0,p.jsx)(a.List.EmptyView,{icon:a.Icon.ArrowClockwise,title:"Loading...",description:"Please wait."}):(0,p.jsx)(a.List.EmptyView,{icon:{source:"bitwarden-64.png"},title:m?"Vault empty.":"No matching items found.",description:m?"Hit the sync button to sync your vault or try logging in again.":"Hit the sync button to sync your vault.",actions:!r.isLoading&&(0,p.jsx)(a.ActionPanel,{children:(0,p.jsx)(In,{syncItems:c,lockVault:d,logoutVault:u})})})]})}function Wr(e){let t=e.login?.uris?.[0]?.uri;return Dr&&t?Le(t):{1:a.Icon.Globe,2:a.Icon.BlankDocument,3:a.Icon.List,4:a.Icon.Person}[e.type]}function Hr(e){let{item:t,folder:n,syncItems:r,lockVault:o,logoutVault:s,copyTotp:i}=e,{notes:c,identity:d,login:u,fields:m,card:l}=t,f=(0,A.useMemo)(()=>_e(t),[t]),w=Object.fromEntries(m?.map(y=>[y.name,y.value])||[]),x=Object.fromEntries(u?.uris?.filter(y=>y.uri).map((y,I)=>[`uri${I+1}`,y.uri])||[]);return(0,p.jsx)(a.List.Item,{id:t.id,title:t.name,keywords:f,accessories:Kr(t,n),icon:Wr(t),subtitle:t.login?.username||void 0,actions:(0,p.jsxs)(a.ActionPanel,{children:[u?(0,p.jsxs)(a.ActionPanel.Section,{children:[u.password?(0,p.jsx)(Xr,{password:u.password}):null,u.totp?(0,p.jsx)(a.Action,{shortcut:{modifiers:["cmd"],key:"t"},title:"Copy TOTP",icon:a.Icon.Clipboard,onAction:async()=>{await i(t.id)}}):null,u.username?(0,p.jsx)(a.Action.CopyToClipboard,{title:"Copy Username",content:u.username,icon:a.Icon.Person,shortcut:{modifiers:["cmd"],key:"u"}}):null]}):null,(0,p.jsx)(a.ActionPanel.Section,{children:c?(0,p.jsx)(a.Action.Push,{title:"Show Secure Note",icon:a.Icon.BlankDocument,target:(0,p.jsx)(a.Detail,{markdown:Re(c),actions:(0,p.jsx)(a.ActionPanel,{children:(0,p.jsx)(a.Action.CopyToClipboard,{title:"Copy Secure Notes",content:c})})})}):null}),(0,p.jsx)(a.ActionPanel.Section,{children:Object.entries({notes:c,...l,...d,...w,...x}).map(([y,I],k)=>I?(0,p.jsx)(a.Action.CopyToClipboard,{title:`Copy ${Ne(y)}`,content:I},k):null)}),(0,p.jsx)(a.ActionPanel.Section,{children:(0,p.jsx)(In,{syncItems:r,lockVault:o,logoutVault:s})})]})})}function Kr(e,t){let n=[];return t?.id&&n.push({icon:{source:a.Icon.Folder,tintColor:a.Color.SecondaryText},tooltip:"Folder",text:t.name}),e.favorite&&n.push({icon:{source:a.Icon.Star,tintColor:a.Color.Yellow},tooltip:"Favorite"}),n}function Xr(e){let t=(0,p.jsx)(a.Action.CopyToClipboard,{title:"Copy Password",content:e.password},"copy"),n=(0,p.jsx)(a.Action.Paste,{title:"Paste Password",content:e.password},"paste");return(0,p.jsx)(A.Fragment,{children:Vr=="copy"?[t,n]:[n,t]})}function In(e){return(0,p.jsxs)(A.Fragment,{children:[(0,p.jsx)(a.Action,{title:"Sync Vault",shortcut:{modifiers:["cmd"],key:"r"},icon:a.Icon.ArrowClockwise,onAction:e.syncItems}),(0,p.jsx)(a.Action,{icon:{source:"sf_symbols_lock.svg",tintColor:a.Color.PrimaryText},title:"Lock Vault",shortcut:{modifiers:["cmd","shift"],key:"l"},onAction:e.lockVault}),(0,p.jsx)(a.Action,{title:"Logout",icon:a.Icon.XMarkCircle,onAction:e.logoutVault})]})}0&&(module.exports={ItemList});
