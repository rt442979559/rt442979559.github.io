import{_ as l,f as u,R as r,o as d,c as m,a as C}from"./app.8dc8ecb8.js";function p(o){return new Promise((n,c)=>{if(typeof Cesium!="undefined")return n(Cesium),!0;window.onload=()=>{n(Cesium)};const s=document.createElement("script");s.src="https://cesium.com/downloads/cesiumjs/releases/1.82/Build/Cesium/Cesium.js";const t=document.createElement("link");t.href="https://cesium.com/downloads/cesiumjs/releases/1.82/Build/Cesium/Widgets/widgets.css",t.rel="stylesheet",document.body.appendChild(s),document.head.appendChild(t),setTimeout(()=>{Cesium&&n(Cesium)},100)})}let e=null,i=null;const f="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYTlmZmNkZC02ZGUzLTQxZWYtOTA2NS0zNGZjNDIxZjFkMmEiLCJpZCI6OTcwMTEsImlhdCI6MTY1NDgyODA2Nn0.tqHwkNdHYHRICPFPbvn0KQyivf0v_cD7r6yRZykLVio",w=()=>{const o=async()=>{e=await p(),e.Ion.defaultAccessToken=f,n(),s()},n=()=>{i=new e.Viewer("cesiumContainer",{animation:!1,homeButton:!1,geocoder:!1,baseLayerPicker:!1,timeline:!1,fullscreenButton:!1,infoBox:!1,sceneModePicker:!1,navigationInstructionsInitiallyVisible:!1,navigationHelpButton:!1,selectionIndicator:!1,shadows:!0,scene3DOnly:!0,shouldAnimate:!0,clockViewModel:new e.ClockViewModel(c())}),i.scene.globe.enableLighting=!0,i.cesiumWidget.creditContainer.style.display="none"},c=()=>new e.Clock({startTime:e.JulianDate.now(),currentTime:e.JulianDate.now(),stopTime:e.JulianDate.addDays(e.JulianDate.now(),1,new e.JulianDate),clockRange:e.ClockRange.LOOP_STOP,clockStep:e.ClockStep.SYSTEM_CLOCK_MULTIPLIER,multiplier:3e3,shouldAnimate:!0}),s=()=>{new e.ScreenSpaceEventHandler(i.scene.canvas).setInputAction(a=>{console.log(a)},e.ScreenSpaceEventType.LEFT_CLICK)};return{init:o,Cesium:e}},k=C("div",{id:"cesiumContainer"},null,-1),_=[k],h=u({__name:"cesium",setup(o){const{init:n,Cesium:c}=w();return r(async()=>{await n()}),(s,t)=>(d(),m("div",null,_))}});var y=l(h,[["__file","cesium.vue"]]);export{y as default};
