const toggler= document.querySelector(".navbar-toggler");
const closer= document.querySelector(".close");
const navbar= document. querySelector(".navbar");
const links= document.querySelectorAll(".link");
const background= document.querySelector(".modal-background");

toggler.addEventListener("click", ()=>{
   navbar.classList.remove("closed-navbar");
   toggler.classList.add("not-show");
   background.style.zIndex= "30";
});

closer.addEventListener("click", ()=>{
   navbar.classList.add("closed-navbar");
   toggler.classList.remove("not-show");
   background.style.zIndex= "-10";
});
background.addEventListener("click", ()=>{
   navbar.classList.add("closed-navbar");
   toggler.classList.remove("not-show");
   background.style.zIndex= "-10";
});

for (let i of links){
   i.addEventListener("click", ()=>{
      navbar.classList.add("closed-navbar");
      toggler.classList.remove("not-show");
   });
};