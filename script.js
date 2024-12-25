const DISPLAY_DIGITS = 4;
const MAXIMUM_COUNTER = 10 ** DISPLAY_DIGITS - 1;

const audio = document.getElementById("audio");
let counter = 0;
let digitArray = String(counter).padStart(DISPLAY_DIGITS, '0').split('');

const counterDisplay = document.getElementsByClassName('counter-display')[0];
counterDisplay.innerHTML = '';
digitArray.forEach((_, index) => {
    const container = document.createElement('div');
    container.className = 'counter-digit';
    container.id = `digit-${index}`;

    const column = document.createElement('div');
    column.className = 'counter-digit-column';
    for (let i = 0; i < 10; i++) {
        const digit = document.createElement('div');
        digit.textContent = i;
        column.appendChild(digit);
    }

    container.appendChild(column);
    counterDisplay.appendChild(container);
});

function increment() {
    if (++counter > MAXIMUM_COUNTER) {
        counter = 0;
    }
    digitArray = String(counter).padStart(DISPLAY_DIGITS, '0').split('');
    digitArray.forEach((value, index) => {
        const container = document.getElementById(`digit-${index}`);
        const column = container.firstElementChild;
        column.style.transition = 'transform 0.15s ease-in-out';
        column.style.transform = `translateY(${-6 * value}rem)`;
    });
    const clone = audio.cloneNode();
    clone.play();
}