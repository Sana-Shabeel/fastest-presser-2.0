(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&g(m)}).observe(document,{childList:!0,subtree:!0});function u(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function g(t){if(t.ep)return;t.ep=!0;const n=u(t);fetch(t.href,n)}})();const s=document.getElementById("key-s"),r=document.getElementById("key-k"),c=document.getElementById("display-s"),a=document.getElementById("display-k"),e=document.getElementById("display-timer"),f=document.getElementById("start-btn"),y=document.getElementById("new-game"),p=document.getElementById("input-timer");let l=0,d=0;function v(o){o.code==="KeyS"&&(l+=1,c&&(c.textContent=`${l}`),s==null||s.classList.toggle("shadow-s"))}function E(o){o.code==="KeyK"&&(d+=1,a&&(a.textContent=`${d}`),r==null||r.classList.toggle("shadow-k"))}const I=o=>{window.addEventListener("keypress",v),window.addEventListener("keypress",E);let i=parseInt(o||"0")*10;const u=setInterval(()=>{e&&(e.textContent=`${i--}`)},100);setTimeout(()=>{clearInterval(u),window.removeEventListener("keypress",v),window.removeEventListener("keypress",E),r==null||r.classList.remove("shadow-k"),s==null||s.classList.remove("shadow-s"),l>d?(e&&(e.textContent="S WINS 🎉"),e&&(e.style.backgroundColor="#3b82f6")):l<d?(e&&(e.textContent="K WINS 🎉"),e&&(e.style.backgroundColor="#fde047")):e&&(e.textContent="NO ONE WINS")},parseInt(o||"0")*1e3)};f==null||f.addEventListener("click",()=>{I(p==null?void 0:p.value)});y==null||y.addEventListener("click",()=>{e&&(e.style.backgroundColor="#1e293b"),e&&(e.textContent="000"),l=0,d=0,c&&(c.textContent="0"),a&&(a.textContent="0")});