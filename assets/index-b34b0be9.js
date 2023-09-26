var le=Object.defineProperty;var ne=(o,e,s)=>e in o?le(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s;var k=(o,e,s)=>(ne(o,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const T=class T{static stringToArray(e){if(e.length<=17){let s=/[.]/;return e.split(s).map(t=>+t)}else if(e.length==35){let s=[[]];return e.split(/[.]/).forEach(a=>{let r=[];const n=a.match(/[0-9]/g);for(let u=0;u<8;u++)r.push(+n[u]);s.push(r)}),s.shift(),s}}static cidr(e){let s=T.binaire(e),t=0;return s.forEach(a=>a.forEach(r=>r===1?t+=1:null)),t}static masque(e){let s;if(e.length===35&&typeof e=="string"){let t=this.decimal(e);s=this.binaire(t)}else e.length<=15&&typeof e=="string"?s=this.binaire(e):Array.isArray(e)&&typeof e[0]=="number"?s=this.binaire(e):s=e;if(s[0][0]==0)return[255,0,0,0];if(s[0][0]==1&&s[0][1]==0)return[255,255,0,0];if(s[0][0]==1&&s[0][1]==1)return[255,255,255,0]}static triSubnet(e){return e.forEach((s,t)=>{let a=t,r;for(a+1;a<e.length;a++)e[t].host<e[a].host&&(r=e[t],e[t]=e[a],e[a]=r);console.log(s)}),e}};k(T,"binaire",e=>{let s=[];function t(a){let r=a,n=[128,64,32,16,8,4,2,1],u=[];for(let c=0;c<8;c++)r-=n[c],r<0?(r+=n[c],u.push(0)):u.push(1);return u}return typeof e=="string"?T.stringToArray(e).forEach(a=>s.push(t(+a))):e.forEach(a=>s.push(t(+a))),s}),k(T,"decimal",e=>{if(e.length<=2){let s=[[],[],[],[]],t=+e;for(let a=0;a<4;a++)for(let r=0;r<8;r++)t>0?s[a].push(1):s[a].push(0),t--;return T.decimal(s)}else{let s;typeof e=="string"?s=T.stringToArray(e):s=e;let t=[],a=[128,64,32,16,8,4,2,1];return s.forEach(r=>{let n=0;for(let u=0;u<8;u++)r[u]!=0&&(n+=a[u]);t.push(n)}),t}});let v=T;async function oe(o,e,s){return await new Promise((t,a)=>{let[r,n,u,c]=o.split("."),l=+r,d=+n,i=+u,h=+c,q=[],A,y,L,p;const N=[128,64,32,16,8,4,2,1];let f=0;do f++;while(2**f<s);const m=v.cidr(e)+f;function ie(M){let j=M;for(;j>8;)j-=8;return N[j-1]}const g=ie(m);function F(){h>255&&(i+=1,h=0),i>255&&(d+=1,i=0,h=0),d>255&&(l+=1,d=0,i=0,h=0)}if(m>=24&&m<=32){h=0,q.push({reseau:[l,d,i,h].join("."),broadCast:[l,d,i,h+g-1].join("."),firstAttribuable:[l,d,i,h+1].join("."),lastAttribuable:[l,d,i,h+g-2].join("."),totalAttribuable:`2<sup>${32-m}</sup> = ${2**(32-m)} - 2 = ${2**(32-m)-2}`,cidrMasque:m});for(let M=0;M<2**f-1;M++){h+=g,F();let j=String([l,d,i,h].join("."));L=i,p=h,p+=g,p-=1,p>255&&(p=0,L+=1);let I=[l,d,L,p].join(".");q.push({reseau:j,broadCast:I,firstAttribuable:[l,d,i,h+1].join("."),lastAttribuable:[l,d,i,h+g-2].join("."),totalAttribuable:`2<sup>${32-m}</sup> = ${2**(32-m)} - 2 = ${2**(32-m)-2}`,cidrMasque:m})}}else if(m>=16&&m<24){i=0,h=0,q.push({reseau:[l,d,i,h].join("."),broadCast:[l,d,i+g-1,255].join("."),firstAttribuable:[l,d,i,1].join("."),lastAttribuable:[l,d,i+g-1,254].join("."),totalAttribuable:`2<sup>${32-m}</sup> = ${2**(32-m)} - 2 = ${2**(32-m)-2}`,cidrMasque:m});for(let M=0;M<2**f-1;M++){i+=g,F();let j=String([l,d,i,h].join("."));A=l,y=d,L=i,L+=g,L-=1,L>255&&(L=0,y+=1),y>255&&(y=0,A+=1);let I=[l,d,L,255].join(".");q.push({reseau:j,broadCast:I,firstAttribuable:[l,d,i,h+1].join("."),lastAttribuable:[l,d,i+g-1,254].join("."),totalAttribuable:`2<sup>${32-m}</sup> = ${2**(32-m)} - 2 = ${2**(32-m)-2}`,cidrMasque:m})}}else if(m>=8){d=0,i=0,h=0,q.push({reseau:[l,d,i,h].join("."),broadCast:[l,d+g-1,255,255].join("."),firstAttribuable:[l,d,i,1].join("."),lastAttribuable:[l,d+g-1,255,254].join("."),totalAttribuable:`2<sup>${32-m}</sup> = ${2**(32-m)} - 2 = ${2**(32-m)-2}`,cidrMasque:m});for(let M=0;M<2**f-1;M++){d+=g,F();let j=[l,d,i,h].join(".");A=l,y=d,y+=g,y-=1,y>255&&(y=0,A+=1);let I=[A,y,255,255].join(".");q.push({reseau:j,broadCast:I,firstAttribuable:[l,d,i,h+1].join("."),lastAttribuable:[l,d+g-1,255,254].join("."),totalAttribuable:`2<sup>${32-m}</sup> = ${2**(32-m)} - 2 = ${2**(32-m)-2}`,cidrMasque:m})}}else if(m<8){l=0,d=0,i=0,h=0,q.push({reseau:[l,d,i,h].join("."),broadCast:[l+g-1,255,255,255].join("."),firstAttribuable:[l,d,i,1].join("."),lastAttribuable:[l+g-1,255,255,254].join("."),totalAttribuable:`2<sup>${32-m}</sup> = ${2**(32-m)} - 2 = ${2**(32-m)-2}`,cidrMasque:m});for(let M=0;M<2**f-1;M++){d+=g,F();let j=[l,d,i,h].join(".");A=l,A+=g,A-=1;let I=[A,255,255,255].join(".");q.push({reseau:j,broadCast:I,firstAttribuable:[l,d,i,h+1].join("."),lastAttribuable:[A,255,255,254].join("."),totalAttribuable:`2<sup>${32-m}</sup> = ${2**(32-m)} - 2 = ${2**(32-m)-2}`,cidrMasque:m})}}t(q),a(!1)})}class ue{constructor(e,s){k(this,"sheet",[[128,64,32,16,8,4,2,1],[25,26,27,28,29,30,31,32],[17,18,19,20,21,22,23,24],[9,10,11,12,13,14,15,16],[1,2,3,4,5,6,7,8]]);k(this,"ip");k(this,"masque");this.masque=s,isNaN(+this.masque)&&(this.masque=v.cidr(this.masque).toString()),this.ip=e}getPlant(){const e=v.stringToArray(this.ip);let[s,t,a,r]=e,n;for(let u=0;u<5;u++)this.sheet[u].forEach((c,l)=>{c==parseInt(this.masque)&&(n=this.sheet[0][l])});if(+this.masque<=8){let u=this.getSousReseau(s,n)+n,c=[this.getSousReseau(s,n),0,0,0],l=[this.getSousReseau(s,n),0,0,1],d=[u-1,255,255,255],i=[u-1,255,255,254],h=[u,0,0,0];return{adresseSousReseau:c.join("."),premiereAdresseAssignable:l.join("."),dernierAdresseAssignable:i.join("."),broadcast:d.join("."),adresseSousReseauSuivant:h.join("."),nombreAdresseIp:this.nbrAdressAndAssignable(+this.masque),masqueCidrDecimal:`${this.masque} = ${v.decimal(this.masque).join(".")}`}}else if(+this.masque<=16){let u=this.getSousReseau(t,n)+n,c=[s,this.getSousReseau(t,n),0,0],l=[s,this.getSousReseau(t,n),0,1],d=[s,u-1,255,255],i=[s,u-1,255,254];u>255&&(s+=1,u=0);let h=[s,u,0,0];return{adresseSousReseau:c.join("."),premiereAdresseAssignable:l.join("."),dernierAdresseAssignable:i.join("."),broadcast:d.join("."),adresseSousReseauSuivant:h.join("."),nombreAdresseIp:this.nbrAdressAndAssignable(+this.masque),masqueCidrDecimal:`${this.masque} = ${v.decimal(this.masque).join(".")}`}}else if(+this.masque<=24){let u=this.getSousReseau(a,n)+n,c=[s,t,this.getSousReseau(a,n),0],l=[s,t,this.getSousReseau(a,n),1],d=[s,t,u-1,255],i=[s,t,u-1,254];u>255&&(t+=1,u=0);let h=[s,t,u,0];return{adresseSousReseau:c.join("."),premiereAdresseAssignable:l.join("."),dernierAdresseAssignable:i.join("."),broadcast:d.join("."),adresseSousReseauSuivant:h.join("."),nombreAdresseIp:this.nbrAdressAndAssignable(+this.masque),masqueCidrDecimal:`${this.masque} = ${v.decimal(this.masque).join(".")}`}}else if(+this.masque<=32){let u=this.getSousReseau(r,n)+n,c=[s,t,a,this.getSousReseau(r,n)],l=[s,t,a,this.getSousReseau(r,n)+1],d=[s,t,a,u-1],i=[s,t,a,u-2];u>255&&(a+=1,u=0);let h=[s,t,a,u];return{adresseSousReseau:c.join("."),premiereAdresseAssignable:l.join("."),dernierAdresseAssignable:i.join("."),broadcast:d.join("."),adresseSousReseauSuivant:h.join("."),nombreAdresseIp:this.nbrAdressAndAssignable(+this.masque),masqueCidrDecimal:`${this.masque} = ${v.decimal(this.masque).join(".")}`}}}nbrAdressAndAssignable(e){return`2<sup>${32-e}</sup> = ${2**(32-e)} (Assignable: ${2**(32-e)}-2 = ${2**(32-e)-2})`}getSousReseau(e,s){let t=0;do t+=s;while(t<=e);return t-=s}}class de{constructor(e,s,t){this.adresse=e,this.masque=s,this.allReseau=t}getVlsm(){let e=this.masque;const s=[128,64,32,16,8,4,2,1];let[t,a,r,n]=this.adresse,u,c,l,d,i=0,h=0,q=[];const A=this.triSeq(this.allReseau);function y(){n>255&&(n=0,r+=1),r>255&&(r=0,a+=1),a>255&&(a=0,t+=1)}if(2**(32-this.masque)>=this.allReseau.reduce((L,p)=>L+p)){let L=function(p){do p=p-=8;while(p>8);return p==0?1:p};return A.forEach((p,N)=>{if(N==0)h=this.getbit(p),e+=32-h-e,i=s[L(e)-1],e<=8?(t=0,q.push({NbrDemander:p,nbrDisponible:2**(32-e),nonUtiliser:2**(32-e)-p,reseau:[t,0,0,0].join("."),diffusion:[t+i-1,255,255,255].join("."),masque:e,plage:`${[t,0,0,1].join(".")} à ${[t+i-1,255,255,255].join(".")}`})):e<=16?(a=0,q.push({NbrDemander:p,nbrDisponible:2**(32-e),nonUtiliser:2**(32-e)-p,reseau:[t,a,0,0].join("."),diffusion:[t,a+i-1,255,255].join("."),masque:e,plage:`${[t,a,0,1].join(".")} à ${[t,a+i-1,255,254].join(".")}`})):e<=24?(r=0,q.push({NbrDemander:p,nbrDisponible:2**(32-e),nonUtiliser:2**(32-e)-p,reseau:[t,a,r,0].join("."),diffusion:[t,a,r+i-1,255].join("."),masque:e,plage:`${[t,a,r,1].join(".")} à ${[t,a,r+i-1,254].join(".")}`})):e<=32&&(n=0,q.push({NbrDemander:p,nbrDisponible:2**(32-e),nonUtiliser:2**(32-e)-p,reseau:[t,a,r,n].join("."),diffusion:[t,a,r,i-1].join("."),masque:e,plage:`${[t,a,r,n+1].join(".")} à ${[t,a,r,n+i-2].join(".")}`}));else if(this.getbit(A[N-1])===this.getbit(A[N]))e<=8?(q.push({NbrDemander:p,nbrDisponible:2**(32-e),nonUtiliser:2**(32-e)-p,reseau:[t+=i,0,0,0].join("."),diffusion:[t+=i*2-1,255,255,255].join("."),masque:e,plage:`${[t+i,0,0,1].join(".")} à ${[t+(i*2-1),255,255,254].join(".")} `}),t=+i):e<=16?(c=a+(i*2-1),u=t,c>255&&(c=0,u+=1),q.push({NbrDemander:p,nbrDisponible:2**(32-e),nonUtiliser:2**(32-e)-p,reseau:[t,a+=i,0,0].join("."),diffusion:[t,a+(i*2-1),255,255].join("."),masque:e,plage:`${[t,a+i,0,0,1]} à ${[t,c,255,254].join(".")} `}),a+=i,y()):e<=24?(l=r+(i*2-1),c=a,u=t,l>255&&(l=0,c+=1),c>255&&(c=0,u+=1),q.push({NbrDemander:p,nbrDisponible:2**(32-e),nonUtiliser:2**(32-e)-p,reseau:[t,a,r+i,0].join("."),diffusion:[t,a,r+(i*2-1),255].join("."),masque:e,plage:`${[t,a,r+i,1].join(".")} à ${[t,c,l,254].join(".")} `}),r+=i,y()):e<=32&&(d=n+(i*2-1),l=r,c=a,u=t,d>255&&(d=0,l+=1),l>255&&(l=0,c+=1),c>255&&(c=0,u+=1),q.push({NbrDemander:p,nbrDisponible:2**(32-e),nonUtiliser:2**(32-e)-p,reseau:[t,a,r,n+i].join("."),diffusion:[t,a,r,n+(i*2-1)].join("."),masque:e,plage:`${[t,a,r,n+(i+1)].join(".")} à ${[u,c,l,d].join(".")} `}),n+=i,y());else if(this.getbit(A[N-1])!=this.getbit(A[N])){let f=e;f+=32-e-this.getbit(p);let m=s[L(f)-1];e<=8?t+=i:e<=16?a+=i:e<=24?r+=i:e<=32&&(n+=i),f<=8?q.push({NbrDemander:p,nbrDisponible:2**(32-f),nonUtiliser:2**(32-f)-p,reseau:[t,a,r,n].join("."),diffusion:[t+(m-1),255,255,255].join("."),masque:f,plage:`${[t,0,0,1].join(".")} à ${[t+(m-1),255,255,254].join(".")} `}):f<=16?q.push({NbrDemander:p,nbrDisponible:2**(32-f),nonUtiliser:2**(32-f)-p,reseau:[t,a,r,n].join("."),diffusion:[t,a+(m-1),255,255].join("."),masque:f,plage:`${[t,a,0,1].join(".")} à ${[t,a+(m-1),255,254].join(".")} `}):f<=24?q.push({NbrDemander:p,nbrDisponible:2**(32-f),nonUtiliser:2**(32-f)-p,reseau:[t,a,r,n].join("."),diffusion:[t,a,r+(m-1),255].join("."),masque:f,plage:`${[t,a,r,1].join(".")} à ${[t,a,r+(m-1),254].join(".")} `}):f<=32&&q.push({NbrDemander:p,nbrDisponible:2**(32-f),nonUtiliser:2**(32-f)-p,reseau:[t,a,r,n].join("."),diffusion:[t,a,r,n+(m-1)].join("."),masque:f,plage:`${[t,a,r,n+1].join(".")} à ${[t,a,r,n+(m-2)].join(".")} `}),i=m,e=f}}),q}else return!1}getbit(e){let s;for(let t=1;t>0;t++){if(s=t,e<4)return 2;if(2**s>=e)return s}}triSeq(e){return e.forEach((s,t)=>{let a=t,r=0;for(a+1;a<e.length;a++)e[t]<e[a]&&(r=e[t],e[t]=e[a],e[a]=r);console.log(s)}),e}}var C=(o=>(o[o.vlsm=1]="vlsm",o[o.flsm=2]="flsm",o[o.plan=3]="plan",o[o.convertor=4]="convertor",o))(C||{}),D=(o=>(o.binaire="binaire",o.decimal="decimal",o.cidr="cidr",o))(D||{});class b{static ShematIpAndMasque(e){let s=e.trim();if(s=="")return!1;if(s.startsWith("\\")){let t=+s.substring(1);return!isNaN(t)&&t<=32&&!/^0[0-9]/.test(s.substring(1))?+s.substring(1):!1}else{let t=/[.]/g,a=s.split(t),r="",n=!1,u=a.filter(l=>+l>255),c=!1;return a.forEach(l=>{l==""&&(c=!0),/^0[0-9]/.test(l)&&(n=!0)}),a.forEach(l=>r+=l),/[^0-9]/.test(r)||a.length!=4||c||u.length!=0||n?!1:s}}static shematBinaire(e){const s=/[^01.]/;let t=e.trim(),a=t.split("."),r=a.find(n=>n.length!=8);return!s.test(t)&&!r&&r!=""&&a.length==4}static shematName(e){return!(/[^0-9A-Za-z_ éùûüùîïôöè&-]/g.test(e)||e.trim()==""||/^[^a-z-A-Z_]/.test(e))}static shematNbrTerminaux(e){let s=e.trim();return!(/[^0-9]/.test(s)||/^[0]/.test(s)||s=="")}}class Q{constructor(e){k(this,"object");this.input=e,this.object=this.input,this.verifIpAndMasque(this.object)}verifIpAndMasque(e){e.addEventListener("input",()=>{b.ShematIpAndMasque(e.value)==!1?(e.parentElement.classList.add("errorData"),e.parentElement.classList.remove("validData")):(e.parentElement.classList.remove("errorData"),e.parentElement.classList.add("validData"))}),e.onblur=()=>{e.value||e.parentElement.classList.remove("errorData"),e.style.border="none"}}}class ce{constructor(e){this.verif(e)}verif(e){e.addEventListener("input",()=>{b.shematName(e.value)?(e.parentElement.classList.remove("errorData"),e.parentElement.classList.add("validData")):(e.parentElement.classList.add("errorData"),e.parentElement.classList.remove("validData"))}),e.onblur=()=>{e.value||(e.parentElement.classList.remove("errorData"),e.parentElement.classList.remove("validData"),e.style.border="none")}}}class me{constructor(e){this.verif(e)}verif(e){e.addEventListener("input",()=>{b.shematNbrTerminaux(e.value)?(e.parentElement.classList.remove("errorData"),e.parentElement.classList.add("validData")):(e.parentElement.classList.add("errorData"),e.parentElement.classList.remove("validData"))}),e.onblur=()=>{e.value||(e.parentElement.classList.remove("errorData"),e.parentElement.classList.remove("validData"),e.style.border="none")}}}class he{constructor(e,s,t){this.input=e,this.MethodRadio=s,this.resultConvert=t,this.verif(this.input)}verif(e){let s="binaire";this.MethodRadio.forEach(t=>{t.addEventListener("change",()=>{s=t.value,(b.shematBinaire(e.value)||b.ShematIpAndMasque(e.value))&&this.setResultatConvert(e.value,s)})}),e.addEventListener("input",()=>{const t=e.value.trim();b.shematBinaire(t)||b.ShematIpAndMasque(t)?(e.parentElement.classList.remove("errorData"),e.parentElement.classList.add("validData"),this.setResultatConvert(t,s)):(e.parentElement.classList.add("errorData"),e.parentElement.classList.remove("validData"))}),e.onblur=()=>{e.value||(e.parentElement.classList.remove("errorData"),e.parentElement.classList.remove("validData"),e.style.border="none")}}setResultatConvert(e,s){if(e.length===35)switch(s){case D.binaire:this.resultConvert.textContent=e;break;case D.decimal:this.resultConvert.textContent=v.decimal(e).join(".");break;case D.cidr:this.resultConvert.textContent=String(v.cidr(v.decimal(e).join(".")));break}else if(e.length>=7&&e.length<=15)switch(s){case D.binaire:{let t=[];v.binaire(e).forEach(a=>t.push(a.join(""))),this.resultConvert.textContent=t.join(".")}break;case D.decimal:this.resultConvert.textContent=e;break;case D.cidr:this.resultConvert.textContent=String(v.cidr(e));break}else if(/^[\\]/.test(e)){let t=e.split(/[\\]/);switch(s){case D.binaire:{let a=v.decimal(String(t[1])).join("."),r=[];v.binaire(a).forEach(n=>r.push(n.join(""))),this.resultConvert.textContent=r.join(".")}break;case D.decimal:this.resultConvert.textContent=v.decimal(String(t[1])).join(".");break;case D.cidr:this.resultConvert.textContent=e;break}}}}class pe{constructor(e,s,t,a,r){this.ip=e,this.masque=s,this.subnet=t,this.ModalResultatElement=a,this.templateEnteteVlsm=r}setTemplate(){let e=[];this.subnet.forEach(c=>e.push(c.host));const t=new de(v.stringToArray(this.ip),+this.masque,e).getVlsm(),a=v.triSubnet(this.subnet);this.ModalResultatElement.querySelector("h1").innerHTML="VLSM",this.ModalResultatElement.querySelector(".descriptionDecoup").innerHTML=`
        Le vlsm pour masque de sous-réseaux à taille variable est une 
        technique permetant de decouper un réseau existant en sous-réseaux en adaptant le masque à chaque fois
        en foction du nombre de terminals souhaité pour ce sous-reseau elle permet alors d'eviter un gaspillage
        d'adresses ip qui est une denrée rare pour les operateurs telephonique.
        `,this.ModalResultatElement.querySelector(".InfosResult").classList.remove("flsm"),this.ModalResultatElement.querySelector(".adresse").innerHTML=`${this.ip}`,this.ModalResultatElement.querySelector(".cidrDecimal").innerHTML=`\\${this.masque} = ${v.decimal(this.masque).join(".")}`,this.ModalResultatElement.querySelector(".subnet").innerHTML=`${this.subnet.length} `,this.ModalResultatElement.querySelector(".bgEntete").innerHTML="",this.ModalResultatElement.querySelector(".bgEntete").append(this.templateEnteteVlsm.content.cloneNode(!0)),this.ModalResultatElement.querySelector(".final").innerHTML="",t.forEach((c,l)=>{const d=document.createElement("div");d.classList.add("modelReseaux"),d.innerHTML=`
            <span class="colorResult"></span>
            <p>${a[l].name}</p>
            <p data-num="1">${c.NbrDemander}</p>
            <p data-num="2">${c.nbrDisponible}</p>
            <p data-num="3">${c.nonUtiliser}</p>
            <p data-num="4">${c.reseau}</p>
            <p data-num="5">${v.decimal(c.masque.toString()).join(".")} ~ \\ ${c.masque}</p>
            <p data-num="6">${c.diffusion}</p>
            <p data-num="7">${c.plage}</p>
            `,this.ModalResultatElement.querySelector(".final").append(d)}),this.ModalResultatElement.querySelector(".ipAndMasque").nextElementSibling&&this.ModalResultatElement.querySelector(".ipAndMasque").nextElementSibling.remove();const r=document.createElement("div");r.classList.add("Allsubnet"),this.ModalResultatElement.querySelector(".ipAndMasque").insertAdjacentElement("afterend",r);const n=document.createElement("div");n.classList.add("titleSubnet"),n.innerHTML="Sous-réseaus démander :";const u=document.createElement("div");u.classList.add("containerSubnet"),r.append(n,u),a.forEach(c=>{const l=document.createElement("div");l.classList.add("modelSubnet"),l.innerHTML=`
            <P>${c.name}</P>
            <p>${c.host}</p>
            `,this.ModalResultatElement.querySelector(".containerSubnet").append(l)})}}class fe{constructor(e,s,t,a,r){this.adresse=e,this.masque=s,this.nbrSubnet=t,this.ModalResultatElement=a,this.templateEnteteFlsm=r,this.getTemplate()}getTemplate(){return console.log(this.adresse,this.masque,this.nbrSubnet),oe(this.adresse,this.masque,this.nbrSubnet).then(e=>{const s=e;console.log(s);let t=1;this.ModalResultatElement.querySelector(".final").innerHTML="",s.forEach((a,r)=>{const{broadCast:n,cidrMasque:u,firstAttribuable:c,lastAttribuable:l,reseau:d,totalAttribuable:i}=a,h=document.createElement("div");h.setAttribute("class","modelReseaux"),h.innerHTML=`
           <span class="colorResult ${this.nbrSubnet<r?"surplus":null}"></span>
           <p>${t>1?"Réseaux "+t:"Réseau "+t}</p>
           <p data-num="1"> ${d}</p>
           <p data-num="2"> \\${u} = ${v.decimal(u.toString()).join(".")}</p>
           <p data-num="3">${i}</p>
           <p data-num="4">${n}</p>
           <p data-num="5">${c} à ${l}</p>
           `,this.ModalResultatElement.querySelector(".final").append(h),t++}),this.ModalResultatElement.querySelector("h1").innerHTML="FLSM",this.ModalResultatElement.querySelector(".descriptionDecoup").innerHTML=`
       Le flsm pour masque de sous-réseaux à taille fixe est une 
       technique permetant de découper un réseau existant en plusieurs sous-réseau tout en gardant le nombre de terminaux et le masque
       pour chaque sous-réseau.
       `,this.ModalResultatElement.querySelector(".InfosResult").classList.add("flsm"),this.ModalResultatElement.querySelector(".adresse").innerHTML=`${this.adresse}`,this.ModalResultatElement.querySelector(".cidrDecimal").innerHTML=`\\${v.cidr(this.masque)} = ${this.masque}`,this.ModalResultatElement.querySelector(".subnet").innerHTML=`${this.nbrSubnet} `,this.ModalResultatElement.querySelector(".InfosResult").classList.add("flsm"),this.ModalResultatElement.querySelector(".bgEntete").innerHTML="",this.ModalResultatElement.querySelector(".bgEntete").append(this.templateEnteteFlsm.content.cloneNode(!0))}).catch(e=>{console.log(e),P("Masque trop","Le nombre de sous-réseaux que vous désirez imposse que la totalité du nombre de bite de la partie HOST-ID soit enpruter ce qui n'est pas logique veiller ajuster le masque ou réduire le nombre de sous-réseaux.")}),!0}}class be{constructor(e,s){this.adresse=e,this.masque=s}getPlan(){const s=new ue(this.adresse,this.masque).getPlant(),{adresseSousReseau:t,adresseSousReseauSuivant:a,broadcast:r,dernierAdresseAssignable:n,masqueCidrDecimal:u,nombreAdresseIp:c,premiereAdresseAssignable:l}=s,d=document.createElement("table");return d.innerHTML=`
            <tr>
                <th>Adresse sous-réseau</th>
                <td>${t}</td>
            </tr>
            <tr>
                <th>1<sup>ére</sup> adresse assignable</th>
                <td>${l}</td>
            </tr>
            <tr>
                <th>Denière adresse assignable</th>
                <td>${n}</td>
            </tr>
            <tr>
                <th>Adresse de broadcast</th>
                <td>${r}</td>
            </tr>
            <tr>
                <th>Adresse Sous-réseau suivante</th>
                <td>${a}</td>
            </tr>
            <tr>
                <th>Nombre d'adresse IP</th>
                <td>${c}</td>
            </tr>
            <tr>
                <th>Masque Cidr/Decimal</th>
                <td>${u}</td>
            </tr>
                `,d}}const K=document.querySelectorAll("li"),E=document.querySelector(".indicateur"),R=document.querySelector(".content"),X=document.querySelector(".bgPlanAdressage"),J=document.querySelector(".closeModalPlan"),ve=document.querySelector(".closeVlsm"),_=document.querySelector(".resultat"),qe=document.querySelector("#enteteVlsm"),ge=document.querySelector("#enteteFlsm"),Se=document.querySelector(".menueBurger"),$=document.querySelector("#ip"),x=document.querySelector("#masque"),S=document.querySelector("#nbrHost"),w=document.querySelector("#nameReseau"),z=document.querySelector("input[type=submit]"),V=document.querySelector(".add button"),Ae=document.querySelector("#convert"),Ee=document.querySelectorAll("input[name=decoup]"),U=document.querySelector(".ResultatConvertor");let B=1,H=[],Y=0,Z=document.querySelector(".reseau");const G=document.querySelector(".closeErrorMessage"),ee=document.querySelector(".ombre"),W=document.querySelector(".bgtoggle"),te=document.querySelector(".copyright"),se=document.querySelector("header");V.addEventListener("click",ye.bind(void 0));function ye(o){o.preventDefault();const e=/[^0-9A-Za-z_ éùûüùîïôöè&-]/g;H.length==0&&(Y=0),isNaN(+S.value)||/^[0]/.test(S.value)||S.value==""||e.test(w.value)||w.value==""?((e.test(w.value)||w.value=="")&&(w.style.border="1px dashed var(--red)"),(isNaN(+S.value)||/^[0]/.test(S.value)||S.value=="")&&(S.style.border="1px dashed var(--red)",P("Host Subnet","Vous ne pouvez pas ajouter de sous-réseau temp que le champ pour le nombre de terminaux est vide ou posséde des caractères érroner veillez verifier cordialement"))):Le(S.value,w.value)}function Le(o,e){let s=`${"dellete"+(Y+=1)}`,t=document.createElement("div");t.classList.add("addReseau"),t.innerHTML=`
    <div class="delleteAddReseau ${s}" title="Dellete subnet ?">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6M14 11v6M4 7h16M6 7h12v11a3 3 0 01-3 3H9a3 3 0 01-3-3V7zM9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="nameReseauAdd">
        <svg height="800" width="800" version="1.1" id="prefix___x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve"><style>.prefix__st0{fill:#000}</style><path class="prefix__st0" d="M256.001 118.244c32.648 0 59.126-26.47 59.126-59.118S288.65 0 256.001 0s-59.118 26.477-59.118 59.126 26.47 59.118 59.118 59.118zM256.001 228.204c40.613 0 82.205-14.063 75.715-52.998-2.643-15.812-15.718-37.977-25.65-47.901-1.286-1.278-7.108-1.612-8.69-.632-12.052 7.434-26.202 11.768-41.376 11.768-15.166 0-29.316-4.334-41.367-11.768-1.583-.98-7.406-.646-8.691.632-9.924 9.924-23.014 32.089-25.65 47.901-6.489 38.936 35.104 52.998 75.709 52.998zM95.685 402.046c32.648 0 59.126-26.47 59.126-59.118 0-32.656-26.477-59.126-59.126-59.126s-59.119 26.47-59.119 59.126c.001 32.648 26.471 59.118 59.119 59.118zM145.75 411.114c-1.285-1.293-7.107-1.612-8.69-.639-12.059 7.434-26.201 11.762-41.375 11.762-15.173 0-29.316-4.327-41.368-11.762-1.583-.972-7.413-.654-8.697.639-9.925 9.917-23.007 32.082-25.642 47.894C13.487 497.944 55.08 512 95.685 512c40.613 0 82.206-14.056 75.714-52.992-2.641-15.812-15.724-37.977-25.649-47.894zM416.314 402.046c32.648 0 59.118-26.47 59.118-59.118 0-32.656-26.47-59.126-59.118-59.126s-59.126 26.47-59.126 59.126c.001 32.648 26.478 59.118 59.126 59.118zM492.022 459.008c-2.636-15.812-15.718-37.977-25.642-47.894-1.286-1.293-7.115-1.612-8.698-.639-12.052 7.434-26.194 11.762-41.368 11.762-15.173 0-29.316-4.327-41.375-11.762-1.583-.972-7.405-.654-8.69.639-9.924 9.917-23.003 32.082-25.646 47.894-6.49 38.936 35.098 52.992 75.711 52.992 40.606 0 82.198-14.056 75.708-52.992zM336.24 370.973l-70.488-40.692v-81.385a9.747 9.747 0 00-9.75-9.75c-5.38 0-9.743 4.363-9.743 9.75v81.385l-70.488 40.692c-4.66 2.693-6.265 8.662-3.572 13.322 2.694 4.662 8.661 6.258 13.322 3.572l70.48-40.7 70.488 40.692c4.661 2.694 10.622 1.097 13.315-3.565 2.694-4.659 1.096-10.628-3.564-13.321z"/></svg>
        <h2> ${e} </h2>
    </div>
    <div class="nbrHostAdd">
        <p>${o} terminaux</p>
    </div>
    `,Z.append(t),H.unshift({name:e,host:+o}),document.querySelector(`.${s}`).addEventListener("click",function(){const r=H.findIndex(n=>n.name==e);H.splice(r,1),this.parentElement.classList.add("dellete"),setTimeout(()=>this.parentElement.remove(),300)})}K.forEach(o=>{o.addEventListener("click",function(){K.forEach(s=>s.classList.remove("active")),E.style.width=`${this.clientWidth}px`,E.style.transform=`translateX(${this.offsetLeft}px)`,document.querySelector(".appOpt").remove();let e=document.createElement("div");e.classList.add("appOpt"),e.textContent=this.textContent,document.querySelector(".content").append(e),Me(+o.dataset.id),o.classList.add("active")})});function Me(o){switch(o){case C.vlsm:R.removeAttribute("id"),R.classList.remove("flsm"),R.classList.remove("plan"),z.value="Génerer les sous-réseaux",S.nextElementSibling.textContent="Nombre de terminaux",B=o,V.disabled=!1;break;case C.flsm:R.removeAttribute("id"),R.classList.remove("plan"),R.classList.add("flsm"),z.value="Génerer les sous-réseaux",S.nextElementSibling.textContent="Nombre de sous-réseaux",B=o,V.disabled=!0;break;case C.plan:R.removeAttribute("id"),R.classList.remove("flsm"),R.classList.add("plan"),z.value="Voir le plan d'adressage",B=o,V.disabled=!0;break;case C.convertor:R.setAttribute("id","convertor"),V.disabled=!0;break}}new Q($);new Q(x);new ce(w);new me(S);new he(Ae,Ee,U);z.onclick=o=>{switch(o.preventDefault(),B){case C.vlsm:if(b.ShematIpAndMasque($.value)&&b.ShematIpAndMasque(x.value)&&H.length>0){let e=[];H.forEach(t=>e.push(t.host));let s=b.ShematIpAndMasque(x.value);if(typeof s!="number"){let t=s;s=v.cidr(t)}2**(32-s)-2<e.reduce((t,a)=>a+t)?P("Host id",`La partie host id de votre masque possède ${2**(32-s)} adresse disponible il n'est pas possible de crée des sous-réseaux avec un nombre de terminaux superieur a celle disponible`):(z.style.pointerEvents="none",new pe(b.ShematIpAndMasque($.value),s.toString(),H,_,qe).setTemplate(),document.querySelector(".resultat").classList.add("active"),E.classList.add("ByafriqueDev"))}else b.ShematIpAndMasque($.value)||($.style.border="1px dashed var(--red)"),b.ShematIpAndMasque(x.value)||(x.style.border="1px dashed var(--red)"),b.shematNbrTerminaux(S.value)&&(S.style.border="1px dashed var(--red)"),b.shematName(w.value)&&(w.style.border="1px dashed var(--red)"),H.length==0&&(S.style.border="1px dashed var(--red)",P("Sous-réseaux","Veillez ajouter des sous-réseaux et vérifier si tous les champs sont correctes"));break;case C.flsm:{let e=$.value,s=S.value;if(b.ShematIpAndMasque(e)&&b.ShematIpAndMasque(x.value)&&b.shematNbrTerminaux(s)){let t=b.ShematIpAndMasque(x.value);if(typeof t!="number"){let r=t;t=v.cidr(r)}let a=0;do a++;while(2**a<+s);2**(32-t)-2<+s?P("Host id","Il n'est pas posible de crée autant de sous-réseaux avec ce masque essayez de réduire la partie net-id de votre masque ou réduit le nombre de sous-réseaux a créer."):t+a===32?P("Masque trop","Le nombre de sous-réseaux que vous désirez imposse que la totalité du nombre de bite de la partie HOST-ID soit enpruter ce qui n'est pas logique veiller ajuster le masque ou réduire le nombre de sous-réseaux."):(new fe(b.ShematIpAndMasque($.value),v.decimal(String(t)).join("."),+s,_,ge),document.querySelector(".resultat").classList.add("active"),E.classList.add("ByafriqueDev"))}else b.ShematIpAndMasque($.value)||($.style.border="1px dashed var(--red)"),b.ShematIpAndMasque(x.value)||(x.style.border="1px dashed var(--red)"),b.shematNbrTerminaux(S.value)||(S.style.border="1px dashed var(--red)")}break;case C.plan:if(b.ShematIpAndMasque($.value)&&b.ShematIpAndMasque(x.value)){const s=new be("10.2.2.88","27").getPlan();E.classList.add("ByafriqueDev"),X.querySelector(".resultPlan").innerHTML="",X.querySelector(".resultPlan").append(s),setTimeout(()=>X.classList.add("active"),300)}else b.ShematIpAndMasque($.value)||($.style.border="1px dashed var(--red)"),b.ShematIpAndMasque(x.value)||(x.style.border="1px dashed var(--red)");break;case C.convertor:break}};G.onclick=()=>{ee.classList.remove("view"),G.parentElement.classList.remove("show")};J.onclick=function(){J.parentElement.classList.remove("active"),E.classList.remove("ByafriqueDev")};ve.addEventListener("click",function(){_.classList.remove("active"),E.classList.remove("ByafriqueDev"),z.style.pointerEvents="auto"});function P(o,e){document.querySelector(".titleError").firstElementChild.textContent=o,document.querySelector(".infosError").firstElementChild.textContent=e,ee.classList.add("view"),G.parentElement.classList.add("show")}Se.addEventListener("click",function(){document.querySelector(".toggle").querySelectorAll("span").forEach(o=>o.classList.toggle("active")),se.classList.toggle("active"),te.classList.toggle("active"),matchMedia("(max-width: 820px)").matches?W.classList.toggle("mobile"):W.classList.toggle("active")});matchMedia("(max-width: 420px)").matches?document.querySelector("ul li:nth-child(4)").innerHTML="Plan":document.querySelector("ul li:nth-child(4)").innerHTML="Plan d'adressage";matchMedia("(max-width: 420px)").addEventListener("change",()=>{matchMedia("(max-width: 420px)").matches?document.querySelector("ul li:nth-child(4)").innerHTML="Plan":document.querySelector("ul li:nth-child(4)").innerHTML="Plan d'adressage"});ae();function ae(){let o=`${Z.offsetHeight/10}rem`;Z.style.maxHeight=o}re(B);window.onresize=()=>{ae(),re(B),matchMedia("(min-width: 1610px)").matches&&(W.classList.remove("active"),W.classList.remove("mobile"),te.classList.remove("active"),se.classList.remove("active"),document.querySelector(".toggle").querySelectorAll("span").forEach(o=>o.classList.remove("active")))};function re(o){const e=document.querySelectorAll("ul > li");let s=e[0],t=e[1],a=e[2],r=e[3];o==1?(E.style.width=`${s.clientWidth}px`,E.style.transform=`translateX(${s.offsetLeft}px)`):o==2?(E.style.width=`${t.clientWidth}px`,E.style.transform=`translateX(${t.offsetLeft}px)`):o==3?(E.style.width=`${a.clientWidth}px`,E.style.transform=`translateX(${a.offsetLeft}px)`):o==4&&(E.style.width=`${r.clientWidth}px`,E.style.transform=`translateX(${r.offsetLeft}px)`)}const O=document.querySelector(".choix"),$e=document.querySelectorAll("input[type=radio]");O.addEventListener("click",function(){this.classList.toggle("active"),O.classList.toggle("select")});$e.forEach(o=>{o.addEventListener("change",function(){O.firstElementChild.innerHTML=o.nextElementSibling.innerHTML,O.classList.remove("active"),O.classList.add("select")})});U.addEventListener("click",()=>{(async function(){const o=U.textContent;await navigator.clipboard.writeText(o);try{U.parentElement.classList.add("active"),setTimeout(()=>U.parentElement.classList.remove("active"),500)}catch{console.log("non copie")}})()});
