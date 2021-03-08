// enable Bootstrap popover
$(function () {
    $('[data-toggle="popover"]').popover()
  });

// form submission
const button = document.getElementById('form-button');
button.addEventListener('click', () => {
    const name = document.getElementById('exampleFormControlInput1');
    const email = document.getElementById('exampleFormControlInput2');

    if (name.value === '' && email.value === '') {
        return alert('Please enter your name and email address');
    } else if (name.value === '') {
        return alert('Please enter your name');
    } else if (email.value === '') {
        return alert('Please enter your email address');
    } else {
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
            });
    }
});



  
  
  