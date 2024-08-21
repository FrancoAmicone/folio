const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let magnets = document.querySelectorAll(".magnetic-area");
let strength = 75;

magnets.forEach((magnet) => {
  magnet.addEventListener("mousemove", moveMagnet);
  magnet.addEventListener("mouseout", function (event) {
    TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
  });
});

function moveMagnet(event) {
  let magnetButton = event.currentTarget;
  let bounding = magnetButton.getBoundingClientRect();

  TweenMax.to(magnetButton, 1, {
    x:
      ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
      strength,
    y:
      ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
      strength,
    ease: Power4.easeOut,
  });
}

gsap.set(".card-1", { rotation: -10 });
gsap.set(".card-2", { rotation: -20 });
gsap.set(".card-3", { rotation: -15 });

gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".card");

ScrollTrigger.create({
  trigger: ".contact",
  start: "-50% top",
  onUpdate: (self) => {
    const progress = self.progress;
    cards.forEach((card, index) => {
      gsap.to(card, { y: -300 * progress, overwrite: true });
    });
  },
});

function splitTextIntoSpans(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const text = element.innerText;
    element.innerHTML = "";

    text.split("").forEach((char) => {
      if (char === " ") {
        element.innerHTML += "&nbsp;";
      } else {
        const span = document.createElement("span");
        span.innerText = char;

        const div = document.createElement("div");
        div.className = "letter";
        div.appendChild(span);

        element.appendChild(div);
      }
    });
  });
}

splitTextIntoSpans("h1");

document.querySelectorAll("h1").forEach((h1) => {
  const spans = h1.querySelectorAll(".letter span");

  gsap.to(spans, {
    x: 0,
    duration: 1,
    ease: "power4.out",
    delay: (index) => 0 * 0.5 + 0.25,
    scrollTrigger: {
      trigger: h1,
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});


// Animación de entrada para las clases .jira, .image, .about-hero-img-wrapper
const animateOnScroll = (selector, animationSettings) => {
  gsap.from(selector, {
    ...animationSettings,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%", // Inicia la animación cuando el elemento está al 80% del viewport
      end: "bottom 20%", // Termina la animación cuando el elemento está al 20% del viewport
      toggleActions: "play none none reverse", // Controla cómo se ejecuta la animación
    },
  });
};

// Configuraciones de animación para cada clase
animateOnScroll('.jira', {
  opacity: 0,
  x: 300, // Mueve el elemento desde abajo hacia su posición original
  duration: 1.5,
  ease: "power4.out",
});

animateOnScroll('.image', {
  opacity: 0,
  x: -200, // Escala el elemento desde un tamaño más pequeño
  duration: 1.5,
  ease: "power4.out",
});

animateOnScroll('.about-hero-img-wrapper', {
  opacity: 0,
  x: -100, // Mueve el elemento desde la izquierda hacia su posición original
  duration: 1.5,
  ease: "power4.out",
});

// Animar el elemento con id "eye"
gsap.from('#eye', {
  opacity: 0,
  scale: 0.1, // Escala el ojo desde un tamaño más pequeño
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: '#eye',
    start: "top 90%", // Inicia cuando el ojo está al 90% del viewport
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  }
});

// Animar los elementos con la clase "work-item"
gsap.utils.toArray('.work-item').forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    y: 50, // Mueve el elemento hacia arriba desde una posición más baja
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
});

// Animar el contenedor gifImg
gsap.from('.gifImg', {
  opacity: 0,
  x: -200, // Mueve el contenedor desde la izquierda
  duration: 1.3,
  ease: "power4.out",
  scrollTrigger: {
    trigger: '.gifImg',
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  }
});

gsap.from('.hero_p',{
  scale:0,
  opacity:0,
  y:100,
  duration:0.5,
  ease: "power2.out"
})