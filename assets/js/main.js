// Gallery Filter

const btns = document.querySelectorAll(".shuffel button");
const boxsImg = document.querySelectorAll(".gallery-cont .box");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", filterBox);
}

function setActiveBtn(e) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
}

function filterBox(e) {
  setActiveBtn(e);

  boxsImg.forEach((box) => {
    box.classList.remove("box-shrink");
    box.classList.add("box-expand");

    const boxType = parseInt(box.dataset.box);
    const btnType = parseInt(e.target.dataset.btn);

    if (boxType !== btnType) {
      box.classList.remove("box-expand");
      box.classList.add("box-shrink");
    }
  });
}

btns[0].addEventListener("click", (e) => {
  setActiveBtn(e);

  boxsImg.forEach((box) => {
    box.classList.remove("box-shrink");
    box.classList.add("box-expand");
  });
});

// Number Section Steats + Section Pricing

function startCount(element) {
  const goal = element.dataset.number;
  const duration = 2000;
  const counter = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(counter);
    }
  }, duration / goal);
}

const sections = document.querySelectorAll(".steats, .pricing");
const startedSections = new WeakSet();

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !startedSections.has(entry.target)) {
        startedSections.add(entry.target);
        const nums = entry.target.querySelectorAll(".numper");
        nums.forEach((el) => startCount(el));
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((sec) => {
  if (sec) observer.observe(sec);
});

// Effect Fill Progre
const sectionSkills = document.querySelector(".skills-our");
const spansProgres = document.querySelectorAll(".porg span");
let toUp = document.querySelector(".up");

window.onscroll = () => {
  // Up click
  this.scrollY >= 1000
    ? toUp.classList.add("show")
    : toUp.classList.remove("show");

  if (window.scrollY >= sectionSkills.offsetTop) {
    spansProgres.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};
