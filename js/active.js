var matchResult = window.matchMedia("(max-width: 991px)"); 
function clothFunction(x) {
  var x = document.getElementById("cloth_hide__show");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}
function electronicFunction(x) {
  var y = document.getElementById("electronics_hide__show");
  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";
  } else {
    y.style.visibility = "visible";
  }
}
function elementsFunction(x) {
  var y = document.getElementById("elements_hide__show");
  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";
  } else {
    y.style.visibility = "visible";
  }
}
function pagesFunction(x) {
  var y = document.getElementById("pages_hide__show");
  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";
  } else {
    y.style.visibility = "visible";
  }
}
function clothcatFunction(x) {
  var y = document.getElementById("clothcat_hide__show");
  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";
  } else {
    y.style.visibility = "visible";
  }
}
function electrocatFunction(x) {
  var y = document.getElementById("electrocat_hide__show");
  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";
  } else {
    y.style.visibility = "visible";
  }
}
// var x = window.matchMedia("(max-width: 991px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

//Sliding
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}