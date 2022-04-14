const navMenu = document.querySelector(".mobile-list");
const navItems = document.querySelectorAll(".nav-items");
const closeNav = document.querySelector(".close-nav");
const humburger = document.querySelector(".union");
function menuToggler() {
  if (navMenu.classList.contains("displayMenu")) {
    navMenu.classList.remove("displayMenu");
    humburger.style.display = "block";
    closeNav.style.display = "none";
    navMenu.style.display = "none";
    document.body.style.overflow = "auto";
  } else {
    navMenu.classList.add("displayMenu");
    humburger.style.display = "none";
    closeNav.style.display = "block";
    navMenu.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}
humburger.addEventListener("click", menuToggler);
closeNav.addEventListener("click", menuToggler);
navItems.forEach((navItem) => {
  navItem.addEventListener("click", menuToggler);
});

const dynamicProjects = [
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "JavaScript", "html"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: ["Ruby on rails", "CSS", "JavaScript"],
    shortDescription: "Keeping track of hundreds of components",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopPopupImage: ".images/SnapshootPopUpDesktop.svg",
    mobilePopupImage: "./images/SnapshotPopUpMobile.svg",
    liveSource: "",
    seeSource: "",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "JavaScript", "html"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: ["Ruby on rails", "CSS", "JavaScript"],
    shortDescription: "Keeping track of hundreds of components",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopPopupImage: ".images/SnapshootPopUpDesktop.svg",
    mobiePopupImage: "./images/SnapshotPopUpMobile.svg",
    liveSource: "",
    seeSource: "",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "JavaScript", "html"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: ["Ruby on rails", "CSS", "JavaScript"],
    shortDescription: "Keeping track of hundreds of components",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopPopupImage: ".images/SnapshootPopUpDesktop.svg",
    mobiePopupImage: "./images/SnapshotPopUpMobile.svg",
    liveSource: "",
    seeSource: "",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "JavaScript", "html"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: ["Ruby on rails", "CSS", "JavaScript"],
    shortDescription: "Keeping track of hundreds of components",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopPopupImage: ".images/SnapshootPopUpDesktop.svg",
    mobiePopupImage: "./images/SnapshotPopUpMobile.svg",
    liveSource: "",
    seeSource: "",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "JavaScript", "html"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: ["Ruby on rails", "CSS", "JavaScript"],
    shortDescription: "Keeping track of hundreds of components",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopPopupImage: ".images/SnapshootPopUpDesktop.svg",
    mobiePopupImage: "./images/SnapshotPopUpMobile.svg",
    liveSource: "",
    seeSource: "",
  },
];

function getElement(className) {
  return document.querySelector(className);
}

function technologyList(technologies) {
  const langList = document.createElement("ul");
  langList.classList.add("recent-work__items-languages");
  for (let i = 0; i < technologies.length; i += 1) {
    const langElement = document.createElement("li");
    langElement.classList.add("lang");
    langList.appendChild(langElement);
    langElement.innerHTML = technologies[i];
  }
  return langList.innerHTML;
}

let allProjects = [];
function myWorkSection() {
  for (let i = 0; i < dynamicProjects.length; i += 1) {
    allProjects = dynamicProjects[i];
    const { technologies } = allProjects;
    const workSection = document.createElement("template");
    workSection.innerHTML = `<article class="article-card"> 
    <img src="./images/Imgplaholder.svg" alt="Image placeholder"> <h2 class="recent-work__items">
    ${allProjects.name}
    </h2> <ul class="recent-work__items-languages">${technologyList(
      technologies
    )}</ul> <button type="button" class="see-projects open-modal" id="see-project">See Projects</button> </article>`;
    getElement(".recent-work").appendChild(workSection.content.firstChild);
  }
}

let projectspopup;

function popUp() {
  const mq = window.matchMedia("(min-width: 67.5rem)");
  if (mq.matches) {
    // window width is at  1080 px or more
    const desktop = document.querySelector(".desktop-popcontainer");
    document.body.style.overflow = 'hidden';
    desktop.style.display = "flex";
  } else {
    // window width is less than 1080px
    const mobile = document.querySelector(".mobile-popcontainer");
    mobile.style.display = "flex";
  }
}

function getButtons() {
  projectspopup = document.getElementsByClassName("open-modal");
  projectspopup = Array.from(projectspopup);
  projectspopup.forEach((e) => e.addEventListener("click", popUp));
}

const closeMobilePopup = document.querySelector(".desktop-popcontainer");
const closeDesktopPopup = document.querySelector(".mobile-popcontainer");
const closeMobPopup = document.querySelectorAll(".exit-button");

function closeButton() {
  closeMobilePopup.style.display = "none";
  closeDesktopPopup.style.display = "none";
  document.body.style.overflow = "hidden";
}

closeMobPopup.forEach((a) => a.addEventListener("click", closeButton));
window.addEventListener("click", (e) => {
  if (e.target === closeDesktopPopup || e.target === closeMobilePopup) {
    closeButton();
  }
});

window.onload = () => {
  myWorkSection();
  getButtons();
};
