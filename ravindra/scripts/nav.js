var flag = 0;
function menuF() {
  let element = document.querySelector(".nav-bar .middle");
  element.classList.toggle("mobile");

  if(flag == 0) {
    forEvent(); flag = 1;
  }
}

function forEvent() {
  var plusBtn = document.querySelectorAll(".middle .dropdown .mobilePlus");
  for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener("click", function () {
      this.nextElementSibling.classList.toggle('dropBlock')
    });
  }
}
