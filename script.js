const navMenu = document.querySelector('.mobile-list');
const navItems = document.querySelectorAll('.nav-items');
const closeNav = document.querySelector('.close-nav');
const humburger = document.querySelector('.union');
function menuToggler(){
    if(navMenu.classList.contains('displayMenu')){
        navMenu.classList.remove('displayMenu');
        humburger.style.display = 'block';
        closeNav.style.display = 'none';
        navMenu.style.display = 'none';
    }else {
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
})