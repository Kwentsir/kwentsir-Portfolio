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
    desktopPopupImage: "./images/SnapshootPopUpDesktop.png",
    mobilePopupImage: "./images/SnaptshotPopUpMobile.png",
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
    desktopPopupImage: ".images/SnapshootPopUpDesktop.png",
    mobilePopupImage: "./images/SnaptshotPopUpMobile.png",
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
    desktopPopupImage: ".images/SnapshootPopUpDesktop.png",
    mobilePopupImage: "./images/SnaptshotPopUpMobile.png",
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
    desktopPopupImage: ".images/SnapshootPopUpDesktop.png",
    mobilePopupImage: "./images/SnaptshotPopUpMobile.png",
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
    desktopPopupImage: ".images/SnapshootPopUpDesktop.png",
    mobilePopupImage: "./images/SnaptshotPopUpMobile.png",
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
    desktop.innerHTML = `
    <div class="desktop-popclass" id="desktop-popid">
    <div class="desktop-popimages">
     <span class="desktoppop-exit exit-button"
        ><img src="images/close.png" alt="Close Menu"
      /></span>
     <img
        class="desktop-popimg"
        src="${dynamicProjects[0].desktopPopupImage}"
        alt="Pop up Snapshot"
      />
    </div>
     
    <div class="desktop-popbutton">
      <h3 class="desktop-popheadline">
      ${dynamicProjects[0].shortDescription}
      </h3>
      <div class="dpopup-button">
          <p>
            See Live
            <span>
              <img src="./images/see-live-icon.svg" alt="See Live Icon"
            /></span>
          </p>     
          <p>
            See Source
            <span
              ><img src="./images/githubwhite.svg" alt="Github Icon"
            /></span>
          </p>
        </div>
      </div>
    <ul class="desktop-poplanguages">
    <li>${dynamicProjects[0].desktopTechnologiesPopup[0]}</li>
    <li>${dynamicProjects[0].desktopTechnologiesPopup[1]}</li>
    <li>${dynamicProjects[0].desktopTechnologiesPopup[2]}</li>
    <li>${dynamicProjects[0].desktopTechnologiesPopup[3]}</li>
    <li>${dynamicProjects[0].desktopTechnologiesPopup[4]}</li>
    </ul>
    <p class="desktop-popparagraph">
    ${dynamicProjects[0].longDescription}
    </p>
  </div>
    `;

    document.body.style.overflow = "hidden";
    desktop.style.display = "flex";
  } else {
    // window width is less than 1080px
    const mobile = document.querySelector(".mobile-popcontainer");
    document.body.style.overflow = "hidden";
    mobile.style.display = "flex";
    mobile.innerHTML = `
    <div class="mobile-popclass" id="mobile-popid">
    <div class="pop-imagesbtn">
      <span class="mobpop-exit exit-button"
        ><img src="./images/close.png" alt="Close Menu"
      /></span>
      <img
        class="mobile-popimg"
        src="${dynamicProjects[0].mobilePopupImage}"
        alt="Pop up Snapshot"
      />
    </div>
    <h3 class="mobile-popheadline">
      ${dynamicProjects[0].shortDescription}
    </h3>
    <ul class="mobile-poplanguages">
      <li>${dynamicProjects[0].mobileTechnologiesPopup[0]}</li>
      <li>${dynamicProjects[0].mobileTechnologiesPopup[1]}</li>
      <li>${dynamicProjects[0].mobileTechnologiesPopup[2]}</li>
    
    </ul>
      <p class="mobile-popparagraph"> 
      ${dynamicProjects[0].longDescription}
      </p>
    <div class="mobile-popbutton">
      <div class="mpopup-button">
        <p>See Live</p>
        <img src="./images/see-live-icon.svg" alt="See Live Icon" />
      </div>
      <div class="mpopup-button">
        <p>See Source</p>
        <img src="./images/githubwhite.svg" alt="Github Icon" />
      </div>
    </div>
  </div>
    `;
  }
}

function getButtons() {
  projectspopup = document.getElementsByClassName("open-modal");
  projectspopup = Array.from(projectspopup);
  projectspopup.forEach((e) => e.addEventListener("click", popUp));
}

const closeMobilePopup = document.querySelector(".desktop-popcontainer");
const closeDesktopPopup = document.querySelector(".mobile-popcontainer");

function closeButton() {
  closeMobilePopup.style.display = "none";
  closeDesktopPopup.style.display = "none";
  document.body.style.overflow = "hidden";
}

window.addEventListener("click", (e) => {
  if (
    e.target === closeDesktopPopup ||
    e.target === closeMobilePopup ||
    e.target.parentNode.classList.contains("exit-button")
  ) {
    closeButton();
  }
});

const form = document.querySelector(".contact-form");
const span = document.querySelector(".error-message");

function hasUpperCase(input) {
  return input.toLowerCase() !== input;
}
form.addEventListener("submit", (event) => {
  if (hasUpperCase(form.elements.email.value)) {
    event.preventDefault();
    span.style.display = "block";
    span.innerHTML = "The email field only accepts lowercase letters";
  }
});

window.onload = () => {
  myWorkSection();
  getButtons();
};
