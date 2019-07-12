import isEven from './is-even.js';

// Set up references to our page
const inputX = document.getElementById('x');
const button = document.getElementById('button');
button.onclick = buttonClicked;
const evenImage = document.getElementById('even');
const oddImage = document.getElementById('odd');

function buttonClicked() {
    console.log('button clicked');
    if(inputX.value === "") {
        evenImage.classList.add('hidden');
        oddImage.classList.add('hidden');
    } else if(isEven(inputX.value)) {
        evenImage.classList.remove('hidden');
        oddImage.classList.add('hidden');
    } else {
        evenImage.classList.add('hidden');
        oddImage.classList.remove('hidden');
    }
}