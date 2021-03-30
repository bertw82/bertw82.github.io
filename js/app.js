/*** 
 * enable bootstrap popover on Bootstrap icon
 ***/ 

$(function () {
    $('[data-toggle="popover"]').popover()
  });
  
$('.popover-dismiss').popover({
    trigger: 'focus'
  });

// const toastDate = document.querySelector('.mr-auto');
// function getDate() {
//     const today = new Date();
//     const day = today.getDate();
//     const month = today.getMonth();
//     const year = today.getFullYear();
//     const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const monthName = monthsLong[month];
//     toastDate.textContent = `${monthName} ${day}, ${year}`;
// }
// getDate();

/*** 
 * Section title translate
 ***/ 

// select all boxes
const translate = document.querySelectorAll('.translate')
// listen for scroll event and call the checkBoxes function every time the user scrolls 
window.addEventListener('scroll', checkBoxes)
// call function on pageload so the first boxes are displayed
checkBoxes()


function checkBoxes() {
  // variable stores the point at which you want the element to move into the page. In this example at 80% from the top.
    const triggerBottom = window.innerHeight / 5 * 4

    translate.forEach(box => {
      // check the location of the box on the page
        const boxTop = box.getBoundingClientRect().top

        // show the box when its further down the page then the 80% from the top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

/*** 
 * Variables for Light and Dark Themes 
 ***/ 

const body = document.querySelector('body');
const nav = document.getElementById('nav');
const footerNav = document.getElementById('footerNav');
const footerText = document.querySelector('small');
const h2 = document.getElementsByTagName('h2');
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

/***
 * Dark Theme function
 * clicking 'Dark' button changes classes to a Dark Theme 
 ***/ 

const darkTheme = document.getElementById('darkTheme');
darkTheme.addEventListener('click', () => {
    // change body color
    body.classList.add('body-background');
    body.classList.remove('bg-white');
    // change nav styles
    nav.classList.add('navbar-dark', 'bg-dark', 'border-secondary');
    nav.classList.remove('navbar-light', 'bg-light', 'border-muted');
    // change footer nav styles
    footerNav.classList.add('bg-dark', 'border-secondary');
    footerNav.classList.remove('bg-light', 'border-muted');
    footerText.parentNode.classList.add('text-light');
    footerText.parentNode.classList.remove('text-dark');
    // change h2 text color
    for (let i = 0; i < h2.length; i++) {
        h2[i].classList.add('text-light');
        h2[i].classList.remove('text-muted');
    }
    // change lead paragraph styles
    leadParagraph.classList.add('text-light', 'bg-dark');
    leadParagraph.classList.remove('text-body', 'background-alt');
    const leadLink = document.querySelector('.text-primary');
    leadLink.classList.add('text-success');
    leadLink.classList.remove('text-primary');
    // change card styles
    for (let i = 0; i < card.length; i++) {
        card[i].classList.add('bg-dark', 'border-primary');
        card[i].classList.remove('bg-light', 'border-muted');
    }
    for (let i = 0; i < cardBody.length; i++) {
        cardBody[i].classList.add('border-primary');
        cardBody[i].classList.remove('border-muted');
    }
    for (let i= 0; i < cardTitle.length; i++) {
        cardTitle[i].classList.add('text-light');
    }
    for (let i= 0; i < cardText.length; i++) {
        cardText[i].classList.add('text-light');
    }
    // button styles
    for (let i = 0; i < btnProject.length; i++) {
        btnProject[i].classList.add('btn-danger');
        btnProject[i].classList.remove('btn-primary');
    }
    for (let i = 0; i < btnCode.length; i++) {
        btnCode[i].classList.add('btn-info');
        btnCode[i].classList.remove('btn-success');
    }
    // form styles
    form.classList.add('bg-secondary', 'border-primary');
    form.classList.remove('bg-light', 'border-info');
    for (let i = 0; i < label.length; i++) {
        label[i].classList.add('text-light');
        label[i].classList.remove('text-body');
    }
    formButton.classList.add('btn-primary');
    formButton.classList.remove('btn-info');
    // quote styles
    quote.classList.add('text-warning');
    quote.classList.remove('text-dark');
    quoteName.classList.add('text-warning');
    quoteName.classList.remove('text-muted');
    quoteBody.classList.add('bg-dark');
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
     nav.classList.remove('navbar-dark', 'bg-dark', 'border-secondary');
     nav.classList.add('navbar-light', 'bg-light', 'border-muted');
     // change footer nav styles
     footerNav.classList.remove('bg-dark', 'border-secondary');
     footerNav.classList.add('bg-light', 'border-muted');
     footerText.parentNode.classList.remove('text-light');
     footerText.parentNode.classList.add('text-dark');
     // change h2 text color
     for (let i = 0; i < h2.length; i++) {
         h2[i].classList.remove('text-light');
         h2[i].classList.add('text-muted');
     }
     // change lead paragraph styles
     leadParagraph.classList.remove('text-light', 'bg-dark');
     leadParagraph.classList.add('text-body', 'background-alt');
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
     quoteBody.classList.remove('bg-dark');
     quoteBody.classList.add('background-alt');
     // address buggy behavior with radio buttons 
     lightTheme.parentNode.classList.remove('text-body');
     lightTheme.parentNode.classList.add('text-light');
     darkTheme.parentNode.classList.remove('text-body');
});

  
  
  