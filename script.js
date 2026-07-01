// ===== ROTATING STATUS =====
const statusMessages = [
    "⚡ Building autonomous agents and sipping coffee.",
    "🚀 Shipping code, one commit at a time.",
    "🧠 Thinking about AI and automation.",
    "🌱 Learning something new every day.",
    "☕ Fueled by coffee and curiosity.",
    "🔍 Exploring the next frontier of AI."
];

const statusElement = document.getElementById('statusText');
let index = 0;

function rotateStatus() {
    // Fade out
    statusElement.style.opacity = 0;
    setTimeout(() => {
        // Change text
        index = (index + 1) % statusMessages.length;
        statusElement.textContent = statusMessages[index];
        // Fade in
        statusElement.style.opacity = 1;
    }, 400);
}

// Start rotating every 5 seconds
setInterval(rotateStatus, 5000);

// Set initial opacity to 1
statusElement.style.opacity = 1;