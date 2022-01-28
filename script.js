//code for burger design
let burger = document.getElementById("burger");
let nav = document.getElementById("nav");
let navContainer = document.getElementById('nav-container');

//hope
let hopeDiv = document.getElementById("hopeDiv");

let menuOpened = false;

burger.addEventListener("click", () => {
   if (!menuOpened) {
      //navigation-bar-burgerDesign
      nav.style.width = '100vw';
      nav.style.transition = '0.3s ease-in-out';
      navContainer.style.display = "block";
      menuOpened = true;
      //hopeDiv
      hopeDiv.style.display = "none";
   } else {
      //navigation-bar-burgerDesign
      nav.style.width = "50px";
      navContainer.style.display = "none";
      menuOpened = false;

      //hopeDiv
      hopeDiv.style.display = "flex";
   }
});



//hamburger closing
let line1 = document.getElementById("line1");
let line3 = document.getElementById("line3");
let line2 = document.getElementById('line2');

let clicked = false;

burger.addEventListener("click", () => {
   if (!clicked) {
      line1.style.rotate = "45deg !important";
      line1.style.width = "30px";
      line1.style.translate = "0px 9px";
      line2.style.width = "0px";
      line3.style.rotate = "-45deg !important";
      line3.style.width = "30px";
      line3.style.translate = "0px -9px";
      clicked = true;

   } else {
      line1.style.rotate = "0deg !important";
      line1.style.translate = "0px";
      line1.style.width = "26px";
      line2.style.width = "26px";
      line3.style.rotate = "0deg !important";
      line3.style.width = "26px";
      line3.style.translate = "0px";
      clicked = false;
   }
});



