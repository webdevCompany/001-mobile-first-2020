
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
      
      


