import{d as a,z as l,A as s,B as e,C as t,D as i,k as o,l as c,o as n,a as u,w as r,p as d,s as f,q as _,t as m,v as p,x as b,F as k,m as g,y as v,i as z}from"./index-CzDL0q2O.js";import{_ as h}from"./cl-avatar.BF6NFmJl.js";import{_ as j}from"./cl-text.BgGzwGdy.js";import{_ as w}from"./cl-switch.DqeKV5i5.js";import{_ as C,a as x}from"./cl-page.DOOy25Dj.js";import{_ as y}from"./cl-list-item.DgyiYScP.js";import{_ as T}from"./cl-list.D1Qy0Y_i.js";import{u as B,_ as L}from"./_plugin-vue_export-helper.DhhdjX9X.js";import{T as q}from"./tabbar.Dre4ykSu.js";import{u as A}from"./index.CUNcsXYF.js";import"./isBoolean.B7PhcbKY.js";import"./cl-footer.BgsCdE6n.js";const D=L(a({__name:"my",setup(a){const{router:L}=B(),{user:D}=l(),F=A();async function I(){D.token&&await D.get()}const N=s({list:[{icon:"order-paid",label:"待支付",value:1},{icon:"order-not-shipped",label:"未发货",value:2},{icon:"order-received",label:"已发货",value:3},{icon:"order-refund",label:"售后 / 退款",value:4}],toLink(a){F.showToast("订单模块不存在，请在插件市场中下载")}});function U(){F.showToast("财务模块不存在，请在插件市场中下载")}function $(){L.push("/pages/user/set")}function E(){L.push("/pages/user/edit")}function G(){g.get("cool-msg")?L.push("/uni_modules/cool-msg/pages/list"):F.showToast("消息模块不存在，请在插件市场中下载")}return e((async()=>{await I(),t()})),i((()=>{I()})),(a,l)=>{const s=v,e=z,t=o(c("cl-avatar"),h),i=o(c("cl-text"),j),g=o(c("cl-switch"),w),B=o(c("cl-icon"),C),L=o(c("cl-list-item"),y),A=o(c("cl-list"),T),F=o(c("cl-page"),x);return n(),u(F,{"status-bar-background":"transparent"},{default:r((()=>[d(e,{class:"page-my"},{default:r((()=>[d(e,{class:"header"},{default:r((()=>[d(e,{class:"icon",onClick:E},{default:r((()=>[d(s,{class:"cl-icon-edit"})])),_:1}),d(e,{class:"icon",onClick:$},{default:r((()=>[d(s,{class:"cl-icon-set"})])),_:1}),d(e,{class:"icon",onClick:G},{default:r((()=>[d(s,{class:"cl-icon-msg"})])),_:1})])),_:1}),d(e,{class:"user",onClick:E},{default:r((()=>{var a;return[d(t,{src:null==(a=f(D).info)?void 0:a.avatarUrl,size:100},null,8,["src"]),d(e,{class:"det"},{default:r((()=>[d(i,{size:32,block:"",margin:[0,0,8,0]},{default:r((()=>{var a;return[_(m((null==(a=f(D).info)?void 0:a.nickName)||"未登录"),1)]})),_:1}),d(i,{size:24,color:"info"},{default:r((()=>[_("写签名会更容易获得别人的关注哦～")])),_:1})])),_:1})]})),_:1}),d(e,{class:"count"},{default:r((()=>[d(e,{class:"item"},{default:r((()=>[d(s,null,{default:r((()=>[_("171")])),_:1}),d(s,null,{default:r((()=>[_("总点击")])),_:1})])),_:1}),d(e,{class:"item"},{default:r((()=>[d(s,null,{default:r((()=>[_("24")])),_:1}),d(s,null,{default:r((()=>[_("赞")])),_:1})])),_:1}),d(e,{class:"item"},{default:r((()=>[d(s,null,{default:r((()=>[_("89")])),_:1}),d(s,null,{default:r((()=>[_("关注")])),_:1})])),_:1}),d(e,{class:"item"},{default:r((()=>[d(s,null,{default:r((()=>[_("653")])),_:1}),d(s,null,{default:r((()=>[_("粉丝")])),_:1})])),_:1})])),_:1}),d(e,{class:"switch"},{default:r((()=>[d(e,{class:"item"},{default:r((()=>[d(i,{size:28,bold:"",block:"",margin:[0,0,10,0]},{default:r((()=>[_("接单模式")])),_:1}),d(i,{size:24,color:"info"},{default:r((()=>[_("已关闭")])),_:1}),d(e,{class:"inner"},{default:r((()=>[d(g)])),_:1})])),_:1}),d(e,{class:"item"},{default:r((()=>[d(i,{size:28,bold:"",block:"",margin:[0,0,10,0]},{default:r((()=>[_("消息通知")])),_:1}),d(i,{size:24,color:"info"},{default:r((()=>[_("已开启")])),_:1}),d(e,{class:"inner"},{default:r((()=>[d(g)])),_:1})])),_:1})])),_:1}),d(e,{class:"status"},{default:r((()=>[d(i,{block:"",size:30,bold:""},{default:r((()=>[_("我的订单")])),_:1}),d(e,{class:"list"},{default:r((()=>[(n(!0),p(k,null,b(N.list,((a,l)=>(n(),u(e,{class:"item",key:l,onClick:l=>N.toLink(a.value)},{default:r((()=>[d(B,{name:a.icon,size:50},null,8,["name"]),d(i,{margin:[18,0,0,0],size:24,color:"info"},{default:r((()=>[_(m(a.label),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),d(e,{class:"menu"},{default:r((()=>[d(A,{radius:24,border:!1},{default:r((()=>[d(L,{label:"我的账单",onClick:U},{icon:r((()=>[d(B,{name:"bill",size:40})])),_:1}),d(L,{label:"观看历史"},{icon:r((()=>[d(B,{name:"time",size:40})])),_:1}),d(L,{label:"数据看板"},{icon:r((()=>[d(B,{name:"chart-bar",size:40})])),_:1}),d(L,{label:"邀请好友"},{icon:r((()=>[d(B,{name:"share",size:40})])),_:1})])),_:1}),d(A,{radius:24,border:!1},{default:r((()=>[d(L,{label:"设置",onClick:$},{icon:r((()=>[d(B,{name:"set",size:40})])),_:1})])),_:1})])),_:1})])),_:1}),d(q)])),_:1})}}}),[["__scopeId","data-v-9c3a18bc"]]);export{D as default};