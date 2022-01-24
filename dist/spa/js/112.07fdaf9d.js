"use strict";(self["webpackChunkpower"]=self["webpackChunkpower"]||[]).push([[112],{37112:(e,l,t)=>{t.r(l),t.d(l,{default:()=>_e});var a=t(83673),o=t(62323);const n=(0,a.Uk)(" 电量数据 "),r=(0,a._)("span",{style:{"font-size":"16px"}},"(星恒48V24Ah)",-1),i=(0,a._)("div",{id:"main",style:{width:"100%",height:"385px","margin-top":"10px"}},null,-1),s={class:"row",style:{"text-align":"center","font-size":"18px",color:"grey"}},c={key:0,class:"col",style:{color:"red"}},d=(0,a.Uk)(" 剩余电量 "),u={key:1,class:"col",style:{color:"orange"}},p=(0,a.Uk)(" 剩余电量 "),g={key:2,class:"col"},m=(0,a.Uk)(" 剩余电量 "),v={class:"col"},f=(0,a.Uk)("剩余电流 "),w={class:"col"},x=(0,a.Uk)("剩余里程 "),y={class:"row",style:{"text-align":"center","font-size":"14px"}},_={key:0,class:"col",style:{color:"red"}},k={style:{"font-size":"30px"}},W=(0,a.Uk)(" % "),b={key:1,class:"col",style:{color:"orange"}},h={style:{"font-size":"30px"}},q=(0,a.Uk)(" % "),Z={key:2,class:"col"},Q={style:{"font-size":"30px"}},z=(0,a.Uk)(" % "),D={class:"col"},V={style:{"font-size":"30px"}},S=(0,a.Uk)(" Ah "),U={class:"col"},A={style:{"font-size":"30px"}},C=(0,a.Uk)(" KM "),I={class:"row",style:{"text-align":"center","margin-top":"20px"}},T={class:"col-9"},P={class:"absolute-full flex flex-center"},F={class:"col-3"},H=(0,a._)("p",{style:{"text-align":"center","font-size":"16px",width:"90%","margin-left":"5%","margin-top":"40px",color:"grey"}}," 注意：显示数据仅供参考，请结合实际情况！ ",-1),L=(0,a._)("div",{class:"text-h6"},"配置",-1),M=(0,a.Uk)("夜间模式"),B=(0,a.Uk)("电池类型");function K(e,l,t,K,O,Y){const E=(0,a.up)("q-toolbar-title"),G=(0,a.up)("q-icon"),N=(0,a.up)("q-btn"),X=(0,a.up)("q-toolbar"),j=(0,a.up)("q-header"),J=(0,a.up)("q-card-section"),R=(0,a.up)("q-card"),$=(0,a.up)("q-slider"),ee=(0,a.up)("q-linear-progress"),le=(0,a.up)("q-input"),te=(0,a.up)("q-page"),ae=(0,a.up)("q-page-container"),oe=(0,a.up)("q-item-section"),ne=(0,a.up)("q-toggle"),re=(0,a.up)("q-item"),ie=(0,a.up)("q-separator"),se=(0,a.up)("q-select"),ce=(0,a.up)("q-list"),de=(0,a.up)("q-card-actions"),ue=(0,a.up)("q-dialog"),pe=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(j,{elevated:"",class:"bg-indigo"},{default:(0,a.w5)((()=>[(0,a.Wm)(X,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[n,r])),_:1}),(0,a.Wm)(N,{flat:"",round:"",dense:""},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{name:"settings",onClick:l[0]||(l[0]=l=>e.openDialog=!e.openDialog)})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(ae,null,{default:(0,a.w5)((()=>[(0,a.Wm)(te,{style:{padding:"12px"}},{default:(0,a.w5)((()=>[i,(0,a.Wm)(R,{style:{"margin-top":"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(J,{class:"q-px-xs q-pt-sm q-pb-none"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[e.percentage(e.voltage)>=0&&e.percentage(e.voltage)<10?((0,a.wg)(),(0,a.iD)("div",c,[d,(0,a.Wm)(G,{name:"ev_station"})])):(0,a.kq)("",!0),e.percentage(e.voltage)>10&&e.percentage(e.voltage)<30?((0,a.wg)(),(0,a.iD)("div",u,[p,(0,a.Wm)(G,{name:"ev_station"})])):(0,a.kq)("",!0),e.percentage(e.voltage)>=30?((0,a.wg)(),(0,a.iD)("div",g,[m,(0,a.Wm)(G,{name:"ev_station"})])):(0,a.kq)("",!0),(0,a._)("div",v,[f,(0,a.Wm)(G,{name:"text_rotation_none"})]),(0,a._)("div",w,[x,(0,a.Wm)(G,{name:"directions_bike"})])]),(0,a._)("div",y,[e.percentage(e.voltage)>=0&&e.percentage(e.voltage)<10?((0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("b",k,(0,o.zw)(e.percentage(e.voltage)),1),W])):(0,a.kq)("",!0),e.percentage(e.voltage)>10&&e.percentage(e.voltage)<30?((0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("b",h,(0,o.zw)(e.percentage(e.voltage)),1),q])):(0,a.kq)("",!0),e.percentage(e.voltage)>=30?((0,a.wg)(),(0,a.iD)("div",Z,[(0,a._)("b",Q,(0,o.zw)(e.percentage(e.voltage)),1),z])):(0,a.kq)("",!0),(0,a._)("div",D,[(0,a._)("b",V,(0,o.zw)(e.ampere(e.voltage)),1),S]),(0,a._)("div",U,[(0,a._)("b",A,(0,o.zw)(e.kilometer(e.voltage)),1),C])])])),_:1})])),_:1}),(0,a._)("div",I,[(0,a._)("div",T,[(0,a.Wm)(ee,{stripe:"",size:"56px",value:e.percentage(e.voltage)/100,color:e.color},{default:(0,a.w5)((()=>[(0,a._)("div",P,[(0,a.Wm)($,{modelValue:e.voltage,"onUpdate:modelValue":l[1]||(l[1]=l=>e.voltage=l),color:"indigo",min:43,step:.5,max:53.85},null,8,["modelValue","step","max"])])])),_:1},8,["value","color"])]),(0,a._)("div",F,[(0,a.Wm)(le,{filled:"",color:"purple",modelValue:e.voltage,"onUpdate:modelValue":l[2]||(l[2]=l=>e.voltage=l),label:"电压(V)",style:{"font-size":"18px"}},null,8,["modelValue"])])]),H])),_:1})])),_:1}),(0,a.Wm)(ue,{modelValue:e.openDialog,"onUpdate:modelValue":l[4]||(l[4]=l=>e.openDialog=l),style:{"z-index":"99"}},{default:(0,a.w5)((()=>[(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[L])),_:1}),(0,a.Wm)(J,{class:"text-body1 q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(ce,{dense:"",style:{"min-width":"300px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(re,null,{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{color:"purple",name:"dark_mode"})])),_:1}),(0,a.Wm)(oe,null,{default:(0,a.w5)((()=>[M])),_:1}),(0,a.Wm)(oe,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ne,{modelValue:e.openDark,"onUpdate:modelValue":l[3]||(l[3]=l=>e.openDark=l),color:"indigo",class:"q-pa-none",onClick:e.toggleDark},null,8,["modelValue","onClick"])])),_:1})])),_:1}),(0,a.Wm)(ie,{spaced:"",inset:""}),(0,a.Wm)(re,null,{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{color:"indigo",name:"change_circle"})])),_:1}),(0,a.Wm)(oe,null,{default:(0,a.w5)((()=>[B])),_:1}),(0,a.Wm)(oe,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(se,{dense:"",disable:"",filled:"",style:{"min-width":"100px"}})])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(de,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(N,{flat:"",label:"OK",color:"indigo"},null,512),[[pe]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var O=t(53623),Y=t(61959),E=t(48825);const G={tooltip:{trigger:"axis",formatter:"电压：{c} V<br/>里程：{b} KM",borderWidth:0,backgroundColor:"white",textStyle:{color:"black",fontSize:16},extraCssText:"opacity: 0.85;"},color:["#808080"],xAxis:{type:"category",boundaryGap:!1,data:[65.2,58.7,52.2,45.7,39.1,32.6,26.1,19.6,13,6.5,0],name:"剩余里程(KM)",nameTextStyle:{color:"#3f51b5",fontSize:16,padding:[75,0,0,-80]},axisLine:{lineStyle:{color:"#808080"}}},yAxis:{name:"电压(V)",nameTextStyle:{color:"#3f51b5",fontSize:16,padding:[0,0,5,0]},axisLine:{lineStyle:{color:"#808080"}},type:"value",scale:!0},visualMap:{show:!1,pieces:[{gt:43,lte:47.44,color:"red"},{gt:47.44,lte:49.14,color:"orange"},{gt:49.14,color:"green"}],seriesIndex:0},series:[{name:"电压(V)",data:[53.85,52.31,51.77,51.29,50.86,50.31,49.73,49.14,48.42,47.44,43],type:"line",markLine:{symbol:["none","none"],label:{show:!1},data:[{xAxis:2},{xAxis:4},{xAxis:6},{xAxis:8},{xAxis:10}]},itemStyle:{color:"#8AE09F"},lineStyle:{normal:{color:"#8AE09F",width:5,shadowColor:"rgba(0,0,0,0.3)",shadowBlur:10,shadowOffsetY:5}},areaStyle:{opacity:.3},emphasis:{itemStyle:{shadowBlur:15,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},smooth:!0}]},N=(0,a.aZ)({name:"PageIndex",setup(){const e=(0,Y.iH)(53.85),l=(0,Y.iH)("green"),t=(0,Y.iH)(!1),o=(0,Y.iH)(),n=(0,E.Z)();function r(e){let l=parseFloat(e).toFixed(2);return parseFloat(l)}function i(e){switch(!0){case e<43:return 0;case e<47.44:return r((e-43)/4.44*10);case e<48.42:return r((e-47.44)/.98*10+10);case e<49.14:return r((e-48.42)/.72*10+20);case e<49.74:return r((e-49.14)/.6*10+30);case e<50.31:return r((e-49.74)/.57*10+40);case e<50.86:return r((e-50.31)/.55*10+50);case e<51.29:return r((e-50.86)/.43*10+60);case e<51.77:return r((e-51.29)/.48*10+70);case e<52.31:return r((e-51.77)/.54*10+80);case e<=53.85:return r((e-52.31)/1.54*10+90);default:return 0}}function s(e){return r(i(e)/100*23.3)}function c(e){return r(i(e)/100*65.2)}(0,a.YP)(e,(e=>{i(e)>=0&&i(e)<10?l.value="red":i(e)>10&&i(e)<30?l.value="orange":l.value="green"}));const d=()=>{n.dark.set(o.value)};return(0,a.bv)((()=>{o.value=n.dark.isActive;var l=document.getElementById("main"),t=O.init(l);G&&t.setOption(G),t.on("click",(function(l){console.log(l),"电压(V)"===l.seriesName&&l.value&&(e.value=l.value)})),(0,a.YP)(e,(e=>{t.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:Math.round(c(e)/65.2*10)})}))})),{voltage:e,numFilter:r,percentage:i,ampere:s,kilometer:c,color:l,openDialog:t,openDark:o,toggleDark:d}}});var X=t(74260),j=t(53812),J=t(39570),R=t(13747),$=t(48240),ee=t(24554),le=t(72652),te=t(24379),ae=t(10151),oe=t(25589),ne=t(51598),re=t(54015),ie=t(34842),se=t(5926),ce=t(27011),de=t(83414),ue=t(52035),pe=t(62582),ge=t(65869),me=t(15546),ve=t(99367),fe=t(60677),we=t(7518),xe=t.n(we);const ye=(0,X.Z)(N,[["render",K]]),_e=ye;xe()(N,"components",{QHeader:j.Z,QToolbar:J.Z,QToolbarTitle:R.Z,QBtn:$.Z,QIcon:ee.Z,QPageContainer:le.Z,QPage:te.Z,QCard:ae.Z,QCardSection:oe.Z,QLinearProgress:ne.Z,QSlider:re.Z,QInput:ie.Z,QDialog:se.Z,QList:ce.Z,QItem:de.Z,QItemSection:ue.Z,QToggle:pe.Z,QSeparator:ge.Z,QSelect:me.Z,QCardActions:ve.Z}),xe()(N,"directives",{ClosePopup:fe.Z})}}]);