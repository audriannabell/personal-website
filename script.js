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

function scrollToTarget(e){

    e.preventDefault();
    
    var element = document.querySelector(this.getAttribute('href'));
    var headerOffset = 60;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}


homeButton.addEventListener("click", scrollToTarget)
homeButton2.addEventListener("click", scrollToTarget)

aboutButton.addEventListener("click", scrollToTarget)
aboutButton2.addEventListener("click", scrollToTarget)

projectButton.addEventListener("click", scrollToTarget)
projectButton2.addEventListener("click", scrollToTarget)
projectButton3.addEventListener("click", scrollToTarget)

skillsButton.addEventListener("click", scrollToTarget)
skillsButton2.addEventListener("click", scrollToTarget)

contactButton.addEventListener("click", scrollToTarget)
contactButton2.addEventListener("click", scrollToTarget)
contactButton3.addEventListener("click", scrollToTarget)

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



