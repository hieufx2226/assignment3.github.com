`use strict`;
document.querySelector(`.myinf`).classList.add(`hidden`);
document.querySelector(`.vdemail`).classList.add(`hidden`);

document.querySelector(`.btn`).addEventListener(`click`, function () {
  const email = document.querySelector(`.form-control`);

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(email.value)) {
    document.querySelector(`.vdemail`).classList.remove(`hidden`);
  } else {
    document.querySelector(`.myinf`).classList.remove(`hidden`);
    document.querySelector(`.myinf1`).classList.add(`hidden`);
    console.log(email, typeof email);
  }
});
document.querySelector(`.form-control`).addEventListener(`click`, function () {
  document.querySelector(`.vdemail`).classList.add(`hidden`);
});

document.querySelector(`.k1`).classList.add(`hidden`);
document.querySelector(`.item1`).addEventListener(`mouseover`, function () {
  document.querySelector(`.k1`).classList.remove(`hidden`);
});
document.querySelector(`.item1`).addEventListener(`mouseout`, function () {
  document.querySelector(`.k1`).classList.add(`hidden`);
});
document.querySelector(`.k2`).classList.add(`hidden`);
document.querySelector(`.item2`).addEventListener(`mouseover`, function () {
  document.querySelector(`.k2`).classList.remove(`hidden`);
});
document.querySelector(`.item2`).addEventListener(`mouseout`, function () {
  document.querySelector(`.k2`).classList.add(`hidden`);
});
document.querySelector(`.k3`).classList.add(`hidden`);
document.querySelector(`.item3`).addEventListener(`mouseover`, function () {
  document.querySelector(`.k3`).classList.remove(`hidden`);
});
document.querySelector(`.item3`).addEventListener(`mouseout`, function () {
  document.querySelector(`.k3`).classList.add(`hidden`);
});
document.querySelector(`.k4`).classList.add(`hidden`);
document.querySelector(`.item4`).addEventListener(`mouseover`, function () {
  document.querySelector(`.k4`).classList.remove(`hidden`);
});
document.querySelector(`.item4`).addEventListener(`mouseout`, function () {
  document.querySelector(`.k4`).classList.add(`hidden`);
});
document.querySelector(`.k5`).classList.add(`hidden`);
document.querySelector(`.item5`).addEventListener(`mouseover`, function () {
  document.querySelector(`.k5`).classList.remove(`hidden`);
});
document.querySelector(`.item5`).addEventListener(`mouseout`, function () {
  document.querySelector(`.k5`).classList.add(`hidden`);
});
document.querySelector(`.k6`).classList.add(`hidden`);
document.querySelector(`.item6`).addEventListener(`mouseover`, function () {
  document.querySelector(`.k6`).classList.remove(`hidden`);
});
document.querySelector(`.item6`).addEventListener(`mouseout`, function () {
  document.querySelector(`.k6`).classList.add(`hidden`);
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "VIEW MORE";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "VIEW LESS";
    moreText.style.display = "inline";
  }
}
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "VIEW MORE";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "VIEW LESS";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "VIEW MORE";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "VIEW LESS";
    moreText.style.display = "inline";
  }
}
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "VIEW MORE";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "VIEW LESS";
    moreText.style.display = "inline";
  }
}
function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "VIEW MORE";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "VIEW LESS";
    moreText.style.display = "inline";
  }
}
function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "VIEW MORE";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "VIEW LESS";
    moreText.style.display = "inline";
  }
}
