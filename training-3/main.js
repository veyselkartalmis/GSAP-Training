const menuBtn = document.querySelector(".menuBtn");
const exitBtn = document.querySelector(".exit");

let t1 = gsap.timeline({ paused: true });

t1.to(".menu", { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
t1.to(".nav", { opacity: 1, duration: 1, stagger: 0.1, marginTop: 0, ease: Power2.easeInOut });


menuBtn.addEventListener("click", () => {
    t1.play().timeScale(1);
});

exitBtn.addEventListener("click", () => {
    t1.timeScale(2);
    t1.reverse();
});