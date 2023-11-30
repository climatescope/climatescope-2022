"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5321],{5350:function(t,e,n){var r=n(9008),i=n(1752),a=n(1163),o=n(5893),c=(0,i.default)().publicRuntimeConfig,u=c.siteUrl,s=c.year;e.Z=function(t){var e=t.title,n=void 0===e?"":e,i=t.description,c=void 0===i?"Which market is the most attractive for energy transition investment?":i,l=t.cover,d=void 0===l?"cover-lg.jpg":l,f=t.type,p=void 0===f?"website":f,h=(0,a.useRouter)(),g=h.basePath,m=h.asPath,v=u+g+("/"===m[0]?m.slice(1):m),x=d?u+g+"images/"+d:"",y=n?"Climatescope ".concat(s," | ").concat(n):"Climatescope ".concat(s);return(0,o.jsxs)(r.default,{children:[(0,o.jsx)("meta",{content:"en",httpEquiv:"Content-Language"}),(0,o.jsx)("title",{children:y}),(0,o.jsx)("meta",{name:"description",content:c}),(0,o.jsx)("meta",{property:"og:type",content:p}),(0,o.jsx)("meta",{property:"og:url",content:v}),(0,o.jsx)("meta",{property:"og:title",content:y}),(0,o.jsx)("meta",{property:"og:description",content:c}),d&&(0,o.jsx)("meta",{name:"image",property:"og:image",content:x}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:url",content:v}),(0,o.jsx)("meta",{name:"twitter:title",content:y}),(0,o.jsx)("meta",{name:"twitter:description",content:c}),d&&(0,o.jsx)("meta",{name:"twitter:image",content:x}),(0,o.jsx)("link",{rel:"canonical",href:v})]})}},2589:function(t,e,n){var r=n(3789),i=n(219),a=n(2809),o=n(7294),c=n(1659),u=n(8527),s=n(7633),l=n(2255),d=n(9089),f=n(5162),p=n(3279),h=n.n(p),g=n(9734),m=n.n(g),v=n(793),x=n(5893),y=["width","height","data","compactTooltip","precision"];function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=function(t){var e=t.data,n=t.x,r=t.x2,i=t.tooltip,a=t.onTooltipShow,o=t.onTooltipHide,u=t.w,s=t.height,l=(0,c.Fg)().colors,d=function(){a({year:e,x:r})},f=function(){o()};return(0,x.jsxs)("g",{children:[(0,x.jsx)("rect",{fill:i.year===e?l.teal[800]:"transparent",fillOpacity:.05,x:n,y:0,width:u,height:s-40,onMouseEnter:d,onMouseLeave:f,onFocus:d,onBlur:f,tabIndex:0}),(0,x.jsx)("rect",{x:r-1,y:0,width:2,height:s-30,fill:i.year===e?l.teal[900]:"transparent",style:{pointerEvents:"none"}})]})},S=function(t){var e,n,a=t.width,p=void 0===a?672:a,h=t.height,g=void 0===h?378:h,j=t.data,S=t.compactTooltip,k=t.precision,T=(0,i.Z)(t,y),Z=(0,c.Fg)().colors,C=(0,v.Q8)({width:p,height:g}),z=(0,o.useState)({}),F=z[0],E=z[1],P=j.subindicators||[],D=(null===(e=P[0])||void 0===e?void 0:e.units)||"",K=P.reduce((function(t,e){var n=function(t){var e=t.map((function(t){return{year:+t.year,value:parseFloat(t.value)||0}}));return e.reduce((function(t,e){return t+e.value}),0)?e:[]}(e.data);return n.length?[].concat((0,r.Z)(t),[b(b({},e),{},{data:n,isVisible:!0})]):t}),[]),H=m()(K,(function(t){return-(0,l.Z)(t.data,(function(t){return t.value}))})),L=T.domainX||(0,d.Z)(H[0].data.map((function(t){return t.year}))),W=T.domainY||[0,(0,f.Z)(L[1]-L[0]+1).reduce((function(t,e){var n=L[0]+e,r=H.reduce((function(t,e){return t+(e.data.find((function(t){return t.year===n}))||{value:0}).value}),0);return t>r?t:r}),0)],q=(0,v.TT)({type:"linear",domain:L,range:[0,p],padding:[48,20]}),M=(0,v.TT)({type:"linear",domain:[0,W[1]],range:[g,0],padding:[40,40]}),R=(0,f.Z)(L[1]-L[0]+1).map((function(t){return L[0]+t})),U=(0,v.TT)({type:"band",domain:R,range:[48-(p-68)/R.length/2,p-20+(p-68)/R.length/2],padding:[0,0]}),_=(0,s.Z)().x((function(t){return t.x})).y0((function(t){return t.y0})).y1((function(t){return t.y1})),B=H.map((function(t,e){return b(b({},t),{},{sortKey:"Others"===t.subindicator?0:1+e})})).sort((function(t,e){return t.sortKey-e.sortKey})).reduce((function(t,e){if(e.isVisible){var n=function(t,e,n,r){return e.data.map((function(e){var i,a=(null===t||void 0===t||null===(i=t.data)||void 0===i?void 0:i.find((function(t){return t.year===e.year})))||{y1:r(0)};return b(b({},e),{},{x:n(e.year),y0:a.y1,y1:a.y1-(r(0)-r(e.value))})}))}(t.slice(-1)[0],e,q,M);return[].concat((0,r.Z)(t),[b(b({},e),{},{data:n})])}return t}),[]),I=(0,v.So)({scale:q}),N=(0,v.So)({scale:M,ticks:4}),V=b({Others:Z.gray[100],"Biomass & Waste":Z.green[700],Geothermal:Z.purple[600],"Small Hydro":Z.blue[500],Wind:Z.blue[200],"Solar PV":Z.yellow[400]},Z.indicators),A=(0,o.useCallback)((function(t){var e=B.map((function(e){var n=e.data.find((function(e){return e.year===t.year}))||{};return b({name:e.subindicator,unit:e.units},n)})),n=e.reduce((function(t,e){return t+e.value}),0);E(b(b({},t),{},{data:e.map((function(t){return b(b({},t),{},{percentage:Math.round(100/n*t.value*100)/100})})).reverse()}))}),[B,k]),Q=(0,o.useCallback)((function(){E({})}),[]);return(0,x.jsxs)(u.Kq,{spacing:5,children:[(0,x.jsx)(u.X6,{fontSize:"xl",children:"".concat(j.indicator," (in ").concat(D,")")}),(0,x.jsxs)(u.xu,{position:"relative",children:[(0,x.jsx)(u.xu,{position:"absolute",top:0,zIndex:2,p:4,style:{display:F.year?"block":"none",left:F.x-(F.x>p/2?280:0)||0,width:280,pointerEvents:"none"},children:(0,x.jsxs)(u.Kq,{py:3,bg:"white",boxShadow:"lg",borderRadius:"md",border:"0.0625rem solid",borderColor:"gray.25",spacing:2,children:[(0,x.jsxs)(u.xv,{fontWeight:600,lineHeight:"short",px:4,children:["".concat(j.indicator," ").concat(F.year)," ",S&&"[".concat(null!==F&&void 0!==F&&null!==(n=F.data)&&void 0!==n&&n.length?F.data[0].unit:"","]")]}),(0,x.jsx)(u.iz,{borderColor:"gray.100",w:"100%"}),(0,x.jsx)(u.Kq,{spacing:2,px:4,children:F.data&&F.data.length&&F.data.map((function(t){var e,n;return(0,x.jsx)(u.Kq,{spacing:0,children:(0,x.jsxs)(u.Ug,{spacing:4,alignItems:"flex-start",style:{opacity:t.value||t.percentage?1:.3},children:[(0,x.jsx)(u.xu,{w:"1rem",h:"1rem",mt:"0.0625rem",flex:"none",borderRadius:"sm",style:{background:V[t.name],opacity:.75}}),(0,x.jsxs)(u.Kq,{spacing:0,flex:"1",children:[(0,x.jsx)(u.xv,{fontSize:"sm",lineHeight:"shorter",fontWeight:600,textTransform:"capitalize",children:t.name}),!S&&(0,x.jsx)(u.xv,{fontSize:"sm",lineHeight:"shorter",children:"".concat(t.value.toLocaleString("en-US",{maximumFractionDigits:(null===(e="".concat(k).split(".")[1])||void 0===e?void 0:e.length)||1})," ").concat(t.unit)})]}),S?(0,x.jsxs)(u.xv,{fontSize:"xs",lineHeight:"shorter",children:["".concat(t.value.toLocaleString("en-US",{maximumFractionDigits:1===k?0:(null===(n="".concat(k).split(".")[1])||void 0===n?void 0:n.length)||1})),D.length<2?" ".concat(D):""]}):(0,x.jsx)(O,{percentage:t.percentage,value:t.value})]})},t.name)}))})]})}),(0,x.jsx)(u.xu,{fontFamily:"mono",children:(0,x.jsxs)("svg",b(b({},C),{},{children:[I.map((function(t){return(0,x.jsxs)("g",{transform:"translate(0, ".concat(g-40,")"),children:[(0,x.jsx)("line",{x1:t.offset,x2:t.offset,y1:0,y2:10,stroke:Z.gray[100]}),(0,x.jsx)("text",{x:t.offset,y:24,fontSize:"14",textAnchor:"middle",fill:Z.gray[500],children:t.value})]},t.value)})),N.map((function(t,e){return(0,x.jsxs)("g",{transform:"translate(0, 0)",children:[(0,x.jsx)("line",{x1:0,x2:p-20,y1:t.offset,y2:t.offset,stroke:Z.gray[100],strokeDasharray:[3,3]}),(0,x.jsxs)("text",{x:0,y:t.offset-5,fontSize:"14",textAnchor:"start",fill:Z.gray[500],children:[t.value>=1e9?t.value/1e9+"B":t.value>=1e6?t.value/1e6+"M":t.value>=1e3?t.value/1e3+"K":t.value,e===N.length-1?" ".concat(B[0].units||""):""]})]},t.value)})),B.map((function(t,e){return(0,x.jsx)("path",{fill:V[t.subindicator],className:"path",d:_(t.data),stroke:"#FFF",strokeWidth:2,fillOpacity:.75,paintOrder:"stroke fill",onClick:function(){return console.log(j.indicator,t.subindicator,t.data)}},e)})),U.domain().map((function(t){var e=U(t),n=q(t),r=U.bandwidth();return(0,x.jsx)(w,{data:t,x:e,x2:n,w:r,height:g,tooltip:F,onTooltipShow:A,onTooltipHide:Q},t)}))]}))})]})]})},k=function(t){var e=(0,o.useRef)(),n=(0,o.useState)({width:672,height:378}),r=n[0],i=n[1];(0,o.useEffect)((function(){var t=h()((function(){var t=e.current.getBoundingClientRect().width;i({width:t,height:t/16*9})}),500);return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]);var a=(t.data||{}).subindicators;return(0,x.jsx)(u.xu,{ref:e,children:a&&a.length?(0,x.jsx)(S,b(b({},r),t)):null})};function O(t){var e=t.percentage,n=t.value;return(0,x.jsxs)(u.xv,{fontSize:"sm",lineHeight:"shorter",fontWeight:600,children:[n&&e?e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+"%":null,n&&!e?"<0.01%":null,n||e?null:"-"]})}e.Z=(0,o.memo)(k)},793:function(t,e,n){n.d(e,{Q8:function(){return c},UT:function(){return u},TT:function(){return l},So:function(){return d}});var r=n(7294),i=n(9089),a=n(7086),o=n(5046);function c(t){var e=t.width,n=t.height;return{viewBox:"0 0 ".concat(e," ").concat(n)}}function u(t,e,n){return(0,r.useMemo)((function(){return n||(0,i.Z)(t,(function(t){return t[e]}))}),[t,e,n])}var s={linear:a.Z,band:o.Z};function l(t){var e=t.type,n=void 0===e?"linear":e,i=t.domain,a=t.range,o=t.padding,c=void 0===o?[0,0]:o,u=s[n],l=a[0]<=a[1];return(0,r.useCallback)(u().domain(i).range([l?a[0]+c[0]:a[0]-c[0],l?a[1]-c[1]:a[1]+c[1]]),[i,a,n,c])}function d(t){var e=t.scale,n=t.ticks,i=void 0===n?6:n;return(0,r.useMemo)((function(){return e.nice().ticks(i).map((function(t){return{value:t,offset:e(t),line:{}}}))}),[e])}}}]);