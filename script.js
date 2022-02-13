//nav buttons scroll into view on click

let projectButton = document.querySelector('.projects__nav') ;
let projectButton2 = document.querySelector('.projects__nav2');
let contactButton = document.querySelector('.contact__nav') ;
let contactButton2 = document.querySelector('.contact__nav2')
let aboutButton = document.querySelector('.about__nav') ;
let skillsButton = document.querySelector('.skills__nav') ;
let resumeButton = document.querySelector('.resume__nav');
let homeButton = document.querySelector('.home__nav');

homeButton.addEventListener("click", function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center'

});
});

aboutButton.addEventListener("click", function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
    });
});

projectButton.addEventListener("click", function (e){
   e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center'

});
});

projectButton2.addEventListener("click", function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center'

});
});

skillsButton.addEventListener("click", function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'

});
});

contactButton.addEventListener("click", function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'});
});

contactButton2.addEventListener("click", function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'});
});

resumeButton.addEventListener("click", function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'

});
});

//nav slide in on hamburger click

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle nav

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

            //animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
             link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    //burger animation

    burger.classList.toggle('toggle');

});

//close nav when x is clicked

navLinks.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    nav.classList.remove("nav-active");
    burger.classList.remove('toggle');

    navLinks.forEach((link, index) => {
        if(link.style.animation) {
             link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
}


}

navSlide();

