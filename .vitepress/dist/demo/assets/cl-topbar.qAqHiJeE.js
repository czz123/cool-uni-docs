import{g as a,d as t,f as e,c as s,a4 as o,ae as l,af as c,ag as r,o as i,a as n,w as p,p as d,b as u,r as f,q as _,t as b,G as k,n as g,y as h,i as y}from"./index-BsPE-n5_.js";import{_ as x}from"./_plugin-vue_export-helper.B5Vkt9du.js";const{statusBarHeight:m}=a();const w=x(t({name:"cl-topbar",props:{title:String,description:String,border:{type:Boolean,default:!0},fixed:Boolean,withMp:Boolean,showBack:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#fff"},color:{type:String,default:"#000"},backPath:String,zIndex:{type:Number,default:99}},setup(a,{emit:t}){const i=e(!1),n=s((()=>a.fixed?`${m}px`:0));return o((()=>{const a=l();i.value=1==a.length})),{isFirst:i,paddingTop:n,back:function(){i.value?a.backPath?r.push({path:a.backPath,mode:"reLaunch"}):r.home():r.back()},tapTitle:function(a){t("title",a)},isIos:c}}}),[["render",function(a,t,e,s,o,l){const c=h,r=y;return i(),n(r,{class:g(["cl-topbar",{"is-border":a.border,"is-fixed":a.fixed,"is-ios":a.isIos,"with-mp":a.withMp}]),style:u({backgroundColor:a.backgroundColor,color:a.color,zIndex:a.zIndex,paddingTop:a.paddingTop})},{default:p((()=>[d(r,{class:"cl-topbar__content",style:u({color:a.color})},{default:p((()=>[f(a.$slots,"default",{},(()=>[d(r,{class:"cl-topbar__text",onClick:a.tapTitle},{default:p((()=>[a.title?(i(),n(c,{key:0,class:"cl-topbar__title"},{default:p((()=>[_(b(a.title),1)])),_:1})):k("",!0),a.description?(i(),n(c,{key:1,class:"cl-topbar__description"},{default:p((()=>[_(b(a.description),1)])),_:1})):k("",!0)])),_:1},8,["onClick"])]))])),_:3},8,["style"]),d(r,{class:"cl-topbar__prepend"},{default:p((()=>[a.showBack?(i(),n(r,{key:0,class:"cl-topbar__icon",onClick:a.back},{default:p((()=>[a.isFirst?(i(),n(c,{key:0,class:"cl-icon-home"})):(i(),n(c,{key:1,class:"cl-icon-arrow-left"}))])),_:1},8,["onClick"])):k("",!0),f(a.$slots,"prepend")])),_:3}),d(r,{class:"cl-topbar__append"},{default:p((()=>[f(a.$slots,"append")])),_:3})])),_:3},8,["class","style"])}]]);export{w as _};