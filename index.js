import{i as c,S as d}from"./assets/vendor-B07T6_gy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",m="46672316-334fc4a904d955c3d11f52bb4",u="photo",f=!0,y="horizontal",L=async o=>{try{const t=new URLSearchParams({key:m,safesearch:f,orientation:y,q:o,image_type:u}),s=await(await fetch(`${h}?${t.toString()}`)).json();return s.hits.length?s.hits:c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(t){console.error(`Serch is failed with words: "${o}"`,t)}},i=document.querySelector(".gallery"),$=()=>{i.innerHTML='<p id="loading">Loading...</p>'},b=()=>{i.innerHTML=""},w=o=>{if(i.innerHTML="",o.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const t=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:l,comments:g,downloads:p})=>`
    <div class="gallery-item">
      <a href="${e}" class="gallery-link">
        <img src="${s}" alt="${r}" loading="lazy" class="gallery-image"/>
      </a>
      <div class="gallery-info">
        <p><strong>Likes</strong> ${n}</p>
        <p><strong>Views</strong> ${l}</p>
        <p><strong>Comments</strong> ${g}</p>
        <p><strong>Downloads</strong> ${p}</p>
      </div>
    </div>
  `).join("");i.innerHTML=t,new d(".gallery a").refresh()},S=document.querySelector("#search-form");S.onsubmit=async o=>{try{o.stopPropagation(),o.preventDefault();const s=new FormData(o.target).get("search").trim().split(" ").join("+");if(!s){iziToast.error({message:"Please enter a search term!",position:"topRight"});return}$();const e=await L(s);e&&w(e),e||b()}catch(t){console.error(t)}};
//# sourceMappingURL=index.js.map
