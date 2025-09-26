const slides = document.querySelectorAll(".slides img");
const slidesContainer = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
let interval = setInterval(nextSlide, 4000);

function showSlide(i) {
    slidesContainer.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetTimer();
});

function resetTimer() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 4000);
}

showSlide(index);
