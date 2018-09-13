window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");

var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("static");
  } else {
    header.classList.remove("static");
  }
}