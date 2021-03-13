// enable Bootstrap popover
$(function () {
    $('[data-toggle="popover"]').popover()
  });
  
$('.popover-dismiss').popover({
    trigger: 'focus'
  });

//   initialize toast
$('.toast').toast('show');

const toastDate = document.querySelector('.mr-auto');
function getDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthsLong[month];
    toastDate.textContent = `${monthName} ${day}, ${year}`;
}
getDate();

// form submission functionality
const button = document.getElementById('form-button');
button.addEventListener('click', (e) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const comments = document.getElementById('comments');
    e.preventDefault();
    if (name.value === '' && email.value === '') {
        alert('Please enter your name and email address');
        e.stopPropagation();
    } else if (name.value === '') {
        alert('Please enter your name');
        e.stopPropagation();
    } else if (email.value === '') {
        alert('Please enter your email address');
        e.stopPropagation();
    } else {
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
            });
        name.value = '';
        email.value = '';
        phone.value = '';
        comments.value = '';
    }
});

// dark theme JS
const darkThemeButton = document.getElementById('darkTheme');

darkThemeButton.addEventListener('click', () => {
    // change body color
    const body = document.querySelector('body');
    body.classList.add('body-background');
    body.classList.remove('bg-white');
    // change nav styles
    const nav = document.getElementById('nav');
    nav.classList.add('navbar-dark', 'bg-dark', 'border-secondary');
    nav.classList.remove('navbar-light', 'bg-light', 'border-muted');
    // change footer nav styles
    const footerNav = document.getElementById('footerNav');
    footerNav.classList.add('bg-dark', 'border-secondary');
    footerNav.classList.remove('bg-light', 'border-muted');
    const footerText = document.querySelector('small');
    footerText.parentNode.classList.add('text-light');
    footerText.parentNode.classList.remove('text-dark');
    // change h2 text color
    const h2 = document.getElementsByTagName('h2');
    for (let i = 0; i < h2.length; i++) {
        h2[i].classList.add('text-light');
        h2[i].classList.remove('text-muted');
    }
    // change lead paragraph styles
    const leadParagraph = document.querySelector('.p-about');
    leadParagraph.classList.add('text-light');
    leadParagraph.classList.remove('text-body');
    const leadLink = document.querySelector('.text-primary');
    leadLink.classList.add('text-success');
    leadLink.classList.remove('text-primary');
    // change card styles
    const card = document.querySelectorAll('.h-100');
    for (let i = 0; i < card.length; i++) {
        card[i].classList.add('bg-dark', 'border-primary');
        card[i].classList.remove('bg-light', 'border-muted');
    }
    const cardBody = document.querySelectorAll('.card-body');
    for (let i = 0; i < cardBody.length; i++) {
        cardBody[i].classList.add('border-primary');
        cardBody[i].classList.remove('border-muted');
    }
    const cardTitle = document.querySelectorAll('.card-title');
    for (let i= 0; i < cardTitle.length; i++) {
        cardTitle[i].classList.add('text-light');
        // cardTitle[i].classList.remove('text-body');
    }
    const cardText = document.querySelectorAll('.card-text');
    for (let i= 0; i < cardText.length; i++) {
        cardText[i].classList.add('text-light');
        // cardTitle[i].classList.remove('text-body');
    }
    // button styles
    const btnProject = document.querySelectorAll('.btn-project');
    for (let i = 0; i < btnProject.length; i++) {
        btnProject[i].classList.add('btn-danger');
        btnProject[i].classList.remove('btn-primary');
    }
    const btnCode = document.querySelectorAll('.btn-code');
    for (let i = 0; i < btnCode.length; i++) {
        btnCode[i].classList.add('btn-info');
        btnCode[i].classList.remove('btn-success');
    }
    // form styles
    const form = document.querySelector('form');
    form.classList.add('bg-secondary', 'border-primary');
    form.classList.remove('bg-light', 'border-info');
    const label = document.querySelectorAll('label');
    for (let i = 0; i < label.length; i++) {
        label[i].classList.add('text-light');
        label[i].classList.remove('text-body');
    }
    const formButton = document.getElementById('form-button');
    formButton.classList.add('btn-primary');
    formButton.classList.remove('btn-info');
    // quote styles
    const quote = document.querySelector('blockquote');
    quote.classList.add('text-warning');
    quote.classList.remove('text-dark');

    const quoteName = document.querySelector('.blockquote-footer');
    quoteName.classList.add('text-warning');
    quoteName.classList.remove('text-muted');
});

