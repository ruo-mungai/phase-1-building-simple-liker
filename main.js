// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

 //Your JavaScript code goes here!
const hideModal=document.querySelector('#modal')
hideModal.className='hidden'

ocument.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector('#modal')
  const heartsClicks = document.querySelectorAll('span.like-glyph')
  myLikes(heartsClicks);
})



const myLikes = (heartsClicks) => {
  for(const heartLike of heartsClicks){
    heart.addEventListener('click', (e) => {
   
      mimicServerCall()
      .then(() => {
      if(heartLike.innerHTML == EMPTY_HEART){
        heartLike.innerHTML = FULL_HEART
        heartLike.className = "activated-heart"
      } else{ 
        heartLike.innerHTML = EMPTY_HEART
        heartLike.className  = "like-glyph"
      }
    })
  .catch(error =>{
    modal.hidden = false
    const modalMessage = document.querySelector("#modal-message")
    modalMessage.innerText = error
    setTimeout(()=>{
      modal.hidden = true
    },3000)
  })
})
  }
}








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
