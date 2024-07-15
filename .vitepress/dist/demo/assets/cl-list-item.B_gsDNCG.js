import{d as s,x as e,p as t,a6 as l,a0 as o,P as a,a2 as i,c as n,e as c,w as r,f as u,J as d,R as p,A as f,g as m,t as h,z as _,l as w,k as y}from"./index-BXs9N0aO.js";import{g as b,j as x,u as v}from"./cl-page.D0l32468.js";import{i as g}from"./isBoolean.XkqdrK9A.js";import{_ as k}from"./_plugin-vue_export-helper.D4XvEQHf.js";const T=k(s({name:"cl-list-item",props:{label:String,type:String,justify:String,swipe:String,disabled:{type:Boolean,default:null},border:{type:Boolean,default:null},arrowIcon:{type:Boolean,default:!0}},setup(s,{slots:n,emit:c}){const r=i(),u=b("cl-list",["justify","border","disabled"]),d=e((()=>{var e;return g(s.disabled)?s.disabled:null==(e=u.value)?void 0:e.disabled})),p=e((()=>{var e;return[{"is-disabled":d.value,"is-append":!!n.append,"is-swipe":!!s.swipe,"is-border":g(s.border)?s.border:null==(e=u.value)?void 0:e.border}]})),f=e((()=>{var e;const t=[];return s.type&&t.push(`is-color-${s.type}`),[`is-color-${s.type}`,`is-justify-${s.justify||(null==(e=u.value)?void 0:e.justify)||"end"}`]})),m=t({start:0,end:0,x:0,maxX:0,direction:"left",lock:!0}),h=t({width:0}),_=e((()=>s.swipe?`translateX(${m.x}px)`:"none"));function w(){if(s.swipe){a().in(null==r?void 0:r.proxy).select(`.cl-list-item__menu-${s.swipe}`).boundingClientRect((e=>{e&&(h.width=e.width||0,m.maxX=h.width*("right"===s.swipe?-1:1))})).exec()}}return l((()=>s.swipe),w),o((()=>{w()})),{itemClass:p,contentClass:f,touch:m,menu:h,transform:_,restore:function(s){m.start=0,m.end=0,m.lock=!0,m.x=0,s&&setTimeout((()=>{s()}),300)},onTouchStart:function(e){s.swipe&&(m.start=e.touches[0].pageX,m.lock=!1)},onTouchMove:function(e){const{start:t,end:l,lock:o,maxX:a}=m;if(!o){const o=e.touches[0].pageX-t;m.direction=o>0?"right":"left";let i=l+o;"left"==s.swipe&&(i>a&&(i=a),i<0&&(i=0)),"right"==s.swipe&&(i<a&&(i=a),i>0&&(i=0)),m.x=i}},onTouchEnd:function(){const{direction:e,x:t,end:l,lock:o,maxX:a}=m,i=h.width/2>50?50:h.width/2;o||(Math.abs(t-l)>i?(e===s.swipe?m.x=0:m.x=a,m.end=m.x):m.x=0===l?0:a,m.lock=!0)},...x(c),...v()}}}),[["render",function(s,e,t,l,o,a){const i=w,b=y;return n(),c(i,{class:_(["cl-list-item",[s.itemClass]]),style:d([s.baseStyle]),onTouchstart:s.onTouchStart,onTouchmove:s.onTouchMove,onTouchend:s.onTouchEnd,onClick:s.tap},{default:r((()=>[u(i,{class:"cl-list-item__swiper",style:d({transform:s.transform})},{default:r((()=>[u(i,{class:"cl-list-item__container"},{default:r((()=>[s.$slots.icon?(n(),c(i,{key:0,class:"cl-list-item__icon"},{default:r((()=>[p(s.$slots,"icon")])),_:3})):f("",!0),s.label&&"true"!=s.label?(n(),c(b,{key:1,class:"cl-list-item__label"},{default:r((()=>[m(h(s.label),1)])),_:1})):f("",!0),u(i,{class:_(["cl-list-item__content",s.contentClass])},{default:r((()=>[p(s.$slots,"default")])),_:3},8,["class"]),u(i,{class:"cl-list-item__append"},{default:r((()=>[p(s.$slots,"append",{},(()=>[s.arrowIcon?(n(),c(b,{key:0,class:"cl-icon-arrow-right"})):f("",!0)]))])),_:3})])),_:3}),s.swipe?(n(),c(i,{key:0,class:_([`cl-list-item__menu-${s.swipe}`])},{default:r((()=>[p(s.$slots,"menu")])),_:3},8,["class"])):f("",!0)])),_:3},8,["style"])])),_:3},8,["class","style","onTouchstart","onTouchmove","onTouchend","onClick"])}]]);export{T as _};