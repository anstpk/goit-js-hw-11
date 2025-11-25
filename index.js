import{a as h,S as g,i as l}from"./assets/vendor-CJfIX3tG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="53403770-87d4de3df2f0f55697bb62e3a",v="https://pixabay.com/api/";function L(r){return h.get(v,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(s=>s.data)}const c=document.querySelector(".gallery"),n=document.getElementById("loader"),d=new g(".gallery a",{captionsData:"alt",captionDelay:250});function b(r){if(!Array.isArray(r)||r.length===0)return;const s=r.map(a=>{const{webformatURL:i,largeImageURL:e,tags:t,likes:o,views:p,comments:f,downloads:m}=a;return`
      <li class="gallery-item">
        <a class="card" href="${e}">
        <img src="${i}" alt="${t}" loading="lazy" />
        <div class="info">
          <div class="meta">
            <div class="stat">
              <span class="stat-title">Likes</span>
              <span class="stat-value">${o}</span>
            </div>
            <div class="stat">
              <span class="stat-title">Views</span>
              <span class="stat-value">${p}</span>
            </div>
            <div class="stat">
              <span class="stat-title">Comments</span>
              <span class="stat-value">${f}</span>
            </div>
            <div class="stat">
              <span class="stat-title">Downloads</span>
              <span class="stat-value">${m}</span>
            </div>
          </div>
        </div>
        </a>
      </li>
    `}).join("");c.insertAdjacentHTML("beforeend",s),d.refresh()}function w(){c.innerHTML="",d.refresh()}function S(){n.classList.remove("is-hidden"),n.classList.add("is-visible"),n.setAttribute("aria-hidden","false")}function A(){n.classList.remove("is-visible"),n.classList.add("is-hidden"),n.setAttribute("aria-hidden","true")}const u=document.querySelector(".form"),E=u.querySelector('input[name="search-text"]');u.addEventListener("submit",r=>{r.preventDefault();const s=E.value.trim();if(!s){l.error({title:"Error",message:"Please enter a search term.",position:"topRight"});return}w(),S(),L(s).then(a=>{const i=a.hits||[];if(i.length===0){l.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i)}).catch(a=>{console.error(a),l.error({title:"Network error",message:"Something went wrong while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{A()})});
//# sourceMappingURL=index.js.map
