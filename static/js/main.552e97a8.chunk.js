(this["webpackJsonpwebsite-evertonsavio"]=this["webpackJsonpwebsite-evertonsavio"]||[]).push([[0],{33:function(n,e,t){n.exports=t.p+"static/media/pc5.8be2e28e.jpg"},39:function(n,e,t){n.exports=t(52)},44:function(n,e,t){},52:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(31),o=t.n(i),l=t(24),c=(t(44),t(2)),s=t(12),m=t(3),d=t(32),p=t.n(d),u=t(33),g=t.n(u);function b(){var n=Object(c.a)(["\n  .animation {\n    animation-duration: 2s;\n    animation-timing-function: ease-in-out;\n\n    &--infinite {\n      animation-iteration-count: infinite;\n    }\n\n    &--up-down {\n      animation-name: upDown;\n    }\n  }\n\n  @keyframes upDown {\n    0% {\n      transform: translateY(-15px);\n    }\n    50% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(-15px);\n    }\n  }\n\n  .button {\n\n    &--scroll {\n      position: absolute;\n      bottom: 10vh;\n      transform: translateX(-50%);\n    }\n  }\n"]);return b=function(){return n},n}var f=m.a.section(b()),h=function(){return r.a.createElement(f,null,r.a.createElement("a",{href:"#portfolio",className:"button--scroll animation animation--infinite animation--up-down"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"-275 398.7 44.2 44.2"},r.a.createElement("path",{fill:"#fff",d:"M-275 420.8c0-12.2 9.9-22.1 22.1-22.1s22.1 9.9 22.1 22.1c0 12.2-9.9 22.1-22.1 22.1s-22.1-9.9-22.1-22.1zm42.7 0c0-11.4-9.2-20.6-20.6-20.6-11.4 0-20.6 9.2-20.6 20.6 0 11.4 9.2 20.6 20.6 20.6 11.4 0 20.6-9.3 20.6-20.6zM-260.6 418c0-.2.1-.4.2-.5.3-.3.8-.3 1.1 0l6.8 6.8 6.8-6.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-7.3 7.3c-.3.3-.8.3-1.1 0l-7.3-7.3c-.3-.2-.3-.4-.3-.6z"}))))},v=t(38);function x(){var n=Object(c.a)(["\n\n  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),\n  url(",") center/ cover no-repeat;\n  margin: 0;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  line-height: 1.5;  \n  border-radius: 5px;\n  border-radius: 5px;\n\n  .icone{\n    position: absolute;\n    left: 49%\n  }\nh1, h2, h3 {\n  margin: 0;\n  font-weight: 400;\n  color: #fff;\n  &.lg-heading {\n    font-size: 6rem;\n    padding-bottom: 1rem;\n  }\n\n  &.sm-heading {\n    padding: 1rem 0rem 0.5rem 0.5rem;\n    font-size: 2.5rem;\n    border-radius: 5px;\n    background-color: #282c34;\n    letter-spacing: 0.2ch;\n  }\n}\n\n.text-secondary{\ncolor: #eece1a !important;\n}\n\nmain {\n  min-height: 100vh;\n  padding-top: 15vh;\n}\n\n"]);return x=function(){return n},n}function w(n){var e=n.img,t=void 0===e?g.a:e;return r.a.createElement(E,{img:t},r.a.createElement("main",{id:"home",className:"container-fluid"},r.a.createElement("h1",{className:"lg-heading"},"Everton ",r.a.createElement("span",{className:"text-secondary"},"S\xe1vio")),r.a.createElement("h1",{className:"sm-heading"},r.a.createElement(v.a,{steps:["#",1500,"#Full",750,"#Full-",50,"#Full-Stack",1500,"#Full",500,"#",1e3,"#Data ",750,"#Data Scientist",1e3],loop:1,wrapper:"p"}))),r.a.createElement("div",{className:"icone"},r.a.createElement(h,null)))}var E=m.a.div(x(),(function(n){return n.img})),k=t(27);function y(){var n=Object(c.a)(["\n  .div-principal {\n    display: flex;\n    justify-content: center;\n  }\n  .card {\n    width: 45ch;\n    height: 60ch;\n    margin-bottom: 5vh;\n    background: grey;\n    border-radius: 5px;\n    background-image: url(https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40);\n    background-size: 100%;\n    background-position: center center;\n    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);\n    transition: box-shadow 0.5s;\n    will-change: transform;\n    border: 15px solid white;\n    transition: 1s;\n  }\n\n  .card:hover {\n    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);\n    border: 1px solid whitesmoke;\n    background-size: 110%;\n  }\n\n  .card > div {\n    width: 80%;\n    height: 20%;\n    background-color: white;\n    position: absolute;\n    display: flex;\n    left: 10%;\n    text-align: center;\n    justify-content: center;\n    bottom: 2vh;\n    border-radius: 5px;\n  }\n"]);return y=function(){return n},n}var j=function(n,e){return[-(e-window.innerHeight/2)/100,(n-window.innerWidth/2)/100,1.1]},z=function(n,e,t){return"perspective(600px) rotateX(".concat(n,"deg) rotateY(").concat(e,"deg) scale(").concat(t,")")},N=function(){var n=Object(k.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),e=Object(s.a)(n,2),t=e[0],a=e[1];return r.a.createElement(S,null,r.a.createElement("div",{className:"div-principal"},r.a.createElement(k.a.div,{class:"card",onMouseMove:function(n){var e=n.clientX,t=n.clientY;return a({xys:j(e,t)})},onMouseLeave:function(){return a({xys:[0,0,1]})},style:{transform:t.xys.interpolate(z)}},r.a.createElement("div",{class:"teste"},"Projeto"))))},S=m.a.div(y());function O(){var n=Object(c.a)(["\n  .main {\n    position: relative;\n    margin-top: 1vh;\n    border-radius: 5px;\n  }\n  #portfolio {\n    min-height: 100vh;\n    background-color: whitesmoke;\n  }\n"]);return O=function(){return n},n}var M=m.a.div(O()),C=function(){return r.a.createElement(M,null,r.a.createElement("section",{className:"main",id:"portfolio"},r.a.createElement("h2",null,"Section 2"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col"},r.a.createElement(N,null))),r.a.createElement("a",{href:"#section1"},"Click Me to Smooth Scroll to Section 1 Above")))};function T(){var n=Object(c.a)(["\n\n\n\n  #aboutme {\n    border-radius: 5px;\n    min-height: 100vh;\n    margin-top: 1vh;\n  padding: 0;\n  background: rgba(230,230,230, 0.4);\n  \n  color: rgb(50,50,50);\n  font-family: 'Open Sans', sans-serif;\n  font-size: 112.5%;\n  line-height: 1.6em;\n  }\n  .timeline {\n  position: relative;\n  width: 660px;\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 1em 0;\n  list-style-type: none;\n  z-index:0;\n}\n\n.timeline:before {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  content: ' ';\n  display: block;\n  width: 6px;\n  height: 100%;\n  margin-left: -3px;\n  background: rgb(80,80,80);\n  background: -moz-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));\n  background: -webkit-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\n  background: -o-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\n  background: -ms-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\n  background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\n  \n  z-index: 5;\n}\n\n.timeline li {\n  padding: 1em 0;\n}\n\n.timeline li:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n.direction-l {\n  position: relative;\n  width: 300px;\n  float: left;\n  text-align: right;\n}\n\n.direction-r {\n  position: relative;\n  width: 300px;\n  float: right;\n}\n\n.flag-wrapper {\n  position: relative;\n  display: inline-block;\n  \n  text-align: center;\n}\n\n.flag {\n  position: relative;\n  display: inline;\n  background: rgb(248,248,248);\n  padding: 6px 10px;\n  border-radius: 5px;\n  \n  font-weight: 600;\n  text-align: left;\n}\n\n.direction-l .flag {\n  -webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);\n  -moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);\n  box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);\n}\n\n.direction-r .flag {\n  -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);\n  -moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);\n  box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);\n}\n\n.direction-l .flag:before,\n.direction-r .flag:before {\n  position: absolute;\n  top: 50%;\n  right: -40px;\n  content: ' ';\n  display: block;\n  width: 12px;\n  height: 12px;\n  margin-top: -10px;\n  background: #fff;\n  border-radius: 10px;\n  border: 4px solid rgb(255,80,80);\n  z-index: 10;\n}\n\n.direction-r .flag:before {\n  left: -40px;\n}\n\n.direction-l .flag:after {\n  content: \"\";\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  height: 0;\n  width: 0;\n  margin-top: -8px;\n  border: solid transparent;\n  border-left-color: rgb(248,248,248);\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.direction-r .flag:after {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  top: 50%;\n  height: 0;\n  width: 0;\n  margin-top: -8px;\n  border: solid transparent;\n  border-right-color: rgb(248,248,248);\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.time-wrapper {\n  display: inline;\n  \n  line-height: 1em;\n  font-size: 0.66666em;\n  color: rgb(250,80,80);\n  vertical-align: middle;\n}\n\n.direction-l .time-wrapper {\n  float: left;\n}\n\n.direction-r .time-wrapper {\n  float: right;\n}\n\n.time {\n  display: inline-block;\n  padding: 4px 6px;\n  background: rgb(248,248,248);\n}\n\n.desc {\n  margin: 1em 0.75em 0 0;\n  \n  font-size: 0.77777em;\n  font-style: italic;\n  line-height: 1.5em;\n}\n\n.direction-r .desc {\n  margin: 1em 0 0 0.75em;\n}\n\n/* ================ Timeline Media Queries ================ */\n\n@media screen and (max-width: 660px) {\n\n.timeline {\n \twidth: 100%;\n\tpadding: 4em 0 1em 0;\n}\n\n.timeline li {\n\tpadding: 2em 0;\n}\n\n.direction-l,\n.direction-r {\n\tfloat: none;\n\twidth: 100%;\n\n\ttext-align: center;\n}\n\n.flag-wrapper {\n\ttext-align: center;\n}\n\n.flag {\n\tbackground: rgb(255,255,255);\n\tz-index: 15;\n}\n\n.direction-l .flag:before,\n.direction-r .flag:before {\n  position: absolute;\n  top: -30px;\n\tleft: 50%;\n\tcontent: ' ';\n\tdisplay: block;\n\twidth: 12px;\n\theight: 12px;\n\tmargin-left: -9px;\n\tbackground: #fff;\n\tborder-radius: 10px;\n\tborder: 4px solid rgb(255,80,80);\n\tz-index: 10;\n}\n\n.direction-l .flag:after,\n.direction-r .flag:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tleft: 50%;\n\ttop: -8px;\n\theight: 0;\n\twidth: 0;\n\tmargin-left: -8px;\n\tborder: solid transparent;\n\tborder-bottom-color: rgb(255,255,255);\n\tborder-width: 8px;\n\tpointer-events: none;\n}\n\n.time-wrapper {\n\tdisplay: block;\n\tposition: relative;\n\tmargin: 4px 0 0 0;\n\tz-index: 14;\n}\n\n.direction-l .time-wrapper {\n\tfloat: none;\n}\n\n.direction-r .time-wrapper {\n\tfloat: none;\n}\n\n.desc {\n\tposition: relative;\n\tmargin: 1em 0 0 0;\n\tpadding: 1em;\n\tbackground: rgb(245,245,245);\n\t-webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);\n\t-moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);\n\tbox-shadow: 0 0 1px rgba(0,0,0,0.20);\n\t\n  z-index: 15;\n}\n\n.direction-l .desc,\n.direction-r .desc {\n\tposition: relative;\n\tmargin: 1em 1em 0 1em;\n\tpadding: 1em;\n\t\n  z-index: 15;\n}\n\n}\n\n@media screen and (min-width: 400px ?? max-width: 660px) {\n\n.direction-l .desc,\n.direction-r .desc {\n\tmargin: 1em 4em 0 4em;\n}\n\n}\n"]);return T=function(){return n},n}var A=function(){return r.a.createElement(D,null,r.a.createElement("section",{className:"main",id:"aboutme"},r.a.createElement("h2",null,"Section 3"),r.a.createElement("a",{href:"#section1"},"Click Me to Smooth Scroll to Section 1 Above"),r.a.createElement("ul",{class:"timeline"},r.a.createElement("li",null,r.a.createElement("div",{class:"direction-l"},r.a.createElement("div",{class:"flag-wrapper"},r.a.createElement("span",{class:"flag"},"TESTE."),r.a.createElement("span",{class:"time-wrapper"},r.a.createElement("span",{class:"time"},"2011 - 2013"))),r.a.createElement("div",{class:"desc"},"My first employer. All the stuff I've learned and projects I've been working on."))),r.a.createElement("li",null,r.a.createElement("div",{class:"direction-r"},r.a.createElement("div",{class:"flag-wrapper"},r.a.createElement("span",{class:"flag"},"TESTE"),r.a.createElement("span",{class:"time-wrapper"},r.a.createElement("span",{class:"time"},"2013 - present"))),r.a.createElement("div",{class:"desc"},"My current employment. Way better than the position before!"))),r.a.createElement("li",null,r.a.createElement("div",{class:"direction-l"},r.a.createElement("div",{class:"flag-wrapper"},r.a.createElement("span",{class:"flag"},"TESTE."),r.a.createElement("span",{class:"time-wrapper"},r.a.createElement("span",{class:"time"},"2011 - 2013"))),r.a.createElement("div",{class:"desc"},"My first employer. All the stuff I've learned and projects I've been working on."))),r.a.createElement("li",null,r.a.createElement("div",{class:"direction-r"},r.a.createElement("div",{class:"flag-wrapper"},r.a.createElement("span",{class:"flag"},"TESTE"),r.a.createElement("span",{class:"time-wrapper"},r.a.createElement("span",{class:"time"},"2008 - 2011"))),r.a.createElement("div",{class:"desc"},"A description of all the lectures and courses I have taken and my final degree?"))))))},D=m.a.div(T());function I(){var n=Object(c.a)(["\n  #contactme {\n    margin-top: 1vh;\n    border-radius: 5px;\n    height: 100vh;\n    background-color: yellow;\n  }\n"]);return I=function(){return n},n}var W=m.a.div(I()),P=function(){return r.a.createElement(W,null,r.a.createElement("section",{className:"main",id:"contactme"},r.a.createElement("h2",null,"Section 4"),r.a.createElement("a",{href:"#section1"},"Click Me to Smooth Scroll to Section 1 Above")))};function B(){var n=Object(c.a)(["\n    background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA));\n    background-color: #000 /*#141415 #020206 //#282c34 */;\n\n  .wrapper {\n    padding-left: ","};\n    \n  }\n"]);return B=function(){return n},n}var X=m.a.div(B(),(function(n){return n.tamanho})),Y=function(){var n=new p.a('a[href*="#"]',{speed:1e3});console.log(n);var e=Object(a.useState)((function(){return window.innerWidth<=640?"2.5vw":"9vw"})),t=Object(s.a)(e,2),i=t[0],o=t[1];return Object(a.useEffect)((function(){var n=function(){window.innerWidth>=640?o("9vw"):o("2.5vw")};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}})),r.a.createElement(X,{tamanho:i},r.a.createElement("div",{className:"container-fluid wrapper"},r.a.createElement(w,null),r.a.createElement(C,null),r.a.createElement(A,null),r.a.createElement(P,null)))};function G(){var n=Object(c.a)(["\n\n  background-color:  #444;\n  margin: 0;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  line-height: 1.5;  \n\nh1, h2, h3 {\n  margin: 0;\n  font-weight: 400;\n  \n  &.lg-heading {\n    font-size: 6rem;\n  }\n\n  &.sm-heading {\n    margin-bottom: 2rem;\n    padding: 0.2rem 1rem;\n\n  }\n}\n\n.text-secondary{\ncolor: #eece1a !important;\n}\n\nmain {  \n  padding: 4rem;\n  .icons {\n  }\n  color: #fff;\n}\n"]);return G=function(){return n},n}function J(){return r.a.createElement(F,null,r.a.createElement("main",{id:"home"},r.a.createElement("h1",{className:"lg-heading"},"John ",r.a.createElement("span",{className:"text-secondary"},"Doe")),r.a.createElement("h1",{className:"sm-heading"},"Web Developer, Programmer, Designer & Entrepreneur")))}var F=m.a.div(G()),H=t(11),L=(t(48),t(8)),R=t(19),q=[{id:3,icon:r.a.createElement(R.d,{className:"icon"}),url:"https://twitter.com/eversavio"},{id:2,icon:r.a.createElement(R.a,{className:"icon"}),url:"https://www.github.com/havyx"},{id:1,icon:r.a.createElement(R.c,{className:"icon"}),url:"https://www.linkedin.com/in/evertonsavio/"}],U={id:4,icon:r.a.createElement(R.b,{className:"icon"}),url:"#home"},V=t(18);function Q(){var n=Object(c.a)(["\n  .menu-footer {\n    position: absolute;\n    bottom: 10vh;\n  }\n\n  .menu-footer > a {\n    font-size: 25px;\n    margin: 5vh;\n    transition: 1s;\n    color: whitesmoke;\n    &:hover {\n      color: #61dafb;\n    }\n  }\n\n  .menu-container {\n    position: fixed;\n    margin-top: 20px;\n    margin-right: 20px;\n    top: 0;\n    right: 0;\n    z-index: 2;\n  }\n  .toggler {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    opacity: 0;\n    z-index: 3;\n    cursor: pointer;\n  }\n  .hamburguer {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    width: 60px;\n    height: 60px;\n    border-radius: 20%;\n    background-color: #282c34;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);\n  }\n\n  .hamburguer > div {\n    position: absolute;\n    width: 50%;\n    height: 3px;\n    border-radius: 1.5px;\n    background-color: whitesmoke; //#61dafb;\n    transition: 0.4s;\n  }\n\n  .hamburguer > div:before,\n  .hamburguer > div:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 3px;\n    border-radius: 1.5px;\n    background-color: whitesmoke; //#61dafb;\n  }\n  .hamburguer > div:before {\n    top: -10px;\n  }\n\n  .hamburguer > div:after {\n    top: 10px;\n  }\n\n  .toggler:checked + .hamburguer > div {\n    transform: rotate(225deg);\n  }\n\n  .toggler:checked:hover + .hamburguer > div {\n    transform: rotate(315deg);\n  }\n\n  .toggler:checked + .hamburguer > div:after,\n  .toggler:checked + .hamburguer > div:before {\n    transform: rotate(90deg);\n    top: 0;\n  }\n\n  .toggler:checked ~ .menu {\n    visibility: visible;\n  }\n\n  .toggler:checked ~ .menu > div {\n    transform: translateX(-50%) translateY(-50%);\n    opacity: 1;\n  }\n\n  .menu {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    visibility: hidden;\n  }\n  .menu > div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-150%) translateY(-50%);\n    background-color: rgba(0, 0, 0, 0.95);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    transition: 0.6s;\n    opacity: 0;\n  }\n\n  .menu > div > ul > li {\n    list-style: none;\n    text-decoration: none;\n    margin-right: 2.25rem;\n  }\n\n  .menu > div > ul > li > a {\n    text-decoration: none;\n    margin-bottom: 2rem;\n    display: inline-block;\n    font-size: 1.2rem;\n    font-weight: 550;\n    text-transform: uppercase;\n    color: whitesmoke;\n    transition: 0.6s;\n    &:hover {\n      color: #61dafb;\n    }\n  }\n"]);return Q=function(){return n},n}var $=m.a.nav(Q()),_=function(){var n=Object(a.useRef)(),e=document.querySelector(".my-scrollable-element"),t=function(t){"checkbox"===t.target.type?Object(V.disablePageScroll)(e):Object(V.enablePageScroll)(e),n.current.checked=!1};return r.a.createElement($,null,r.a.createElement("div",{className:"menu-container"},r.a.createElement("input",{type:"checkbox",ref:n,onChange:function(t){!0===n.current.checked?Object(V.disablePageScroll)(e):Object(V.enablePageScroll)(e)},className:"toggler"}),r.a.createElement("div",{className:"hamburguer"},r.a.createElement("div",null)),r.a.createElement("div",{className:"menu",onClick:t},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#home",onClick:t},"Inicio")),r.a.createElement("li",null,r.a.createElement("a",{href:"#portfolio",onClick:t},"Projetos")),r.a.createElement("li",null,r.a.createElement("a",{href:"#aboutme",onClick:t},"Sobre Mim")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contactme",onClick:t},"Contato"))),r.a.createElement("div",{className:"menu-footer"},q.slice(0).reverse().map((function(n){return r.a.createElement("a",{href:n.url,target:"blank",key:n.id},n.icon)})))))))};function K(){var n=Object(c.a)(["\n  .nav-rotate {\n    text-transform: uppercase;\n    color: whitesmoke;\n    width: 100vh;\n    height: 16vh;\n    font-size: 20px;\n    font-family: Oxygen;\n    background: #282c34;\n    display: flex;\n    position: fixed;\n    align-items: center;\n    justify-content: space-around;\n    -webkit-transform-origin: left top;\n    -webkit-transform: rotate(-90deg) translateX(-100%);\n  }\n  .icons {\n    width: 22vh;\n    font-size: 16=8px;\n    display: flex;\n    justify-content: space-evenly;\n  }\n  .iconJS {\n    color: whitesmoke;\n    -webkit-transform-origin: left top;\n    -webkit-transform: rotate(-270deg) translateX(25%);\n    transition: 1s;\n    &:hover {\n      color: #61dafb;\n    }\n  }\n  .iconHome {\n    font-size: 26px;\n    display: flex;\n  }\n"]);return K=function(){return n},n}var Z=m.a.nav(K()),nn=function(){var n=Object(a.useState)([window.innerWidth,window.innerHeight]),e=Object(s.a)(n,2),t=e[0],i=e[1],o=Object(L.a)(t),l=o[0],c=o[1];return Object(a.useEffect)((function(){var n=function(){i([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}})),l>=640&&c>450?r.a.createElement(Z,null,r.a.createElement("div",{className:"nav-rotate"},r.a.createElement("div",{className:"icons"},q.map((function(n){return r.a.createElement("a",{className:"iconJS",href:n.url,target:"blank",key:n.id},n.icon)}))),r.a.createElement("div",null),r.a.createElement("div",null,"Contato"),r.a.createElement("div",null,"Sobre Mim"),r.a.createElement("div",null,"Projetos"),r.a.createElement("div",null),r.a.createElement("div",{className:"iconHome"},r.a.createElement("a",{className:"iconJS",href:U.url},U.icon)))):r.a.createElement(_,null)};var en=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(nn,null),r.a.createElement(H.c,null,r.a.createElement(H.a,{path:"/",exact:!0,component:Y}),r.a.createElement(H.a,{path:"/projects",component:J}),r.a.createElement(H.a,{exact:!0,component:Y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(en,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.552e97a8.chunk.js.map