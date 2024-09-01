const navLinks = document.querySelectorAll('.nav ul a');
const checkbox = document.getElementById('check');


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false;
    });
});
