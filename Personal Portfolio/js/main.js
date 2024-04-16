document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-bar-custom li a');
    const contentSections = document.querySelectorAll('.content-section');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.querySelector('.nav-bar-custom');
    const submitButton = document.getElementById('submit');
    const usersName = document.getElementById('usersName');

    // Hide all sections
    function hideAllSections() {
        contentSections.forEach(section => section.style.display = 'none');
    }

    // Hambuger menu section
    function deactivateAllNavLinks() {
        navLinks.forEach(link => link.classList.remove('nav-active'));
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            deactivateAllNavLinks();
            this.classList.add('nav-active');
            const sectionId = this.getAttribute('href').substring(1);
            hideAllSections();
            document.getElementById(sectionId).style.display = 'block';
            navList.classList.remove('is-active');
            hamburgerMenu.classList.remove('is-active');
        });
    });

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('is-active');
        hamburgerMenu.classList.toggle('is-active');
    });

    hideAllSections();
    contentSections[0].style.display = 'block';
    navLinks[0].classList.add('nav-active');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        let thanksMessage = document.createElement('p');
        thanksMessage.textContent = `Thank you, ${usersName.value}! Your message has been sent.`;
        const contactSection = document.querySelector('.contact-section');
        contactSection.innerHTML = '';
        contactSection.appendChild(thanksMessage);
    });

    // Dark Mode Toggle
    const darkModeButton = document.getElementById("toggle-checkbox");
    darkModeButton.addEventListener('click', () => {
        const themeLink = document.querySelector('link[href="css/theme.css"]');
        if (themeLink) {
            themeLink.remove();
        } else {
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'css/theme.css';
            document.head.appendChild(link);
        }
    });

    // Download CV Button Bounce
    const btn = document.querySelector('.download-btn');

    function startAnimation() {
        btn.classList.remove('bouncing');
        setTimeout(() => {
            btn.classList.add('bouncing');
        }, 50);
    }

    startAnimation();
    setInterval(startAnimation, 10000);
});
