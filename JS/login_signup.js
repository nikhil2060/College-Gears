"use strict";
const login_box = document.querySelector(".signin_main_box");
const overlay = document.querySelector(".overlay");
const loginbtn = document.querySelectorAll(".log1");

const openlogin_fun = function () {
  login_box.classList.remove("hidden");
  signup_box.classList.add("hidden");
  overlay.classList.remove("hidden");
};

const closelogin_fun = function () {
  login_box.classList.add("hidden");
  signup_box.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < loginbtn.length; i++) {
  loginbtn[i].addEventListener("click", openlogin_fun);
}

overlay.addEventListener("click", closelogin_fun);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!login_box.classList.contains("hidden")) {
      closelogin_fun();
    }
  }
});

// SIGN UP FUNCTINALITY

const signup_box = document.querySelector(".signup_main_box");
const signupbtn = document.querySelectorAll(".sign1");

const opensignup_fun = function () {
  signup_box.classList.remove("hidden");
  login_box.classList.add("hidden");
  overlay.classList.remove("hidden");
};

const closesignup_fun = function () {
  signup_box.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < signupbtn.length; i++) {
  signupbtn[i].addEventListener("click", opensignup_fun);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!signup_box.classList.contains("hidden")) {
      closesignup_fun();
    }
  }
});
