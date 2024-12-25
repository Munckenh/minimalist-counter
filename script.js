let digits = new URLSearchParams(window.location.search).get("digits");
if (digits === null) {
    digits = 4;
}
let count = 0;
const maxCount = 10 ** digits - 1;
const counterDisplay = document.getElementsByClassName('counter-display')[0];
const audio = document.getElementById("audio");
let digitArray = String(count).padStart(digits, '0').split('');

// Empty the counter display
counterDisplay.innerHTML = '';

// Create the counter display
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
    if (++count > maxCount) {
        count = 0;
    }
    digitArray = String(count).padStart(digits, '0').split('');
    digitArray.forEach((value, index) => {
        const container = document.getElementById(`digit-${index}`);
        const column = container.firstElementChild;
        column.style.transition = 'transform 0.15s ease-in-out';
        column.style.transform = `translateY(${-6 * value}rem)`;
    });

    // Allow overlapping audio
    const clone = audio.cloneNode();
    clone.play();
}