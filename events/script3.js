// nav bar
const iconNav = document.querySelector('.nav-icon');
if (iconNav) {
  const navBody = document.querySelector('.nav-body');
  iconNav.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconNav.classList.toggle('_active');
    navBody.classList.toggle('_active');
  });
}

// news1
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide1() {
    showSlides(slideIndex += 1);
}

function minusSlide1() {
    showSlides(slideIndex -= 1);  
}

function currentSlide1(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item1");
    var dots = document.getElementsByClassName("slider-dots_item1");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active1";
}

// news2
var slideInde = 1;
showSlide(slideInde);

function plusSlide2() {
    showSlide(slideInde += 1);
}

function minusSlide2() {
    showSlide(slideInde -= 1);  
}

function currentSlide2(n) {
    showSlide(slideInde = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("item2");
    var dots = document.getElementsByClassName("slider-dots_item2");
    if (n > slides.length) {
      slideInde = 1
    }
    if (n < 1) {
        slideInde = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideInde - 1].style.display = "block";
    dots[slideInde - 1].className += " active2";
}

// news4
var slideInd = 1;
showSlid(slideInd);

function plusSlide4() {
    showSlid(slideInd += 1);
}

function minusSlide4() {
    showSlid(slideInd -= 1);  
}

function currentSlide4(n) {
    showSlid(slideInd = n);
}

function showSlid(n) {
    var i;
    var slides = document.getElementsByClassName("item4");
    var dots = document.getElementsByClassName("slider-dots_item4");
    if (n > slides.length) {
      slideInd = 1
    }
    if (n < 1) {
        slideInd = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active4", "");
    }
    slides[slideInd - 1].style.display = "block";
    dots[slideInd - 1].className += " active4";
}

// news5
var slideIn = 1;
showSli(slideIn);

function plusSlide5() {
    showSli(slideIn += 1);
}

function minusSlide5() {
    showSli(slideIn -= 1);  
}

function currentSlide5(n) {
    showSli(slideIn = n);
}

function showSli(n) {
    var i;
    var slides = document.getElementsByClassName("item5");
    var dots = document.getElementsByClassName("slider-dots_item5");
    if (n > slides.length) {
      slideIn = 1
    }
    if (n < 1) {
        slideIn = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active5", "");
    }
    slides[slideIn - 1].style.display = "block";
    dots[slideIn - 1].className += " active5";
}

