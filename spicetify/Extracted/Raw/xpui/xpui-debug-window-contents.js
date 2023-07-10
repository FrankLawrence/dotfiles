"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5320],{40215:(e,n,s)=>{s.d(n,{DebugWindowContents:()=>Zn});var t=s(59496),l=s(96267),r=s(13611),a=s(47045),i=s(87857),o=s(89161),c=s(68246),d=s(41379);const u=(0,c.v)();window.abba={get:async function(e,n){const s=new o.hH((0,d.G)()),t=(await s.getValues(o.hr.fromPartial({}))).pairs;let l={},r="";if(t.abbaOverrides?r=t.abbaOverrides:t.abbaoverrides&&(r=t.abbaoverrides),r)try{l=JSON.parse(r)}catch(e){console.error(`error parsing value=${r}, error=${e}`)}if(Object.prototype.hasOwnProperty.call(l,e))return console.warn(`Abba: Override for ${e} : ${l[e]}`),void setTimeout((()=>n(null,l[e])),0);u.post("sp://abba/v1/flags",{flags:[e]}).then((s=>{const{flags:t=[]}=s,l=t[0]&&t[0].featureName===e&&t[0].cell;n(null,l||null)})).catch((e=>{n(e)}))},getAll:function(e){console.warn("Abba:getAll should only be used by TA tests for logging purposes."),u.get("sp://abba/v1/all_flags").then((n=>{const{flags:s=[]}=n,t=s.reduce(((e,n)=>(e[n.featureName]=n.cell,e)),{});e(null,JSON.stringify(t,null,2))})).catch((n=>{e(n)}))},getRequestedFlagNames:function(e){u.get("sp://abba/v1/requested_flag_names").then((n=>{e(null,JSON.stringify(n.sort(),null,2))})).catch((n=>{e(n)}))}};var h=s(92548);const x="rh7v8PDNC0ke2OkkyRhk",j="L6pjHHt_x4tfksfQ4Pem",v="H0jIvFjLqNoS1jwvMR82",m="UZcGKrwobJ2tS5Ka06pD";var p=s(4637);const g=()=>{const[e,n]=(0,t.useState)(60),[s,l]=(0,t.useState)("stream"),[r,a]=(0,t.useState)("");return(0,p.jsxs)("div",{className:x,children:[(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)("p",{children:"Stream time (in seconds)"}),(0,p.jsx)("input",{className:v,type:"text",value:e,onChange:e=>{const s=e.target.value;n(parseInt(s,10))}}),(0,p.jsx)("button",{className:m,onClick:()=>{h.N.increaseStreamTime(e)},children:"Add time"}),(0,p.jsx)("button",{className:m,onClick:()=>{h.N.increaseStreamTime(1200)},children:"Add 20 minutes"})]}),(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)("p",{children:"Override Country"}),(0,p.jsxs)("select",{value:r,onBlur:()=>{},onChange:e=>{a(e.target.value)},children:[(0,p.jsx)("option",{value:"US",children:"USA"}),(0,p.jsx)("option",{value:"UK",children:"United Kingdom"}),(0,p.jsx)("option",{value:"JP",children:"Japan"}),(0,p.jsx)("option",{value:"BR",children:"Brasil"}),(0,p.jsx)("option",{value:"AU",children:"Australia"}),(0,p.jsx)("option",{value:"SE",children:"Sweden"}),(0,p.jsx)("option",{value:"",children:"Clear Override"})]}),(0,p.jsx)("button",{className:m,onClick:()=>{h.N.overrideCountry(r)},children:"Override"})]}),(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)("p",{children:"Clear ad in slot"}),(0,p.jsxs)("select",{value:s,onBlur:()=>{},onChange:e=>{l(e.target.value)},children:[(0,p.jsx)("option",{value:"stream",children:"STREAM"}),(0,p.jsx)("option",{value:"billboard",children:"BILLBOARD OVERLAY"}),(0,p.jsx)("option",{value:"promotedsong",children:"PROMOTED SONG"}),(0,p.jsx)("option",{value:"hpto",children:"HPTO"}),(0,p.jsx)("option",{value:"leaderboard",children:"LEADERBOARD"})]}),(0,p.jsx)("button",{className:m,onClick:()=>{h.N.clearSlot(s)},children:"Clear slot"}),(0,p.jsx)("p",{children:"Trigger ad in slot"}),(0,p.jsxs)("select",{value:s,onBlur:()=>{},onChange:e=>{l(e.target.value)},children:[(0,p.jsx)("option",{value:"stream",children:"STREAM"}),(0,p.jsx)("option",{value:"billboard",children:"BILLBOARD OVERLAY"}),(0,p.jsx)("option",{value:"promotedsong",children:"PROMOTED SONG"}),(0,p.jsx)("option",{value:"hpto",children:"HPTO"}),(0,p.jsx)("option",{value:"leaderboard",children:"LEADERBOARD"})]}),(0,p.jsx)("button",{className:m,onClick:()=>{h.N.triggerSlot(s)},children:"Trigger slot"})]}),(0,p.jsx)("button",{className:m,onClick:()=>{h.N.queueVideoAd()},children:"Queue Video Ad"})]})};var f=s(99766),b=s(73455),y=s(96093),S=s(10437);const N="scaF2wOGtuiU5UBKJrGa",C="PjVBb0nlrIUasTrrFgCx",w="MjtdwpkzFFhhmzeyzOy2",O="uVClWczmJLRR5jfAENGP",k=[{label:"Production",value:"prod"},{label:"Development",value:"dev"}],A=()=>{const e=(0,f.I0)(),n=(0,f.v9)((e=>e.inAppMessaging.env)),s=(0,f.v9)((e=>e.inAppMessaging.message)),[l,r]=(0,t.useState)(""),[a,i]=(0,t.useState)(""),[o,c]=(0,t.useState)(!1);(0,t.useEffect)((()=>{s&&o&&c(!1)}),[s,o]);const d=!s&&o;return(0,p.jsx)("div",{className:N,children:(0,p.jsxs)("div",{className:C,children:[(0,p.jsx)("div",{children:(0,p.jsx)("label",{htmlFor:"desktop.settings.inAppMessagingEnv",children:"Mode (endpoint):"})}),(0,p.jsx)(y.v,{dir:"auto",value:n,id:"desktop.settings.inAppMessagingEnv",onSelect:function(n){"prod"!==n&&"dev"!==n||e((0,S.q1)(n))},children:k.map((({label:e,value:n})=>(0,p.jsx)("option",{value:n,children:e},n)))}),(0,p.jsx)("div",{children:(0,p.jsx)("label",{htmlFor:"desktop.settings.inAppMessagingCreativeId",children:"Creative Id:"})}),(0,p.jsx)("div",{children:(0,p.jsx)("input",{className:w,placeholder:"(eg. 12123434)",id:"desktop.settings.inAppMessagingCreativeId",name:"Creative Id",type:"text",value:l,onChange:function(e){r(e.target.value),c(!1)}})}),(0,p.jsx)("div",{children:(0,p.jsx)("label",{htmlFor:"desktop.settings.inAppMessagingAppUri",children:"URI for Dynamic Content (optional):"})}),(0,p.jsx)("div",{children:(0,p.jsx)("input",{className:w,placeholder:"(eg. spotify:artist:123)",id:"desktop.settings.inAppMessagingAppUri",name:"App Uri",type:"text",value:a,onChange:function(e){i(e.target.value),c(!1)}})}),(0,p.jsx)("div",{}),(0,p.jsx)("div",{}),(0,p.jsx)("div",{children:(0,p.jsx)(b.D,{colorSet:"invertedLight",onClick:function(n){n.preventDefault(),e((0,S.XJ)(l,a)),c(!1),window.setTimeout((()=>{c(!0)}),1e3)},children:"Get Preview"})}),d&&(0,p.jsx)("div",{className:O,children:"No Messsage found"})]})})};var I=s(72360),R=s(12923),D=s(87311),E=s(30361);var P=s(67630),L=s(83011),T=s(88162),B=s(75671),J=s(13411),F=s(42333),U=s(17147),M=s(38579);const _={panel:"mHtMWLOMN_lZh6Eq1lBe",rowHeader:"Mv_L7HxaPDmHZbvP_wpu",rowName:"Ryr6R2suLwNRYud_tuXs",rowValue:"CB4s_xlu5db24RNOdk9e",rowActions:"rXwi6WM3vPDuyj9fQLw_",rowAction:"rqhyBEi1217s5l9KD42B",rowControl:"iBTuFGgSiKloKOSxiMWs"},G=({name:e,value:n})=>(0,p.jsxs)(L.S,{hover:!0,children:[(0,p.jsx)(T.p,{className:_.rowName,highlight:!0,children:e}),(0,p.jsx)(T.p,{className:_.rowValue,truncate:!0,align:"right",children:n}),(0,p.jsx)(T.p,{className:_.rowActions,children:(0,p.jsx)("button",{className:_.rowAction,onClick:()=>{void 0!==n&&(0,M.v)(n)},children:(0,p.jsx)(B.c,{iconSize:16})})})]}),V=()=>{const e=(0,U.p)(),n=e.token?.accessToken??"Not authorized",s=new Date(e.token?.accessTokenExpirationTimestampMs??0);return(0,p.jsx)("div",{className:_.panel,children:(0,p.jsx)(J.x,{children:(0,p.jsxs)(F.i,{children:[(0,p.jsxs)("colgroup",{children:[(0,p.jsx)("col",{width:"30%"}),(0,p.jsx)("col",{}),(0,p.jsx)("col",{width:"16px"})]}),(0,p.jsxs)("tbody",{children:[(0,p.jsx)(G,{name:"Token",value:n}),(0,p.jsx)(G,{name:"Expires At",value:s.toLocaleString()}),(0,p.jsx)(G,{name:"Retry Attempt",value:e.retryAttempt?.toString()??"N/A"}),(0,p.jsx)(G,{name:"Retry At",value:e.retryAt?.toLocaleString()??"N/A"})]})]})})})};var H=s(72567);const K="WT_NZ6JEU_dK03UPUjQm",z="qiIwEYs34R1jRXwb_sZ8",q="x_Ve8I65cAL4jZHbutKP",W="y_1aE6JElOnrFrvmgpUO",$="rOqbwjYwx0AIWTfoYOQe",Q="w0xpmm3i0WhHooXZt9xC",Z=({name:e,value:n})=>(0,p.jsxs)(L.S,{hover:!0,children:[(0,p.jsx)(T.p,{className:z,highlight:!0,children:e}),(0,p.jsx)(T.p,{className:q,truncate:!0,align:"right",children:n}),(0,p.jsx)(T.p,{className:W,children:(0,p.jsx)("button",{className:$,onClick:()=>{void 0!==n&&(0,M.v)(n)},children:(0,p.jsx)(B.c,{iconSize:16})})})]}),Y=({device:e})=>(0,p.jsxs)(J.x,{children:[(0,p.jsx)("h3",{className:Q,children:e.name}),(0,p.jsxs)(F.i,{children:[(0,p.jsxs)("colgroup",{children:[(0,p.jsx)("col",{width:"30%"}),(0,p.jsx)("col",{}),(0,p.jsx)("col",{width:"16px"})]}),(0,p.jsxs)("tbody",{children:[(0,p.jsx)(Z,{name:"Device",value:e?.name}),(0,p.jsx)(Z,{name:"Identifier",value:e.id}),(0,p.jsx)(Z,{name:"Type",value:e.type}),(0,p.jsx)(Z,{name:"Group",value:e.isGroup.toString()}),(0,p.jsx)(Z,{name:"Local",value:e.isLocal.toString()}),(0,p.jsx)(Z,{name:"Active",value:e.isActive.toString()}),(0,p.jsx)(Z,{name:"Connecting",value:e.isConnecting.toString()}),(0,p.jsx)(Z,{name:"Disabled",value:e.isDisabled.toString()}),(0,p.jsx)(Z,{name:"Volume",value:e.volume.toString()}),(0,p.jsx)(Z,{name:"HiFi",value:e.hifiSupport.deviceSupported.toString()})]})]})]}),X=()=>{const e=(0,H.O)(),n=e.devices;return(0,p.jsxs)("div",{className:K,children:[(0,p.jsx)(J.x,{children:(0,p.jsxs)(F.i,{children:[(0,p.jsxs)("colgroup",{children:[(0,p.jsx)("col",{width:"30%"}),(0,p.jsx)("col",{}),(0,p.jsx)("col",{width:"16px"})]}),(0,p.jsx)("tbody",{children:(0,p.jsx)(Z,{name:"Status",value:e.connectionStatus})})]})}),n.map((e=>(0,p.jsx)(Y,{device:e},e.id)))]})};var ee=s(43777),ne=s(75380),se=s(89709),te=s(998),le=s(78727),re=s(90048),ae=s(27449),ie=s(65473),oe=s(4900),ce=s(50777),de=s(61025),ue=s(67549),he=s(24140),xe=s(42392),je=s(24554),ve=s(81902),me=s(81905),pe=s(51471),ge=s(12227),fe=s(10413),be=s(83997),ye=s(5519);const Se="gbcTqus4yhTHlzm2IETQ",Ne="QoWcMe7qZMDKemQfS8Qu",Ce="ZeUVhdgF8ZRjvUCTdmLr",we="mJkwncrS8jYg4iIg1f7y";const Oe=[se.nW,ee.Ul,ne.M$,te.gw,re._X,ie.No,oe.KW,ce.Yx,ue.XV,he.KQ,be.R3,ye.Dx,de.HB,ae.BK,o.hH,xe.Pn,le.jd,fe.ev,je.DesktopPlatformClient],ke="debug-esperanto-requests";const Ae=()=>{const[e]=(0,t.useState)((()=>{const e=(0,d.G)();return Oe.reduce(((n,s)=>(n[s.SERVICE_ID]={calls:s.DECODERS,client:new s(e)},n)),{})})),n=Object.keys(e),[s,l]=(0,t.useState)(n[0]),r=e[s].calls,a=Object.keys(r),[i,o]=(0,t.useState)(a[0]),[c,u]=(0,t.useState)(null),[h,x]=(0,t.useState)(""),[j,v]=(0,t.useState)(""),m=(0,D.um)(),g=(0,t.useCallback)(((n,s)=>{const t=n??Object.keys(e)[0],r=e[t].calls,a=s??Object.keys(r)[0];l(t),o(a);const i=function(e,n,s){const t=e.getItem(ke);if("string"!=typeof t)return null;const l=JSON.parse(t);return l[n]?.[s]??null}(m,t,a);x(null!==i?i:JSON.stringify(r[a].request(new Uint8Array),((e,n)=>void 0===n?null:n),2))}),[m,e]);return(0,t.useEffect)((()=>{g()}),[g]),(0,t.useEffect)((()=>{!function(e,n,s,t){const l=e.getItem(ke),r="string"==typeof l?JSON.parse(l):{};Object.hasOwn(r,n)||(r[n]={}),r[n][s]=t,e.setItem(ke,JSON.stringify(r))}(m,s,i,h)}),[m,s,i,h]),(0,p.jsxs)("div",{className:Se,children:[(0,p.jsxs)("div",{className:Ne,children:[(0,p.jsx)(ve.D,{as:"p",variant:"ballad",children:"Endpoint"}),(0,p.jsx)(me.i,{id:"service-dropdown",value:s,onChange:e=>{g(e.currentTarget.value)},children:n.map((e=>(0,p.jsx)("option",{value:e,children:e},e)))}),(0,p.jsx)(me.i,{id:"call-dropdown",value:i,onChange:e=>{g(s,e.currentTarget.value)},children:a.map((e=>(0,p.jsx)("option",{value:e,children:e},e)))})]}),(0,p.jsxs)("div",{className:Ce,children:[(0,p.jsx)(ve.D,{as:"p",variant:"ballad",children:"Request"}),(0,p.jsx)(pe.P,{buttonSize:"sm",onClick:()=>{try{const e=JSON.parse(h,((e,n)=>null===n?void 0:n)),n=JSON.stringify(e,((e,n)=>void 0===n?null:n),2);x(`${n}\n`)}catch(e){}},children:"Prettify"}),(0,p.jsx)(pe.P,{buttonSize:"sm",onClick:async()=>{if(c)return c.cancel(),void u(null);const n=e[s].client;var t;const l=n[(t=i).charAt(0).toLowerCase()+t.slice(1)];if(1===l.length){const e=await l.call(n,JSON.parse(h,((e,n)=>null===n?void 0:n)));v(JSON.stringify(e,void 0,2))}else 2===l.length&&u(l.call(n,JSON.parse(h,((e,n)=>null===n?void 0:n)),(e=>{v(JSON.stringify(e,void 0,2))})))},children:null!==c?"Cancel":"Send"}),(0,p.jsx)(ge.B,{value:h,onChange:e=>{x(e.currentTarget.value)}})]}),(0,p.jsxs)("div",{className:we,children:[(0,p.jsx)(ve.D,{as:"p",variant:"ballad",children:"Response"}),(0,p.jsx)(ge.B,{value:j,readOnly:!0})]})]})};var Ie=s(86831),Re=s(31052),De=s(25345);var Ee=s(12172),Pe=s(19192);var Le=s(77736),Te=s(21558),Be=s(93201),Je=s(1254);const Fe="bFE0oGWgZ40KJHjcBj12",Ue="nAeIvCNG4jVwkKxAEqwm",Me="KG4I4Zh3DDzaN0XwzddI",_e="tiUNZpj0HxFf5EOWSiCA",Ge="eymcN9Ndbrbe5jR7URP_",Ve="nzbIAA5MqUSD0hIKUuHg",He="hksYFxAm48XqAEbpcukQ",Ke="UnO1u4VJB0B6pTtqWh1n",ze="xlSWVFMQmYmRK34yiPOA",qe="oKgZ0g8at59jN8nf8Bee",We="Nodut0kqaRIc93iGqbbP",$e="dUIum8rPR6Msq9wot5ky",Qe="QHO5pYBkfWBn6qyAh9dp";const Ze=({size:e,ranges:n})=>{if(0===n.length)return(0,p.jsx)("div",{className:He,children:(0,p.jsx)("div",{className:Ke})});const s=`linear-gradient(90deg, ${n.map((n=>{const s=100*n.fromByte/e,t=100*n.toByte/e;return`transparent ${s}%, ${Ie.pCU} ${s}%, ${Ie.pCU} ${t}%, transparent ${t}%`})).join(", ")})`;return(0,p.jsx)("div",{className:He,children:(0,p.jsx)("div",{className:Ke,style:{background:s}})})},Ye=({item:e,file:n})=>{const s=(0,Le.g)(),t=(function(e){let n,s,t=0;if(0===e.length)return t;for(n=0;n<e.length;n++)s=e.charCodeAt(n),t=(t<<5)-t+s,t|=0;return t}(`${n.format}${n.bitrate}`)+180)%360;return(0,p.jsxs)(L.S,{hover:!0,children:[(0,p.jsx)(T.p,{className:Ue,highlight:!0,children:(0,p.jsxs)("div",{className:ze,style:{background:`linear-gradient(180deg, hsl(${t}, 60%, 30%), hsl(${t}, 40%, 70%))`},children:[(0,p.jsx)("span",{className:qe,children:n.format}),(0,p.jsx)("span",{className:We,children:Xe(n.bitrate,1e3,"k")})]})}),(0,p.jsx)(T.p,{className:Me,truncate:!0,children:(0,p.jsxs)("div",{className:Ve,children:[n.fileId,(0,p.jsx)(Ze,{size:n.byteSize,ranges:n.byteRanges})]})}),(0,p.jsxs)(T.p,{className:_e,children:[(0,p.jsx)("button",{className:Ge,onClick:()=>{s.play({uri:"spotify:internal:fileplayback",pages:[{items:[{...e,provider:"context",metadata:{"media.manifest":JSON.stringify({id:n.fileId,bitrate:n.bitrate,format:n.formatEnum,encryption:"aes"})}}]}]},{referrerIdentifier:"PlayerStub_UnknownReferrer",featureIdentifier:"debug"})},children:(0,p.jsx)(Re.J,{iconSize:16})}),(0,p.jsx)("button",{className:Ge,onClick:()=>{(0,M.v)(n.fileId)},children:(0,p.jsx)(B.c,{iconSize:16})})]})]})};function Xe(e=void 0,n=1,s=""){if(void 0!==e&&-1!==e)return"string"==typeof e&&(e=Number.parseInt(e,10)),`${(e/n).toLocaleString("en",{maximumFractionDigits:10})}${s}`}function en(e=void 0){return!0===e?"Yes":"No"}function nn(e=void 0){if(void 0!==e)return(0,Be.m)(parseInt(e,10))}const sn=({name:e,value:n})=>(0,p.jsxs)(L.S,{hover:!0,children:[(0,p.jsx)(T.p,{className:Ue,highlight:!0,children:e}),(0,p.jsx)(T.p,{className:Me,truncate:!0,align:"right",children:n}),(0,p.jsx)(T.p,{className:_e,children:(0,p.jsx)("button",{className:Ge,onClick:()=>{void 0!==n&&(0,M.v)(n)},children:(0,p.jsx)(B.c,{iconSize:16})})})]}),tn=()=>{const e=(0,Te.Y)((e=>e?.item??null)),n=function(){const[e,n]=(0,t.useState)(null),s=(0,De.f)();return(0,t.useEffect)((()=>{let e=!0;return s.getPlaybackInfo().then((s=>{e&&n(s)})),()=>{e=!1}}),[s]),(0,Pe._)(Ee.r.INFO,(({data:e})=>{n(e)})),e}(),s=function(e=null,n=null){const[s,l]=(0,t.useState)(null),r=(0,De.f)();return(0,t.useEffect)((()=>{let s=!0,t=null;if(null===e)l(null);else{const a=async()=>{const n=await r.getFiles(e);s&&l(n)};a(),null!==n&&(t=window.setInterval(a,n))}return()=>{s=!1,null!==t&&window.clearInterval(t)}}),[r,e,n]),s}(e?.uri,500),l=(0,Le.g)();return null===e?(0,p.jsx)("div",{className:Fe,children:"Nothing is currently playing."}):(0,p.jsxs)("div",{className:Fe,children:[(0,p.jsxs)("div",{className:$e,children:[(0,p.jsx)(ve.D,{variant:"violaBold",children:"Forced shuffle"}),(0,p.jsx)(Je.Z,{id:"forced-shuffe",value:l.getForcedShuffle(),onSelected:e=>{l.setForcedShuffle(e)}})]}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{className:Qe,onClick:()=>{l.play({uri:"invalid_context_uri"},{referrerIdentifier:"PlayerStub_UnknownReferrer",featureIdentifier:"debug"})},children:(0,p.jsx)("span",{children:"Clear context"})})}),(0,p.jsx)(J.x,{children:(0,p.jsxs)(F.i,{children:[(0,p.jsxs)("colgroup",{children:[(0,p.jsx)("col",{width:"30%"}),(0,p.jsx)("col",{}),(0,p.jsx)("col",{width:"16px"})]}),(0,p.jsxs)("tbody",{children:[(0,p.jsx)(sn,{name:"url"===n?.fileType?"URL":"File ID",value:n?.fileId}),(0,p.jsx)(sn,{name:"Type",value:n?.fileType}),(0,p.jsx)(sn,{name:"url"===n?.fileType?"URL":"File ID",value:n?.fileId}),(0,p.jsx)(sn,{name:"Codec",value:n?.codecName}),(0,p.jsx)(sn,{name:"Bitrate",value:Xe(n?.fileBitrate,1e3,"k")}),(0,p.jsx)(sn,{name:"Strategy",value:n?.strategy}),(0,p.jsx)(sn,{name:"Target Bitrate",value:Xe(n?.targetBitrate,1e3,"k")}),(0,p.jsx)(sn,{name:"Advisted Bitrate",value:Xe(n?.advisedBitrate,1e3,"k")}),(0,p.jsx)(sn,{name:"Target File Available",value:en(n?.targetFileAvailable)}),(0,p.jsx)(sn,{name:"Duration (hh:mm)",value:nn(n?.lengthMs)}),(0,p.jsx)(sn,{name:"Duration (ms)",value:Xe(n?.lengthMs,1," ms")}),(0,p.jsx)(sn,{name:"Speed",value:Xe(n?.playbackSpeed)}),(0,p.jsx)(sn,{name:"Gain Adjustment",value:Xe(n?.gainAdjustment)}),(0,p.jsx)(sn,{name:"Loudness",value:n?.hasLoudness?Xe(n?.loudness):void 0})]})]})}),(0,p.jsx)(J.x,{children:(0,p.jsxs)(F.i,{children:[(0,p.jsxs)("colgroup",{children:[(0,p.jsx)("col",{width:"72px"}),(0,p.jsx)("col",{}),(0,p.jsx)("col",{width:"32px"})]}),(0,p.jsx)("tbody",{children:s?.map((n=>(0,p.jsx)(Ye,{item:e,file:n},n.fileId)))})]})})]})};var ln=s(84875),rn=s.n(ln),an=s(85830),on=s(21122),cn=s(12547),dn=s(32899),un=s(8021),hn=s(22425),xn=s(62142),jn=s(52535),vn=s(47480),mn=s(9864);const pn="HnpguQ3rtX44hdThdwy9",gn="oJJkROlUPmT5lEqzx1cZ",fn="dQkRirl4qynBunRI_kR2",bn="RqhApI3LSHoimdyl53SQ",yn="y1gsL5scUuLOArVrFYRl",Sn="Ni7focuLC626smvmOnLP",Nn="W5wjtyjHTJPGX5j7_WOp",Cn=({property:e,value:n,onOverride:s,isOverridden:t})=>{if("int"===e.type||"internal"===e.type)throw Error("Invalid property type for dropdown!");const l="bool"===e.type?["true","false"]:e.values;return(0,p.jsx)(me.i,{id:`${e.name}-dropdown`,value:(n??e.default).toString(),onChange:n=>{var t;s(e.name,(t=n.currentTarget.value,"bool"===e.type?"true"===t:t))},className:rn()({[Nn]:t}),children:l.map((e=>(0,p.jsx)("option",{value:e,children:e},e)))})},wn=({property:e,value:n,onOverride:s,isOverridden:l})=>{if("int"!==e.type)throw Error("Invalid property type for dropdown!");const[r,a]=(0,t.useState)(n??e.default),i=(0,an.y1)((n=>{s(e.name,n)}),500);return(0,p.jsx)(on.y,{type:"number",min:e.lower,max:e.upper,value:r,onChange:e=>{a(e.currentTarget.value),i(Number.parseInt(e.currentTarget.value,10))},className:rn()({[Nn]:l})})},On=({property:e,localValue:n,remoteValue:s,onOverride:t,filter:l})=>{const r=n!==s;return(0,p.jsxs)(L.S,{hover:!0,children:[(0,p.jsx)(T.p,{className:fn,title:e.name,highlight:!0,children:l?(0,p.jsx)(vn.o,{searchWords:[l??""],textToHighlight:e.name}):e.name}),(0,p.jsx)(T.p,{className:bn,children:e.default.toString()}),(0,p.jsx)(T.p,{className:bn,children:s?.toString()??null}),(0,p.jsx)(T.p,{className:bn,children:"bool"===e.type||"enum"===e.type?(0,p.jsx)(Cn,{property:e,value:n,onOverride:t,isOverridden:r}):"int"===e.type?(0,p.jsx)(wn,{property:e,value:n,onOverride:t,isOverridden:r}):null})]})},kn="debugPanelRemoteConfigLastChangedAtByPropertyName",An=({properties:e,localConfiguration:n,remoteConfiguration:s,setOverrides:l,clearOverrides:r})=>{const{filter:a}=(0,t.useContext)(mn.fo),i=(0,D.um)(),o=()=>{const e=i.getItem(kn);return e instanceof hn.d||e instanceof xn.y?{}:e},c=(e,n)=>{l(dn.VK.fromJSON({[e]:n})),i.setItem(kn,{...o(),[e]:Date.now()})},d=(0,t.useRef)(o()),u=e.sort(((e,n)=>(d.current[n.name]??0)-(d.current[e.name]??0)||e.name.localeCompare(n.name)));return(0,p.jsxs)("div",{className:yn,children:[(0,p.jsxs)("div",{className:Sn,children:[(0,p.jsx)(pe.P,{buttonSize:"sm",onClick:()=>{r(),i.clearItem(kn)},children:"Clear local overrides"}),(0,p.jsx)(jn.K,{placeholder:"Find",alwaysExpanded:!0})]}),(0,p.jsx)(J.x,{children:(0,p.jsxs)(F.i,{children:[(0,p.jsxs)("colgroup",{children:[(0,p.jsx)("col",{width:"30%"}),(0,p.jsx)("col",{}),(0,p.jsx)("col",{})]}),(0,p.jsxs)("tbody",{children:[(0,p.jsxs)(L.S,{children:[(0,p.jsx)(cn.x,{className:gn,children:"Name"}),(0,p.jsx)(cn.x,{className:gn,children:"Default"}),(0,p.jsx)(cn.x,{className:gn,children:"Remote"}),(0,p.jsx)(cn.x,{className:gn,children:"Local"})]}),u.filter((e=>-1!==e.name.toLowerCase().indexOf(a.toLowerCase()))).map((e=>(0,p.jsx)(On,{property:e,localValue:n.getValue(e.name),remoteValue:s.getValue(e.name),onOverride:c,filter:a},e.name)))]})]})})]})},In=()=>{const e=[...(0,dn.y6)()],{localConfiguration:n,remoteConfiguration:s,setOverrides:t,clearOverrides:l}=(0,un.j)();return(0,p.jsx)("div",{className:pn,children:(0,p.jsx)(mn.hz,{uri:"spotify:internal:debug:remote-config-properties",children:(0,p.jsx)(An,{properties:e,localConfiguration:n,remoteConfiguration:s,setOverrides:t,clearOverrides:l})})})};var Rn=s(68001),Dn=s(9048),En=s(80505),Pn=s(30633),Ln=s(82950),Tn=s(8725),Bn=s(9131),Jn=function(e){return e.IPL="IN_PERSON",e.RGS="REMOTE",e}(Jn||{});var Fn=s(51661),Un=s(22711),Mn=s(81873);function _n({obj:e}){return(0,p.jsx)(F.i,{children:(0,p.jsx)("tbody",{children:Object.entries(e).map((e=>(0,p.jsx)(Gn,{name:e[0],value:e[1]},e[0])))})})}function Gn({name:e,value:n}){let s;return"string"==typeof n||"number"==typeof n?s=n:"boolean"==typeof n?s=(0,p.jsx)(Fn.N,{defaultChecked:n,isActive:!1,onClick:e=>{e.preventDefault()}}):"object"==typeof n&&(s=(0,p.jsx)(_n,{obj:n})),(0,p.jsxs)(L.S,{hover:!0,children:[(0,p.jsx)(T.p,{className:_.rowName,highlight:!0,children:e}),(0,p.jsx)(T.p,{className:_.rowValue,truncate:!0,align:"right",children:s}),(0,p.jsx)(T.p,{className:_.rowActions,children:(0,p.jsx)("button",{className:_.rowAction,onClick:()=>{void 0!==n&&(0,M.v)("object"==typeof n?JSON.stringify(n):n.toString())},children:(0,p.jsx)(B.c,{size:"small"})})})]})}const Vn=[{title:"Current Session",Component:()=>{const{currentSession:e,refreshCurrentSession:n}=(0,Bn.A)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Un.o,{iconOnly:Mn.t,onClick:()=>{n()}}),(0,p.jsx)(J.x,{children:e&&(0,p.jsxs)(F.i,{children:[(0,p.jsxs)("colgroup",{children:[(0,p.jsx)("col",{width:"30%"}),(0,p.jsx)("col",{}),(0,p.jsx)("col",{width:"16px"})]}),(0,p.jsx)("tbody",{children:Object.entries(e).map((e=>(0,p.jsx)(Gn,{name:e[0],value:e[1]},e[0])))})]})})]})}},{title:"Create New Session",Component:()=>{const{createSession:e}=(0,Bn.A)(),[n,s]=(0,t.useState)(null),[l,r]=(0,t.useState)(Jn.IPL),a=(0,f.I0)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:"Create a new session as your current user (does nothing if you already have a session)"}),(0,p.jsxs)("div",{className:_.rowControl,children:[(0,p.jsxs)(y.v,{id:"sessionTypeDropdown",value:l,onSelect:e=>{switch(e){case Jn.IPL:r(Jn.IPL);break;case Jn.RGS:r(Jn.RGS);break;default:r(Jn.IPL)}},children:[(0,p.jsx)("option",{value:Jn.IPL,children:Jn.IPL},Jn.IPL),(0,p.jsx)("option",{value:Jn.RGS,children:Jn.RGS},Jn.RGS)]}),(0,p.jsx)(b.D,{onClick:async n=>{n.preventDefault();const t=await e(l);s(t)},children:"Create"})]}),(0,p.jsx)(pe.P,{onClick:()=>{a((0,Tn.Cv)())},style:{marginTop:Ln.mG},children:"Open invitation modal"}),null!==n&&(0,p.jsx)(ge.B,{value:JSON.stringify(n,null,2),readOnly:!0})]})}},{title:"Leave Current Session",Component:()=>{const{leaveSession:e,currentSession:n}=(0,Bn.A)(),[s,l]=(0,t.useState)(null);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:_.rowName,children:"Leave your current session"}),(0,p.jsxs)("div",{className:_.rowControl,children:[(0,p.jsx)(on.y,{value:n?.session_id??"",readOnly:!0}),(0,p.jsx)(b.D,{onClick:async s=>{if(s.preventDefault(),!n)return;const t=await e();l(t)},children:"Leave"})]}),null!==s&&(0,p.jsx)(ge.B,{value:JSON.stringify(s,null,2),readOnly:!0})]})}},{title:"Delete Current Session",Component:()=>{const{currentSession:e,deleteSession:n}=(0,Bn.A)(),[s,l]=(0,t.useState)(null);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:_.rowName,children:"Delete your current session"}),(0,p.jsxs)("div",{className:_.rowControl,children:[(0,p.jsx)(on.y,{value:e?.session_id??"",readOnly:!0}),(0,p.jsx)(b.D,{onClick:async s=>{if(s.preventDefault(),!e)return;const t=await n();l(t)},children:"Delete"})]}),null!==s&&(0,p.jsx)(ge.B,{value:JSON.stringify(s,null,2),readOnly:!0})]})}},{title:"Join Session as Guest",Component:()=>{const{joinSession:e}=(0,Bn.A)(),[n,s]=(0,t.useState)(null),[l,r]=(0,t.useState)("");return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:_.rowName,children:"Join somebody else's session"}),(0,p.jsxs)("div",{className:_.rowControl,children:[(0,p.jsx)(on.y,{value:l,onChange:e=>r(e.currentTarget.value)}),(0,p.jsx)(b.D,{onClick:async n=>{n.preventDefault();const t=await e(l);s(t)},children:"Join"})]}),null!==n&&(0,p.jsx)(ge.B,{value:JSON.stringify(n,null,2),readOnly:!0})]})}}],Hn=()=>{const[e,n]=(0,t.useState)(-1);return(0,p.jsxs)("div",{className:_.panel,children:[(0,p.jsx)("h1",{children:"Social Connect!"}),(0,p.jsx)(Rn.U,{children:Vn.map(((s,t)=>(0,p.jsxs)(Dn.Q,{children:[(0,p.jsx)(En.i,{className:_.rowHeader,onClick:s=>{s.preventDefault(),n(t===e?-1:t)},isExpanded:t===e,children:s.title}),(0,p.jsx)(Pn.v,{isExpanded:t===e,children:s.Component&&(0,p.jsx)(s.Component,{})})]},`${t}-item`)))})]})},Kn="wjncHEmBUc7V8RZYdENw",zn="uyHngn_fJez61BsFl3tA",qn="J2KhtXbDovVMDOMzv1Jy",Wn="h5nLocSUS3w2NB53IdWQ",$n="debugWindowActiveTabGroup",Qn="debugWindowActiveTabIndex",Zn=()=>{const e=(0,De.f)().getCapabilities().canGetFiles,n=(0,E.E)().getIsEnabled(),s=(0,R.ky)();(0,t.useEffect)((()=>{s&&(s.title="Spotify Debug Window")}),[s]);const o=(0,t.useMemo)((()=>Object.fromEntries(Object.entries({Page:[null].filter(P.K),Authorization:[{label:"Access Token",Panel:V}],Playback:[e?{label:"Playback",Panel:tn}:null,{label:"Connect",Panel:X},n?{label:"Social Connect",Panel:Hn}:null].filter(P.K),"Data Fetching":[{label:"Esperanto",Panel:Ae},null].filter(P.K),Other:[{label:"Remote Config",Panel:In},{label:"Ads",Panel:g},{label:"In-App Messaging",Panel:A},{label:"Your DJ",Panel:I.Fh}].filter(P.K)}).filter((([e,n])=>n.length>0)))),[e,n]),c=Object.keys(o),d=(0,D.um)(),u=d.getItem($n),h="string"==typeof u&&u in o?u:c[0],[x,j]=(0,t.useState)(h),v=d.getItem(Qn),m="number"==typeof v&&v in o[x]?v:0,[f,b]=(0,t.useState)(m),y=o[x][f].Panel;return(0,p.jsx)("div",{className:"encore-dark-theme",children:(0,p.jsxs)("div",{className:Kn,children:[(0,p.jsx)(l.W,{className:zn,children:(0,p.jsx)(r.b,{flexMobile:!0,children:c.map((e=>(0,p.jsxs)(t.Fragment,{children:[(0,p.jsx)(a.W,{children:e}),o[e].map(((n,s)=>(0,p.jsx)(i._,{active:x===e&&f===s,label:n.label,onClick:()=>{j(e),d.setItem($n,e),b(s),d.setItem(Qn,s)},className:qn,children:n.label},n.label)))]},e)))})}),(0,p.jsx)("div",{className:Wn,children:(0,p.jsx)(y,{})})]})})}},9131:(e,n,s)=>{s.d(n,{A:()=>a});var t=s(59496),l=s(30361);var r=s(12445);const a=()=>{const e=(0,l.E)(),[n,s]=(0,t.useState)(e.getCurrentSession());!function(e,n){const s=(0,t.useRef)(n),r=(0,l.E)();s.current=n,(0,t.useEffect)((()=>{const n=e=>s.current(e);return r.getEvents().addListener(e,n),()=>{r.getEvents().removeListener(e,n)}}),[r,e])}(r.v.UPDATE,(({data:e})=>{s(e)}));return{currentSession:n,createSession:(0,t.useCallback)((n=>e.createSession(n)),[e]),leaveSession:(0,t.useCallback)((()=>e.leaveSession()),[e]),deleteSession:(0,t.useCallback)((()=>e.deleteSession()),[e]),joinSession:(0,t.useCallback)(((n,s)=>e.joinSession(n,s)),[e]),refreshCurrentSession:(0,t.useCallback)((()=>e.fetchCurrentSession()),[e])}}}}]);
//# sourceMappingURL=xpui-debug-window-contents.js.map