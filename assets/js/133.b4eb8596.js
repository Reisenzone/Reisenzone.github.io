"use strict";(self.webpackChunkreisen=self.webpackChunkreisen||[]).push([[133],{2133:(e,a,t)=>{t.r(a),t.d(a,{bubble:()=>w});let n,o,h,l,i,s,r,c,d,p,u,f,b=!0;function m(){if(b){o.clearRect(0,0,h,l);for(let e in i)i[e].draw()}requestAnimationFrame(m)}function g(){let e=this;function a(){e.pos.x=Math.random()*h,e.pos.y=l+100*Math.random(),e.alpha=.1+Math.random()*r,e.alpha_change=2e-4+Math.random()*c,e.scale=.2+Math.random()*d,e.scale_change=Math.random()*p,e.speed=.1+Math.random()*u}e.pos={},a(),this.draw=function(){e.alpha<=0&&a(),e.pos.y-=e.speed,e.alpha-=e.alpha_change,e.scale+=e.scale_change,o.beginPath(),o.arc(e.pos.x,e.pos.y,10*e.scale,0,2*Math.PI,!1),o.fillStyle="rgba("+f+","+e.alpha+")",o.fill()}}function w(e,a,t,b,w,M,y){s=e,r=a,c=t,d=b,p=w,u=M,f=y,function(){n=document.getElementById("aurora-top-bubble-canvas"),function(){h=window.innerWidth,l=window.innerHeight;let e=document.getElementById("aurora-top-bubble-box");h=e.offsetWidth,l=e.offsetHeight,n.width=h,n.height=l}(),o=n.getContext("2d"),i=[];let e=h*s;for(let a=0;a<e;a++){let e=new g;i.push(e)}m()}()}}}]);