"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"alert_email",title:"Alert email notification",sidebar_label:"Alert email notification",keywords:["open source monitoring system","open source alerter","open source email notification"]},o=void 0,l={unversionedId:"help/alert_email",id:"help/alert_email",title:"Alert email notification",description:"After the threshold is triggered send alarm information and notify the recipient by email.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/alert_email.md",sourceDirName:"help",slug:"/help/alert_email",permalink:"/en/docs/help/alert_email",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/alert_email.md",tags:[],version:"current",frontMatter:{id:"alert_email",title:"Alert email notification",sidebar_label:"Alert email notification",keywords:["open source monitoring system","open source alerter","open source email notification"]},sidebar:"docs",previous:{title:"Threshold trigger expression",permalink:"/en/docs/help/alert_threshold_expr"},next:{title:"Alert webHook notification",permalink:"/en/docs/help/alert_webhook"}},c={},s=[{value:"Operation steps",id:"operation-steps",level:3},{value:"Email notification common issues",id:"email-notification-common-issues",level:3}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and notify the recipient by email.      ")),(0,i.kt)("h3",{id:"operation-steps"},"Operation steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select email notification method\u3011")," ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"email",src:n(48367).Z,width:"3812",height:"1232"}),"   "),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u3010Get verification code\u3011-> \u3010Enter email verification code\u3011-> \u3010Confirm\u3011"),(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("img",{alt:"email",src:n(55597).Z,width:"3752",height:"1284"}),"    ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"email",src:n(7845).Z,width:"3398",height:"1460"}),"   "),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011")," ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."),"  ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"email",src:n(96862).Z,width:"3756",height:"1288"}),"    "),(0,i.kt)("h3",{id:"email-notification-common-issues"},"Email notification common issues"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hertzbeat deployed on its own intranet cannot receive email notifications   "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Hertzbeat needs to configure its own mail server, not tancloud. Please confirm whether you have configured its own mail server in application.yml     "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cloud environment tancloud cannot receive email notification  "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Please check whether there is any triggered alarm information in the alarm center.",(0,i.kt)("br",{parentName:"p"}),"\n","Please check whether the mailbox is configured correctly and whether the alarm strategy association is configured.",(0,i.kt)("br",{parentName:"p"}),"\n","Please check whether the warning email is blocked in the trash can of the mailbox.     ")))),(0,i.kt)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}m.isMDXComponent=!0},48367:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/alert-notice-1-97b12cf267f0d5737ce04a5e67d04a66.png"},55597:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/alert-notice-2-06cca23b9fdf814816dcd34e96b5c67b.png"},7845:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/alert-notice-3-c18a90e98e1af7ed78bba845ca5b535f.png"},96862:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"}}]);