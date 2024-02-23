const submit = document.getElementById('submit'),
display = document.querySelector('.eye'),
pw = document.getElementById('passwd'),
pwc = document.getElementById('confirm');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (pw.value !== pwc.value) {
        display.innerHTML = '*Passwords do not match;';
        display.style.color = 'red';
        pw.style.borderColor = 'red';
        pwc.style.borderColor = 'red';
    }

})