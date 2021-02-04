
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// ========================================================================
//   js\01--header-nav-open-close.js
// ========================================================================
// Click on hamburger icon and show or hide navigation bar 
// let hamburger = document.querySelector(".hamburger-icon");

let hamburger = document.querySelector(".header__hamburger");
let nav = document.querySelector(".nav");

let navHamburgerImage = document.querySelector(".header__hamburger");

let navbarIconText = document.querySelector(".navbar-icon-text");

function showNav(){
  document.body.classList.toggle("navBarFullScreen"); 
  nav.classList.toggle("showNavonClick");
  hamburger.classList.toggle("hamburger-nav--on");
  navbarIconText.classList.toggle("navbar-icon-text-on");
}

hamburger.addEventListener("click", showNav);




// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// ========================================================================
// js\02--hero-intro.js
// ========================================================================



h1Element = document.querySelector(".hero__h1");
pElement = document.querySelector(".hero__p");
aElement = document.querySelector(".hero__button");
bigArrowElement = document.querySelector(".hero__BigArrow");
headerLogo = document.querySelector(".header__logo");
headerHamburger = document.querySelector(".header__hamburger");

const heroBGTextOnHover = document.querySelector(".hero__backgroundTextHover");


h1Element.innerHTML = "";
let h1String = "FUTURE DESIGN";
let pString = "LOREM IS NOT LONGER N.1 IN THE WEB COMUNITY";


// You don't need to create h1 with text  ---------------------------
// the javascript text will be added before the website works--------
h1Array = Array.from(h1String);

heroPArray = pString.split("");

h1Array.forEach( (item, index)=>{
  if(index <= 6){
    h1Element.innerHTML += `<span class="h1Future">${item}</span>`;
  }else{
    h1Element.innerHTML += `<span class="h1Design">${item}</span>`;
  } 
})

heroPArray.forEach( (item)=>{
  pElement.innerHTML += `<span class="heroP">${item}</span>`;
});

let allspanFUTURE = document.querySelectorAll(".h1Future");
let allspanDESIGN = document.querySelectorAll(".h1Design");

let allspanHeroP = document.querySelectorAll(".heroP");

let futureFinished = 0;
let designFinished = 0;
let herotextFinished = 0;
function showH1(){

  setTimeout( ()=>{

      for(let item = 0; item <allspanFUTURE.length; item++){ 
        setTimeout( ()=>{
          allspanFUTURE[item].style.opacity = "1";
          futureFinished = item;

          heroBGTextOnHover.innerHTML = allspanFUTURE[item].innerHTML;

          if(futureFinished == 6){
            setTimeout( ()=>{
                for(let m = 0; m<allspanDESIGN.length; m++){
                  setTimeout( ()=>{
                    allspanDESIGN[m].style.opacity = "1";
                    designFinished = m;
                    heroBGTextOnHover.innerHTML = allspanDESIGN[m].innerHTML;

                    if(designFinished == allspanDESIGN.length - 1){
                      setTimeout( ()=>{
                          for(let hp = 0; hp < allspanHeroP.length; hp++){
                            setTimeout( ()=>{
                              
                              allspanHeroP[hp].classList.add("hero__pAddTextIntro");
                              herotextFinished = hp;

                              if(heroBGTextOnHover.innerHTML === "Y" || heroBGTextOnHover.innerHTML === "y"){
                                heroBGTextOnHover.innerHTML = "X";
                                heroBGTextOnHover.style.color = "#210000";
                              }

                              if(herotextFinished == allspanHeroP.length - 1){
                                aElement.classList.add("herobuttonIntro");
                                bigArrowElement.style.opacity = "1";
                                headerLogo.classList.add("header__logo-ready");
                                headerHamburger.classList.add("header__hamburger-ready");

                                // add class to hero button now after the intro remove transition Delay because it gets permanent delay 
                                setTimeout( ()=>{
                                  aElement.style.transition = "all .5s";
                                  aElement.style.transitionDelay = "0s";
                                }, 2000);
                              }

                            }, 110 * hp);

                          }

                      }, 300);
                    }

                  }, 200 * m);
                }

            }, 240);
            
          }
        }, 200 * item );
    }

  }, 2000);
}

