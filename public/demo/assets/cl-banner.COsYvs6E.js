import{d as a,r as e,a6 as i,x as t,c as n,e as r,w as l,f as o,i as s,F as c,j as u,z as d,R as p,J as m,Y as g,A as f,B as v,l as y,b1 as h,b2 as b,aE as x}from"./index-BXs9N0aO.js";import{p as C}from"./cl-page.D0l32468.js";import{_}from"./_plugin-vue_export-helper.D4XvEQHf.js";const k=_(a({name:"cl-banner",props:{modelValue:Number,type:String,arrow:Boolean,list:{type:Array,default:()=>[]},imageMode:{type:String,default:"aspectFill"},height:{type:[String,Number],default:300},radius:{type:[String,Number],default:10},margin:{type:Array,default:()=>[]},indicatorDots:Boolean,indicatorColor:{type:String,default:"rgba(0, 0, 0, .3)"},indicatorActiveColor:{type:String,default:"#000000"},dotType:{type:String,default:"round"},activeClass:String,changingClass:String,autoplay:Boolean,currentItemId:String,interval:{type:Number,default:5e3},duration:{type:Number,default:500},circular:Boolean,vertical:Boolean,acceleration:Boolean,disableProgrammaticAnimation:Boolean,displayMultipleItems:Number,skipHiddenItemLayout:Boolean,disableTouch:Boolean,touchable:{type:Boolean,default:!0},easingFunction:{type:String,default:"default"}},emits:["update:modelValue","change","select","transition","animationfinish"],setup(a,{emit:n}){const r=e(0);i((()=>a.modelValue),(a=>{r.value=a||0}),{immediate:!0});const l=t((()=>{let[e,i,t]=a.margin;switch(a.type){case"chain":switch(r.value){case 0:return e||"0";case(a.list||[]).length-1:return t||"120rpx";default:return i||"70rpx"}case"card":return e||"80rpx";default:return e||"0"}})),o=t((()=>{let[e,i,t]=a.margin;switch(a.type){case"chain":switch(r.value){case 0:return t||"120rpx";case(a.list||[]).length-1:return e||"0";default:return i||"70rpx"}case"card":return i||"80rpx";default:return i||"0"}})),s=t((()=>"card"===a.type||a.circular)),c=t((()=>a.dotType?"":a.indicatorColor)),u=t((()=>a.dotType?"":a.indicatorActiveColor)),d=t((()=>s.value||r.value>0)),p=t((()=>s.value||r.value<a.list.length-1));return{current:r,isPrev:d,isNext:p,circular:s,previousMargin:l,nextMargin:o,indicatorColor:c,indicatorActiveColor:u,onChange:function(a){r.value=a.detail.current,n("update:modelValue",r.value),n("change",r.value)},onTransition:function(a){n("transition",a)},onAnimationfinish:function(a){n("animationfinish",a)},onPrev:function(){r.value-=d.value?1:0},onNext:function(){r.value+=p.value?1:0},onTap:function(){n("select",r.value)},parseRpx:C}}}),[["render",function(a,e,i,t,C,_){const k=v,A=y,T=h,B=b,S=x;return n(),r(A,{class:d(["cl-banner",[`cl-banner--${a.type}`,`cl-banner--dot-${a.dotType}`]]),style:m({height:a.parseRpx(a.height)}),onClick:a.onTap},{default:l((()=>[o(B,{"indicator-dots":a.indicatorDots,"indicator-color":a.indicatorColor,"indicator-active-color":a.indicatorActiveColor,"active-class":a.activeClass,"changing-class":a.changingClass,autoplay:a.autoplay,current:a.current,interval:a.interval,duration:a.duration,circular:a.circular,vertical:a.vertical,"previous-margin":a.previousMargin,"next-margin":a.nextMargin,acceleration:a.acceleration,"disable-programmatic-animation":a.disableProgrammaticAnimation,"display-multiple-items":a.displayMultipleItems,"skip-hidden-item-layout":a.skipHiddenItemLayout,"disable-touch":a.disableTouch,"easing-function":a.easingFunction,onChange:a.onChange,onTransition:a.onTransition,onAnimationfinish:a.onAnimationfinish},{default:l((()=>[(n(!0),s(c,null,u(a.list,((e,i)=>(n(),r(T,{key:i},{default:l((()=>[o(A,{class:d(["cl-banner-item",[{"is-active":a.current===i}]])},{default:l((()=>[p(a.$slots,"item",{item:e,index:i},(()=>[o(k,{class:"cl-banner-item__image",style:m({"border-radius":a.parseRpx(a.radius)}),mode:a.imageMode,src:e.url},null,8,["style","mode","src"])]))])),_:2},1032,["class"])])),_:2},1024)))),128))])),_:3},8,["indicator-dots","indicator-color","indicator-active-color","active-class","changing-class","autoplay","current","interval","duration","circular","vertical","previous-margin","next-margin","acceleration","disable-programmatic-animation","display-multiple-items","skip-hidden-item-layout","disable-touch","easing-function","onChange","onTransition","onAnimationfinish"]),a.arrow?(n(),r(A,{key:0,class:"cl-banner__btn"},{default:l((()=>[a.isPrev?(n(),r(S,{key:0,class:"cl-banner__btn-prev",onClick:a.onPrev},{default:l((()=>[g("i",{class:"cl-icon-arrow-left"})])),_:1},8,["onClick"])):f("",!0),a.isNext?(n(),r(S,{key:1,class:"cl-banner__btn-next",onClick:a.onNext},{default:l((()=>[g("i",{class:"cl-icon-arrow-right"})])),_:1},8,["onClick"])):f("",!0)])),_:1})):f("",!0)])),_:3},8,["class","style","onClick"])}]]);export{k as _};
