const navMenu = document.querySelector('.mobile-list');
const navItems = document.querySelectorAll('.nav-items');
const closeNav = document.querySelector('.close-nav');
const humburger = document.querySelector('.union');
function menuToggler() {
  navMenu.classList.toggle('displayMenu');
  if (navMenu.classList.contains('displayMenu')) {
    humburger.style.display = 'none';
    closeNav.style.display = 'block';
    navMenu.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    humburger.style.display = 'block';
    closeNav.style.display = 'none';
    navMenu.style.display = 'none';
    document.body.style.overflow = 'auto';
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
    mobilePopupImage: "./images/quick_budget.PNG",
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
    desktopPopupImage: "./images/SnapshootPopUpDesktop.png",
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
    desktopPopupImage: "./images/SnapshootPopUpDesktop.png",
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
    desktopPopupImage: "./images/SnapshootPopUpDesktop.png",
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
    desktopPopupImage: "./images/SnapshootPopUpDesktop.png",
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
    desktopPopupImage: "./images/SnapshootPopUpDesktop.png",
    mobilePopupImage: "./images/SnaptshotPopUpMobile.png",
    liveSource: "",
    seeSource: "",
  },
];

function getElement(className) {
  return document.querySelector(className);
}

// function technologyList(technologies) {
//   const langList = document.createElement('ul');
//   langList.classList.add('recent-work__items-languages');
//   for (let i = 0; i < technologies.length; i += 1) {
//     const langElement = document.createElement('li');
//     langElement.classList.add('lang');
//     langList.appendChild(langElement);
//     langElement.innerHTML = technologies[i];
//   }
//   return langList.innerHTML;
// }

function technologyList(technologies) {
  let listHtml = '';
  for (let i = 0; i < technologies.length; i += 1) {
    listHtml += `<li class="lang">${technologies[i]}</li>`;
  }
  return listHtml;
}

// let allProjects = [];
// function myWorkSection() {
//   for (let i = 0; i < dynamicProjects.length; i++) {
//     allProjects = dynamicProjects[i];
//     const { technologies } = allProjects;
//     const workSection = document.createElement('template');
//     workSection.innerHTML = `<article class="article-card"> 
//     <img src="./images/Imgplaholder.svg" alt="Image placeholder"> <h2 class="recent-work__items">
//     ${allProjects.name}
//     </h2> <ul class="recent-work__items-languages">${technologyList(
//     technologies,
//   )}</ul> <button type="button" class="see-projects open-modal" id="see-project">See Projects</button> </article>`;
//     getElement('.recent-work').appendChild(workSection.content.firstChild);
//   }
// }

