import{_ as e}from"./cl-input.CAOkH06t.js";import{d as l,bc as a,r as o,p as u,a as r,b as t,c as p,e as s,w as m,f as d,i as c,j as i,F as n,g as f,l as v,t as b}from"./index-BXs9N0aO.js";import{_,a as V}from"./cl-form.DNN7q_TV.js";import{_ as j}from"./cl-select-date.C9M5750X.js";import{_ as g}from"./cl-select.AUASMF99.js";import{_ as y}from"./cl-input-number.BLiql01a.js";import{_ as x}from"./cl-checkbox.BVl_dMIM.js";import{_ as k}from"./cl-checkbox-group.DjzN2qn4.js";import{_ as U,a as h}from"./cl-radio-group.HbfrBz9c.js";import{_ as q}from"./cl-upload.Iht5BGXp.js";import{_ as z}from"./cl-textarea.DbcPJC_l.js";import{_ as w,b as B,a as C}from"./cl-page.D0l32468.js";import{_ as F}from"./cl-card.CShwl3e9.js";import{_ as T}from"./cl-footer.hU_hW93e.js";import{u as A}from"./index.BeCewKBR.js";import"./_plugin-vue_export-helper.D4XvEQHf.js";import"./isBoolean.XkqdrK9A.js";import"./cloneDeep.CYJ2asS6.js";import"./cl-select-inner.CmcS0Bxz.js";import"./cl-select-popup.BRwefpLG.js";import"./cl-empty.Db0daYvH.js";import"./range.BgkBCZH6.js";import"./cl-progress.DdIS5RSE.js";import"./index.B5fNUyBF.js";import"./cl-text.FIltvNqU.js";const D=l({__name:"form",setup(l){a((e=>{}));const D=A(),Y=o({name:"",type:void 0,date:void 0,area:[0,1],source:0,num:5,remark:"",cover:"",pics:[],company:""}),Z=u({name:{required:!0,message:"活动名称不能为空"},type:{required:!0,message:"活动类型不能为空"},date:{required:!0,message:"活动时间不能为空"},cover:{required:!0,message:"活动封面不能为空"}}),E=u({area:[{label:"一区",value:0},{label:"二区",value:1}],type:[{label:"线上活动",value:0},{label:"推广活动",value:1},{label:"线下活动",value:2}],source:[{label:"赞助",value:0},{label:"场地",value:1}]}),G=o(),H=o(!1);function I(){var e;null==(e=G.value)||e.validate(((e,l)=>{e&&(H.value=!0,setTimeout((()=>{D.showToast("提交成功"),H.value=!1}),1500))}))}function J(){var e;null==(e=G.value)||e.clear()}return(l,a)=>{const o=r(t("cl-input"),e),u=r(t("cl-form-item"),_),A=r(t("cl-select-date"),j),D=r(t("cl-select"),g),K=r(t("cl-input-number"),y),L=r(t("cl-checkbox"),x),M=r(t("cl-checkbox-group"),k),N=r(t("cl-radio"),U),O=r(t("cl-radio-group"),h),P=r(t("cl-upload"),q),Q=r(t("cl-textarea"),z),R=r(t("cl-icon"),w),S=r(t("cl-form"),V),W=r(t("cl-card"),F),X=r(t("cl-button"),B),$=r(t("cl-footer"),T),ee=v,le=r(t("cl-page"),C);return p(),s(le,{padding:20},{default:m((()=>[d(ee,{class:"page"},{default:m((()=>[d(W,{label:"基础用法"},{default:m((()=>[d(S,{ref_key:"Form",ref:G,modelValue:Y.value,"onUpdate:modelValue":a[10]||(a[10]=e=>Y.value=e),rules:Z,disabled:H.value,"label-position":"left"},{default:m((()=>[d(u,{label:"活动名称",prop:"name"},{default:m((()=>[d(o,{modelValue:Y.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>Y.value.name=e),placeholder:"请填写活动名称"},null,8,["modelValue"])])),_:1}),d(u,{label:"活动时间",prop:"date"},{default:m((()=>[d(A,{modelValue:Y.value.date,"onUpdate:modelValue":a[1]||(a[1]=e=>Y.value.date=e)},null,8,["modelValue"])])),_:1}),d(u,{label:"活动类型",prop:"type"},{default:m((()=>[d(D,{modelValue:Y.value.type,"onUpdate:modelValue":a[2]||(a[2]=e=>Y.value.type=e),options:E.type},null,8,["modelValue","options"])])),_:1}),d(u,{label:"活动人数",prop:"num",justify:"end"},{default:m((()=>[d(K,{modelValue:Y.value.num,"onUpdate:modelValue":a[3]||(a[3]=e=>Y.value.num=e),min:1,max:100},null,8,["modelValue"])])),_:1}),d(u,{label:"活动区域",prop:"area","label-position":"top"},{default:m((()=>[d(M,{modelValue:Y.value.area,"onUpdate:modelValue":a[4]||(a[4]=e=>Y.value.area=e)},{default:m((()=>[(p(!0),c(n,null,i(E.area,((e,l)=>(p(),s(L,{key:l,label:e.value},{default:m((()=>[f(b(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),d(u,{label:"资源",prop:"source","label-position":"top"},{default:m((()=>[d(O,{modelValue:Y.value.source,"onUpdate:modelValue":a[5]||(a[5]=e=>Y.value.source=e)},{default:m((()=>[(p(!0),c(n,null,i(E.source,((e,l)=>(p(),s(N,{key:l,label:e.value},{default:m((()=>[f(b(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),d(u,{label:"活动封面",prop:"cover","label-position":"top"},{default:m((()=>[d(P,{modelValue:Y.value.cover,"onUpdate:modelValue":a[6]||(a[6]=e=>Y.value.cover=e)},null,8,["modelValue"])])),_:1}),d(u,{label:"活动海报（最多上传6张）",prop:"pics","label-position":"top"},{default:m((()=>[d(P,{modelValue:Y.value.pics,"onUpdate:modelValue":a[7]||(a[7]=e=>Y.value.pics=e),multiple:"",limit:6},null,8,["modelValue"])])),_:1}),d(u,{label:"活动描述",prop:"remark","label-position":"top"},{default:m((()=>[d(Q,{modelValue:Y.value.remark,"onUpdate:modelValue":a[8]||(a[8]=e=>Y.value.remark=e),count:"",placeholder:"请填写活动描述"},null,8,["modelValue"])])),_:1}),d(u,{label:"活动赞助商",prop:"company","label-position":"top"},{append:m((()=>[d(R,{name:"help-border",size:36})])),default:m((()=>[d(o,{modelValue:Y.value.company,"onUpdate:modelValue":a[9]||(a[9]=e=>Y.value.company=e),placeholder:"请填写活动赞助商"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue","rules","disabled"])])),_:1}),d($,{border:""},{default:m((()=>[d(X,{size:"large",round:"",fill:"",onClick:J},{default:m((()=>[f("清空")])),_:1}),d(X,{size:"large",round:"",fill:"",onClick:I,type:"success",loading:H.value},{default:m((()=>[f("提交")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})}}});export{D as default};
