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
  let dotline = document.getElementsByClassName("linedot");
  let prev = document.getElementsByClassName("prev");
  let next = document.getElementsByClassName("next");

  if(slideIndex != 1) {
    prev[0].style.display = "flex";
    prev[0].style.flexDirection = "column";
  }
  else {prev[0].style.display = "none";}
  
  if(slideIndex != 4) {
    next[0].style.display = "flex";
    next[0].style.flexDirection = "column";
  }
  else {next[0].style.display = "none";}

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < dotline.length; i++) {
    dotline[i].className = dotline[i].className.replace(" active", "");
  }
  
  for(i = 0; i < n; i++){
    dots[i].className += " active";
  }
  let j;
  if(n == 1){
    for(j = 0; j <= 0; j++){
      dotline[j].className += " active";
    }
  }
  if(n == 2){
    for(j = 0; j <= 2; j++){
      dotline[j].className += " active";
    }
  }
  if(n == 3){
    for(j = 0; j <= 4; j++){
      dotline[j].className += " active";
    }
  }
  if(n == 4){
    for(j = 0; j <= 5; j++){
      dotline[j].className += " active";
    }
  }

  slides[slideIndex-1].style.display = "flex";
  slides[slideIndex-1].style.flexDirection = "column";
  slides[slideIndex-1].style.gap   = "20px"; 
}