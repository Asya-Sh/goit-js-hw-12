import{a as $,S as P,i as m}from"./assets/vendor-da186403.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const B="https://pixabay.com/api/",q="42797390-82869f1936654cf50378828df";async function p(e,s){const o={key:q,q:e,page:s,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0};return await $.get(`${B}`,{params:o})}const O=new P(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function y(e){const s=R(e);u.insertAdjacentHTML("beforeend",s),O.refresh()}function R(e){return e.map(j).join(`
`)}function j(e){const{webformatURL:s,largeImageURL:o,tags:c,likes:t,views:r,comments:a,downloads:M,previewWidth:E,previewHeight:S}=e;return`<li class="gallery-item">
    <a class="gallery-link" href="${o}">
        <img
            class="gallery-image"
            src="${s}"
            alt="${c}"
            width="${E}"
            height="${S}"
        />
    </a>
    <ul class="desc-list">
            <li class="desc-item">
                <h3 class="desc-title">Likes</h3>
                <p>${t}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Views</h3>
                <p>${r}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Comments</h3>
                <p>${a}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Downloads</h3>
                <p>${M}</p>
            </li>
        </ul>
</li>`}function f(){u.innerHTML=""}const H="/goit-js-hw-12/assets/error-03aea49c.svg",I="/goit-js-hw-12/assets/warning-899e47f1.svg",w=document.querySelector(".loader"),h=document.querySelector(".load-more");function L(){w.classList.remove("is-hide")}function i(){w.classList.add("is-hide")}function g(e){m.error({message:e,backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight",iconUrl:H})}function x(){h.classList.remove("is-hide")}function d(){h.classList.add("is-hide")}function C(e){m.warning({message:e,position:"topRight",iconUrl:I})}const T=document.querySelector(".js-form"),v=15;let n=1,l;const U="Sorry, there are no images matching your search query. Please try again!",k="Error, empty field",A="We're sorry, but you've reached the end of search results.";T.addEventListener("submit",D);h.addEventListener("click",N);async function D(e){if(e.preventDefault(),L(),f(),d(),n=1,l=e.target.elements.search.value.trim().split(" ").join("+"),!l){f(),g(k),i();return}try{const o=await p(l,n);o.data.hits.length===0?(i(),g(U)):(y(o.data.hits),b(),x()),i(),o.data.totalHits<=v&&d()}catch{console.log(result),i()}e.target.reset()}async function N(){L(),n+=1;try{const e=await p(l,n),s=Math.ceil(e.data.totalHits/v);y(e.data.hits),b(),s===n&&(d(),C(A)),i()}catch(e){console.log(e),i()}}function b(){const s=u.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
