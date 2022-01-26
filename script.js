//footer nav buttons

let projectButton = document.querySelector('.projects__nav') 
let contactButton = document.querySelector('.contact__nav') 
let resumeButton = document.querySelector('.resume__nav') 

projectButton.addEventListener("click", function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center'

});
});

contactButton.addEventListener("click", function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
});
});

resumeButton.addEventListener("click", function (e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center'
});
});