function myWorkSection() {
  const recentWorkContainer = getElement('.recent-work');
  if (!recentWorkContainer) {
    console.error("Error: '.recent-work' container not found.");
    return;
  }

// let projectsPopup = [];

// function popUp() {
//   const mq = window.matchMedia('(min-width: 67.5rem)');
//   for (let i = 0; i < dynamicProjects.length; i += 1) {
//   if (mq.matches) {
//     // window width is at  1080 px or more
//     const desktopVersion = document.querySelector('.desktop-popcontainer');
//     desktopVersion.innerHTML = `
//     <div class="desktop-popclass" id="desktop-popid">
//     <div class="desktop-popimages">
//      <span class="desktoppop-exit exit-button"
//         ><img src="images/close.png" alt="Close Menu"
//       /></span>
//      <img
//         class="desktop-popimg"
//         src="${dynamicProjects.desktopPopupImage}"
//         alt="Pop up Snapshot"
//       />
//     </div>
     
//     <div class="desktop-popbutton">
//       <h3 class="desktop-popheadline">
//       ${dynamicProjects.shortDescription}
//       </h3>
//       <div class="dpopup-button">
//           <p>
//             See Live
//             <span>
//               <img src="./images/see-live-icon.svg" alt="See Live Icon"
//             /></span>
//           </p>     
//           <p>
//             See Source
//             <span
//               ><img src="./images/githubwhite.svg" alt="Github Icon"
//             /></span>
//           </p>
//         </div>
//       </div>
//     <ul class="desktop-poplanguages">
//     <li>${dynamicProjects[0].desktopTechnologiesPopup[0]}</li>
//     <li>${dynamicProjects[0].desktopTechnologiesPopup[1]}</li>
//     <li>${dynamicProjects[0].desktopTechnologiesPopup[2]}</li>
//     <li>${dynamicProjects[0].desktopTechnologiesPopup[3]}</li>
//     <li>${dynamicProjects[0].desktopTechnologiesPopup[4]}</li>
//     </ul>
//     <p class="desktop-popparagraph">
//     ${dynamicProjects.longDescription}
//     </p>
//   </div>
//     `;

//     document.body.style.overflow = 'hidden';
//     desktop.style.display = 'flex';
//   } else {
//     // window width is less than 1080px
//     const mobile = document.querySelector('.mobile-popcontainer');
//     document.body.style.overflow = 'hidden';
//     mobile.style.display = 'flex';
//     mobile.innerHTML = `
//     <div class="mobile-popclass" id="mobile-popid">
//     <div class="pop-imagesbtn">
//       <span class="mobpop-exit exit-button"
//         ><img src="./images/close.png" alt="Close Menu"
//       /></span>
//       <img
//         class="mobile-popimg"
//         src="${dynamicProjects.mobilePopupImage}"
//         alt="Pop up Snapshot"
//       />
//     </div>
//     <h3 class="mobile-popheadline">
//       ${dynamicProjects.shortDescription}
//     </h3>
//     <ul class="mobile-poplanguages">
//       <li>${dynamicProjects[0].mobileTechnologiesPopup[0]}</li>
//       <li>${dynamicProjects[0].mobileTechnologiesPopup[1]}</li>
//       <li>${dynamicProjects[0].mobileTechnologiesPopup[2]}</li>
    
//     </ul>
//       <p class="mobile-popparagraph"> 
//       ${dynamicProjects.longDescription}
//       </p>
//     <div class="mobile-popbutton">
//       <div class="mpopup-button">
//         <p>See Live</p>
//         <img src="./images/see-live-icon.svg" alt="See Live Icon" />
//       </div>
//       <div class="mpopup-button">
//         <p>See Source</p>
//         <img src="./images/githubwhite.svg" alt="Github Icon" />
//       </div>
//     </div>
//   </div>
//     `;
//   }
// }
// }

// function getButtons() {
//   projectsPopup = document.getElementsByClassName('open-modal');
//   projectsPopup = Array.from(projectsPopup);
//   projectsPopup.forEach((e) => e.addEventListener('click', popUp));
// }

// const closeMobilePopup = document.querySelector('.desktop-popcontainer');
// const closeDesktopPopup = document.querySelector('.mobile-popcontainer');

// function closeButton() {
//   closeMobilePopup.style.display = 'none';
//   closeDesktopPopup.style.display = 'none';
//   document.body.style.overflow = 'hidden';
// }

// window.addEventListener('click', (e) => {
//   if (
//     e.target === closeDesktopPopup
//     || e.target === closeMobilePopup
//     || e.target.parentNode.classList.contains('exit-button')
//   ) {
//     closeButton();
//   }
// });

// const form = document.querySelector('.contact-form');
// const span = document.querySelector('.error-message');

// function hasUpperCase(input) {
//   return input.toLowerCase() !== input;
// }
// form.addEventListener('submit', (event) => {
//   if (hasUpperCase(form.elements.email.value)) {
//     event.preventDefault();
//     span.style.display = 'block';
//     span.innerHTML = 'The email field only accepts lowercase letters';
//   }
// });

// window.onload = () => {
//   myWorkSection();
//   getButtons();
// };

 dynamicProjects.forEach((project, index) => {
    const workSection = document.createElement('article');
    workSection.classList.add('article-card');
    workSection.innerHTML = `
      <img src="./images/Imgplaholder.svg" alt="Image placeholder">
      <h2 class="recent-work__items">
        ${project.name}
      </h2>
      <ul class="recent-work__items-languages">${technologyList(project.technologies)}</ul>
      <button type="button" class="see-projects open-modal" data-project-index="${index}">See Projects</button>
    `;
    recentWorkContainer.appendChild(workSection);
  });
}

// 4. Populate and Show Popup
// Moved outside for global access by event listeners
const desktopPopContainer = document.querySelector('.desktop-popcontainer');
const mobilePopContainer = document.querySelector('.mobile-popcontainer');

