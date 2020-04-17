window.onscroll = function() {myFunction()};

var navar = document.getElementById("navar");

var sticky = nabar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
