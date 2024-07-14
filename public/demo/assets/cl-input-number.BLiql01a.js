import{d as e,r as u,a6 as a,x as l,aG as s,ba as n,c as i,e as t,w as o,f as m,g as c,t as d,A as p,J as r,z as b,k as v,l as f,aK as _}from"./index-BXs9N0aO.js";import{k as x,p as y}from"./cl-page.D0l32468.js";import{_ as k}from"./_plugin-vue_export-helper.D4XvEQHf.js";const g=k(e({name:"cl-input-number",props:{modelValue:[String,Number],step:{type:Number,default:1},max:{type:Number,default:100},min:{type:Number,default:0},precision:Number,disabled:Boolean,unit:String,inputStyle:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:i}){const{disabled:t}=x(),o=u(0);a((()=>e.modelValue),r,{immediate:!0}),a((()=>e.max),b),a((()=>e.min),b);const m=l((()=>e.precision?"digit":"number")),c=l((()=>t.value||e.disabled)),d=l((()=>void 0===e.max||o.value<e.max)),p=l((()=>void 0===e.min||o.value>e.min));function r(u){void 0===u&&(u=o.value),s(u)&&(u=Number(u)),n(u)&&(u=Number(u.toFixed(e.precision||0))),u<e.min&&(u=e.min),u>e.max&&(u=e.max),e.min>e.max&&(u=e.max),o.value=u}function b(){r(),i("update:modelValue",o.value),i("change",o.value)}const v=u(!1);return{value:o,isDisabled:c,isPlus:d,isMinus:p,inputType:m,onPlus:function(){c.value||(o.value+=e.step,o.value>e.max&&(o.value=e.max),b())},onMinus:function(){c.value||(o.value-=e.step,o.value<e.min&&(o.value=e.min),b())},onBlur:function(){v.value=!1,b()},onFocus:function(){v.value=!0},isFocus:v,parseRpx:y}}}),[["render",function(e,u,a,l,s,n){const x=v,y=f,k=_;return i(),t(y,{class:b(["cl-input-number",{"is-disabled":e.isDisabled,"disabled-plus":!e.isPlus,"disabled-minus":!e.isMinus}])},{default:o((()=>[m(y,{class:"cl-input-number__minus",onClick:e.onMinus},{default:o((()=>[m(x,{class:"cl-icon-minus"})])),_:1},8,["onClick"]),m(y,{class:"cl-input-number__value",onClick:e.onFocus},{default:o((()=>[e.unit?(i(),t(x,{key:0,class:"unit"},{default:o((()=>[c(d(e.unit),1)])),_:1})):p("",!0),m(x,{class:"num"},{default:o((()=>[c(d(e.value),1)])),_:1}),e.unit?(i(),t(x,{key:1,class:"unit"},{default:o((()=>[c(d(e.unit),1)])),_:1})):p("",!0),m(k,{type:e.inputType,modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=u=>e.value=u),disabled:e.isDisabled,focus:e.isFocus,style:r([e.inputStyle]),onBlur:e.onBlur},null,8,["type","modelValue","disabled","focus","style","onBlur"])])),_:1},8,["onClick"]),m(y,{class:"cl-input-number__plus",onClick:e.onPlus},{default:o((()=>[m(x,{class:"cl-icon-plus"})])),_:1},8,["onClick"])])),_:1},8,["class"])}]]);export{g as _};
