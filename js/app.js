/*** 
 * enable bootstrap popover on Bootstrap icon
 ***/ 

$(function () {
    $('[data-toggle="popover"]').popover()
  });
  
$('.popover-dismiss').popover({
    trigger: 'focus'
  });

/*** 
 * Section title translateX functionality
 ***/ 

const h2title = document.querySelectorAll('.translate');
window.addEventListener('scroll', translateTitle);
translateTitle();

function translateFunc(element) {
    const triggerBottom = window.innerHeight / 5 * 4;
    const sectionTop = element.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            element.classList.add('show');
            setTimeout(function(){
                element.classList.add('skew');
            }, 300);
        }
        // } else {
        //     element.classList.remove('show','skew');
        // }
}

function translateTitle() {
    h2title.forEach(section => translateFunc(section));
}
  
/**
 * Fade in/out for h3 from https://stackoverflow.com/questions/62979056/fade-in-and-out-when-scroll-up-and-down
 */

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
};

function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fadeOut');
            entry.target.classList.add('fadeIn');
        } else {
            entry.target.classList.replace('fadeIn', 'fadeOut');
        }
});
}

const fadeElms = document.querySelectorAll('.fadeTitle');
const observer = new IntersectionObserver(observerCallback, observerOptions);
fadeElms.forEach(el => observer.observe(el));

/*** 
 * Variables for Light and Dark Themes 
 ***/ 

const body = document.querySelector('body');
const nav = document.getElementById('nav');
const jsBackground = document.querySelector('.js-background');
const headshotText = document.querySelector('.container-title');
const footerNav = document.getElementById('footerNav');
const footerText = document.querySelector('small');
const h2 = document.getElementsByTagName('h2');
const h3 = document.querySelectorAll('h3');
const leadParagraph = document.querySelector('.p-about');
const card = document.querySelectorAll('.h-100');
const cardBody = document.querySelectorAll('.card-body');
const cardTitle = document.querySelectorAll('.card-title');
const cardText = document.querySelectorAll('.card-text');
const btnProject = document.querySelectorAll('.btn-project');
const btnCode = document.querySelectorAll('.btn-code');
const form = document.querySelector('form');
const label = document.querySelectorAll('label');
const formButton = document.getElementById('form-button');
const quote = document.querySelector('blockquote');
const quoteName = document.querySelector('.blockquote-footer');
const quoteBody = document.querySelector('.js-quote');
const portfolioFewd = document.querySelector('#portfolioFewd');
const portfolioJs = document.querySelector('#portfolioJs');

/***
 * Dark Theme function
 * clicking 'Dark' button changes classes to a Dark Theme 
 ***/ 

const darkTheme = document.getElementById('darkTheme');
darkTheme.addEventListener('click', () => {
    // change body color
    body.classList.remove('bg-white');
    body.classList.add('body-background');
    // change nav styles
    nav.classList.remove('navbar-light', 'bg-light', 'border-muted');
    nav.classList.add('navbar-dark', 'nav-dark', 'border-secondary');
    // change jumbotron styles
    jsBackground.classList.remove('darker-bg');
    jsBackground.classList.add('bg-dark');
    headshotText.classList.remove('text-body');
    headshotText.classList.add('text-white');
    // change footer nav styles
    footerNav.classList.remove('bg-light', 'border-muted');
    footerNav.classList.add('nav-dark', 'border-secondary');
    footerText.parentNode.classList.remove('text-dark');
    footerText.parentNode.classList.add('text-light');
    // change h2 text color
    for (let i = 0; i < h2.length; i++) {
        h2[i].classList.remove('text-muted');
        h2[i].classList.add('text-light');
    }
    // change h3 text color
    for (let i = 0; i < h3.length; i++) {
        h3[i].classList.remove('text-black-50');
        h3[i].classList.add('text-light');
    }
    // change lead paragraph styles
    leadParagraph.classList.remove('text-body', 'background-alt');
    leadParagraph.classList.add('text-light', 'bg-dark', 'border-secondary');
    const leadLink = document.querySelector('.text-primary');
    leadLink.classList.remove('text-primary');
    leadLink.classList.add('text-success');
    // change card styles
    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove('bg-light', 'border-muted');
        card[i].classList.add('bg-dark', 'border-primary');
    }
    for (let i = 0; i < cardBody.length; i++) {
        cardBody[i].classList.remove('border-muted');
        cardBody[i].classList.add('border-primary');
    }
    for (let i= 0; i < cardTitle.length; i++) {
        cardTitle[i].classList.add('text-light');
    }
    for (let i= 0; i < cardText.length; i++) {
        cardText[i].classList.add('text-light');
    }
    // button styles
    for (let i = 0; i < btnProject.length; i++) {
        btnProject[i].classList.remove('btn-primary');
        btnProject[i].classList.add('btn-danger');
    }
    for (let i = 0; i < btnCode.length; i++) {
        btnCode[i].classList.remove('btn-success');
        btnCode[i].classList.add('btn-info');
    }
    // form styles
    form.classList.remove('bg-light', 'border-info');
    form.classList.add('bg-secondary', 'border-primary');
    for (let i = 0; i < label.length; i++) {
        label[i].classList.remove('text-body');
        label[i].classList.add('text-light');
    }
    formButton.classList.remove('btn-info');
    formButton.classList.add('btn-primary');
    // quote styles
    quote.classList.remove('text-dark');
    quote.classList.add('text-warning');
    quoteName.classList.remove('text-muted');
    quoteName.classList.add('text-warning');
    quoteBody.classList.add('bg-dark', 'border-secondary');
    // change before/after border
    if (window.screen.width >= 768){
        portfolioFewd.classList.remove('line-1');
        portfolioFewd.classList.add('line-3');
        portfolioJs.classList.remove('line-2');
        portfolioJs.classList.add('line-4');
    }
});

