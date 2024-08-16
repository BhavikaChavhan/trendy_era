// hero Initialize Swiper 

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// hero Initialize Swiper 

// New Arrival section Swiper
 var swiper = new Swiper(".mySwiper1", {
   slidesPerView: 5,
   spaceBetween: 10,
   pagination: {
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   breakpoints: {
    200:{
      slidesPerView: 1,
      
    },
    400:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
     640: {
       slidesPerView: 3,
       spaceBetween: 10,
     },
     768: {
       slidesPerView: 4,
       spaceBetween: 10,
     },
     1024: {
       slidesPerView: 5,
       spaceBetween: 10,
     },
   },
   
   
 });



document.getElementById('menu-toggle').addEventListener('click', function() {
  var menu = document.getElementById('navbar-menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
    menu.classList.add('flex-col', 'items-center', 'space-y-4');
  } else {
    menu.style.display = 'none';
  }
});


function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  document.getElementById('current-time').textContent = timeString;
}

setInterval(updateTime, 1000); // Update the time every second
window.onload = updateTime;

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
   200:{
     slidesPerView: 1,
     
   },
   400:{
     slidesPerView: 2,
     spaceBetween: 2,
   },
    640: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 2,
    },
  },
  
  
});


var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
   200:{
     slidesPerView: 1,
     
   },
   400:{
     slidesPerView: 2,
     spaceBetween: 10,
   },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  
  
});



var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
   200:{
     slidesPerView: 1,
     
   },
   400:{
     slidesPerView: 1,
     spaceBetween: 2,
   },
    640: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
  },
  
  
});



var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
   300:{
     slidesPerView: 1,
     
   },

   575:{
     slidesPerView: 2,
     spaceBetween: 20,
   },
   
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  
  
});

var swiper = new Swiper(".mySwiper6", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
   300:{
     slidesPerView: 2,
     spaceBetween: 3,
   },

   575:{
     slidesPerView: 3,
     spaceBetween: 3,
   },
   
    768: {
      slidesPerView: 4,
      spaceBetween: 3,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 3,
    },
  },
  
  
});


function updateTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('day').textContent = day;
  document.getElementById('hour').textContent = hour;
  document.getElementById('minute').textContent = minute;
  document.getElementById('second').textContent = second;
}

setInterval(updateTime, 1000);
updateTime();

