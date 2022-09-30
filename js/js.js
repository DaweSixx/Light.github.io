const scrennWidth = window.screen.width;
const findSlider = document.querySelector(".find__slider-line");
const findSliderBtn = document.querySelector(".find_footer__button");
const findSliderNum = document.querySelector(".find_footer__numbers span");
let sliderSum = 0;
let sliderNum = 2;
findSliderBtn.addEventListener("click", function () {
  if (scrennWidth >= 600) {
    sliderSum += 51.5;
    findSlider.style.right = sliderSum + "%";
    findSliderNum.innerText = sliderNum++;
    if (sliderNum == 6) {
      sliderNum = 1;
    }
    if (sliderSum > 250) {
      sliderSum = 0;
      findSlider.style.right = sliderSum;
    }
  } else if (scrennWidth >= 550) {
    sliderSum += 52.5;
    findSlider.style.right = sliderSum + "%";
    findSliderNum.innerText = sliderNum++;
    if (sliderNum == 6) {
      sliderNum = 1;
    }
    if (sliderSum > 250) {
      sliderSum = 0;
      findSlider.style.right = sliderSum;
    }
  }
});

/* ===================SLide============== */

let count = 0;

const downSlider = document.querySelector(".slider__main_line");
const downSlideBtnL = document.querySelector(".button-left");
const downSlideBtnR = document.querySelector(".button-right");

downSlideBtnR.addEventListener("click", function () {
  if (scrennWidth > 750) {
    if (count > -976) {
      count = count - 488;
      downSlideBtnL.classList.remove("ghost_one");
    } else {
      count = count - 448;
      downSlideBtnR.classList.add("ghost_two");
      count = -1424;
    }

    downSlider.style.transform = `translate(${count}px)`;
    /* =================================== */
  } else if (scrennWidth > 600) {
    if (count > -267) {
      count = count - 267;
      downSlideBtnL.classList.remove("ghost_one");
    } else {
      count = count - 267;
      downSlideBtnR.classList.add("ghost_two");
      count = -535;
    }

    downSlider.style.transform = `translate(${count}px)`;
    /* =================================== */
  }
});
/* ================================================ */

downSlideBtnL.addEventListener("click", function () {
  if (scrennWidth > 750) {
    if (count >= 0) {
    } else if (count >= -488) {
      count += 488;
      downSlideBtnL.classList.add("ghost_one");
    } else if (count == -1424) {
      count += 448;
      downSlideBtnR.classList.remove("ghost_two");
    } else {
      count += 488;
    }

    downSlider.style.transform = `translate(${count}px)`;
    /* =================================== */
  } else if (scrennWidth > 600) {
    if (count >= -1) {
    } else if (count >= -267) {
      count += 267;
      downSlideBtnL.classList.add("ghost_one");
    } else if (count == -535) {
      count += 267;
      downSlideBtnR.classList.remove("ghost_two");
    } else {
      count += 267;
      downSlideBtnL.classList.add("ghost_one");
    }

    downSlider.style.transform = `translate(${count}px)`;
  }
});

/* =========DownButton========= */

let down = document.querySelector(".header_left-button");
let mainBlock = document.querySelector(".main");
down.addEventListener("click", function () {
  mainBlock.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
});

/* =====Modal+================== */

const burgerBtn = document.querySelector(".spanDiv");
const menuClass = document.querySelector(".menu_items");
const span = document.querySelector(".spanDefault");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", function () {
  if (menuClass.style.display == "block") {
    menuClass.style.display = "none";
    span.classList.toggle("xStyle");
    body.classList.toggle("fixed");
  } else {
    menuClass.style.display = "block";
    span.classList.toggle("xStyle");
    body.classList.toggle("fixed");
  }
});

/* ===================CHatEmail=================== */
const chatEmail = document.querySelector(".chatEmail");
const iconChat = document.querySelector(".chat");
const btnX = document.querySelector(".chat_block span");
const btnSend = document.querySelector(".chat_block button");
const formEmailSend = document.querySelector(".chat_block");

iconChat.addEventListener("click", function () {
  chatEmail.classList.toggle("none");
  body.classList.toggle("fixed");
  body.style.paddingRight = `16px`;
});

btnX.addEventListener("click", function () {
  chatEmail.classList.toggle("none");
  body.classList.toggle("fixed");
  body.style.paddingRight = `0px`;
});

btnSend.addEventListener("click", function (e) {
  location.reload();
});

chatEmail.addEventListener(
  "click",
  function (e) {
    if (chatEmail == e.target) {
      chatEmail.classList.toggle("none");
      body.classList.toggle("fixed");
      body.style.paddingRight = `0px`;
    }
  },
  false
);
