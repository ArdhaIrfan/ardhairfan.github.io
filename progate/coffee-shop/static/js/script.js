let hidden = document.getElementById('hidden');
let hamburger = document.getElementById('menu-icon');

hamburger.addEventListener('click', () => {
    if (hidden.style.display == 'none') {
        hidden.style.display = 'flex';
    } else {
        hidden.style.display = 'none';
    }
})