(self["webpackChunkpower"]=self["webpackChunkpower"]||[]).push([[723],{68723:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>_e});var t=a(83673),o=a(62323);const n=(0,t.Uk)(" 电量数据 "),s=(0,t.Wm)("span",{style:{"font-size":"16px"}},"(星恒48V24Ah)",-1),r=(0,t.Wm)("div",{id:"main",style:{width:"100%",height:"385px","margin-top":"10px"}},null,-1),i={class:"row",style:{"text-align":"center","font-size":"18px",color:"grey"}},c={key:0,class:"col",style:{color:"red"}},d=(0,t.Uk)(" 剩余电量 "),u={key:1,class:"col",style:{color:"orange"}},p=(0,t.Uk)(" 剩余电量 "),m={key:2,class:"col"},g=(0,t.Uk)(" 剩余电量 "),v={class:"col"},w=(0,t.Uk)("剩余电流 "),f={class:"col"},W=(0,t.Uk)("剩余里程 "),x={class:"row",style:{"text-align":"center","font-size":"14px"}},k={key:0,class:"col",style:{color:"red"}},y={style:{"font-size":"30px"}},b=(0,t.Uk)(" % "),_={key:1,class:"col",style:{color:"orange"}},h={style:{"font-size":"30px"}},q=(0,t.Uk)(" % "),V={key:2,class:"col"},Z={style:{"font-size":"30px"}},z=(0,t.Uk)(" % "),Q={class:"col"},U={style:{"font-size":"30px"}},S=(0,t.Uk)(" Ah "),A={class:"col"},C={style:{"font-size":"30px"}},T=(0,t.Uk)(" KM "),D={key:0,class:"row",style:{"text-align":"center","margin-top":"20px"}},j={class:"col-9"},I={class:"absolute-full flex flex-center"},P={class:"col-3"},H={key:1,class:"row",style:{"text-align":"center","margin-top":"20px"}},F={class:"col-9"},Y={class:"absolute-full flex flex-center"},L={class:"col-3"},M=(0,t.Wm)("p",{style:{"text-align":"center","font-size":"16px",width:"90%","margin-left":"5%","margin-top":"40px",color:"grey"}}," 注意：显示数据仅供参考，请结合实际情况！ ",-1),B=(0,t.Wm)("div",{class:"text-h6"},"配置",-1),K=(0,t.Uk)("夜间模式"),O=(0,t.Uk)("滑块类型"),E=(0,t.Uk)("电池类型");function G(e,l,a,G,N,X){const J=(0,t.up)("q-toolbar-title"),R=(0,t.up)("q-icon"),$=(0,t.up)("q-btn"),ee=(0,t.up)("q-toolbar"),le=(0,t.up)("q-header"),ae=(0,t.up)("q-card-section"),te=(0,t.up)("q-card"),oe=(0,t.up)("q-slider"),ne=(0,t.up)("q-linear-progress"),se=(0,t.up)("q-input"),re=(0,t.up)("q-page"),ie=(0,t.up)("q-page-container"),ce=(0,t.up)("q-item-section"),de=(0,t.up)("q-toggle"),ue=(0,t.up)("q-item"),pe=(0,t.up)("q-separator"),me=(0,t.up)("q-select"),ge=(0,t.up)("q-list"),ve=(0,t.up)("q-card-actions"),we=(0,t.up)("q-dialog"),fe=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)(le,{elevated:"",class:"bg-indigo"},{default:(0,t.w5)((()=>[(0,t.Wm)(ee,null,{default:(0,t.w5)((()=>[(0,t.Wm)(J,null,{default:(0,t.w5)((()=>[n,s])),_:1}),(0,t.Wm)($,{flat:"",round:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{name:"settings",onClick:l[1]||(l[1]=l=>e.openDialog=!e.openDialog)})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(ie,null,{default:(0,t.w5)((()=>[(0,t.Wm)(re,{style:{padding:"12px"}},{default:(0,t.w5)((()=>[r,(0,t.Wm)(te,{style:{"margin-top":"10px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(ae,{class:"q-px-xs q-pt-sm q-pb-none"},{default:(0,t.w5)((()=>[(0,t.Wm)("div",i,[e.percentage(e.voltage)>=0&&e.percentage(e.voltage)<10?((0,t.wg)(),(0,t.j4)("div",c,[d,(0,t.Wm)(R,{name:"ev_station"})])):(0,t.kq)("",!0),e.percentage(e.voltage)>10&&e.percentage(e.voltage)<30?((0,t.wg)(),(0,t.j4)("div",u,[p,(0,t.Wm)(R,{name:"ev_station"})])):(0,t.kq)("",!0),e.percentage(e.voltage)>=30?((0,t.wg)(),(0,t.j4)("div",m,[g,(0,t.Wm)(R,{name:"ev_station"})])):(0,t.kq)("",!0),(0,t.Wm)("div",v,[w,(0,t.Wm)(R,{name:"text_rotation_none"})]),(0,t.Wm)("div",f,[W,(0,t.Wm)(R,{name:"directions_bike"})])]),(0,t.Wm)("div",x,[e.percentage(e.voltage)>=0&&e.percentage(e.voltage)<10?((0,t.wg)(),(0,t.j4)("div",k,[(0,t.Wm)("b",y,(0,o.zw)(e.percentage(e.voltage)),1),b])):(0,t.kq)("",!0),e.percentage(e.voltage)>10&&e.percentage(e.voltage)<30?((0,t.wg)(),(0,t.j4)("div",_,[(0,t.Wm)("b",h,(0,o.zw)(e.percentage(e.voltage)),1),q])):(0,t.kq)("",!0),e.percentage(e.voltage)>=30?((0,t.wg)(),(0,t.j4)("div",V,[(0,t.Wm)("b",Z,(0,o.zw)(e.percentage(e.voltage)),1),z])):(0,t.kq)("",!0),(0,t.Wm)("div",Q,[(0,t.Wm)("b",U,(0,o.zw)(e.ampere(e.voltage)),1),S]),(0,t.Wm)("div",A,[(0,t.Wm)("b",C,(0,o.zw)(e.kilometer(e.voltage)),1),T])])])),_:1})])),_:1}),"电压"===e.sliderType?((0,t.wg)(),(0,t.j4)("div",D,[(0,t.Wm)("div",j,[(0,t.Wm)(ne,{stripe:"",size:"56px",value:e.percentage(e.voltage)/100,color:e.color},{default:(0,t.w5)((()=>[(0,t.Wm)("div",I,[(0,t.Wm)(oe,{modelValue:e.voltage,"onUpdate:modelValue":l[2]||(l[2]=l=>e.voltage=l),color:"indigo",min:43,step:.5,max:53.85},null,8,["modelValue","step","max"])])])),_:1},8,["value","color"])]),(0,t.Wm)("div",P,[(0,t.Wm)(se,{filled:"",color:"purple",modelValue:e.voltage,"onUpdate:modelValue":l[3]||(l[3]=l=>e.voltage=l),label:"电压(V)",style:{"font-size":"18px"}},null,8,["modelValue"])])])):"电量"===e.sliderType?((0,t.wg)(),(0,t.j4)("div",H,[(0,t.Wm)("div",F,[(0,t.Wm)(ne,{stripe:"",size:"56px",value:(e.voltage-43)/(53.85-43),color:"indigo"},{default:(0,t.w5)((()=>[(0,t.Wm)("div",Y,[(0,t.Wm)(oe,{modelValue:e.power,"onUpdate:modelValue":l[4]||(l[4]=l=>e.power=l),color:e.color,min:0,step:10,max:100},null,8,["modelValue","color"])])])),_:1},8,["value"])]),(0,t.Wm)("div",L,[(0,t.Wm)(se,{filled:"",disabled:"",color:e.color,modelValue:e.power,"onUpdate:modelValue":l[5]||(l[5]=l=>e.power=l),label:"电量(%)",style:{"font-size":"18px"}},null,8,["color","modelValue"])])])):(0,t.kq)("",!0),M])),_:1})])),_:1}),(0,t.Wm)(we,{modelValue:e.openDialog,"onUpdate:modelValue":l[8]||(l[8]=l=>e.openDialog=l),style:{"z-index":"99"}},{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[B])),_:1}),(0,t.Wm)(ae,{class:"text-body1 q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(ge,{dense:"",style:{"min-width":"300px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(ue,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ce,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{color:"purple",name:"dark_mode"})])),_:1}),(0,t.Wm)(ce,null,{default:(0,t.w5)((()=>[K])),_:1}),(0,t.Wm)(ce,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(de,{modelValue:e.openDark,"onUpdate:modelValue":l[6]||(l[6]=l=>e.openDark=l),color:"indigo",class:"q-pa-none",onClick:e.toggleDark},null,8,["modelValue","onClick"])])),_:1})])),_:1}),(0,t.Wm)(pe,{spaced:"",inset:""}),(0,t.Wm)(ue,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ce,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{color:"orange",name:"linear_scale"})])),_:1}),(0,t.Wm)(ce,null,{default:(0,t.w5)((()=>[O])),_:1}),(0,t.Wm)(ce,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(me,{dense:"",filled:"",modelValue:e.sliderType,"onUpdate:modelValue":l[7]||(l[7]=l=>e.sliderType=l),options:["电压","电量"],style:{"min-width":"100px"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.Wm)(pe,{spaced:"",inset:""}),(0,t.Wm)(ue,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ce,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{color:"indigo",name:"change_circle"})])),_:1}),(0,t.Wm)(ce,null,{default:(0,t.w5)((()=>[E])),_:1}),(0,t.Wm)(ce,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(me,{dense:"",disable:"",filled:"",style:{"min-width":"100px"}})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(ve,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)($,{flat:"",label:"OK",color:"indigo"},null,512),[[fe]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var N=a(53623),X=a(61959),J=a(48825);const R={tooltip:{trigger:"axis",formatter:"电压：{c} V<br/>里程：{b} KM",borderWidth:0,backgroundColor:"white",textStyle:{color:"black",fontSize:16},extraCssText:"opacity: 0.85;"},color:["#808080"],xAxis:{type:"category",boundaryGap:!1,data:[65.2,58.7,52.2,45.7,39.1,32.6,26.1,19.6,13,6.5,0],name:"剩余里程(KM)",nameTextStyle:{color:"#3f51b5",fontSize:16,padding:[75,0,0,-80]},axisLine:{lineStyle:{color:"#808080"}}},yAxis:{name:"电压(V)",nameTextStyle:{color:"#3f51b5",fontSize:16,padding:[0,0,5,0]},axisLine:{lineStyle:{color:"#808080"}},type:"value",scale:!0},visualMap:{show:!1,pieces:[{gt:43,lte:47.44,color:"red"},{gt:47.44,lte:49.14,color:"orange"},{gt:49.14,color:"green"}],seriesIndex:0},series:[{name:"电压(V)",data:[53.85,52.31,51.77,51.29,50.86,50.31,49.73,49.14,48.42,47.44,43],type:"line",markLine:{symbol:["none","none"],label:{show:!1},data:[{xAxis:2},{xAxis:4},{xAxis:6},{xAxis:8},{xAxis:10}]},itemStyle:{color:"#8AE09F"},lineStyle:{normal:{color:"#8AE09F",width:5,shadowColor:"rgba(0,0,0,0.3)",shadowBlur:10,shadowOffsetY:5}},areaStyle:{opacity:.3},emphasis:{itemStyle:{shadowBlur:15,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},smooth:!0}]},$=(0,t.aZ)({name:"PageIndex",setup(){const e=(0,X.iH)(53.85),l=(0,X.iH)(100),a=(0,X.iH)("green"),o=(0,X.iH)(!1),n=(0,X.iH)(),s=(0,J.Z)(),r=(0,X.iH)("电压");function i(e){let l=parseFloat(e).toFixed(2);return parseFloat(l)}function c(e){switch(!0){case e<43:return 0;case e<47.44:return i((e-43)/4.44*10);case e<48.42:return i((e-47.44)/.98*10+10);case e<49.14:return i((e-48.42)/.72*10+20);case e<49.74:return i((e-49.14)/.6*10+30);case e<50.31:return i((e-49.74)/.57*10+40);case e<50.86:return i((e-50.31)/.55*10+50);case e<51.29:return i((e-50.86)/.43*10+60);case e<51.77:return i((e-51.29)/.48*10+70);case e<52.31:return i((e-51.77)/.54*10+80);case e<=53.85:return i((e-52.31)/1.54*10+90);default:return 0}}function d(e){return i(c(e)/100*23.3)}function u(e){return i(c(e)/100*65.2)}(0,t.YP)(e,(e=>{c(e)>=0&&c(e)<10?a.value="red":c(e)>10&&c(e)<30?a.value="orange":a.value="green"})),(0,t.YP)(r,(()=>{e.value=53.85,l.value=100})),(0,t.YP)(l,(l=>{switch(l){case 100:e.value=53.85;break;case 90:e.value=52.31;break;case 80:e.value=51.77;break;case 70:e.value=51.29;break;case 60:e.value=50.86;break;case 50:e.value=50.31;break;case 40:e.value=49.74;break;case 30:e.value=49.14;break;case 20:e.value=48.42;break;case 10:e.value=47.45;break;case 0:e.value=43}}));const p=()=>{s.dark.set(n.value)};return(0,t.bv)((()=>{n.value=s.dark.isActive;var l=document.getElementById("main"),a=N.init(l);R&&a.setOption(R),a.on("click",(function(l){console.log(l),"电压(V)"===l.seriesName&&l.value&&(e.value=l.value)})),(0,t.YP)(e,(e=>{a.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:10-Math.round(u(e)/65.2*10)})}))})),{voltage:e,power:l,numFilter:i,percentage:c,ampere:d,kilometer:u,color:a,openDialog:o,openDark:n,toggleDark:p,sliderType:r}}});var ee=a(53812),le=a(39570),ae=a(13747),te=a(48240),oe=a(24554),ne=a(72652),se=a(24379),re=a(10151),ie=a(25589),ce=a(51598),de=a(54015),ue=a(34842),pe=a(5926),me=a(27011),ge=a(83414),ve=a(52035),we=a(62582),fe=a(65869),We=a(42041),xe=a(99367),ke=a(60677),ye=a(7518),be=a.n(ye);$.render=G;const _e=$;be()($,"components",{QHeader:ee.Z,QToolbar:le.Z,QToolbarTitle:ae.Z,QBtn:te.Z,QIcon:oe.Z,QPageContainer:ne.Z,QPage:se.Z,QCard:re.Z,QCardSection:ie.Z,QLinearProgress:ce.Z,QSlider:de.Z,QInput:ue.Z,QDialog:pe.Z,QList:me.Z,QItem:ge.Z,QItemSection:ve.Z,QToggle:we.Z,QSeparator:fe.Z,QSelect:We.Z,QCardActions:xe.Z}),be()($,"directives",{ClosePopup:ke.Z})}}]);