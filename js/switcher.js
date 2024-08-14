document.body.classList.add(
  window.localStorage.getItem("color-page") || "color1"
);

let showSwitch = document.querySelector(".settings");
let switcherSettings = document.querySelector(".style-switcher");
showSwitch.addEventListener("click", showSwitchSetting);

function showSwitchSetting() {
  switcherSettings.classList.toggle("show-setting");
}

let colorSwitcher = document.querySelectorAll(".colors span");

let classList = [];

colorSwitcher.forEach((e) => {
  classList.push(e.getAttribute("data-color"));
  e.addEventListener("click", function () {
    document.body.classList.remove(...classList);
    document.body.classList.add(this.getAttribute("data-color"));
    window.localStorage.setItem("color-page", this.getAttribute("data-color"));
  });
});
