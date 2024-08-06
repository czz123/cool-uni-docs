import{d as e,A as l,aa as a,c as t,k as o,l as s,o as d,a as c,w as i,p as r,q as n,t as u,v as p,F as m,n as f,G as _,r as b,x as v,b as h,O as y,y as k,i as w,ad as x,f as g,a6 as V}from"./index-BvXgjcLf.js";import{g as E,b as C,a as j}from"./cl-page.ArvafLTY.js";import{_ as I}from"./cl-col.D1hP9mgR.js";import{_ as $}from"./cl-row.CR5iQSrK.js";import{_ as A}from"./_plugin-vue_export-helper.DloEWgbh.js";import{_ as B}from"./cl-card.fJE_TL2t.js";import{_ as S}from"./cl-input.CoHubX3q.js";import"./cl-text.C-vDcahG.js";const U=A(e({name:"cl-filter-item",props:{prop:{type:String,required:!0},type:{type:String,default:"switch"},label:String,disabled:Boolean,multiple:Boolean,theme:{type:String,default:"default"},gridCols:{type:Number,default:4},options:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:o}){const s=E("cl-filter-bar",["form","setExpand","update","close","collapse"],["collapse","clear"]),d=l({name:"",list:[],isExpand:!1});a((()=>e.options),(e=>{d.list=e}),{immediate:!0});const c=t((()=>{var l;const a=null==(l=s.value)?void 0:l.form[e.prop];if("dropdown"===e.type)if(!e.multiple){const e=d.list.find((e=>e.value==a));e&&(d.name=e.label)}return a})),i=t((()=>[{"is-switch":c.value&&"switch"==e.type,"is-expand":d.isExpand,"is-only":!s.value,"is-disabled":e.disabled}])),r=t((()=>"grid"==e.theme?`calc(${100/e.gridCols}% - 20rpx)`:"auto"));function n(l){if(l==e.prop)return!1;d.isExpand&&(d.isExpand=!1,s.value&&s.value.setExpand(!1))}function u(l,a){o("change",l),s.value&&s.value.update({prop:e.prop,value:l,action:a})}return{value:c,classList:i,dropdown:d,itemWidth:r,checkItem:function(l){if(l.disabled)return!1;e.multiple?l.checked=!l.checked:(l.checked?(l.checked=!1,d.name=e.label||"",u(void 0)):(d.list.forEach((e=>{e.checked=e.value==l.value})),d.name=l.label,u(l.value)),n())},tapItem:function(){if(e.disabled)return!1;switch(s.value&&s.value.collapse(e.prop),e.type){case"dropdown":if(d.isExpand)n();else{let l=e.multiple?c.value||[]:[c.value];d.list.map((a=>{a.checked=l.includes(a.value),a.checked&&(e.multiple||(d.name=a.label))})),d.isExpand||(d.isExpand=!0,s.value&&s.value.setExpand(!0))}break;case"switch":u(!c.value);break;case"order":c.value?"asc"==c.value?u("desc"):"desc"==c.value&&u(""):u("asc")}},confirm:function(){u(d.list.filter((e=>e.checked)).map((e=>e.value))),n()},clear:function(){e.multiple?u([],"clear"):u(void 0,"clear"),d.name=e.label||"",n()},collapse:n}}}),[["render",function(e,l,a,t,g,V){const E=k,j=w,A=x,B=o(s("cl-button"),C),S=o(s("cl-col"),I),U=o(s("cl-row"),$);return d(),c(j,{class:f(["cl-filter-item",e.classList]),onClick:e.tapItem},{default:i((()=>[r(E,{class:"cl-filter-item__label"},{default:i((()=>[n(u(e.dropdown.name||e.label),1)])),_:1}),"dropdown"==e.type?(d(),c(E,{key:0,class:"cl-icon-caret-bottom cl-filter-item__dropdown-icon"})):"switch"==e.type?(d(),p(m,{key:1},[],64)):"order"==e.type?(d(),c(j,{key:2,class:f(["cl-filter-item__order",[`is-${e.value}`]])},{default:i((()=>[r(E,{class:"cl-filter-item__order-asc"}),r(E,{class:"cl-filter-item__order-desc"})])),_:1},8,["class"])):_("",!0),r(j,{class:f(["cl-filter-item__dropdown-box",[`theme-${e.theme}`]])},{default:i((()=>[b(e.$slots,"dropdown",{},(()=>[e.dropdown.list?(d(),p(m,{key:0},[e.dropdown.list.length>0?(d(),p(m,{key:0},[r(A,{class:"cl-filter-item__dropdown-box__list","scroll-y":""},{default:i((()=>[(d(!0),p(m,null,v(e.dropdown.list,((l,a)=>(d(),c(j,{class:f(["cl-filter-item__dropdown-box__item",[l.checked?"is-checked":"",l.disabled?"is-disabled":""]]),style:h({width:e.itemWidth}),key:a,onClick:y((a=>e.checkItem(l)),["stop"])},{default:i((()=>[r(E,{class:"cl-filter-item__dropdown-box__label"},{default:i((()=>[n(u(l.label),1)])),_:2},1024),r(E,{class:"cl-icon-check"})])),_:2},1032,["class","style","onClick"])))),128))])),_:1}),e.multiple?(d(),c(j,{key:0,class:"cl-filter-item__dropdown-box__btn"},{default:i((()=>[r(U,{gutter:30},{default:i((()=>[r(S,{span:12},{default:i((()=>[r(B,{fill:"",round:"",onClick:e.clear},{default:i((()=>[n("清空")])),_:1},8,["onClick"])])),_:1}),r(S,{span:12},{default:i((()=>[r(B,{fill:"",round:"",type:"primary",onClick:e.confirm},{default:i((()=>[n("确认")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})):_("",!0)],64)):b(e.$slots,"empty",{key:1},(()=>[r(j,{class:"cl-filter-item__dropdown-box__empty"},{default:i((()=>[n(" 暂无数据 ")])),_:1})]))],64)):_("",!0)]))])),_:3},8,["class"])])),_:3},8,["class","onClick"])}]]);const z=A(e({name:"cl-filter-bar",props:{modelValue:{type:Object,default:()=>({})},num:Number},setup(e,{emit:l}){const{proxy:t}=V(),o=g(e.modelValue);a((()=>e.modelValue),(e=>{o.value=e}),{immediate:!0,deep:!0});let s=null;const d=g(!1),c=g(1);function i(e){clearTimeout(s),e?c.value=999:s=setTimeout((()=>{c.value=1}),300),d.value=e}function r(e){t.__children.forEach((l=>{l.collapse(e)}))}return{form:o,zIndex:c,isExpand:d,setExpand:i,collapse:r,close:function(){i(!1),r()},clear:function(){t.__children.forEach((e=>{e.clear()})),l("update:modelValue",o.value),l("clear")},update:function(e){o.value[e.prop]=e.value,"clear"!=e.action&&(l("update:modelValue",o.value),l("change",e))}}}}),[["render",function(e,l,a,t,o,s){const n=w;return d(),c(n,{class:f(["cl-filter-bar__wrap",[{"is-expand":e.isExpand}]])},{default:i((()=>[r(n,{class:"cl-filter-bar",style:h({zIndex:e.zIndex})},{default:i((()=>[b(e.$slots,"default")])),_:3},8,["style"]),r(n,{class:"cl-filter-bar__mask",onClick:e.close,onTouchmove:l[0]||(l[0]=y((()=>{}),["stop","prevent"]))},null,8,["onClick"])])),_:3},8,["class"])}]]),T=A(e({__name:"filter-bar",setup(e){const l=g({d1:[]});return(e,a)=>{const t=o(s("cl-filter-item"),U),u=o(s("cl-filter-bar"),z),p=o(s("cl-card"),B),m=o(s("cl-input"),S),f=o(s("cl-button"),C),_=w,b=o(s("cl-page"),j);return d(),c(b,{padding:20},{default:i((()=>[r(p,{label:"基础用法"},{default:i((()=>[r(u,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),num:4},{default:i((()=>[r(t,{label:"排序",prop:"order",type:"order"}),r(t,{label:"开关",prop:"switch",type:"switch"})])),_:1},8,["modelValue"])])),_:1}),r(p,{label:"展开列表"},{default:i((()=>[r(u,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e)},{default:i((()=>[r(t,{label:"多选",prop:"d1",type:"dropdown",multiple:"",options:[{label:"A",value:1},{label:"B",value:2}]}),r(t,{label:"单选",prop:"d2",type:"dropdown",options:[{label:"A",value:1},{label:"B",value:2}]})])),_:1},8,["modelValue"])])),_:1}),r(p,{label:"展开宫格"},{default:i((()=>[r(u,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value=e)},{default:i((()=>[r(t,{label:"多选",prop:"d1",type:"dropdown",multiple:"",options:[{label:"A",value:1},{label:"B",value:2}],theme:"grid"}),r(t,{label:"单选",prop:"d2",type:"dropdown",options:[{label:"A",value:1},{label:"B",value:2}],theme:"grid"})])),_:1},8,["modelValue"])])),_:1}),r(p,{label:"展开自定义"},{default:i((()=>[r(u,{modelValue:l.value,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value=e)},{default:i((()=>[r(t,{label:"输入框",prop:"input",type:"dropdown"},{dropdown:i((()=>[r(_,{class:"cs",onClick:a[3]||(a[3]=y((()=>{}),["stop"]))},{default:i((()=>[r(m),r(f,{margin:[0,0,0,20]},{default:i((()=>[n("搜索")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-836c0aa3"]]);export{T as default};