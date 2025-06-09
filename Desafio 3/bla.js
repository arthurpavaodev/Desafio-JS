 const toggle = document.getElementById('modeToggle');
const body = document.body;

toggle.addEventListener('change', function() {
body.classList.toggle('dark-mode', this.checked);
});