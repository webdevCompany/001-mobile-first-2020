
let fLeft = document.querySelector(".footer__left");

let fLogo = document.querySelector(".footer__logo");
let flogoRed = document.querySelector(".logo-Red");
let fP = document.querySelector(".footer__p");
let fPspan = document.querySelector(".footer__p--span");
let fAddress = document.querySelector(".footer__address");
let fIcons = document.querySelectorAll(".footer__social__li");

let googleMap = document.querySelector(".footer__right__google-map");


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
                      googleMap.classList.add("google-map-intro");
                  }, 500);

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
