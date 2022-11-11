const navMenu = document.querySelector('.mobile-list');
const navItems = document.querySelectorAll('.nav-items');
const closeNav = document.querySelector('.close-nav');
const humburger = document.querySelector('.union');
function menuToggler() {
  if (navMenu.classList.contains('displayMenu')) {
    navMenu.classList.remove('displayMenu');
    humburger.style.display = 'block';
    closeNav.style.display = 'none';
    navMenu.style.display = 'none';
    document.body.style.overflow = 'auto';
  } else {
    navMenu.classList.add('displayMenu');
    humburger.style.display = 'none';
    closeNav.style.display = 'block';
    navMenu.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}
humburger.addEventListener('click', menuToggler);
closeNav.addEventListener('click', menuToggler);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', menuToggler);
});

const dynamicProjects = [
  {
    name: "Quick-Budget-App",
    technologies: ["Ruby on rails", "JavaScript", "HTML", "CSS", "PostgreSQL"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: [
      "Ruby on rails",
      "JavaScript",
      "HTML",
      "CSS",
      "PostgreSQL",
    ],
    shortDescription: "A mobile web application to manage your budget.",
    longDescription:
      "This application allows users to add or remove transactions, and see their balance. It was built with Ruby on Rails and PostgreSQL.",
    desktopPopupImage: "./images/quick_budget.PNG",
    mobilePopupImage: "./images/quickbudget.png",
    liveSource: "https://quick-budget-app.herokuapp.com/users/sign_in",
    seeSource: "https://github.com/Kwentsir/Quick-Budget-App",
  },
  {
    name: "FOOD RECIPE APP",
    technologies: ["Ruby on rails", "JavaScript", "PostgreSQL", "HTML", "CSS"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: [
      "Ruby on rails",
      "JavaScript",
      "PostgreSQL",
      "HTML",
      "CSS",
    ],
    shortDescription: "Keeping track of hundreds of recipes.",
    longDescription:
      "Your entire recipe collection, inventories, and ingredients are all tracked by the Food Recipe App. You can create recipes, record ingredients, keep track of what you have, build shopping lists based on what you have and what a recipe calls for, and save ingredients.",
    desktopPopupImage: ".images/SnapshootPopUpDesktop.png",
    mobilePopupImage: "./images/SnaptshotPopUpMobile.png",
    liveSource: "",
    seeSource: "",
  },
  {
    name: "Ghana Tech Conference Website",
    technologies: ["HTML", "JavaScript", "CSS"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: ["HTML", "JavaScript", "CSS"],
    shortDescription:
      "This project is a website designed for an upcoming Ghana Tech Conference",
    longDescription:
      "It is with great pleasure that we invite you to attend the 4th Annual Ghana Tech Summit. Ghana Tech Summit brings together hundreds of entrepreneurs, investors, digital marketers and creatives under one roof together to address humanity’s greatest challenges via technology and entrepreneurship.",
    desktopPopupImage: ".images/SnapshootPopUpDesktop.png",
    mobilePopupImage: "./images/SnaptshotPopUpMobile.png",
    liveSource: "",
    seeSource: "",
  },
  {
    name: "Homeless Box Office",
    technologies: ["HTML", "JavaScript", "CSS"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: ["HTML", "JavaScript", "CSS"],
    shortDescription:
      "Homeless Box Office (HBO) is a website which you can see TV series and movies, their ratings, likes and reviews.",
    longDescription:
      "Homeless Box Office (HBO) is a website which you can see TV series and movies, their ratings, likes and reviews. Also you can make reservation and see the reservations",
    desktopPopupImage: ".images/SnapshootPopUpDesktop.png",
    mobilePopupImage: "./images/SnaptshotPopUpMobile.png",
    liveSource: "",
    seeSource: "",
  },
  {
    name: "Math Magicians",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: ["React", "JavaScript", "HTML", "CSS"],
    shortDescription: "Made for Math Lovers",
    longDescription:
      "This is a simple basic calculator with memory functions similar to a small handheld calculator. Use this basic calculator online for math with addition, subtraction, division and multiplication.",
    desktopPopupImage: ".images/SnapshootPopUpDesktop.png",
    mobilePopupImage: "./images/SnaptshotPopUpMobile.png",
    liveSource: "",
    seeSource: "",
  },
  {
    name: "Covid-19 Tracker",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    desktopTechnologiesPopup: [
      "Codekit",
      "Github",
      "JavaScript",
      "Terminal",
      "Codepen",
    ],
    mobileTechnologiesPopup: ["React", "JavaScript", "HTML", "CSS"],
    shortDescription:
      "This is a web app that display metric data from an API for covid-19 cases in different countries.",
    longDescription:
      "This is a web app that display metric data from an API for covid-19 cases in different countries. Built with JavaScript, HTML, CSS, REACT, REDUX, and API.",
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
  const langList = document.createElement('ul');
  langList.classList.add('recent-work__items-languages');
  for (let i = 0; i < technologies.length; i += 1) {
    const langElement = document.createElement('li');
    langElement.classList.add('lang');
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
    const workSection = document.createElement('template');
    workSection.innerHTML = `<article class="article-card"> 
    <img src="./images/Imgplaholder.svg" alt="Image placeholder"> <h2 class="recent-work__items">
    ${allProjects.name}
    </h2> <ul class="recent-work__items-languages">${technologyList(
    technologies,
  )}</ul> <button type="button" class="see-projects open-modal" id="see-project">See Projects</button> </article>`;
    getElement('.recent-work').appendChild(workSection.content.firstChild);
  }
}

let projectsPopup = [];

function popUp() {
  const mq = window.matchMedia('(min-width: 67.5rem)');
  for (let i = 0; i < dynamicProjects.length; i += 1) {
  if (mq.matches) {
    // window width is at  1080 px or more
    const desktopVersion = document.querySelector('.desktop-popcontainer');
    desktopVersion.innerHTML = `
    <div class="desktop-popclass" id="desktop-popid">
    <div class="desktop-popimages">
     <span class="desktoppop-exit exit-button"
        ><img src="images/close.png" alt="Close Menu"
      /></span>
     <img
        class="desktop-popimg"
        src="${dynamicProjects.desktopPopupImage}"
        alt="Pop up Snapshot"
      />
    </div>
     
    <div class="desktop-popbutton">
      <h3 class="desktop-popheadline">
      ${dynamicProjects.shortDescription}
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
    ${dynamicProjects.longDescription}
    </p>
  </div>
    `;

    document.body.style.overflow = 'hidden';
    desktop.style.display = 'flex';
  } else {
    // window width is less than 1080px
    const mobile = document.querySelector('.mobile-popcontainer');
    document.body.style.overflow = 'hidden';
    mobile.style.display = 'flex';
    mobile.innerHTML = `
    <div class="mobile-popclass" id="mobile-popid">
    <div class="pop-imagesbtn">
      <span class="mobpop-exit exit-button"
        ><img src="./images/close.png" alt="Close Menu"
      /></span>
      <img
        class="mobile-popimg"
        src="${dynamicProjects.mobilePopupImage}"
        alt="Pop up Snapshot"
      />
    </div>
    <h3 class="mobile-popheadline">
      ${dynamicProjects.shortDescription}
    </h3>
    <ul class="mobile-poplanguages">
      <li>${dynamicProjects[0].mobileTechnologiesPopup[0]}</li>
      <li>${dynamicProjects[0].mobileTechnologiesPopup[1]}</li>
      <li>${dynamicProjects[0].mobileTechnologiesPopup[2]}</li>
    
    </ul>
      <p class="mobile-popparagraph"> 
      ${dynamicProjects.longDescription}
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
}

function getButtons() {
  projectsPopup = document.getElementsByClassName('open-modal');
  projectsPopup = Array.from(projectsPopup);
  projectsPopup.forEach((e) => e.addEventListener('click', popUp));
}

const closeMobilePopup = document.querySelector('.desktop-popcontainer');
const closeDesktopPopup = document.querySelector('.mobile-popcontainer');

function closeButton() {
  closeMobilePopup.style.display = 'none';
  closeDesktopPopup.style.display = 'none';
  document.body.style.overflow = 'hidden';
}

window.addEventListener('click', (e) => {
  if (
    e.target === closeDesktopPopup
    || e.target === closeMobilePopup
    || e.target.parentNode.classList.contains('exit-button')
  ) {
    closeButton();
  }
});

const form = document.querySelector('.contact-form');
const span = document.querySelector('.error-message');

function hasUpperCase(input) {
  return input.toLowerCase() !== input;
}
form.addEventListener('submit', (event) => {
  if (hasUpperCase(form.elements.email.value)) {
    event.preventDefault();
    span.style.display = 'block';
    span.innerHTML = 'The email field only accepts lowercase letters';
  }
});

window.onload = () => {
  myWorkSection();
  getButtons();
};