function popUp(projectIndex) {
  const project = dynamicProjects[projectIndex]; // Get the specific project data

  if (!project) {
    console.error("Project data not found for index:", projectIndex);
    return;
  }

  const mq = window.matchMedia('(min-width: 67.5rem)'); // 1080px

  document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open

  if (mq.matches) {
    // Desktop Version
    desktopPopContainer.innerHTML = `
      <div class="desktop-popclass" id="desktop-popid">
        <div class="desktop-popimages">
          <span class="desktoppop-exit exit-button"
            ><img src="./images/close.png" alt="Close Menu"
          /></span>
          <img
            class="desktop-popimg"
            src="${project.desktopPopupImage}"
            alt="Pop up Snapshot"
          />
        </div>
        <div class="desktop-popbutton">
          <h3 class="desktop-popheadline">
            ${project.name} </h3>
          <div class="dpopup-button">
            <a href="${project.liveSource}" target="_blank" rel="noopener noreferrer">
              <p>
                See Live
                <span>
                  <img src="./images/see-live-icon.svg" alt="See Live Icon"
                /></span>
              </p>
            </a>
            <a href="${project.seeSource}" target="_blank" rel="noopener noreferrer">
              <p>
                See Source
                <span
                  ><img src="./images/githubwhite.svg" alt="Github Icon"
                /></span>
              </p>
            </a>
          </div>
        </div>
        <ul class="desktop-poplanguages">
          ${technologyList(project.desktopTechnologiesPopup)}
        </ul>
        <p class="desktop-popparagraph">
          ${project.longDescription}
        </p>
      </div>
    `;
    desktopPopContainer.style.display = 'flex'; // Show desktop popup
    mobilePopContainer.style.display = 'none'; // Ensure mobile popup is hidden
  } else {
    // Mobile Version
    mobilePopContainer.innerHTML = `
      <div class="mobile-popclass" id="mobile-popid">
        <div class="pop-imagesbtn">
          <span class="mobpop-exit exit-button"
            ><img src="./images/close.png" alt="Close Menu"
          /></span>
          <img
            class="mobile-popimg"
            src="${project.mobilePopupImage}"
            alt="Pop up Snapshot"
          />
        </div>
        <h3 class="mobile-popheadline">
          ${project.name} </h3>
        <ul class="mobile-poplanguages">
          ${technologyList(project.mobileTechnologiesPopup)}
        </ul>
        <p class="mobile-popparagraph">
          ${project.longDescription}
        </p>
        <div class="mobile-popbutton">
          <a href="${project.liveSource}" target="_blank" rel="noopener noreferrer">
            <div class="mpopup-button">
              <p>See Live</p>
              <img src="./images/see-live-icon.svg" alt="See Live Icon" />
            </div>
          </a>
          <a href="${project.seeSource}" target="_blank" rel="noopener noreferrer">
            <div class="mpopup-button">
              <p>See Source</p>
              <img src="./images/githubwhite.svg" alt="Github Icon" />
            </div>
          </a>
        </div>
      </div>
    `;
    mobilePopContainer.style.display = 'flex'; // Show mobile popup
    desktopPopContainer.style.display = 'none'; // Ensure desktop popup is hidden
  }
}

// 5. Attach Event Listeners to "See Projects" Buttons
function getButtons() {
  const projectsPopupButtons = document.querySelectorAll('.open-modal'); // Select all "See Projects" buttons
  projectsPopupButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const projectIndex = event.target.dataset.projectIndex; // Get the index from data attribute
      popUp(projectIndex); // Call popUp with the correct project index
    });
  });
}

// 6. Close Popup Function
function closeButton() {
  desktopPopContainer.style.display = 'none';
  mobilePopContainer.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling when popup is closed
}

// 7. Global Click Listener for Closing Popups
window.addEventListener('click', (e) => {
  // Check if the click target is the popup container itself (background click)
  if (e.target === desktopPopContainer || e.target === mobilePopContainer) {
    closeButton();
  }
  // Check if the click target or its parent has the 'exit-button' class
  // This handles clicks on the close image or the span wrapper
  if (e.target.classList.contains('exit-button') || e.target.parentNode.classList.contains('exit-button')) {
    closeButton();
  }
});


// 8. Form Validation
const form = document.querySelector('.contact-form');
const span = document.querySelector('.error-message');

function hasUpperCase(input) {
  return input.toLowerCase() !== input;
}

if (form) { // Check if form exists to prevent errors if not present
  form.addEventListener('submit', (event) => {
    if (hasUpperCase(form.elements.email.value)) {
      event.preventDefault();
      span.style.display = 'block';
      span.innerHTML = 'The email field only accepts lowercase letters';
    } else {
      // Clear error message if validation passes after a previous error
      span.style.display = 'none';
      span.innerHTML = '';
    }
  });
}


// 9. Initial Load
window.onload = () => {
  myWorkSection(); // Render all project cards
  getButtons();   // Attach event listeners to newly created buttons
};
