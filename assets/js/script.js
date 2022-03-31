let mainul = document.getElementById('mainul');
mainul.style.right = "-260px";
function menu() {
    if (mainul.style.right == "0px") {
      mainul.style.right = "-260px";
    } else {
      mainul.style.right = "0px";
    }
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});






