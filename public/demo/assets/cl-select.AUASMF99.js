import{P as e,_ as a}from"./cl-select-inner.CmcS0Bxz.js";import{d as l,r as n,x as o,a6 as t,a3 as r,a as u,b as s,c as d,e as i,w as c,R as p,f as m,b0 as g}from"./index-BXs9N0aO.js";import{p as f,i as v}from"./cl-page.D0l32468.js";import{_ as b}from"./_plugin-vue_export-helper.D4XvEQHf.js";const h=b(l({name:"cl-select",props:{modelValue:null,mode:{type:String,default:"selector"},options:{type:Array,default:()=>[]},labelKey:{type:String,default:"label"},valueKey:{type:String,default:"value"},separator:{type:String,default:"/"},fields:{type:String,default:"day"},start:String,end:String,defaultFirstOption:{type:Boolean,default:!0},setOptionsIsParseValue:Boolean,...e},emits:["update:modelValue","confirm","change","column-change","cancel"],setup(e,{emit:a}){const l=n(),u=n(""),s=o((()=>"region"==e.mode?"":e.labelKey));function d(a){l.value=(()=>{switch(e.mode){case"selector":return e.options.findIndex((l=>String(l[e.valueKey])==String(a)));case"multiSelector":return(r(a)?a:[a]).map(((a,l)=>e.options[l].findIndex((l=>String(l[e.valueKey])==String(a)))));default:return a}})(),u.value=(()=>{switch(e.mode){case"selector":return e.options[l.value]?e.options[l.value][e.labelKey]:"";case"multiSelector":return l.value.filter((e=>e>=0)).map(((a,l)=>e.options[l][a][e.labelKey])).join(e.separator);case"region":console.warn("请使用 cl-select-region 代替");default:return l.value}})()}return t((()=>e.modelValue),d,{immediate:!0}),t((()=>e.options),(n=>{e.setOptionsIsParseValue||d(e.modelValue),!v(n)&&e.defaultFirstOption&&(void 0===l.value||l.value<0||""===l.value||null===l.value)&&a("update:modelValue",n[0][e.valueKey])}),{immediate:!0}),{index:l,text:u,rangeKey:s,parse:d,onChange:function({detail:l}){if(l.value<0||void 0===l.value)return!1;let n=null,o=null;switch(e.mode){case"selector":n=e.options[l.value],o=n?n[e.valueKey]:null;break;case"multiSelector":n=l.value.map((e=>e<0?0:e)).map(((a,l)=>e.options[l][a])),o=n.map((a=>a[e.valueKey]));break;default:o=l.value}a("update:modelValue",o),a("confirm",n),a("change",o)},onColumnChange:function({detail:e}){l.value=l.value.map(((a,l)=>l<e.column?a:l===e.column?e.value:0)),a("column-change",{...e,selects:l.value})},onCancel:function(){a("cancel")},parseRpx:f}}}),[["render",function(e,l,n,o,t,r){const f=u(s("cl-select-inner"),a),v=g;return d(),i(v,{class:"cl-select__wrap",mode:e.mode,value:e.index,range:e.options,"range-key":e.rangeKey,disabled:e.disabled,end:e.end,start:e.start,fields:e.fields,onChange:e.onChange,onColumnchange:e.onColumnChange,onCancel:e.onCancel},{default:c((()=>[p(e.$slots,"default",{label:e.text,value:e.index},(()=>[m(f,{height:e.height,placeholder:e.placeholder,disabled:e.disabled,border:e.border,round:e.round,backgroundColor:e.backgroundColor,borderRadius:e.borderRadius,arrowIcon:e.arrowIcon,padding:e.padding,text:e.text},null,8,["height","placeholder","disabled","border","round","backgroundColor","borderRadius","arrowIcon","padding","text"])]))])),_:3},8,["mode","value","range","range-key","disabled","end","start","fields","onChange","onColumnchange","onCancel"])}]]);export{h as _};
