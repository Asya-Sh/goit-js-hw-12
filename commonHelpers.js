import{a as p,S as g,i as y}from"./assets/vendor-da186403.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const L="https://pixabay.com/api",w="42797390-82869f1936654cf50378828df";async function v(t){const r={key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return await p.get(`${L}/`,{params:r}),res.data}const $=new g(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function b(t){const r=S(t);u.innerHTML=r,$.refresh()}function S(t){return t.map(E).join(`
`)}function E(t){const{webformatURL:r,largeImageURL:i,tags:o,likes:e,views:s,comments:a,downloads:f,previewWidth:h,previewHeight:m}=t;return`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
        <img
            class="gallery-image"
            src="${r}"
            alt="${o}"
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
                <p>${s}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Comments</h3>
                <p>${a}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Downloads</h3>
                <p>${f}</p>
            </li>
        </ul>
</li>`}function c(){u.innerHTML=""}const I="/goit-js-hw-12/assets/error-03aea49c.svg",d=document.querySelector(".loader");function M(){d.classList.remove("is-hide")}function n(){d.classList.add("is-hide")}function l(t){y.error({message:t,backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight",iconUrl:I})}const O=document.querySelector(".js-form"),P="Sorry, there are no images matching your search query. Please try again!",q="Error, empty field";O.addEventListener("submit",j);function j(t){t.preventDefault(),M(),c();const i=t.target.elements.search.value.trim().split(" ").join("+");if(!i){c(),l(q),n();return}v(i).then(o=>{o.hits.length===0?(n(),l(P)):b(o.hits)}).catch(console.log).finally(()=>{n()}),t.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
