// navbar
const bars = document.querySelector('.tuggal');
const list = document.querySelector("header nav ul");
const delXmark = document.getElementById('xmark');
const burger = document.getElementById('bars');

bars.onclick = () => {
  list.classList.add("open");
}

delXmark.onclick = () => {
  delXmark.parentElement.classList.remove("open");
}

// Carousel Header
const nextDon = document.getElementById("next");
const prevDon = document.getElementById("prev");
const carouselDon = document.querySelector(".carousel");
const listItemDon = document.querySelector(".carousel .list");
const bulletsDon = document.querySelector(".carousel .bullets");

nextDon.onclick = () => {
  showSlider("next");
};
prevDon.onclick = () => {
  showSlider("prev");
};

let timeRunning = 3000;
let timeAutoNext = 6000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextDon.click();
}, timeAutoNext);
function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemBullets = document.querySelectorAll(".carousel .bullets .item");

  if (type === "next") {
    listItemDon.appendChild(itemSlider[0]);
    bulletsDon.appendChild(itemBullets[0]);
    carouselDon.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDon.prepend(itemSlider[positionLastItem]);
    bulletsDon.prepend(itemBullets[positionLastItem]);
    carouselDon.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDon.classList.remove("next");
    carouselDon.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDon.click();
  }, timeAutoNext);
}
