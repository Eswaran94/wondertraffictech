
// Smooth scroll to the interactive section on arrow click
document.querySelector('.arrow-down').addEventListener('click', () => {
    document.querySelector('.interactive-section').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('resize', () => {
    document.body.style.backgroundSize = "cover"; // Ensure the background remains responsive
});