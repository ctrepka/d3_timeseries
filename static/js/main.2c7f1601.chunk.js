(this.webpackJsonpd3_timeseries=this.webpackJsonpd3_timeseries||[]).push([[0],{26:function(e,t,n){e.exports=n(34)},31:function(e,t,n){},32:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),o=(n(31),n(4)),m=(n(32),n(33),{TimeStamp:[{StartTime:"2020-04-06T21:25:05+00:00",EndTime:"2020-04-06T21:25:11+00:00",parentProject:{Name:"Retesting Refetch Query"}},{StartTime:"2020-04-06T21:27:19+00:00",EndTime:"2020-04-06T21:27:22+00:00",parentProject:{Name:"Retesting Refetch Query"}},{StartTime:"2020-04-05T13:57:56.779249+00:00",EndTime:"2020-04-05T15:08:31+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-05T16:05:45+00:00",EndTime:"2020-04-05T16:05:53+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-05T19:05:16+00:00",EndTime:"2020-04-05T19:05:19+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-05T19:06:16+00:00",EndTime:"2020-04-05T19:06:23+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-05T19:03:38+00:00",EndTime:"2020-04-05T19:06:57+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-05T19:31:17+00:00",EndTime:"2020-04-05T19:36:07+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-05T19:11:03+00:00",EndTime:"2020-04-05T19:36:24+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-05T19:31:44+00:00",EndTime:"2020-04-05T19:37:13+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-05T20:16:53+00:00",EndTime:"2020-04-05T22:35:58+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-05T22:37:25+00:00",EndTime:"2020-04-05T23:26:55+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-05T23:26:58+00:00",EndTime:"2020-04-05T23:51:06+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-06T21:28:02+00:00",EndTime:"2020-04-06T21:28:09+00:00",parentProject:{Name:"Retesting Refetch Query"}},{StartTime:"2020-04-07T14:25:50+00:00",EndTime:"2020-04-07T14:40:52+00:00",parentProject:{Name:"Retesting Refetch Query"}},{StartTime:"2020-04-07T14:43:19+00:00",EndTime:"2020-04-07T14:43:35+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-07T16:05:02+00:00",EndTime:"2020-04-07T16:06:07+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-07T16:32:51+00:00",EndTime:"2020-04-07T16:33:10+00:00",parentProject:{Name:"Retesting Refetch Query"}},{StartTime:"2020-04-07T16:33:19+00:00",EndTime:"2020-04-07T16:34:28+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-06T00:24:19+00:00",EndTime:"2020-04-06T00:25:03+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-06T00:24:44+00:00",EndTime:"2020-04-06T00:25:21+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-06T05:03:48+00:00",EndTime:"2020-04-06T05:03:54+00:00",parentProject:{Name:"Clocke App"}},{StartTime:"2020-04-06T21:24:34+00:00",EndTime:"2020-04-06T21:24:52+00:00",parentProject:{Name:"Clocke App"}}]}),T=n(1),p=function(e){var t=e.data,n=e.highlight,c=Object(a.useRef)(),i=Object(a.useRef)(),m=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=e.current,n=new ResizeObserver((function(e){e.forEach((function(e){c(e.contentRect)}))}));return n.observe(t),function(){n.unobserve(t)}}),[e]),r}(i);return Object(a.useEffect)((function(){var e=Object(T.f)(c.current);if(m){var a=Object(T.c)(t,(function(e){return new Date(e.StartTime)})),r=Object(T.b)(t,(function(e){return new Date(e.StartTime)})),i=Object(T.e)().domain([a,r]).range([0,m.width]),o=(Object(T.c)(t,(function(e){return(new Date(e.EndTime)-new Date(e.StartTime))/1e3/60})),Object(T.b)(t,(function(e){return(new Date(e.EndTime)-new Date(e.StartTime))/1e3/60}))),p=Object(T.d)().domain([o,0]).range([0,m.height]);e.selectAll(".project").data(t).join("line").attr("class","project").attr("stroke",(function(e){return e.parentProject.Name===n?"blue":"black"})).attr("x1",(function(e){return i(new Date(e.StartTime))})).attr("y1",m.height).attr("x2",(function(e){return i(new Date(e.StartTime))})).attr("y2",(function(e){return p((new Date(e.EndTime)-new Date(e.StartTime))/1e3/60)}));var l=Object(T.a)(i);e.select(".x-axis").style("transform","translateY(".concat(m.height,"px)")).call(l)}}),[t,m,n]),r.a.createElement("div",{ref:i,style:{marginBottom:"2rem"}},r.a.createElement("svg",{ref:c},r.a.createElement("g",{className:"x-axis"})))};var l=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(m),T=Object(o.a)(i,2),l=T[0],u=(T[1],l.TimeStamp.map((function(e){return e.parentProject.Name})).filter((function(e,t,n){return n.indexOf(e)===t})));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"TimeStamps by Project Timeline"),r.a.createElement(p,{data:l.TimeStamp,highlight:n}),r.a.createElement("h2",null,"Highlight a Project"),r.a.createElement("select",{value:n,onChange:function(e){return c(e.target.value)}},r.a.createElement("option",null,"Select a Project"),u.map((function(e){return r.a.createElement("option",{key:e},e)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.2c7f1601.chunk.js.map