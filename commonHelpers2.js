import{c as d,a as x,b as I,l as L,u as v,r as p,d as _,s as S}from"./assets/api-4fe805ec.js";import"./assets/vendor-8dea2054.js";const m=document.querySelector(".backdrop"),C=document.querySelector(".modal-wrapper"),w=document.querySelector("body"),i=document.querySelector(".modal-btn-addremove"),g=document.querySelector(".congrats"),f=document.querySelector(".modal-close"),s={_id:"",title:"",author:"",list_name:"",book_image:"",description:"",amazon_buy_link:"",apple_buy_link:""};async function A(e){try{C.innerHTML="",g.innerHTML="";const t=await d.getBookDescription(e);s._id=t._id,s.title=t.title,s.author=t.author,s.list_name=t.list_name,s.book_image=t.book_image,s.description=t.description,s.amazon_buy_link=t.buy_links[0].url,s.apple_buy_link=t.buy_links[1].url;const o=N(t);C.insertAdjacentHTML("beforeend",o),h(i,e),f.blur(),i.addEventListener("click",M),f.addEventListener("click",y),document.addEventListener("keydown",T),m.addEventListener("click",E)}catch(t){console.log("Error fetching modal:",t)}}function q(e){m.classList.add("modal-open"),w.classList.add("no-scroll"),A(e)}function N(e){return`
      <img class="modal-img-book" src="${e.book_image}" alt="book" />
        
      <div class="modal-book-container-right">
        <div class="modal-book-container">
          <div class="modal-book-info">
            <h3 class="modal-description-title">${e.title}</h3>
            <p class="modal-description-author">${e.author}</p>
          </div>
          <p class="modal-book-description">${e.description}</p>
          <ul class="modal-icons-list">
          <li>
            <a class="modal-book-link" href="${e.buy_links[0].url}" target="_blank"><img class='modal-link-icon-amazon' src="${x}" alt="" width='62' height='19' 
            /></a>
          </li>
          <li>
            <a class="modal-book-link" href="${e.buy_links[1].url}" target="_blank"><img class='modal-link-icon-apple' src="${I}" alt="" width='33' height='32'
            /></a>
          </li>
          </ul>
        </div>
      </div>`}function h(e,t){L.isBookExsist(t)?(e.textContent="remove from the shopping list",g.classList.add("modal-text-congratulations"),e.blur()):(e.textContent="add to shopping list",g.classList.remove("modal-text-congratulations"),e.blur())}function M(e){i.textContent==="add to shopping list"?(P(s),h(i,s._id)):(z(s),h(i,s._id))}function T(e){e.key==="Escape"&&y()}function E(e){e.target===m&&y()}function y(){m.classList.remove("modal-open"),w.classList.remove("no-scroll"),f.removeEventListener("click",y),i.removeEventListener("click",M),document.removeEventListener("keydown",T),m.removeEventListener("click",E)}function P(e){L.addBookToFavorites(e),v(),g.textContent='Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'}function z(e){L.removeBookFromFavorites(e),v(),g.textContent=""}function H(e,t){if(u(),e.length===0)try{const o=document.querySelector(".bestsellers-container");o.innerHTML="",p(".bestsellers-container",t),o.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const n=document.querySelector(".book-category-list"),r='<p class = "category-text-empty">Sorry, no books were found for the given category</p>';n.innerHTML=r}catch{console.log("Error fetching modal:",error)}finally{c()}else try{const o=document.querySelector(".bestsellers-container");o.innerHTML="",p(".bestsellers-container",t),o.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const n=document.querySelector(".book-category-list"),r=e.map(({author:l,book_image:a,title:b,_id:k})=>_({author:l,book_image:a,title:b,_id:k})).join("");n.innerHTML=r,n.addEventListener("click",U)}catch{console.log("Error fetching modal:",error)}finally{c()}}async function U(e){if(e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let t=e.target.closest(".book-category-item").dataset.id;q(t)}}async function D(){try{const e=document.querySelector(".bestsellers-container");e.innerHTML="",u();const t=await d.getBestSellers();$(t)}catch(e){console.error("Error fetching best sellers:",e)}}function $(e){const t=document.querySelector(".bestsellers-container");c(),t.innerHTML="",p(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const o=document.querySelector(".bestsellers-list"),n=e.map(({books:r,list_name:l})=>`<li class="bestsellers-item">
      <h2 class="bestsellers-category-title">${l}</h2>
      <ul class="bestsellers-books-list">${r.map(({title:a,author:b,book_image:k,_id:j})=>r.length===0?'<p class="category-empty">Sorry, no books were found for the given category!</p>':_({title:a,author:b,book_image:k,_id:j})).join(`
`)}
        </ul>
        <button class="bestsellers-btn" type="button" data-category="${l}">See more</button>
      </li>`).join(`
`);o.insertAdjacentHTML("beforeend",n),o.addEventListener("click",O),o.addEventListener("click",F)}async function F(e){if(e.preventDefault(),e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let t=e.target.closest(".book-category-item").dataset.id;q(t)}}async function O(e){try{if(e.target.nodeName!=="BUTTON")return;let t=e.target.dataset.category;const o=document.querySelector(".sidebar-category-item"),n=document.querySelectorAll(".sidebar-category-item"),r=document.querySelector(".bestsellers-container");r.innerHTML="",u();const l=await d.getSelectedCategory(t);H(l,t),c(),n.forEach(a=>{a.dataset.source===t&&(o.classList.remove("category-active"),a.classList.add("category-active"),a.scrollIntoView({behavior:"instant",block:"center",inline:"nearest"}))}),S()}catch(t){console.log("Error fetching modal:",t)}}const B={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function G(e){return e.sort((o,n)=>o.list_name.localeCompare(n.list_name)),e.map(o=>`<li class='sidebar-category-item' data-source="${o.list_name}">${o.list_name}</li>`).join("")}(async()=>{try{const e=document.querySelector(".bestsellers-container");e.innerHTML="",u();const t=await d.getCategoryList(),o=G(t);B.categoryList.insertAdjacentHTML("beforeend",o),c()}catch(e){console.log(e)}})();B.allCategory.addEventListener("click",async e=>{try{const t=document.querySelector(".bestsellers-container");t.innerHTML="",u();const o=await d.getBestSellers();$(o),c(),S()}catch(t){console.log(t)}});B.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(r=>{r.classList.remove("category-active")}),e.target.classList.add("category-active"),window.scrollTo({top:0,behavior:"smooth"});const n=document.querySelector(".bestsellers-container");n.innerHTML="",u();try{if(!e.target.classList.contains("all-category")){const r=await d.getSelectedCategory(t);H(r,t),c(),S()}}catch(r){console.log(r)}}});D();v();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-up");window.addEventListener("scroll",function(){window.scrollY>600?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});function u(){const e=document.querySelector(".loader-container"),t=document.querySelector(".scroll-up");e.classList.remove("is-hidden-loader"),t.classList.remove("show")}function c(){document.querySelector(".loader-container").classList.add("is-hidden-loader")}
//# sourceMappingURL=commonHelpers2.js.map
