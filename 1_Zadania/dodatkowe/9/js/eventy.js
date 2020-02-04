// Zadanie 9

let firstLink = document.querySelector('article:first-of-type a');
let secondLink = document.querySelector('article:last-of-type a');

firstLink.addEventListener('click', function() {
    this.nextElementSibling.style.display = 'block';
});

secondLink.addEventListener('mouseover', function() {
    this.nextElementSibling.style.display = 'block';
});