// light theme JS
const lightTheme = document.getElementById('lightTheme');

lightTheme.addEventListener('click', () => {
     // change body color
     const body = document.querySelector('body');
     body.classList.remove('body-background');
     body.classList.add('bg-white');
     // change nav styles
     const nav = document.getElementById('nav');
     nav.classList.remove('navbar-dark', 'bg-dark', 'border-secondary');
     nav.classList.add('navbar-light', 'bg-light', 'border-muted');
     // change footer nav styles
     const footerNav = document.getElementById('footerNav');
     footerNav.classList.remove('bg-dark', 'border-secondary');
     footerNav.classList.add('bg-light', 'border-muted');
     const footerText = document.querySelector('small');
     footerText.parentNode.classList.remove('text-light');
     footerText.parentNode.classList.add('text-dark');
     // change h2 text color
     const h2 = document.getElementsByTagName('h2');
     for (let i = 0; i < h2.length; i++) {
         h2[i].classList.remove('text-light');
         h2[i].classList.add('text-muted');
     }
     // change lead paragraph styles
     const leadParagraph = document.querySelector('.p-about');
     leadParagraph.classList.remove('text-light');
     leadParagraph.classList.add('text-body');
     const leadLink = document.querySelector('a[href="https://teamtreehouse.com"]');
     leadLink.classList.add('text-primary');
     leadLink.classList.remove('text-success');
     // change card styles
     const card = document.querySelectorAll('.h-100');
     for (let i = 0; i < card.length; i++) {
         card[i].classList.remove('bg-dark', 'border-primary');
         card[i].classList.add('bg-light', 'border-muted');
     }
     const cardBody = document.querySelectorAll('.card-body');
     for (let i = 0; i < cardBody.length; i++) {
         cardBody[i].classList.remove('border-primary');
         cardBody[i].classList.add('border-muted');
     }
     const cardTitle = document.querySelectorAll('.card-title');
     for (let i= 0; i < cardTitle.length; i++) {
         cardTitle[i].classList.remove('text-light');
        //  cardTitle[i].classList.add('text-body');
     }
     const cardText = document.querySelectorAll('.card-text');
     for (let i= 0; i < cardText.length; i++) {
         cardText[i].classList.remove('text-light');
         // cardTitle[i].classList.remove('text-body');
     }
     // button styles
     const btnProject = document.querySelectorAll('.btn-project');
     for (let i = 0; i < btnProject.length; i++) {
         btnProject[i].classList.remove('btn-danger');
         btnProject[i].classList.add('btn-primary');
     }
     const btnCode = document.querySelectorAll('.btn-code');
     for (let i = 0; i < btnCode.length; i++) {
         btnCode[i].classList.remove('btn-info');
         btnCode[i].classList.add('btn-success');
     }
     // form styles
     const form = document.querySelector('form');
     form.classList.remove('bg-secondary', 'border-primary');
     form.classList.add('bg-light', 'border-info');
     const label = document.querySelectorAll('label');
    for (let i = 0; i < label.length; i++) {
        label[i].classList.remove('text-light');
        label[i].classList.add('text-body');
    }
     const formButton = document.getElementById('form-button');
     formButton.classList.remove('btn-primary');
     formButton.classList.add('btn-info');
     // quote styles
     const quote = document.querySelector('blockquote');
     quote.classList.remove('text-warning');
     quote.classList.add('text-dark');
 
     const quoteName = document.querySelector('.blockquote-footer');
     quoteName.classList.remove('text-warning');
     quoteName.classList.add('text-muted');
});


  
  
  