// enable Bootstrap popover
$(function () {
    $('[data-toggle="popover"]').popover()
  });

// form submission
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
    body.style.backgroundColor = "#0d1117";
    body.classList.remove('bg-white');
    // change nav styles
    const nav = document.getElementById('nav');
    nav.classList.add('navbar-dark', 'bg-dark', 'border-secondary');
    nav.classList.remove('navbar-light', 'bg-light', 'border-muted');
    // change jumbotron styles
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.classList.add('bg-success');
    jumbotron.classList.remove('bg-info');
    // change footer nav styles
    const footerNav = document.getElementById('footerNav');
    footerNav.classList.add('bg-dark', 'border-dark');
    footerNav.classList.remove('bg-light', 'border-muted');
    const footerText = document.querySelector('small');
    footerText.parentNode.classList.add('text-light');
    footerText.parentNode.classList.remove('text-dark');
    // change h2 text color
    const h2 = document.getElementsByTagName('h2');
    for (let i = 0; i < h2.length; i++) {
        h2[i].classList.add('text-light');
        h2[i].classList.remove('text-muted');
    };
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
});



  
  
  