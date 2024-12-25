let digits = new URLSearchParams(window.location.search).get("digits");
if (digits === null) {
    digits = 4;
}
let count = 0;
const maxCount = 10 ** digits - 1;
const counterDisplay = document.getElementsByClassName('counter-display')[0];
const digitContainers = [];
const audio = document.getElementById("audio");

// Empty the counter display
counterDisplay.innerHTML = '';

// Create the counter display
for (let i = 0; i < digits; i++) {
    const container = document.createElement('div');
    container.className = 'counter-digit';
    container.id = `digit-${i}`;
    digitContainers.push(container);

    const column = document.createElement('div');
    column.className = 'counter-digit-column';
    for (let j = 0; j < 10; j++) {
        const digit = document.createElement('div');
        digit.textContent = j;
        column.appendChild(digit);
    }

    container.appendChild(column);
    counterDisplay.appendChild(container);
}

function increment() {
    if (++count > maxCount) {
        count = 0;
    }
    
    let remaining = count;
    for (let i = digits - 1; i >= 0; i--) {
        const digit = remaining % 10;
        const column = digitContainers[i].firstElementChild;
        column.style.transition = 'transform 0.15s ease-in-out';
        column.style.transform = `translateY(${-6 * digit}rem)`;
        remaining = Math.floor(remaining / 10);
    }

    // Allow overlapping audio
    const clone = audio.cloneNode();
    clone.play();
}