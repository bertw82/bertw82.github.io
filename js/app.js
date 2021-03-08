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



  
  
  