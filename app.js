const input = document.querySelector('input');

input.addEventListener('invalid', () => {

    document.querySelector('.icon-error').style.visibility = "visible";
    document.querySelector('.error-msg').style.visibility = "visible";
    input.style.border = "1px solid rgb(249, 98, 98)";

});

const button = document.querySelector('button');

button.addEventListener('click', () => {

    document.querySelector('.icon-error').style.visibility = "hidden";
    document.querySelector('.error-msg').style.visibility = "hidden";
    input.style.border = "1px solid hsl(0, 36%, 70%)";

})