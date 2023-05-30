"use strict";

const thumbnails = document.querySelectorAll(".thumbnail");
const topImage = document.getElementById("top-image");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
var showIndex = 0;

const removeActiveClass = () => {
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active");
  }
};

const imageChangebyButton = (index) => {
  thumbnails[index].classList.add("active");
  topImage.src = thumbnails[index].src;
};

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // for (var i = 0; i < thumbnails.length; i++) {
    //   thumbnails[i].classList.remove("active");
    // }
    removeActiveClass();
    thumbnail.classList.add("active");
    topImage.src = thumbnail.src;
  });
});

next.addEventListener("click", () => {
  //showIndexが2以上か以下かで分岐
  if (showIndex < 2) {
    showIndex++;
  } else {
    showIndex = 0;
  }
  removeActiveClass();
  imageChangebyButton(showIndex);
});

prev.addEventListener("click", () => {
  //showIndexが0以下かで分岐
  if (showIndex > 0) {
    showIndex--;
  } else {
    showIndex = 2;
  }
  removeActiveClass();
  imageChangebyButton(showIndex);
});
