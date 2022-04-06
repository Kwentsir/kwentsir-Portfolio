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
  } else {
    navMenu.classList.add('displayMenu');
    humburger.style.display = 'none';
    closeNav.style.display = 'block';
    navMenu.style.display = 'block';
  }
}
humburger.addEventListener('click', menuToggler);
closeNav.addEventListener('click', menuToggler);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', menuToggler);
});


const dynamicProjects = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'html'],
    desktopTechnologiesPopup: [
      'Codekit',
      'Github',
      'JavaScript',
      'Terminal',
      'Codepen'
    ],
    mobileTechnologiesPopup: ['Ruby on rails', 'CSS', 'JavaScript'],
    shortDescription: 'Keeping track of hundreds of components',
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.\
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
    when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopPopupImage: '.images/SnapshootPopUpDesktop.svg',
    mobilePopupImage: './images/SnapshotPopUpMobile.svg',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'html'],
    desktopTechnologiesPopup: [
      'Codekit',
      'Github',
      'JavaScript',
      'Terminal',
      'Codepen'
    ],
    mobileTechnologiesPopup: ['Ruby on rails', 'CSS', 'JavaScript'],
    shortDescription: 'Keeping track of hundreds of components',
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.\
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
    when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopPopupImage: '.images/SnapshootPopUpDesktop.svg',
    mobiePopupImage: './images/SnapshotPopUpMobile.svg',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'html'],
    desktopTechnologiesPopup: [
      'Codekit',
      'Github',
      'JavaScript',
      'Terminal',
      'Codepen'
    ],
    mobileTechnologiesPopup: ['Ruby on rails', 'CSS', 'JavaScript'],
    shortDescription: 'Keeping track of hundreds of components',
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.\
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
    when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopPopupImage: '.images/SnapshootPopUpDesktop.svg',
    mobiePopupImage: './images/SnapshotPopUpMobile.svg',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'html'],
    desktopTechnologiesPopup: [
      'Codekit',
      'Github',
      'JavaScript',
      'Terminal',
      'Codepen'
    ],
    mobileTechnologiesPopup: ['Ruby on rails', 'CSS', 'JavaScript'],
    shortDescription: 'Keeping track of hundreds of components',
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.\
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
    when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopPopupImage: '.images/SnapshootPopUpDesktop.svg',
    mobiePopupImage: './images/SnapshotPopUpMobile.svg',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'html'],
    desktopTechnologiesPopup: [
      'Codekit',
      'Github',
      'JavaScript',
      'Terminal',
      'Codepen'
    ],
    mobileTechnologiesPopup: ['Ruby on rails', 'CSS', 'JavaScript'],
    shortDescription: 'Keeping track of hundreds of components',
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.\
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
    when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopPopupImage: '.images/SnapshootPopUpDesktop.svg',
    mobiePopupImage: './images/SnapshotPopUpMobile.svg',
  },
]

function getElement(className){
  return document.querySelector(className);
}

function technologyList(technologies){
  let langList = document.createElement('ul')
  langList.classList.add('recent-work__items-languages');
  for(var i = 0; i < technologies.length; i++){
    let langElement = document.createElement('li');
    langElement.classList.add('recent-work__items-languages > li')
    langElement.innerHTML = technologies[i];
  }
  return langList.innerHTML
}

function myWorkSection(){
  for (var i = 0; i < dynamicProjects.length; i++){
    var allProjects = dynamicProjects[i];
    const technologies = allProjects.technologies;
    var allProjectItems = [];
    for (var x = 0; x < technologies.length; x++){
      allProjectItems.push('<li class="lang">${technologies[x]}</li>')
    }
  }
  var workSection = document.createElement('mywork-section');
  workSection.innerHTML = '<article class="article-card">\
  <img src="./images/Imgplaholder.svg" alt="Image placeholder">\
  <h2 class="recent-work__items">${allProjects.name}</h2>\
  <ul class="recent-work__items-languages">${technologyList(technologies)}</ul>\
  <button type="button" class="see-projects">See Projects</button>\
  </article>';
  getElement('')
}