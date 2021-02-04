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

