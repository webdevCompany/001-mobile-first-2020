let contactHeaderH2 = document.querySelector(".contact__header__h2");
let contactHeaderH2Span = document.querySelector(".contact__header__h2--german");

let contactForm = document.querySelector(".contact__form");
let formElements = document.querySelectorAll(".contact__form *");
let inputName = document.getElementById("name");


function contactIntro(){

  if(window.pageYOffset + 300 > contactHeaderH2.offsetTop){
    contactHeaderH2.classList.add("contactHeaderH2Intro");
    contactHeaderH2Span.classList.add("contactHeaderH2SpanIntro");
  }  


  if(window.pageYOffset + 250 > inputName.offsetTop){
    for(let i = 0; i< formElements.length; i++){
      setTimeout( ()=>{
          formElements[i].classList.add("formElementsIntro");
      }, 100 * i);
    }
  }
  
}  

window.addEventListener("scroll", contactIntro);