showH1();

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// js\02--hero-hover-on-text.js

// SHOW IN THE BACKGROUND EACH LETTER YOU TOUCH WITH THE MOUSE AS A HUGE BACKGROUND ALMOST BLACK 

// =====================================================
// this is declared in 02--hero-intro.js 
// const heroBGTextOnHover = document.querySelector(".hero__backgroundTextHover");
// =====================================================
const h1Future = document.querySelectorAll(".h1Future");
const h1Design = document.querySelectorAll(".h1Design");
const heroParagraph = document.querySelectorAll(".heroP");
const heroButton = document.querySelector(".hero__button");

let heroButtonText = "START NOW";
let heroButtonArray = heroButtonText.split("");

heroButtonArray.forEach( (eachone) => {
    heroButton.innerHTML += `<span class="heroButtonLetter">${eachone}</span>`;
    console.log(heroButton.innerHTML);
});

let allHeroButtonSpans = document.querySelectorAll(".heroButtonLetter");

function writeHeroBg(e){
    h1Future.forEach( (eachone) => { heroBGTextOnHover.innerHTML = this.innerHTML; });
    h1Design.forEach( (eachone) => { heroBGTextOnHover.innerHTML = this.innerHTML; });
    heroParagraph.forEach( (eachone) => { heroBGTextOnHover.innerHTML = this.innerHTML; });
    allHeroButtonSpans.forEach( (eachone) => { heroBGTextOnHover.innerHTML = this.innerHTML;  });
}

h1Future.forEach( (eachone) => { eachone.addEventListener("mouseover", writeHeroBg) } );
h1Design.forEach( (eachone) => { eachone.addEventListener("mouseover", writeHeroBg) } );
heroParagraph.forEach( (eachone) => { eachone.addEventListener("mouseover", writeHeroBg) } );
allHeroButtonSpans.forEach( (eachone) => { eachone.addEventListener("mouseover", writeHeroBg)} );

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// js\03--work-intro-scroll.js


// ================================================
// SECTION WITH 3 IMAGES SCROLL ANIMATION IS COMPLETED

// ALL h2-SCROLL SHOW
let allWebsiteH2 = document.querySelectorAll('h2')

allWebsiteH2.forEach( (eachH2)=>{
    eachH2.style.opacity = "0";
})

function allH2group(){

    allWebsiteH2.forEach( (eachH2)=>{
      if(window.pageYOffset + 250 > eachH2.offsetTop){
        eachH2.style.opacity = "1";
        eachH2.style.transition = "all 1s";
        
      }
    });
}

window.addEventListener("scroll", allH2group);


// ALL work section articles (each one will trigger scroll animation for its children elements)
let allArticles = document.querySelectorAll('article')

function showArticles() {
  allArticles.forEach((one) => {
    if (window.pageYOffset + 250 > one.offsetTop) {
      one.querySelector('h3').classList.add('article3images-H3-Scroll')
      one.querySelector('p').classList.add('article3images-p-Scroll')
      one.querySelector('a').classList.add('article3images-a-Scroll')

      if (
        one.querySelector('a').classList.contains('article3images-a-Scroll')
      ) {
        setTimeout(() => {
          one.querySelector('a').style.transitionDelay = '0s'
        }, 1000)
      }

      one.querySelector('img').classList.add('article3images-img-Scroll')
    }
  })

}

window.addEventListener('scroll', showArticles)




// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// js\04--services-intro-scroll.js


// ===============================================
// SERVICES SECTION SHOW ON SCROLL IS DIFFERENT.
// you need to apply to each case, because images are too big.

let allServicestoScroll = document.querySelectorAll('.services__component__header');

let allServicesImages = document.querySelectorAll('.services__component__header__img');
let allServicesH3 = document.querySelectorAll('.services__component__header__h3');
let allServicesButtons = document.querySelectorAll('.services__component__a');

