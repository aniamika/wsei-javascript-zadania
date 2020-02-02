// 14_DOM_Inputy_i_formularze_0

var form = document.querySelector('form');

form.addEventListener('submit', function (event) {

   var email = document.querySelector('#email');
   var error = document.querySelector('.error-message');

   if (!email.value.includes('@')) {
      error.innerText = "Email musi zawierać znak @";
      event.preventDefault();
   }
})

var name = document.querySelector('#name');

if (name.value.length < 6) {
   error.innerText = "Twoje imię jest za krótkie";
   event.preventDefault();
}

var surname = document.querySelector('#surname');

if (surname.value.length < 6) {
   error.innerText = "Twoje nazwisko jest za krótkie";
   event.preventDefault();
}

var pass1 = document.querySelector('#pass1');
var pass2 = document.querySelector('#pass2');

if (!(pass1.value && pass2.value === pass2.value)) {
   error.innerText = "Hasła nie są takie same lub są puste";
   event.preventDefault();
}

var agree = document.querySelector('#agree');

if (!agree.checked) {
   error.innerText = 'Musisz zaakceptować warunki';
   event.preventDefault();
}