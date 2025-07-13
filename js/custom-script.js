// MAIN NAVIGATION - MEMU BURGER
// Function to toggle the burger menu
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('.main-navigation');
    const menu = document.querySelector('.menu');
    
    // Checks if the menu is open or closed
    if (nav.classList.contains('toggled')) {
        menu.style.display = 'none';
        this.setAttribute('aria-expanded', 'false'); // Updates the aria attribute
        this.classList.remove('active');
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        this.setAttribute('aria-expanded', 'true'); // Updates the aria attribute
        this.classList.add('active'); // Adds the active class to the burger button
    }
});

// Closes the menu when a link in the <ul> is clicked
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default behavior

        const menu = document.querySelector('.menu');
        const menuToggle = document.querySelector('.menu-toggle');

        // Hiding the menu
        menu.style.display = 'none';
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        document.querySelector('.main-navigation').classList.remove('toggled');

        // Gets the anchor of the link
        const targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href

        //  Targets the specific section
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
           // Calculates the scroll position with an offset for the header
            const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;
            const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

             // Scrolls to the section with smooth behavior
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    });
});

//LAYOUT:
// Loading banner and story section with a fade in animation adding is-visible class
document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll('section.banner, .story');
    let delay = 0;
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('is-visible');
        }, delay);
        delay += 500; // Increases the delay for the next section 
    })

});

// Adds the "floating" class to the logo to trigger the floating animation. 
// Ensures the 'float' animation is added after 'logoMoveUp' finishes, avoiding a transform conflict

window.addEventListener('load', () => {
  const logo = document.querySelector('.banner__logo');
  logo.classList.add('floating');
});



 // PARALLAX EFFECT OF THE LOGO IN THE BANNER :
document.addEventListener('scroll', () => {
    // Get the logo wrapper and the banner elements
    const parallaxWrapper = document.querySelector('.banner__logo-parallax');
    const banner = document.querySelector('.banner__container');
    const bannerHeight = banner.offsetHeight;

    // Function to update the parallax effect based on scroll position
    function updateParallax() {
        const scrollY = window.scrollY;
        // Calculate scroll progress relative to the banner height (from 0 to 1)
        const scrollProgress = Math.min(scrollY / bannerHeight, 1);
        // Compute the vertical translation based on scroll progress
        const translateY = scrollProgress * 300; // Increase 300 for faster motion
        // Apply transform to move the logo wrapper smoothly
        parallaxWrapper.style.transform = `translateX(-50%) translateY(${translateY}px)`;
        // Continue updating on the next animation frame
        requestAnimationFrame(updateParallax);
    }

    // Start the parallax update loop
    requestAnimationFrame(updateParallax);
});

//SECTIONS ANIMATIONS ON SCROLL
document.addEventListener("DOMContentLoaded", function(){
    // Applying active class on scroll to animate sections and articles with a fade-in and directional transitions effect
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('active');
            return;
            }
            else {
                entry.target.classList.remove('active');
                return;
            }
        });
    });
    const section = document.querySelectorAll('.entry');
    section.forEach((element) => observer.observe(element));

});

// MAIN TITLES ANIMATION (h2)
document.addEventListener("DOMContentLoaded", function () {
    const h2Elements = document.querySelectorAll('section h2');

    // Wrap every word inside the h2 with a span
    h2Elements.forEach(h2 => {
        const words = h2.textContent.split(' ');
        h2.textContent = ''; // Empty the original content
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.classList.add('fade-word');
            span.style.transitionDelay = `${index * 200}ms`;
            h2.appendChild(span);
        });
    });

    // IntersectionObserver configuration
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active'); // Enables retriggering of the animation
            }
        });
    }, {
        threshold: 0.5 // Trigger when element is more than 50% visible
    });

    h2Elements.forEach(h2 => observer.observe(h2));
});






//LOCATION ("Lieu") SECTION
// Parallax effect with two elements moving horizontally as the user scrolls the page
document.addEventListener("DOMContentLoaded", function() {
    const bigcloud = document.querySelector(".big-cloud");
    const littlecloud = document.querySelector(".little-cloud");
  
    if (bigcloud && littlecloud) {
      document.addEventListener("scroll", function() {
        // Get the current scroll position
        let scrollPosition = window.scrollY;
  
        // Calculate the cloud offset based on the scroll position
        // The movement speed is proportional to the scroll (0.3)
        let cloudOffset = scrollPosition * 0.3; // Movement based on scroll
  
        // Apply the transformation to move the clouds
        bigcloud.style.transform = `translateX(-${cloudOffset}px)`;
        littlecloud.style.transform = `translateX(-${cloudOffset * 1.1}px)`; // Variation for depth effect
      });
    }
  });
  
  
  