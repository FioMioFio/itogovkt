tippy('[data-tippy-content]');


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

const cards = document.querySelectorAll('.card');

VanillaTilt.init(cards, {
  max: 10,
  glare: true,
  'max-glare': 0.3,
});

const privet = document.querySelectorAll('.privet');

VanillaTilt.init(privet, {
  max: 20,
});

const cards2 = document.querySelectorAll('.card2');

VanillaTilt.init(cards2, {
  max: 10,
  glare: true,
  'max-glare': 0.3,
});

const cards3 = document.querySelectorAll('.card3');

VanillaTilt.init(cards3, {
  max: 10,
  glare: true,
  'max-glare': 0.3,
});

AOS.init('.wrapper');


AOS.init('.swiper-wrapper');

const INPUTS = document.querySelectorAll('input')

const pattern = {
    password: /^[a-z]+([-_]?[a-z]+){0}$/i, 
    username: /^[a-z]+([-_]?[a-z]+){0}$/i,
    telephone: /^\d{11}$/,
};

function validate(field, regexp) {
    if (regexp.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

INPUTS.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        // console.log(event.target.attributes.name.value);
        validate(event.target, pattern[event.target.attributes.name.value]);
    })
})

  // var swiper2 = new Swiper2(".mySwiper2", {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   freeMode: true,
  //   pagination: {
  //     el: ".swiper-pagination2",
  //     clickable: true,
  //   },
  // });


function parallax(event) {
  this.querySelectorAll('.leyer').forEach(leyer => {
    leyer.style.transform = `translateX(${event.clientX/50}px)`
  });
}

document.addEventListener('mousemove', parallax)


const moveTo = new MoveTo();
const button = document.querySelectorAll("button");
button.forEach(btn => moveTo.registerTrigger(btn));