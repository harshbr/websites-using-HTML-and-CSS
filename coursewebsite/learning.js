let courselist = document.querySelector(".course-main");
let coursee = document.querySelectorAll(".course-detail");
let getdata = coursee[0].offsetWidth;
let index = 0;

function nextdata() {
  index++;
  if (index >= coursee.length) {
    index = 0;
  }
  updateslider();
}

function predata() {
  index--;
  if (index < 0) {
    index = coursee.length - 1;
  }
  updateslider();
}
function updateslider() {
  let tvalue = "translateX(-" + index * getdata + "px)";
  courselist.style.transform = tvalue;
}

let next = document.getElementById("next");
next.addEventListener("click", nextdata);
let previous = document.getElementById("pre");
previous.addEventListener("click", predata);
