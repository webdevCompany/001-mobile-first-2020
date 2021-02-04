

    const h1Element = document.querySelector(".hero__h1");
    const pElement = document.querySelector(".hero__p");
    const aElement = document.querySelector(".hero__button");
    const bigArrowElement = document.querySelector(".hero__BigArrow");
    const headerLogo = document.querySelector(".header__logo");
    const headerHamburger = document.querySelector(".header__hamburger");
    
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
                                    bigArrowElement.classList.add("hero__BigArrow--intro");
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

// ===========================================================================
// SHOW IN THE BACKGROUND EACH LETTER YOU TOUCH WITH THE MOUSE AS A HUGE BACKGROUND ALMOST BLACK 


// =====================================================
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