/*** 
 * Light Theme function
 * clicking the 'Light' button changes the classes back
 ***/

const lightTheme = document.getElementById('lightTheme');
lightTheme.addEventListener('click', () => {
    // change body color
    body.classList.remove('body-background');
    body.classList.add('bg-white');
    // change nav styles
    nav.classList.remove('navbar-dark', 'nav-dark', 'border-secondary');
    nav.classList.add('navbar-light', 'bg-light', 'border-muted');
    // change jumbotron styles
    jsBackground.classList.remove('bg-dark');
    jsBackground.classList.add('darker-bg');
    headshotText.classList.add('text-body');
    headshotText.classList.remove('text-white');
    // change footer nav styles
    footerNav.classList.remove('nav-dark', 'border-secondary');
    footerNav.classList.add('bg-light', 'border-muted');
    footerText.parentNode.classList.remove('text-light');
    footerText.parentNode.classList.add('text-dark');
    // change h2 text color
    for (let i = 0; i < h2.length; i++) {
        h2[i].classList.remove('text-light');
        h2[i].classList.add('text-muted');
    }
    // change h3 text color
    for (let i = 0; i < h3.length; i++) {
        h3[i].classList.remove('text-light');
        h3[i].classList.add('text-black-50');
    }
    // change lead paragraph styles
    leadParagraph.classList.remove('text-light', 'bg-dark', 'border-secondary');
    leadParagraph.classList.add('text-body', 'background-alt', 'border-muted');
    const leadLink = document.querySelector('a[href="https://teamtreehouse.com"]');
    leadLink.classList.add('text-primary');
    leadLink.classList.remove('text-success');
    // change card styles
    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove('bg-dark', 'border-primary');
        card[i].classList.add('bg-light', 'border-muted');
    }
    for (let i = 0; i < cardBody.length; i++) {
        cardBody[i].classList.remove('border-primary');
        cardBody[i].classList.add('border-muted');
    }
    for (let i= 0; i < cardTitle.length; i++) {
        cardTitle[i].classList.remove('text-light');
    }
    for (let i= 0; i < cardText.length; i++) {
        cardText[i].classList.remove('text-light');
    }
    // button styles
    for (let i = 0; i < btnProject.length; i++) {
        btnProject[i].classList.remove('btn-danger');
        btnProject[i].classList.add('btn-primary');
    }
    for (let i = 0; i < btnCode.length; i++) {
        btnCode[i].classList.remove('btn-info');
        btnCode[i].classList.add('btn-success');
    }
    // form styles
    form.classList.remove('bg-secondary', 'border-primary');
    form.classList.add('bg-light', 'border-info');
    for (let i = 0; i < label.length; i++) {
        label[i].classList.remove('text-light');
        label[i].classList.add('text-body');
    }
    formButton.classList.remove('btn-primary');
    formButton.classList.add('btn-info');
    // quote styles
    quote.classList.remove('text-warning');
    quote.classList.add('text-dark');
    quoteName.classList.remove('text-warning');
    quoteName.classList.add('text-muted');
    quoteBody.classList.remove('bg-dark', 'border-secondary');
    quoteBody.classList.add('background-alt', 'border-muted');
    // address buggy behavior with radio buttons 
    lightTheme.parentNode.classList.remove('text-body');
    lightTheme.parentNode.classList.add('text-light');
    darkTheme.parentNode.classList.remove('text-body');
    // change before/after border
    if (window.screen.width >= 768){
        portfolioFewd.classList.remove('line-3');
        portfolioFewd.classList.add('line-1');
        portfolioJs.classList.remove('line-4');
        portfolioJs.classList.add('line-2');
    }
});

  
  
  