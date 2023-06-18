// nav stick
let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add('header-scrolled');
    } else {
        nav.classList.remove('header-scrolled');
    }
};
// nav hide on refresh or new page loading
let navBar = document.querySelectorAll('nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (e) {
    e.addEventListner('click', function () {
        navCollapse.classList.remove('show');
    })
});
// nav close by clicking outside of navbar elements
document.body.addEventListener('click', function (event) {  // Add an event listener for the click event on the document body
    let isNavbarClicked = event.target.closest('.navbar');  // Check if the clicked element is within the navbar
    if (!isNavbarClicked) {                                 // If the clicked element is not within the navbar, close the collapse
        let navbarToggler = document.querySelector('.navbar-toggler');
        let navbarContent = document.querySelector('.navbar-collapse');
      
        if (navbarContent.classList.contains('show')) {
            navbarToggler.click();
        }
    }
});
