// script.js
const fireContainer = document.getElementById('fireContainer');
const burnCount = 40;

// Function to generate a random number within a range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Create and append burn elements
for (let i = 1; i <= burnCount; i++) {
    const burn = document.createElement('div');
    burn.classList.add('burn', 'heat');

    // Randomize height and margin-left
    const height = getRandom(10, 50); // Random height between 10px and 50px
    const marginLeft = getRandom(-250, 250); // Random margin between -250px and 250px

    // Apply random styles
    burn.style.height = `${height}px`;
    burn.style.marginLeft = `${marginLeft}px`;

    // Randomize animation duration and delay
    const animationDuration = getRandom(1000, 3000); // Random duration between 1s and 3s
    const animationDelay = getRandom(-3000, 0); // Random delay between -3s and 0s

    // Apply animation
    burn.style.animation = `burning ${animationDuration}ms ${animationDelay}ms infinite linear`;

    // Append burn element to the fire container
    fireContainer.appendChild(burn);
}