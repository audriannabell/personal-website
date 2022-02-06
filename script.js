//nav buttons

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

//section in viewport is underlined

