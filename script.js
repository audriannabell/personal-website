//nav buttons scroll into view on click
let homeButton = document.querySelector('.home__nav');
let homeButton2 = document.querySelector('.home__nav2');

let aboutButton = document.querySelector('.about__nav');
let aboutButton2 = document.querySelector('.about__nav2');

let projectButton = document.querySelector('.projects__nav') ;
let projectButton2 = document.querySelector('.projects__nav2');
let projectButton3 = document.querySelector('.projects__nav3');

let contactButton = document.querySelector('.contact__nav') ;
let contactButton2 = document.querySelector('.contact__nav2')
let contactButton3 = document.querySelector('.contact__nav3')

let skillsButton = document.querySelector('.skills__nav');
let skillsButton2 = document.querySelector('.skills__nav2');

let resumeButton = document.querySelector('.resume__nav');
let resumeButton2 = document.querySelector('.resume__nav2');


function scrollStart(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center'

    });
};

function scrollCenter(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'

    });
};

homeButton.addEventListener("click", scrollStart)
homeButton2.addEventListener("click", scrollStart)

aboutButton.addEventListener("click", scrollCenter)
aboutButton2.addEventListener("click", scrollCenter)

projectButton.addEventListener("click", scrollStart)
projectButton2.addEventListener("click", scrollStart)
projectButton3.addEventListener("click", scrollStart)

skillsButton.addEventListener("click", scrollCenter)
skillsButton2.addEventListener("click", scrollCenter)

contactButton.addEventListener("click", scrollStart)
contactButton2.addEventListener("click", scrollStart)
contactButton3.addEventListener("click", scrollStart)

resumeButton.addEventListener("click", scrollCenter)
resumeButton2.addEventListener("click", scrollCenter)

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



