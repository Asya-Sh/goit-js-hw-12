import{S as p,i as g}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function y(r){const o="https://pixabay.com/",i="api/",s=new URLSearchParams({key:"42797390-82869f1936654cf50378828df",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${i}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const L=new p(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function w(r){const o=$(r);u.innerHTML=o,L.refresh()}function $(r){return r.map(v).join(`
`)}function v(r){const{webformatURL:o,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:f,previewWidth:h,previewHeight:m}=r;return`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
        <img
            class="gallery-image"
            src="${o}"
            alt="${s}"
            width="${h}"
            height="${m}"
        />
    </a>
    <ul class="desc-list">
            <li class="desc-item">
                <h3 class="desc-title">Likes</h3>
                <p>${e}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Views</h3>
                <p>${t}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Comments</h3>
                <p>${n}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Downloads</h3>
                <p>${f}</p>
            </li>
        </ul>
</li>`}function a(){u.innerHTML=""}const S="/goit-js-hw-11/assets/error-03aea49c.svg",d=document.querySelector(".loader");function b(){d.classList.remove("is-hide")}function c(){d.classList.add("is-hide")}function l(r){g.error({message:r,backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight",iconUrl:S})}const E=document.querySelector(".js-form"),I="Sorry, there are no images matching your search query. Please try again!",M="Error, empty field";E.addEventListener("submit",O);function O(r){r.preventDefault(),b(),a();const i=r.target.elements.search.value.trim().split(" ").filter(s=>s).join("+");if(!i){a(),l(M),c();return}y(i).then(s=>{s.hits.length===0?(c(),l(I)):w(s.hits)}).catch(console.log).finally(()=>{c()}),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
