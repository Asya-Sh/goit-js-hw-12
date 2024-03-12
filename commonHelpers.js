import{a as f,S as M,i as g}from"./assets/vendor-da186403.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();f.defaults.baseURL="https://pixabay.com";const E="/api/",P="42797390-82869f1936654cf50378828df";async function p(e,s){const{data:o}=await f.get(`${E}`,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}});return o}const S=new M(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery");function m(e){const s=$(e);d.insertAdjacentHTML("beforeend",s),S.refresh()}function $(e){return e.map(I).join(`
`)}function I(e){const{webformatURL:s,largeImageURL:o,tags:c,likes:t,views:r,comments:i,downloads:w,previewWidth:b,previewHeight:v}=e;return`<li class="gallery-item">
    <a class="gallery-link" href="${o}">
        <img
            class="gallery-image"
            src="${s}"
            alt="${c}"
            width="${b}"
            height="${v}"
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
                <p>${i}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Downloads</h3>
                <p>${w}</p>
            </li>
        </ul>
</li>`}function O(){d.innerHTML=""}const q="/goit-js-hw-12/assets/error-03aea49c.svg",y=document.querySelector(".loader"),u=document.querySelector(".load-more");function B(){y.classList.remove("is-hide")}function a(){y.classList.add("is-hide")}function h(e){g.error({message:e,backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight",iconUrl:q})}function R(){u.classList.remove("is-hide")}function L(){u.classList.add("is-hide")}function C(e){g.error({message:e,backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight"})}const H=document.querySelector(".js-form"),N=15;let n=1,l;const T="Sorry, there are no images matching your search query. Please try again!",j="Error, empty field",k="We're sorry, but you've reached the end of search results.";H.addEventListener("submit",x);u.addEventListener("click",D);async function x(e){if(e.preventDefault(),n=1,l=e.target.elements.search.value.trim().split(" ").join("+"),!l){O(),h(j),a();return}try{const o=await p(l,n);o.data.hits.length===0?(a(),h(T)):(m(o.data.hits),_(),R()),a(),result.data.totalHits<=per_page&&L()}catch{console.log(result),a()}e.target.reset()}async function D(){B(),n++;try{const e=await p(l,n),s=Math.ceil(e.data.totalHits/N);m(e.data.hits),s===n&&(L(),C(k)),a()}catch(e){console.log(e),a()}}function _(){const s=d.querySelector(".desc-li").getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
