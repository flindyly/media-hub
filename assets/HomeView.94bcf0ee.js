import{d as ne,o as s,c as a,a as e,t as h,b as w,e as v,r as c,f as pe,w as _e,g as He,h as I,v as Ae,i as De,n as Y,u as d,F as z,j as $,k as H,l as _,T as Re,m as oe,p as we,q as U,s as ge}from"./index.ebfca88c.js";import{m as A,A as ye,K as Te,c as je,d as Z,T as be,B as F,r as Pe,s as Ue,g as Ee,a as Fe,b as Ke,O as Oe,e as G,h as J,f as X}from"./storageConfig.c80a5f01.js";const Ne={class:"h-fit break-inside-avoid mb-12 mx-2"},Qe={class:"relative group p-5 rounded-lg bg-gray-100 flex justify-center"},We=["src","id"],qe=["src"],xe=ne({__name:"ImageCard",props:{data:null},emits:["showPreview"],setup(r,{emit:k}){function M(g){k("showPreview",g)}return(g,b)=>(s(),a("div",Ne,[e("div",Qe,[r.data.thumbnailType=="Static"?(s(),a("img",{key:0,src:r.data.thumbnail,id:r.data.uid,class:"rounded-lg"},null,8,We)):(s(),a("img",{key:1,src:`https://img.youtube.com/vi/${r.data.thumbnail}/mqdefault.jpg`,class:"rounded-lg border border-gray-100 w-full"},null,8,qe)),e("div",{onClick:b[0]||(b[0]=x=>M(r.data.uid)),class:"hidden group-hover:flex absolute z-30 p-4 rounded-lg inset-0 bg-gray-900 bg-opacity-70 text-white text-lg flex-wrap items-center justify-center cursor-zoom-in"},[e("p",null,h(r.data.title),1)])])]))}}),Ye={class:"fixed z-50 inset-0 flex w-full h-full overflow-y-auto bg-gray-800 bg-opacity-90 overscroll-y-none",tabindex:"-1","aria-hidden":"true"},Ge={class:"relative p-8 m-auto h-fit w-full max-w-screen-md flex flex-col items-center rounded-lg border bg-white z-50 overscroll-contain"},Je=e("svg",{"aria-hidden":"true",class:"w-10 h-10 text-gray-400 hover:text-slate-700",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Xe=[Je],Ze={class:"tracking-wide text-3xl"},et=e("br",null,null,-1),tt=["src"],lt=["src"],st={class:"columns-2 mt-4"},at={class:"break-inside-avoid-column"},ot=e("span",{class:"font-semibold"},"Contributor: ",-1),nt={class:"break-inside-avoid-column"},it=e("span",{class:"font-semibold"},"Type(s): ",-1),ct={key:0,class:"break-inside-avoid-column"},ut=e("span",{class:"font-semibold"},"Schools: ",-1),rt={class:"break-inside-avoid-column"},dt=e("span",{class:"font-semibold"},"Views: ",-1),vt={key:1,class:"break-inside-avoid-column"},ht=e("span",{class:"font-semibold"},"Department: ",-1),mt={class:"break-inside-avoid-column"},ft=e("span",{class:"font-semibold"},"Date Uploaded: ",-1),pt=e("br",null,null,-1),_t=["href"],wt=ne({__name:"PreviewModal",props:{currentItem:null},emits:["closeModal"],setup(r,{emit:k}){function M(x){const m=[];return x.forEach(p=>{p.substring(0,3)=="vid"?m.push(A.Video.get(p)):p.substring(0,3)=="img"?m.push(A.Image.get(p)):p.substring(0,3)=="ani"?m.push(A.Animation.get(p)):m.push(A.Interactive.get(p))}),m.join(", ")}async function g(x){const m=ye(Z,`MediaItems/${x}`);await Te(m,{visitCount:je(1)})}function b(){k("closeModal")}return(x,m)=>(s(),a("div",Ye,[e("div",Ge,[e("button",{class:"absolute top-0 right-0 p-2 rounded-lg",onClick:b},Xe),e("h1",Ze,h(r.currentItem.title),1),et,r.currentItem.thumbnailType=="Static"?(s(),a("img",{key:0,src:r.currentItem.thumbnail,class:"rounded-lg border border-gray-200"},null,8,tt)):(s(),a("iframe",{key:1,class:"w-full",height:"315",src:`https://www.youtube.com/embed/${r.currentItem.thumbnail}`},null,8,lt)),e("div",st,[e("p",at,[ot,w(h(r.currentItem.contributor+"@adelaide.edu.au"),1)]),e("p",nt,[it,w(h(M(r.currentItem.type)),1)]),r.currentItem.hasOwnProperty("school")?(s(),a("p",ct,[ut,w(h(r.currentItem.school.join(", ")),1)])):v("",!0),e("p",rt,[dt,w(h(r.currentItem.visitCount),1)]),r.currentItem.hasOwnProperty("department")?(s(),a("p",vt,[ht,w(h(r.currentItem.department),1)])):v("",!0),e("p",mt,[ft,w(h(r.currentItem.date.toDate().toLocaleDateString()),1)])]),pt,e("a",{href:`https://universityofadelaide.app.box.com/folder/${r.currentItem.uid}`,target:"_blank",rel:"noopener noreferrer"},[e("button",{type:"button",class:"adx-button primary",onClick:m[0]||(m[0]=p=>g(r.currentItem.uid))},"Download From Box")],8,_t)])]))}}),gt={class:"fixed top-[120px] z-40 bg-white w-full pt-4"},bt={class:"w-[80%] mx-auto p-2 flex items-center"},xt={class:"relative w-full"},yt=e("button",{class:"absolute top-4 left-4",title:"Search"},[e("svg",{class:"w-6 h-6 text-gray-400 hover:text-gray-700",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})])],-1),kt=["onKeyup","placeholder"],Ct=e("path",{d:"M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"},null,-1),zt=[Ct],Mt=e("p",{class:"text-lg"}," Filters ",-1),St={class:"flex flex-col h-[calc(100vh_-_225px)] mt-[225px] overflow-y-auto"},Vt={class:"relative"},It={key:0,class:"absolute fixed left-0 top-0 w-full h-[calc(100vh_-_225px)] bg-white overflow-y-auto overscroll-y-none pb-10"},$t={class:"mx-auto max-w-[80%] mt-4 items-center justify-center bg-white"},Bt=e("span",{class:"underline"}," Back to Search ",-1),Lt={class:"text-center"},Ht={key:0,class:"text-lg my-4"},At={class:"px-20"},Dt={class:"sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8"},Rt={key:0,class:"flex justify-center items-center py-8"},Tt={key:0,class:"right-0 w-full md:w-[400px] flex flex-col fixed top-[120px] h-full z-50 p-[2em] text-gray-500 border-l border-brand-darkblue-lighter bg-[#f1f1f1]"},jt={class:"sticky top-0 left-0 flex items-center w-full bg-[#f1f1f1] border-b-2 border-solid border-grey-300"},Pt=e("svg",{class:"w-7 h-7",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[e("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})],-1),Ut=[Pt],Et=e("div",null,[e("h3",{class:"font-semibold text-2xl mb-2"}," Filters ")],-1),Ft={class:"flex-1 overflow-y-auto h-auto"},Kt={key:0,class:"border-b-2"},Ot=e("p",null,"Sort By:",-1),Nt={class:"flex items-center mb-2"},Qt=e("label",{for:"sortRecent"}," Recently Added ",-1),Wt=e("br",null,null,-1),qt={class:"flex items-center mb-2"},Yt=e("label",{for:"sortPopular"}," Most Viewed ",-1),Gt=e("br",null,null,-1),Jt={key:0,class:"w-3 h-3 mr-4 text-green-400",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Xt=e("path",{d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"},null,-1),Zt=[Xt],el=e("span",{class:"mr-4"},[e("svg",{class:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},[e("path",{d:"M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"})])],-1),tl=e("p",null," School ",-1),ll={class:"w-fit mt-2 mb-4"},sl=["for"],al=["id","value"],ol={key:0,class:"w-3 h-3 mr-4 text-green-400",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},nl=e("path",{d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"},null,-1),il=[nl],cl=e("span",{class:"mr-4"},[e("svg",{class:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[e("path",{d:"M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"})])],-1),ul=e("p",null,"Department",-1),rl={class:"w-fit mt-2 mb-4"},dl=["for"],vl=["id","value"],hl={key:0,class:"w-3 h-3 mr-4 text-green-400",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ml=e("path",{d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"},null,-1),fl=[ml],pl=e("span",{class:"mr-4"},[e("svg",{class:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[e("path",{d:"M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z"})])],-1),_l=e("p",null,"Image",-1),wl=["for"],gl=["id","value"],bl={key:0,class:"w-3 h-3 mr-4 text-green-400",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},xl=e("path",{d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"},null,-1),yl=[xl],kl=e("span",{class:"mr-4"},[e("svg",{class:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[e("path",{d:"M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9V128c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96H208c-53 0-96-43-96-96V144c0-26.5 21.5-48 48-48H288c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128V448c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64l98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zm96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"})])],-1),Cl=e("p",null,"Animation",-1),zl=["for"],Ml=["id","value"],Sl={key:0,class:"w-3 h-3 mr-4 text-green-400",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Vl=e("path",{d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"},null,-1),Il=[Vl],$l=e("span",{class:"mr-4"},[e("svg",{class:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[e("path",{d:"M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"})])],-1),Bl=e("p",null,"Video",-1),Ll=["for"],Hl=["id","value"],Al={key:0,class:"w-3 h-3 mr-4 text-green-400",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Dl=e("path",{d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"},null,-1),Rl=[Dl],Tl=e("span",{class:"mr-4"},[e("svg",{class:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[e("path",{d:"M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"})])],-1),jl=e("p",null,"Interactive",-1),Pl=["for"],Ul=["id","value"],El={class:"sticky bottom-0 flex justify-center items-center py-2 w-full border-t-2 border-solid border-grey-300 bg-[#f1f1f1]"},Fl=["disabled"],Kl={key:1,class:"flex flex-col bg-white"},Ol={class:"flex flex-1 pb-4 bg-white relative"},Nl={class:"mx-auto max-w-[80%] items-center justify-center bg-white"},Ql={key:0,class:"text-md text-right mb-4"},Wl={key:0,class:"sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8"},ql={key:1,class:"flex justify-center items-center py-8"},Yl={key:2,class:"max-w-3xl mx-auto"},Gl=e("h3",{class:"font-semibold text-2xl mb-4 mt-8"}," Browse Albums ",-1),Jl={class:"grid grid-cols-4 gap-8 pb-8"},Xl=["onClick"],Zl=["src"],es={class:"absolute w-full rounded-bl-md rounded-br-md bg-gray-900 bg-opacity-60 bottom-0 inset-x-0 text-center text-lg text-white"},ss=ne({__name:"HomeView",setup(r){const k=c(!1),M=c(""),g=c([]),b=c([]),x=c([]),m=c([]),p=c([]),T=c([]),C=c("date"),ke=c("adx-button brand-red"),Ce=c("adx-button complimentary disabled"),ie=pe(()=>x.value.concat(m.value,p.value).concat(T.value)),ee=pe(()=>g.value.length>0||b.value.length>0||x.value.length>0||m.value.length>0||p.value.length>0||T.value.length>0);let u=c(new Map);const j=c(0),K=c(!1);let S=c(new Map),B=c([]),P=c(new Map),y=[],D=0,V=c(3),O=c(3);const N=c(!0),R=c(!1);let Q=c(new Map);const E=c(new Map),ce=c(new Map),te=c(""),W=be(Z,"MediaItems"),ze=be(Z,"Albums"),ue=c(""),le=c(!1),q=c(!1);function re(){console.log(window.innerWidth),window.innerWidth<768?V.value=1:window.innerWidth<1024?V.value=2:window.innerWidth<1280?V.value=3:V.value=4}window.onresize=()=>{re()},_e(C,()=>{se()});function de(){C.value="date",g.value=[],b.value=[],x.value=[],m.value=[],p.value=[],T.value=[]}He(async()=>{(await F(ze)).forEach(async l=>{E.value.set(l.id,l.data());const i=Pe(Ue,`album_thumbnails/${l.data().thumbnail}`),f=await Ee(i).then(t=>t);ce.value.set(l.id,f)}),re()});async function Me(o){R.value=!0,te.value=o,N.value=!1;const l=E.value.get(o).items;let i;for(i of l){const f=ye(Z,`MediaItems/${i}`),t=await Oe(f);Q.value.set(i,t.data()),u.value.set(i,t.data()),B.value.push(i),y.push(i)}j.value=Q.value.size}function Se(){R.value=!1,K.value=!1,N.value=!0,Q.value.clear(),ve(),M.value="",k.value=!1,de()}function ve(){u.value.clear(),S.value.clear(),P.value.clear(),y=[],B.value=[],O.value=3,D=0}async function se(){N.value=!1,k.value=!1,ve(),M.value!=""&&(console.log("searching"),await Ve()),g.value.length!=0&&(console.log("school"),await Ie()),ie.value.length!=0&&(console.log("types"),await Be()),b.value.length!=0&&(console.log("depts"),await $e()),R.value&&(console.log("albums"),Le()),ae(),j.value=u.value.size,K.value=!0}async function Ve(){let o=new Map,l=[],i=G(W,X("keywords","array-contains-any",M.value.toLowerCase().split(" ")),J(C.value,"desc"));(await F(i)).forEach(t=>{o.set(t.id,t.data()),l.push(t.id)}),u.value=o,y=l}async function Ie(){let o=new Map,l=[],i=u.value.size,f=G(W,X("school","array-contains-any",g.value),J(C.value,"desc"));(await F(f)).forEach(n=>{(i==0||u.value.has(n.id))&&(o.set(n.id,n.data()),l.push(n.id))}),u.value=o,y=l}async function $e(){let o=new Map,l=[],i=u.value.size,f=G(W,X("department","array-contains-any",b.value),J(C.value,"desc"));(await F(f)).forEach(n=>{(i==0||u.value.has(n.id))&&(o.set(n.id,n.data()),l.push(n.id))}),u.value=o,y=l}async function Be(){let o=new Map,l=[],i=u.value.size,f=G(W,X("type","array-contains-any",ie.value),J(C.value,"desc"));(await F(f)).forEach(n=>{(i==0||u.value.has(n.id))&&(o.set(n.id,n.data()),l.push(n.id))}),u.value=o,y=l}function Le(){let o=new Map,l=[];Q.value.forEach((i,f)=>{u.value.has(f)&&(o.set(f,i),l.push(f))}),u.value=o,y=l}function he(o){le.value=!0,ue.value=o}function ae(){if(u.value.size<=O.value)S.value=u.value,fe(),q.value=!1;else if(D<u.value.size){for(let o=D;o<D+O.value;o++)if(o!=u.value.size){let l=y[o];S.value.set(l,u.value.get(l))}fe(),D=D+O.value,q.value=!0}}function me(){B.value=[],P.value.clear(),ae()}function fe(){let o=0;if(S.value.size<=V.value)S.value.forEach((l,i)=>{B.value.push(i)});else for(let l=0;l<V.value;l++){o=l;let i=y[o];for(;o<S.value.size;)B.value.push(i),o=o+V.value,i=y[o];o>=S.value.size&&(i=y[o-V.value],P.value.set(i,!0))}}return _e(V,()=>{D=0,B.value=[],P.value.clear(),ae()}),(o,l)=>{const i=ge("vue-collapsible-panel"),f=ge("vue-collapsible-panel-group");return s(),a(z,null,[e("div",gt,[e("div",bt,[e("div",xt,[yt,I(e("input",{onKeyup:De(se,["enter"]),"onUpdate:modelValue":l[0]||(l[0]=t=>M.value=t),class:"bg-gray-100 text-xl w-full h-14 px-12 rounded-lg focus:bg-white text-gray-700 placeholder:text-xl",type:"text",placeholder:`Search ${R.value?`in ${E.value.get(te.value).title}`:"for a media item"}`},null,40,kt),[[Ae,M.value]])]),e("button",{onClick:l[1]||(l[1]=t=>k.value=!k.value),type:"button",class:"adx-button primary flex h-14 items-center justify-center"},[e("span",null,[(s(),a("svg",{class:Y([{"text-green-500":d(ee)},"block w-5 h-5 mr-4 text-gray-400"]),fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},zt,2))]),Mt])])]),e("div",St,[e("div",Vt,[R.value?(s(),a("div",It,[e("div",$t,[e("button",{onClick:Se,class:"adx-brand-midblue-dark font-[600] pt-2"},[w(" < "),Bt]),e("div",Lt,[e("h1",null,h(E.value.get(te.value).title),1),j.value>=0?(s(),a("p",Ht,h(j.value)+" items ",1)):v("",!0)]),e("div",At,[e("div",Dt,[(s(!0),a(z,null,$(d(B),t=>(s(),a("div",{key:t,class:Y({"break-after-column":d(P).has(t)})},[(s(),oe(xe,{key:t,data:d(u).get(t),onShowPreview:he},null,8,["data"]))],2))),128))])]),q.value&&d(S).size<d(u).size?(s(),a("div",Rt,[e("button",{onClick:me,type:"button",class:"adx-button primary"},"Show More")])):v("",!0)])])):v("",!0),H(Re,{name:"slide",mode:"out-in"},{default:_(()=>[k.value?(s(),a("aside",Tt,[e("header",jt,[e("button",{type:"button",onClick:l[2]||(l[2]=t=>k.value=!1),class:"mt-2 mr-4 text-sm text-gray-400 bg-[#f1f1f1] hover:text-slate-900 rounded-lg"},Ut),Et]),e("main",Ft,[R.value?v("",!0):(s(),a("div",Kt,[Ot,e("div",Nt,[I(e("input",{checked:"",type:"radio","onUpdate:modelValue":l[3]||(l[3]=t=>C.value=t),id:"sortRecent",value:"date",class:"mr-2 w-4 h-4 accent-red-600"},null,512),[[we,C.value]]),Qt,Wt]),e("div",qt,[I(e("input",{type:"radio","onUpdate:modelValue":l[4]||(l[4]=t=>C.value=t),id:"sortPopular",value:"visitCount",class:"mr-2 w-4 h-4 accent-red-600"},null,512),[[we,C.value]]),Yt,Gt])])),H(f,{accordion:""},{default:_(()=>[H(i,{expanded:!0,class:"overflow-x-hidden"},{title:_(()=>[g.value.length>0?(s(),a("svg",Jt,Zt)):v("",!0),el,tl]),content:_(()=>[e("div",ll,[(s(!0),a(z,null,$(d(Fe),t=>(s(),a("div",null,[e("label",{for:t,class:"flex items-center mb-4"},[I(e("input",{type:"checkbox","onUpdate:modelValue":l[5]||(l[5]=n=>g.value=n),id:t,value:t,class:"w-4 h-4 mr-2 accent-red-600 flex-none"},null,8,al),[[U,g.value]]),w(" "+h(t),1)],8,sl)]))),256))])]),_:1}),H(i,{expanded:!1,class:"overflow-x-hidden"},{title:_(()=>[b.value.length>0?(s(),a("svg",ol,il)):v("",!0),cl,ul]),content:_(()=>[e("div",rl,[(s(!0),a(z,null,$(d(Ke),t=>(s(),a("div",null,[e("label",{for:t,class:"flex items-center mb-4"},[I(e("input",{type:"checkbox","onUpdate:modelValue":l[6]||(l[6]=n=>b.value=n),id:t,value:t,class:"w-4 h-4 mr-2 accent-red-600 flex-none"},null,8,vl),[[U,b.value]]),w(" "+h(t),1)],8,dl)]))),256))])]),_:1}),H(i,{expanded:!1,class:"overflow-x-hidden"},{title:_(()=>[x.value.length>0?(s(),a("svg",hl,fl)):v("",!0),pl,_l]),content:_(()=>[(s(!0),a(z,null,$(d(A).Image,([t,n])=>(s(),a("div",null,[e("label",{for:t,class:"flex items-center mb-4"},[I(e("input",{type:"checkbox","onUpdate:modelValue":l[7]||(l[7]=L=>x.value=L),id:t,value:t,class:"w-4 h-4 accent-red-600 mr-2 flex-none"},null,8,gl),[[U,x.value]]),w(" "+h(n),1)],8,wl)]))),256))]),_:1}),H(i,{expanded:!1,class:"overflow-x-hidden"},{title:_(()=>[p.value.length>0?(s(),a("svg",bl,yl)):v("",!0),kl,Cl]),content:_(()=>[(s(!0),a(z,null,$(d(A).Animation,([t,n])=>(s(),a("div",null,[e("label",{for:t,class:"flex items-center mb-4"},[I(e("input",{type:"checkbox","onUpdate:modelValue":l[8]||(l[8]=L=>p.value=L),id:t,value:t,class:"w-4 h-4 accent-red-600 mr-2 flex-none"},null,8,Ml),[[U,p.value]]),w(" "+h(n),1)],8,zl)]))),256))]),_:1}),H(i,{expanded:!1,class:"overflow-x-hidden"},{title:_(()=>[m.value.length>0?(s(),a("svg",Sl,Il)):v("",!0),$l,Bl]),content:_(()=>[(s(!0),a(z,null,$(d(A).Video,([t,n])=>(s(),a("div",null,[e("label",{for:t,class:"flex items-center mb-4"},[I(e("input",{type:"checkbox","onUpdate:modelValue":l[9]||(l[9]=L=>m.value=L),id:t,value:t,class:"w-4 h-4 accent-red-600 mr-2 flex-none"},null,8,Hl),[[U,m.value]]),w(" "+h(n),1)],8,Ll)]))),256))]),_:1}),H(i,{expanded:!1,class:"overflow-x-hidden"},{title:_(()=>[T.value.length>0?(s(),a("svg",Al,Rl)):v("",!0),Tl,jl]),content:_(()=>[(s(!0),a(z,null,$(d(A).Interactive,([t,n])=>(s(),a("div",null,[e("label",{for:t,class:"flex items-center mb-4"},[I(e("input",{type:"checkbox","onUpdate:modelValue":l[10]||(l[10]=L=>T.value=L),id:t,value:t,class:"w-4 h-4 accent-red-600 mr-2 flex-none"},null,8,Ul),[[U,T.value]]),w(" "+h(n),1)],8,Pl)]))),256))]),_:1})]),_:1})]),e("footer",El,[e("button",{type:"button",onClick:de,class:"adx-button"}," Clear All "),e("button",{type:"button",class:Y(d(ee)?ke.value:Ce.value),disabled:!d(ee),onClick:se}," APPLY ",10,Fl)])])):v("",!0)]),_:1}),R.value?v("",!0):(s(),a("div",Kl,[e("main",Ol,[e("div",Nl,[j.value>=0&&K.value?(s(),a("p",Ql,h(j.value)+" items found. ",1)):v("",!0),e("div",null,[K.value?(s(),a("div",Wl,[(s(!0),a(z,null,$(d(B),t=>(s(),a("div",{key:t,class:Y({"break-after-column":d(P).has(t)})},[(s(),oe(xe,{key:t,data:d(u).get(t),onShowPreview:he},null,8,["data"]))],2))),128))])):v("",!0)]),q.value&&d(S).size<d(u).size?(s(),a("div",ql,[e("button",{onClick:me,type:"button",class:"adx-button primary"}," Show More ")])):v("",!0),N.value?(s(),a("div",Yl,[Gl,e("div",Jl,[(s(!0),a(z,null,$(E.value,([t,n])=>(s(),a("div",{class:"rounded-lg border border-2 relative h-full w-full cursor-pointer hover:ring-2 hover:ring-brand-darkblue-light",onClick:L=>Me(t)},[e("img",{src:ce.value.get(t),class:"rounded-md object-cover w-full h-full"},null,8,Zl),e("div",es,h(n.title),1)],8,Xl))),256))])])):v("",!0)])])]))])]),le.value?(s(),oe(wt,{key:0,"current-item":d(u).get(ue.value),onCloseModal:l[11]||(l[11]=t=>le.value=!1)},null,8,["current-item"])):v("",!0)],64)}}});export{ss as default};