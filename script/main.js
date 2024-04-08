var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


window.addEventListener("resize", function() {
  if (document.documentElement.clientWidth > 375) {
    swiper.params.slidesPerView = 2;
  } else {
    swiper.params.slidesPerView = 1;
  }

  swiper.update();
});


var date = new Date();
document.getElementById('dateControl').valueAsDate = date;



document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-menu').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('nav_active')

    document.body.classList.add('modal-open');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-menu-close').addEventListener('click', () => {
    document.getElementById('menu').classList.remove('nav_active')

    document.body.classList.remove('modal-open');
  });
});

