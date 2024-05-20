// scripts/script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Dark Mode';
    toggleBtn.className = 'btn';
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
