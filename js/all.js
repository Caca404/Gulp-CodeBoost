"use strict";var slideThumb=new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0}),filters=(new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slideThumb},autoplay:{delay:5e3,disabledOnInteraction:!1}}),document.querySelectorAll(".js-nav-games li a")),tabPaneGames=document.querySelectorAll(".tab-pane-games"),btnOpenModal=(filters.forEach(function(t,a){t.addEventListener("click",function(e){e.preventDefault(),filters.forEach(function(e){e.classList.remove("active")}),tabPaneGames.forEach(function(e){e.classList.remove("active")}),tabPaneGames[a].classList.add("active"),t.classList.add("active")})}),document.querySelector(".js-open-modal"));btnOpenModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("show-modal"),document.querySelector(".modal .close").addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.remove("show-modal")})});