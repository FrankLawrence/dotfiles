"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4179],{1488:(e,a,i)=>{i.r(a),i.d(a,{default:()=>ui});var t=i(59496),n=i(84875),s=i.n(n),r=i(80519),l=i(81902),o=i(22711),c=i(97653),d=i(69705),m=i(76163),u=i(55740),g=i(57579),k=i(3819),p=i(94942),y=i(28725),h=i(88758),x=i(85583),v=i(59476),N=i(86739),j=i(17286),b=i(6123),L=i(2651),I=i(2238),C=i(61649),T=i(5367);const S="o2TlnuNKxRO5RnB9BpHB",A="q0Ke_aAvTcc4dO4wCHQt",f="UlKUfS_GcROZmofuafOW",O="I5LORTI1u3A6VoUvRCBf",R="TS85Qkpioa31wR0p4kzT",P="yL1DLXBc05CR_ACv_NhA",F="k5kRkUyoz9znqg_SGOVQ";var w=i(10325),U=i(33334),D=i(97045),B=i(37859),E=i(18864),_=i(4637);let M=function(e){return e.SMALL="small",e.LARGE="large",e}({});const Z=({art:e,disabled:a=!1,LinkComponent:i,name:t,size:n=M.SMALL,type:o,uri:c})=>{const d=e?[e]:[],g=n===M.SMALL?(0,U.R)(o):function(e){switch(e){case w.albumType.SINGLE:return u.ag.get("track-page.from-the-single");case w.albumType.EP:return u.ag.get("track-page.from-the-ep");case w.albumType.COMPILATION:return u.ag.get("track-page.from-the-compilation");case w.albumType.ALBUM:default:return u.ag.get("track-page.from-the-album")}}(o),k=(0,r.s0)();return(0,_.jsxs)("div",{className:s()(S,{[f]:n===M.SMALL,[A]:a}),children:[(0,_.jsx)("div",{className:O,children:(0,_.jsx)(D.O,{images:d,size:E.m$.SIZE_80,title:t,type:B.p.ALBUM})}),(0,_.jsxs)("div",{className:R,children:[(0,_.jsx)(l.D,{variant:n===M.SMALL?"mestoBold":"finale",children:g}),(0,_.jsx)(i,{to:c,children:(0,_.jsx)(l.D,{as:"div",className:P,variant:"balladBold",dir:"auto",children:t})})]}),(0,_.jsx)("div",{onClick:()=>{k((0,m.EC)(c).toURLPath(!0))},className:F})]})};var G=i(85018),K=i(82487),$=i(55207),Y=i(4302),q=i(16391);let z=function(e){return e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE",e}({});const V=(0,q.Uy)(((e,a)=>{switch(a.type){case"LYRICS_LOADING":e[a.uri]={status:z.LOADING};break;case"LYRICS_LOADED":e[a.uri]={status:z.LOADED,data:a.response};break;case"LYRICS_ERROR":e[a.uri]={status:z.UNAVAILABLE};break;default:throw new Error(`Unhandled lyrics action with type: ${a.type}`)}}));var W=i(20620),J=i(66252),H=i(55513);const Q=async({trackUri:e,api:a,convertLyricsEndpoint:i,imageForLyricsRequest:t})=>{const n=(0,m.EC)(e);try{const e=i?await J.Zz.getTrackEntityLyrics(a||W.b.getInstance(),n.id,t||""):await J.Zz.getSEOTrackLyrics(a||W.b.getInstance(),n.id);return{hasLyrics:!0,syncType:e.lyrics.syncType,lyrics:e.lyrics.lines,provider:e.lyrics.provider,providerDisplayName:e.lyrics.providerDisplayName,providerLyricsId:e.lyrics.providerLyricsId,isRtlLanguage:e.lyrics.isRtlLanguage}}catch(e){if(e instanceof H.m&&404===e.status)return{hasLyrics:!1};throw e}},X={status:z.LOADING},ee={status:z.UNAVAILABLE},ae=t.createContext(void 0),ie=({children:e,initialState:a={}})=>{const i=t.useReducer(V,a);return(0,_.jsx)(ae.Provider,{value:i,children:e})},te=({uri:e,isAnonymous:a,convertLyricsEndpoint:i,imageForLyricsRequest:n})=>{const s=t.useContext(ae);if(void 0===s)throw new Error("useTrackEntityLyrics must be used within a TrackEntityLyricsProvider");if(!e||!(0,m.wj)(e)||a)return ee;const[r,l]=s,o=r[e];return o||(l({type:"LYRICS_LOADING",uri:e}),Q({trackUri:e,convertLyricsEndpoint:i,imageForLyricsRequest:n}).then((a=>{l({type:"LYRICS_LOADED",uri:e,response:a})})).catch((()=>{l({type:"LYRICS_ERROR",uri:e})})),X)};var ne=i(58069),se=i(38442),re=i(96645),le=i(24949);const oe=(e,a)=>(0,le.vI)(re.k.IlrTrackCanonicalTop,a)||e===se.Zn.CANONICAL_TOP_POSITION,ce=(e,a)=>(0,le.vI)(re.k.IlrTrackCanonicalBottom,a)||e===se.Zn.CANONICAL_BOTTOM_POSITION,de=(e,a)=>(0,le.vI)(re.k.IlrTrackOrganicTop,a)||e===se.Zn.ORGANIC_TOP_POSITION,me=(e,a)=>(0,le.vI)(re.k.IlrTrackOrganicBottom,a)||e===se.Zn.ORGANIC_BOTTOM_POSITION,ue=(e,a)=>oe(e,a)||ce(e,a)||de(e,a)||me(e,a);se.Zn.DEFAULT,se.Zn.CONTROL,se.Zn.CANONICAL_TOP_POSITION,ne.JI.ContentOnly,se.Zn.CANONICAL_BOTTOM_POSITION,ne.JI.ContentOnly,se.Zn.ORGANIC_TOP_POSITION,ne.JI.OrganicTraffic,se.Zn.ORGANIC_BOTTOM_POSITION,ne.JI.OrganicTraffic;var ge=i(57115),ke=i(93201),pe=i(93868),ye=i(42203),he=i(46827);const xe="oTRKhYD0MZlNPm66W3Tw",ve="sc95MwPalcHwYGZ7j3xN",Ne="zrCZCfYv4zZiB1HYv9i8",je="RnlxIDmWcYTbbwNSJNjA",be="SHkxfN1vy0wpRMP1hK7I",Le="COXBS6zLyyxKNYuEAzjZ",Ie="pynMsudlBeLA8TZkPvmK",Ce="sR5IpdOUvoUGYKlC9Dk1",Te="FHMr3WxshoYjZ7jd3YwI",Se="Evcwc4KM2tf9xrLbfB8B",Ae="x4_dsi31Cx2SO1L0uYIj",fe="euPDqfFEBILj9KHDNLC1",Oe="x6FPRUKK40oDCPP7g6Ls",Re="k3SPcfaKewjfdYumDcGw",Pe="t9C7vRiN1OSC9uWfJEr0",Fe="Onv6dO4lntCzKUqYa8PE",we=({richTrack:e})=>{const{search:a}=(0,r.TH)(),i=(0,t.useCallback)((()=>new URLSearchParams(a.slice(1)).get("highlight")||""),[a])(),{tracklistRef:n}=(0,he.W)(),s=e.albumOfTrack,l=(0,ye.Y)(s?.uri||""),{usePlayContextItem:o}=(0,$.n)({uri:l},{featureIdentifier:"album"}),c=(0,t.useMemo)((()=>({items:[],totalCount:0})),[]);return s?(0,_.jsx)("div",{ref:n,className:Ce,children:(0,_.jsx)(pe.L,{ariaLabel:s.name,nrTracks:s.tracks.totalCount,albumUri:s.uri,highlightUri:i,discs:c,usePlayContextItem:o,hasHeaderRow:!1})}):null},Ue="OH5mnpJIVCJozYM3raMt",De="etw0slM6uVrCi5RR3iDi",Be=({padded:e,providerDisplayName:a})=>{const i=(0,c.W6)(se.Kl)&&a?u.ag.get("web-player.lyrics.providedBy",a):"Lyrics powered by Musixmatch.";return(0,_.jsx)(l.D,{as:"p",dir:"auto",variant:"finale",className:`${Ue} ${e?De:""}`,children:i})},Ee=({uri:e,imageForLyricsRequest:a})=>{const i=(0,c.W6)(se.Kl),{data:t}=te({uri:e,convertLyricsEndpoint:i,imageForLyricsRequest:a});return t?.hasLyrics?(0,_.jsx)(Be,{providerDisplayName:t.providerDisplayName}):null};var _e=i(99766),Me=i(73455);const Ze="QhDsXG1Gmo7XmQWLggAO",Ge="bZgWQj7UxvK8GYKWDA7N",Ke="AW61P3tnW5cKJCWtbhFh",$e=({buttonText:e,onSecondaryButtonClick:a,onPrimaryButtonClick:i,secondaryButtonText:t,text:n})=>(0,_.jsxs)("div",{className:Ze,"data-testid":"static-activation-trigger",children:[(0,_.jsx)(l.D,{className:Ge,variant:"cello",children:n}),(0,_.jsxs)("div",{className:Ke,children:[(0,_.jsx)(o.o,{onClick:a,semanticColor:"textBase",children:t}),(0,_.jsx)(Me.D,{onClick:i,colorSet:"invertedLight",children:e})]})]});var Ye=i(93399);const qe="T1nqQ4HEh3heHy4RCCKa",ze="L8zjshPVgUMXyZR4FtOk",Ve="YMn1FWcFmOz9osBrNvhF",We="Inbyq3TnvKDOJtcKFTDQ",Je="lWk5se4WETUOJwaEb8D6",He="i8DyQbWCmDV_8N5XGJQT",Qe="t5WPFlGTY6GCd9UOFfLu",Xe="AGQ3wRyMVK1odq860qnT",ea="ZX_r7uZgPgssaUplfpxT",aa="qrqctaPu2XBpxsw23nPX",ia="XnWidTagai3nQwMPxIMF";var ta=i(18270),na=i(22326);let sa=function(e){return e.SMALL="small",e.LARGE="large",e}({});const ra=e=>{const{disabled:a,images:i,LinkComponent:t,name:n,size:o,uri:c,enableI18nRoutes:d,enableI18nAdditionalPages:g}=e,k=o===sa.SMALL,p=(0,r.s0)(),y=(0,m.EC)(c),h=y?.type,x=u.ag.getUrlLocale(),v=(0,ta.S9)({localeFeatureFlag:d,entityFeatureFlag:g,urlLocale:x,entity:h,type:"link"});return(0,_.jsxs)("div",{className:s()(ze,{[Ve]:a}),"data-testid":"track-artist-link-card",children:[(0,_.jsx)(D.O,{shape:D.K.CIRCLE,images:i,size:E.m$.SIZE_80,title:n,type:B.p.ARTIST}),(0,_.jsxs)("div",{className:s()(Je,{[He]:k}),children:[(0,_.jsx)(l.D,{variant:"mestoBold",className:We,children:u.ag.get("card.tag.artist")}),(0,_.jsx)(t,{to:c,children:(0,_.jsx)(l.D,{as:"div",dir:"ltr",className:Qe,variant:"balladBold",children:n})})]}),(0,_.jsx)("div",{onClick:()=>{const e=y?.toURL(`/${na.F0}${x}/`);if(y){const a=v?e:y.toURLPath(!0);p(a)}},className:Xe})]})},la=({size:e=sa.LARGE,disabled:a=!1,enableI18nRoutes:i,enableI18nAdditionalPages:n,...r})=>{const[c,d]=(0,t.useState)(!1),m=(0,t.useCallback)((()=>{d(!c)}),[c]),g=r.artists;return(0,_.jsxs)("div",{"data-testid":"track-artist-link-card-container",children:[(0,_.jsx)("div",{className:qe,children:g.map(((t,l)=>(0,_.jsx)("div",{className:s()({[aa]:c&&l>5,[ea]:l>5}),children:(0,_.jsx)(ra,{name:t.name,uri:t.uri,images:t.images,size:e,LinkComponent:r.LinkComponent,disabled:a,enableI18nRoutes:i,enableI18nAdditionalPages:n},t.id)},`${t.uri}-${l}`)))}),g.length>6&&(0,_.jsx)(o.o,{onClick:m,className:ia,children:(0,_.jsx)(l.D,{as:"p",variant:"violaBold",children:c?u.ag.get("show_less"):u.ag.get("mwp.search.artists.all")})})]})};var oa=i(54738);const ca="EaTxqhHk6J4ecKHwpY5m",da="dUQl9yd5x_1oWk4L0Ntm",ma="xt5C47eHPYNiriMJxGnC",ua=({words:e})=>(0,_.jsx)(l.D,{as:"p",dir:"auto",variant:"ballad",className:ma,children:e}),ga=({lines:e=[]})=>0===e.length?null:(0,_.jsxs)("div",{className:ca,children:[(0,_.jsx)(l.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:da,children:u.ag.get("web-player.lyrics.title")}),e.map((({words:e},a)=>(0,_.jsx)(ua,{words:e},`lyrics-seo-line-${a}`)))]}),ka=({uri:e,imageForLyricsRequest:a})=>{const i=(0,c.W6)(se.Kl),{data:t}=te({uri:e,convertLyricsEndpoint:i,imageForLyricsRequest:a});return t&&t?.hasLyrics?(0,_.jsx)(ga,{lines:t.lyrics}):null};var pa=i(17140),ya=i(55189),ha=i(44893);const xa=e=>{const{albumArtists:a,columnCount:i,imageForLyricsRequest:n,uri:r}=e,l=i-2,o={"--column-count":i,"--left-column-end":l-2,"--right-column-start":l},{isAnonymous:d}=(0,_e.v9)(ha.Gg),m=(0,pa.k)(),g=(0,c.W6)(se.Kl),{data:k,status:p}=te({uri:r,isAnonymous:d,convertLyricsEndpoint:g,imageForLyricsRequest:n}),y=!!k&&k.hasLyrics&&p!==z.UNAVAILABLE||d,h=(0,_e.v9)(ya.br),x=(0,_e.v9)(ya.yE);return(0,_.jsxs)(t.Suspense,{fallback:null,children:[y&&(0,_.jsx)("div",{className:s()(Ne,{[je]:i>5}),style:{...o},"data-testid":"lyrics-container",children:d?(0,_.jsx)($e,{buttonText:u.ag.get("sign_up"),secondaryButtonText:u.ag.get("login"),text:u.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:oa.L6,onSecondaryButtonClick:oa.h$}):(0,_.jsx)(ka,{uri:r,imageForLyricsRequest:n})}),(0,_.jsx)("div",{className:s()(xe,{[ve]:i>5&&y}),style:{...o},children:(0,_.jsx)(la,{artists:a,LinkComponent:Ye.default,disabled:!m,enableI18nRoutes:h,enableI18nAdditionalPages:x})})]})};var va=i(42673),Na=i(82950),ja=i(4699),ba=i(70916),La=i(59642),Ia=i(14126),Ca=i(91560),Ta=i(80495),Sa=i(2437),Aa=i(84179),fa=i(2900),Oa=i(46061),Ra=i(36858),Pa=i(54204);const Fa="Z9Dr8PkXFtlO8KnnDcxp",wa="Bm0LUMlhVIcF5qusgdUP",Ua="GIyB7JDkRwjtVL6PSBbg",Da="whTIka0YYAkqhqrs26Wa",Ba=t.memo((function({uri:e,name:a,imgUrl:i,artists:t,isExplicit:n,index:s,albumUri:r,contextUri:l,isPlayable:o,usePlayContextItem:c,isMOGEFRestricted:d,totalMilliseconds:m,playcount:g}){const{isActive:k,isPlaying:p,triggerPlay:y,togglePlay:x}=c({uri:e,index:s}),v=(0,Ta._)(e),N=(0,Aa.k)(e,o),j=t.map((e=>e.name)).join(u.ag.getSeparator()),{badges:b,hasBadges:L}=(0,Sa.r)({isMOGEFRestricted:d,downloadAvailability:v,isExplicit:n}),I=t.map((e=>e.name)).join(u.ag.getSeparator());return(0,_.jsx)(Ca.ZP,{value:"row",index:s,children:(0,_.jsx)(ja._,{menu:(0,_.jsx)(h.$,{uri:e,albumUri:r,artists:t,contextUri:l}),children:(0,_.jsxs)(Pa.c,{uri:e,contextUri:l,isPlayable:N,onTriggerPlay:(e,a)=>{y({loggingParams:a})},isActive:k,index:s,ariaRowIndex:s,dragMetadata:{name:a,createdBy:j},children:[(0,_.jsxs)(Oa.vZ,{ariaColIndex:0,children:[(0,_.jsx)(Oa.VG,{uri:e,src:i,onClick:(e,a)=>{x({loggingParams:a})},isLocked:!1,isPlaying:p,isActive:k,playAriaLabel:u.ag.get("tracklist.a11y.play",a,j)}),(0,_.jsxs)(Oa.vm,{children:[(0,_.jsx)(fa.G,{uri:e,enabled:!0,className:Ua,children:(0,_.jsx)(Oa.Wh,{titleText:a,children:a})}),L&&(0,_.jsxs)(Oa.g3,{children:[b.download&&(0,_.jsx)(ba.G,{size:16}),b.explicit&&(0,_.jsx)(La.N,{}),b.nineteen&&(0,_.jsx)(Ia.X,{className:Da,size:16})]}),(0,_.jsx)(Oa.K9,{children:(0,_.jsx)(Oa.T6,{artists:t})})]})]}),(0,_.jsx)(Oa.UA,{ariaColIndex:1,children:(0,_.jsx)(Ra.B,{playcount:g})}),(0,_.jsxs)(Oa.mU,{ariaColIndex:2,children:[(0,_.jsx)(Oa.qS,{uri:e}),(0,_.jsx)(Oa.A$,{duration:m}),(0,_.jsx)(Oa.Zv,{menu:(0,_.jsx)(h.$,{uri:e,albumUri:r,contextUri:l,artists:t}),label:u.ag.get("more.label.track",a,I)})]})]})})})}),((e,a)=>e.uri===a.uri&&e.index===a.index));var Ea=i(69496);const _a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"internalLinkRecommenderTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"strategy"}},type:{kind:"NamedType",name:{kind:"Name",value:"SEORankingStrategy"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"seoRecommended"},arguments:[{kind:"Argument",name:{kind:"Name",value:"seoRecommendedInput"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"strategy"},value:{kind:"Variable",name:{kind:"Name",value:"strategy"}}},{kind:"ObjectField",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"GenericError"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}},{kind:"Field",name:{kind:"Name",value:"uri"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ilrTrackData"}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"ilrTrackData"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"albumOfTrack"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}}]}}]}}]};var Ma=i(21983),Za=i(81622),Ga=i(98474),Ka=i(10664),$a=i(99703);const Ya=e=>{return a=e,"NotFound"!==a?.__typename&&"GenericError"!==a?.__typename&&"Track"===e.__typename;var a},qa=e=>e?e.filter((e=>Ya(e.data))).map((e=>e.data.uri)):[],za=t.memo((function({strategy:e,uri:a}){const{data:i}=(n={uri:a,strategy:e},(0,Ea.a)(_a,n,s));var n,s;const r=i?.seoRecommended.items,o=(0,t.useMemo)((()=>r?.slice(0,Math.min(r.length,5))),[r]),c=(0,t.useCallback)((e=>e.uri),[]),d=(0,t.useMemo)((()=>[$a.QD.TITLE,$a.QD.ALBUM,$a.QD.DURATION]),[]),m=(0,Za.g)(),g=(0,_e.v9)(ha.n5),k=(0,_e.v9)(Ka.rZ);(0,Ma.M)({category:"track_ilr_exposures",action:"track_page_visit",remoteConfigProperty:Ga.YSd,label:"dwp",context:`${a}|${qa(r)}`,country:g?k:"",spt:!0,isAnonymous:m});const p=(r||[])?.map((e=>Ya(e.data)?{...e.data,provider:null,type:B.p.TRACK,uid:null}:{type:B.p.TRACK,uri:"",uid:null,provider:null})),y=(0,ye.Y)(a),{usePlayContextItem:h}=(0,$.n)({uri:y,pages:[{items:p}]},{featureIdentifier:"track"}),x=(0,t.useCallback)(((e,i)=>{if(!Ya(e.data))return(0,_.jsx)(t.Fragment,{});const n=e.data;return(0,_.jsx)(Ba,{index:i,contextUri:a,uri:n.uri,name:n.name,totalMilliseconds:n.duration.totalMilliseconds,imgUrl:n.albumOfTrack?.coverArt?.sources[0].url,isPlayable:n.playability.playable,artists:n.artists.items.map((e=>({uri:e.uri,id:e.id,name:e.profile.name}))),albumUri:n?.albumOfTrack?.uri,isExplicit:n.contentRating?.label===ne.KS.Explicit,isMOGEFRestricted:n.contentRating?.label===ne.KS.NineteenPlus,usePlayContextItem:h,playcount:parseInt(n.playcount||"0",10)},`${i}-${n.uri}`)}),[a,h]);return r?.length?(0,_.jsxs)("div",{className:Fa,children:[(0,_.jsxs)("div",{className:wa,children:[(0,_.jsx)(l.D,{variant:"canon",semanticColor:"textBase",children:u.ag.get("playlist.extender.recommended.title")}),(0,_.jsx)(l.D,{variant:"mesto",paddingBottom:Na.o7,children:u.ag.get("internal-link-recommender.based-on-this-song")})]}),(0,_.jsx)($a.Pv,{ariaLabel:u.ag.get("playlist.extender.recommended.title"),nrTracks:Math.min(r.length,5),rowPlaceholder:$a.hU,tracks:o,renderRow:x,resolveUri:c,columns:d},"internal-link-recommender-track-list")]}):null}));var Va=i(11277),Wa=i(25027);const Ja=({album:e,index:a,artistURI:i})=>(0,_.jsx)(Ca.ZP,{value:"card",index:a,children:(0,_.jsx)(Wa.i,{index:a,latest:!1,showType:!0,...(0,Va.B$)(e,i,e.name)})});var Ha=i(99034);const Qa=({albums:e,artistName:a,artistId:i,artistUri:t,className:n})=>e?(0,_.jsx)(Ca.ZP,{value:"shelf/albums",children:(0,_.jsx)(Ha.P,{total:e.totalCount,title:u.ag.get("rich-page.popular-albums-by-artist",{artist:a}),seeAllUri:`${(0,Va.GJ)(i)}:discography:${ne.VZ.Album.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:n,children:(0,Va.Hr)(e.items).map(((e,a)=>(0,_.jsx)(Ja,{album:e,index:a,artistURI:t},e.uri)))})}):null;var Xa=i(80202);const ei=({artistId:e,className:a,fansAlsoLike:i,title:t})=>(0,_.jsx)(Ca.ZP,{value:"shelf/fans-also-like",children:(0,_.jsx)(Ha.P,{total:i.length,title:t??u.ag.get("rich-page.fans-also-like"),seeAllUri:`${(0,Va.GJ)(e)}:related`,className:a,children:i.map(((e,a)=>(0,_.jsx)(Ca.ZP,{value:"card",index:a,children:(0,_.jsx)(Xa.I,{index:a,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources||[]})},e.uri)))})});var ai=i(2926);const ii=({artistName:e,artistUri:a,headerClassName:i,rowClassName:n,topTracks:s,topTracksTransformer:r,uri:o})=>{const c=(0,t.useMemo)((()=>s?.items.map((e=>r(e,o)))),[s?.items,r,o]),{usePlayContextItem:d}=(0,$.n)({uri:a},{featureIdentifier:"artist"});return c&&c.length>0?(0,_.jsxs)("div",{className:n,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(l.D,{variant:"mesto",children:u.ag.get("rich-page.popular-tracks")}),(0,_.jsx)(l.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:i,children:e})]}),(0,_.jsx)(ai.k,{nrTracks:c.length,initialTracks:c,usePlayContextItem:d})]}):null},ti=({artistName:e,artistId:a,artistUri:i,className:t,releases:n,artistImages:s})=>n?(0,_.jsx)(Ca.ZP,{value:"shelf/releases",children:(0,_.jsx)(Ha.P,{total:10,title:u.ag.get("rich-page.popular-releases-by-artist",{artist:e}),seeAllUri:`${(0,Va.GJ)(a)}:discography:${ne.VZ.Album.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:t,listRowHeaderProps:s?{title:e,pretitle:u.ag.get("artist-page.popular"),media:(0,ke.o)(s,{desiredSize:48})||""}:null,children:n.items.map(((e,a)=>(0,_.jsx)(Ja,{album:e,index:a,artistURI:i},e.uri)))})}):null,ni=({artistId:e,artistName:a,artistUri:i,className:t,singles:n})=>n?(0,_.jsx)(Ca.ZP,{value:"shelf/singles-and-eps",children:(0,_.jsx)(Ha.P,{total:n.totalCount,title:u.ag.get("rich-page.popular-singles-and-eps-by-artist",{artist:a}),seeAllUri:`${(0,Va.GJ)(e)}:discography:${ne.VZ.Single.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:t,children:(0,Va.Hr)(n.items).map(((e,a)=>(0,_.jsx)(Ja,{album:e,index:a,artistURI:i},e.uri)))})}):null;var si=i(2851),ri=i(57265),li=i(40436),oi=i(79461);const ci=e=>(e.items||[]).map((e=>({name:e.profile.name,images:(e.visuals.avatarImage?.sources||[]).map((e=>({url:e.url,width:e.width,height:e.height}))),uri:e.uri,id:e.id}))),di=e=>(e||[]).map((e=>e.profile.name)),mi=({uri:e,track:a})=>{const i=(0,ri.o)(),n=(0,pa.k)(),m=(0,Za.g)(),j=(0,r.TH)(),S=(0,si.k)({type:"locale",uri:e}),{firstArtist:A,otherArtists:f,albumOfTrack:O,duration:R,name:P}=a,F=O?.coverArt,w=O?.copyright.items,U=O?.courtesyLine,D=O?.date?.isoString,B=F?.extractedColors?.colorRaw.hex,E=(F?.sources||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),G={uri:O?.uri||"",name:O?.name||""},q=(0,c.W6)(se.YS),z=di(A.items),V=di(f.items),W=ci(A),J=ci(f),H=[...W,...J],Q=A.items[0],X=a.albumOfTrack,ee=X?.playability?.playable,ae={artistId:Q?.id,artistName:Q?.profile?.name,artistUri:Q?.uri},te=a.albumOfTrack?.coverArt?.sources,re=(0,ke.o)(te||void 0,{desiredLabel:"large",desiredSize:600})??te?.[0]?.url??"",[le,pe]=(0,t.useState)(!1),he=(0,t.useCallback)((()=>{pe(!le)}),[le]),xe=f&&f.items.length>5,{spec:ve,logger:Ne}=(0,ge.fU)(d.createDesktopTrackEventFactory,{data:{uri:e}}),je=a.playability.playable,Ce=(0,ye.Y)(e),{togglePlay:Ue,isPlaying:De,isActive:Be}=(0,$.n)({uri:Ce},{featureIdentifier:"track"}),[_e,Me]=(0,K.Z)(e),Ze=(0,t.useCallback)((async()=>{i({targetUri:e,intent:_e?"unsave":"save",type:"click"});const a=ve.actionBarFactory().saveButtonFactory();Ne.logInteraction(_e?a.hitRemoveLike({itemNoLongerLiked:e}):a.hitLike({itemToBeLiked:e}));try{await Me(!_e)}catch{}}),[i,e,_e,ve,Ne,Me]),Ge=(0,t.useCallback)((()=>(0,Y.Zs)({i18n:u.ag,trackArtistsList:[...z,...V].join(u.ag.getSeparator()),trackName:a.name,shouldLocalize:S})),[z,V,S,a.name]),Ke=(0,t.useCallback)(((e,a)=>{Ne.logInteraction(ve.headerFactory().artistLinkFactory({position:a.position,uri:a.creator.uri}).hitUiNavigate({destination:a.creator.uri}))}),[Ne,ve]),$e=(0,t.useCallback)((()=>{const a=(0,L.aK)({isPlaying:De,isActive:Be,spec:ve.actionBarFactory().playButtonFactory(),logger:Ne,uri:e});Ue({loggingParams:a})}),[Be,De,Ne,ve,Ue,e]),qe=(0,t.useCallback)((()=>{Ne.logInteraction(ve.actionBarFactory().contextButtonFactory().hitUiReveal())}),[Ne,ve]);return(0,_.jsxs)("section",{"data-testid":"track-page",children:[(0,_.jsx)(va.$,{children:Ge()}),(0,_.jsxs)(x.gF,{backgroundColor:B,children:[(0,_.jsxs)(v.W,{children:[(0,_.jsx)(b.$,{size:"md",onClick:$e,disabled:!je,isPlaying:De,uri:e}),(0,_.jsx)(N.i,{text:P,dragUri:e,dragLabel:P})]}),(0,_.jsx)(I._,{menu:(0,_.jsx)(h.$,{uri:e}),children:(0,_.jsx)(x.Oz,{dragUri:e,images:E,name:P,placeholderType:"album"})}),(0,_.jsxs)(x.sP,{children:[(0,_.jsx)(l.D,{variant:"mestoBold",children:u.ag.get("song")}),(0,_.jsx)(I._,{menu:(0,_.jsx)(h.$,{uri:e}),children:(0,_.jsx)(x.xd,{dragUri:e,dragLabel:P,children:P})}),(0,_.jsx)(x.QS,{creators:W,releaseDate:D,durationMilliseconds:R.totalMilliseconds,onCreatorClick:Ke,isTrack:!0,album:G})]})]}),(0,_.jsx)(g.o,{backgroundColor:B,children:(0,_.jsxs)(g.F,{children:[(0,_.jsx)(x.rn,{children:(0,_.jsx)(b.$,{onClick:$e,isPlaying:De,disabled:!je,size:"lg",uri:e})}),(0,_.jsx)(x.rn,{children:(0,_.jsx)(k.H,{isAdded:!!_e,onClick:Ze,disabled:!n,size:k.q.md})}),(0,_.jsx)(p.o,{uri:e,isFollowing:!!_e,onFollow:Ze,size:p.q.md}),(0,_.jsx)(I.ClickToggleContextMenu,{menu:(0,_.jsx)(h.$,{uri:e}),onShow:qe,children:(0,_.jsx)(y.MoreButton,{label:u.ag.get("more.label.context",P)})})]})}),(0,_.jsxs)(ie,{children:[(0,_.jsxs)("div",{className:"contentSpacing",children:[(0,_.jsx)("div",{className:be,children:(0,_.jsx)(T.T,{render:({columnCount:a})=>(0,_.jsx)(xa,{imageForLyricsRequest:re,albumArtists:H,columnCount:a,uri:e})})}),oe(q,j)&&(0,_.jsx)("div",{"data-testid":"canonical-pool-top",children:(0,_.jsx)(za,{strategy:ne.JI.ContentOnly,uri:a.uri})}),de(q,j)&&(0,_.jsx)("div",{"data-testid":"organic-pool-top",children:(0,_.jsx)(za,{strategy:ne.JI.OrganicTraffic,uri:a.uri})}),(0,_.jsx)(ii,{artistName:Q.profile.name,artistUri:Q.uri,headerClassName:Se,rowClassName:be,topTracks:Q.discography.topTracks,topTracksTransformer:li.X7,uri:a.uri}),(0,_.jsx)(ti,{className:Te,releases:Q?.discography?.popularReleasesAlbums,...ae}),(0,_.jsx)(Qa,{albums:Q?.discography?.albums,className:Te,...ae}),(0,_.jsx)(ni,{className:Te,singles:Q?.discography?.singles,...ae}),f&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:fe,children:f.items.map(((e,a)=>(0,_.jsx)(ti,{className:s()(Ae,{[Re]:a>4,[Pe]:le&&a>4}),releases:e.discography.popularReleasesAlbums,artistName:e.profile.name,artistId:e.id,artistUri:e.uri,artistImages:e.visuals.avatarImage?.sources},e.id)))}),xe&&(0,_.jsx)(o.o,{onClick:he,className:Fe,children:(0,_.jsx)(l.D,{as:"h2",variant:"violaBold",children:le?u.ag.get("show_less"):u.ag.get("mwp.search.artists.all")})}),(0,_.jsx)(ei,{artistId:Q.id,className:s()(Te,{[Oe]:f.items.length>0}),fansAlsoLike:Q.relatedContent.relatedArtists.items,title:u.ag.get("artist-page.fansalsolike")})]}),X&&(0,_.jsx)(Z,{art:X.coverArt?.sources[0],disabled:!ee||!n,LinkComponent:Ye.default,name:X.name,type:X.type,size:M.LARGE,uri:X.uri}),(0,_.jsx)(we,{richTrack:a})]}),(0,_.jsxs)("div",{className:"contentSpacing",children:[(0,_.jsxs)("div",{className:s()(Le,{[Ie]:ue(q,j)}),children:[(0,_.jsx)(C.k,{copyrights:w||[],courtesyLine:U}),!m&&(0,_.jsx)(Ee,{uri:e,imageForLyricsRequest:re})]}),ce(q,j)&&(0,_.jsx)("div",{"data-testid":"canonical-pool-bottom",children:(0,_.jsx)(za,{strategy:ne.JI.ContentOnly,uri:e})}),me(q,j)&&(0,_.jsx)("div",{"data-testid":"organic-pool-bottom",children:(0,_.jsx)(za,{strategy:ne.JI.OrganicTraffic,uri:e})})]})]})]})},ui=(0,t.memo)((function(){const{trackId:e=""}=(0,r.UO)(),a=(0,m.tn)(e).toURI(),i=(0,oi.QN)({uri:a});return i.loading||"Track"!==i.data?.trackUnion?.__typename?(0,_.jsx)(j.h,{hasError:null!==i.error,errorMessage:u.ag.get("track-page.error")}):(0,_.jsx)(G.fd,{surface:G.Tg.TRACK,uris:[a,i.data.trackUnion.albumOfTrack?.uri??null],children:(0,_.jsx)(mi,{uri:a,track:i.data.trackUnion})})}))},21983:(e,a,i)=>{i.d(a,{M:()=>d});var t=i(59496),n=i(15735),s=i(35358),r=i(97653),l=i(55776),o=i(3030),c=i(21729);const d=({category:e,action:a,remoteConfigProperty:i,defaultVariant:d,label:m,context:u,country:g,spt:k=!1,isAnonymous:p=!1})=>{const y=(0,r.W6)(i),h=(0,c.s4)();(0,t.useEffect)((()=>{if(!y||!m)return;const i={category:e,action:a,variant:d??y,label:m,os:(0,l.y)(),...u&&{context:u},...g&&{country:g},...k&&{sp_t:(0,o.vQ)("sp_t")}};p?h.send((0,s.k)(i)):h.send((0,n.x)(i))}),[y,m,e,a,u,g,k,p,h,d])}},61649:(e,a,i)=>{i.d(a,{k:()=>r});var t=i(81902);const n="rTMkDBDp47Eo12ZEQv4U";var s=i(4637);const r=({copyrights:e,courtesyLine:a})=>{const i=(e||[]).map(((e,a)=>{const i=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let n;return n="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,s.jsx)(t.D,{as:"p",variant:"finale",dir:"auto",children:`${n} ${i}`},a)}));return a&&i.unshift((0,s.jsx)(t.D,{as:"p",variant:"finale",dir:"auto",children:a},i.length)),(0,s.jsx)("div",{className:n,children:i})}},24949:(e,a,i)=>{i.d(a,{vI:()=>t});const t=(e,a)=>{const i=a?new URLSearchParams(a.search):void 0;return"1"===i?.get(e)}},96645:(e,a,i)=>{i.d(a,{k:()=>t});let t=function(e){return e.I18nSEO="i18nSEO",e.RTPTrackCredits="rtpv2p2",e.BlendParty="bp",e.BlendPartyV2="bpv2",e.VideoPodcastShowTitleTag="vidpodshow",e.I18nAdditionalPages="i18nap",e.IlrTrackCanonicalTop="ilr-track-canonical-top",e.IlrTrackCanonicalBottom="ilr-track-canonical-bottom",e.IlrTrackOrganicTop="ilr-track-organic-top",e.IlrTrackOrganicBottom="ilr-track-organic-bottom",e.RichPlaylistPages="rpp",e}({})}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map