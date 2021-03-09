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
    // change footer nav styles
    const footerNav = document.getElementById('footerNav');
    footerNav.classList.add('bg-dark', 'border-dark');
    footerNav.classList.remove('bg-light', 'border-muted');
    const footerText = document.querySelector('small');
    footerText.parentNode.classList.add('text-light');
    footerText.parentNode.classList.remove('text-dark');
});



  
  
  