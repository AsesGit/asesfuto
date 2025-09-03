document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle for mobile
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const menu = document.querySelector('#navbar-sticky');
    if (toggleButton && menu) {
        toggleButton.addEventListener('click', function () {
            menu.classList.toggle('hidden');
            const isExpanded = menu.classList.contains('hidden') ? 'false' : 'true';
            toggleButton.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Navigation links
    const navLinks = document.querySelectorAll('#navbar-sticky a');

    // Handle click on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default to control scrolling
            const targetId = this.getAttribute('href').substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Update active class
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                // Close mobile menu if open
                if (!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                    toggleButton.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Handle scroll to update active link
    window.addEventListener('scroll', function () {
        const fromTop = window.scrollY + 100; // Offset for better UX
        let currentSection = null;

        // Find the section currently in view
        document.querySelectorAll('section[id]').forEach(section => {
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update active class
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});
