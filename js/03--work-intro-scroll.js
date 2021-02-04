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

// ================================================
