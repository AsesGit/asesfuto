document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const menu = document.querySelector('#navbar-sticky');
    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('hidden');
        const isExpanded = menu.classList.contains('hidden') ? 'false' : 'true';
        toggleButton.setAttribute('aria-expanded', isExpanded);
    });
});