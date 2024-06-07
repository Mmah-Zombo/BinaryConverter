const close = document.getElementById('close');
const mobile_nav = document.getElementById('mobile-nav');
const hamburger = document.getElementById('hamburger');

close.addEventListener('click', () => {
    mobile_nav.classList.add('hidden');
});

hamburger.addEventListener('click', () => {
    mobile_nav.classList.remove('hidden');
});