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
