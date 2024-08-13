// start for typing function
let wordShow = document.querySelector("h2 .type-writting ");
let cursor = document.querySelector("h2 .cursor ");
let words = JSON.parse(wordShow.getAttribute("data-words"));
let isDeleting = false;
let letterIndex = 0;
let wordIndex = 0;
// end for typing function

//for active function

let home = document.querySelector(".home");
let about = document.querySelector(".about");
let services = document.querySelector(".serv");
let port = document.querySelector(".portfolio");
let contact = document.querySelector(".contact");
let homeBtn = document.querySelector(".my-home-btn");
let aboutBtn = document.querySelector(".my-about-btn");
let servBtn = document.querySelector(".my-serv-btn");
let portBtn = document.querySelector(".port-btn");
let contactBtn = document.querySelector(".contact-btn");
let mySections = Array.from(document.getElementsByTagName("section"));
let myLinks = Array.from(document.getElementsByTagName("li"));

// end for active function

// stsrt for showIcon Function

let asideBtn = document.querySelector(".icon");
let hiddenAsideBtn = document.querySelector(".close");
let myAside = document.querySelector(".my-side");

// end for shoeIcon Function

console.log(myLinks);

homeBtn.addEventListener("click", () => active("home"));
aboutBtn.addEventListener("click", () => active("about"));
servBtn.addEventListener("click", () => active("serv"));
portBtn.addEventListener("click", () => active("port"));
contactBtn.addEventListener("click", () => active("contact"));
asideBtn.addEventListener("click", showAside);
hiddenAsideBtn.addEventListener("click", closeAside);

function showAside() {
  myAside.classList.add("clicked");
  asideBtn.classList.add("hidden");
  hiddenAsideBtn.classList.remove("hidden");
}
function closeAside() {
  myAside.classList.remove("clicked");
  hiddenAsideBtn.classList.add("hidden");
  asideBtn.classList.remove("hidden");
}
function active(section) {
  mySections.forEach((element) => {
    isActive(element);
    element.classList.remove("active");
  });

  myLinks.forEach((link) => {
    link.classList.remove("active-link");
  });

  if (section === "home") {
    home.classList.add("active");
    homeBtn.classList.add("active-link");
  } else if (section === "about") {
    about.classList.add("active");
    aboutBtn.classList.add("active-link");
  } else if (section === "serv") {
    services.classList.add("active");
    servBtn.classList.add("active-link");
  } else if (section === "port") {
    port.classList.add("active");
    portBtn.classList.add("active-link");
  } else if (section === "contact") {
    contact.classList.add("active");
    contactBtn.classList.add("active-link");
  }
  myAside.classList.remove("clicked");
  hiddenAsideBtn.classList.add("hidden");
  asideBtn.classList.remove("hidden");
  setTimeout(() => {
    mySections.forEach((element) => {
      element.classList.remove("section-back");
    });
  }, 1000);
}

function isActive(element) {
  if (element.classList.contains("active")) {
    element.classList.add("section-back");
  }
}

function typing() {
  wordShow.innerHTML = words[wordIndex].substring(0, letterIndex);
  if (!isDeleting) {
    letterIndex++;
  } else {
    letterIndex--;
  }
  if (letterIndex > words[wordIndex].length) {
    isDeleting = true;
    setTimeout(typing, 2000);
    return;
  }
  if (letterIndex === 0) {
    isDeleting = false;
    wordIndex++;
    if (wordIndex === words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typing, isDeleting ? 100 : 250);
}
typing();
setInterval(() => {
  cursor.classList.toggle("cursor");
}, 500);
