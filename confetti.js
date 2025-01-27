// Confetti.js

const colors = ['#FF0D72', '#0DC2FF', '#0DFF72', '#F3FF0D', '#FF7E0D', '#FF0D57'];
const confettiCount = 100; // Number of confetti pieces
const confettiArray = [];

// Create a confetti piece
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.position = 'absolute';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.opacity = Math.random();
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '0px';
    confetti.style.transition = 'transform 1s linear, opacity 1s linear';
    document.body.appendChild(confetti);
    confettiArray.push(confetti);
}

// Animate the confetti
function animateConfetti() {
    confettiArray.forEach((confetti, index) => {
        const fallDistance = Math.random() * window.innerHeight + 100; // Random fall distance
        confetti.style.transform = `translateY(${fallDistance}px)`;
        confetti.style.opacity = 0; // Fade out
        setTimeout(() => {
            document.body.removeChild(confetti);
            confettiArray.splice(index, 1); // Remove from array
            createConfetti(); // Create a new confetti piece
        }, 1000); // Match this with the transition duration
    });
}

// Create initial confetti pieces
for (let i = 0; i < confettiCount; i++) {
    createConfetti();
}

// Start the animation
setInterval(animateConfetti, 1000); // Adjust the interval as needed