function showServicesSection() {
      
    allServicestoScroll.forEach( (eachservice)=>{
      if(window.pageYOffset + 200 > eachservice.offsetTop){

        for(let i=0; i< allServicestoScroll.length; i++){
          setTimeout( ()=>{
            eachservice.querySelector("img").classList.add("servicesImgIntro");
            eachservice.querySelector("h3").classList.add("servicesH3Intro");
            eachservice.querySelector("a").classList.add("servicesButtonIntro");
            
            if(eachservice.querySelector("a").classList.contains("servicesButtonIntro")){
              eachservice.querySelector("a").style.transitionDelay = "0s";
            }
          }, 300 * i );
        }

      }
    });
}

window.addEventListener('scroll', showServicesSection)


// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// js\05--clients-1-intro-scroll.js


let clientsH2 = document.querySelector(".clients__header__h2");

clientsH2.innerHTML = "";
let h2string = "CLIENTS REVIEWS";
let h2stringArray = h2string.split("");

h2stringArray.forEach( (item)=>{
  clientsH2.innerHTML += `<span class="clientsH2span">${item}</span>`;
})

let allclientsH2Spans = document.querySelectorAll(".clientsH2span");
let clientContent = document.querySelector(".clients__content");
let clientsCommentsBoxes = document.querySelectorAll(".clients__component");

let clientsCommentsBox1 = document.querySelector(".clients__component");


function clientsIntro(){
  if(window.pageYOffset + 200 > clientsH2.offsetTop){    
      for(let i = 0; i < allclientsH2Spans.length; i++){
    
          setTimeout( ()=>{
            allclientsH2Spans[i].style.opacity = "1";
            let number = i;

                if(number == allclientsH2Spans.length -1){
                  setTimeout( ()=>{
                    clientsCommentsBoxes.forEach( (eachcommentBox) => {
                        eachcommentBox.classList.add("clientsCommentBox");
                    });

                  }, 400);
                }
        
          }, 50 * i);
     }
  }
    
}
      
window.addEventListener("scroll", clientsIntro);
      
      

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// js\05--clients-2-carousel.js


// the key is to find the index of the element you click
// You need to convert querySelectorAll list to an Array to use the method indexOf()
// Create an array using -----> Array.from()
// Now find the index of the element clicked using   -----> indexOf()

const carouselBlock = document.getElementById(
    'clients__carousel__3images-group',
  )
  let carouselDots = document.querySelectorAll('.carousel__dot')
  
  let marcoArrayFromCarouselDots = Array.from(carouselDots)
  
  console.log(typeof marcoArrayFromCarouselDots)
  
  function moveCarouselclickingDots(e) {
    carouselBlock.style.transition = 'all .5s'
    carouselBlock.style.left =
      marcoArrayFromCarouselDots.indexOf(e.currentTarget) * -1 * 100 + '%'
  }
  
  carouselDots.forEach(function (button) {
    button.addEventListener('click', moveCarouselclickingDots)
  })
  



// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// js\06--contact-intro-scroll.js

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




// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// js\07--footer-intro-scroll.js


let fLeft = document.querySelector(".footer__left");

let fLogo = document.querySelector(".footer__logo");
let flogoRed = document.querySelector(".logo-Red");
let fP = document.querySelector(".footer__p");
let fPspan = document.querySelector(".footer__p--span");
let fAddress = document.querySelector(".footer__address");
let fIcons = document.querySelectorAll(".footer__social__li");

let googleMapcover = document.querySelector(".googlemap-cover");

let footerArray = [fLogo, fP, fPspan, fAddress, ...fIcons];

function funfunwork(){

  if(window.pageYOffset + 250 > fLeft.offsetTop){
      
    for(let i=0; i< footerArray.length; i++){
      setTimeout( ()=>{
        footerArray[i].classList.add("footerIntro");
        
        if(fAddress.classList.contains("footerIntro")){
          setTimeout( ()=>{
            
            for(let i=0; i<fIcons.length; i++){
              setTimeout( ()=>{
                
                fIcons[i].style.transition = "all .5s"; 
                footerArray[i].style.transform = "translateY(0px)";

                if(fIcons[2].classList.contains("footerIntro")){

                  setTimeout( ()=>{
                    googleMapcover.style.transition = "all 1s";
                    googleMapcover.style.transform = "translateX(600px)";

                  }, 2000);

                }
                
              }, 140 * i);
            }
          }, 2000);
          
        }

      }, 500 * i);
    }
  }

}

window.addEventListener("scroll", funfunwork);




// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''