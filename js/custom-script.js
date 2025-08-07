// MAIN NAVIGATION - MEMU BURGER
// On burger menu button click
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('.main-navigation');
    const menu = document.querySelector('.menu');
    
    // Check if the menu is already open (the 'toggled' class is managed by the parent theme)
    if (nav.classList.contains('toggled')) {
        // If open, hide the menu
        menu.style.display = 'none';
        this.setAttribute('aria-expanded', 'false'); // Update aria attribute for accessibility
        this.classList.remove('active'); // Remove 'active' class from the button
        document.body.style.overflow = ''; // Restore body scroll
    } else {
        // If closed, show the menu
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column'; // Display links vertically
        this.setAttribute('aria-expanded', 'true'); // Update aria attribute for accessibility
        this.classList.add('active'); // Add 'active' class to the button
        document.body.style.overflow = 'hidden'; // Disable body scroll when menu is open
    }
});

// When clicking on a link inside the menu
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const menu = document.querySelector('.menu');
        const menuToggle = document.querySelector('.menu-toggle');

        // Hide the menu
        menu.style.display = 'none';
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        document.querySelector('.main-navigation').classList.remove('toggled'); // 'toggled' class managed by parent theme
        document.body.style.overflow = ''; // Restore body scroll

        // Get the target section ID from the href attribute (without the '#')
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Calculate scroll position with header offset
            const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;
            const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

            // Smooth scroll to the target section
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    });
});


//LAYOUT:
// Loading banner section with a fade in animation adding is-visible class
document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector('section.banner');
    if (section) {
        setTimeout(() => {
            section.classList.add('is-visible');
        }, 500);
    }
});

// Adds the "floating" class to the logo to trigger the floating animation. 
// Ensures the 'float' animation is added after 'logoMoveUp' finishes, avoiding a transform conflict
window.addEventListener('load', () => {
  const logo = document.querySelector('.banner__logo');
  logo.classList.add('floating');
});



// PARALLAX EFFECT OF THE LOGO IN THE BANNER :
// Select elements once
const parallaxWrapper = document.querySelector('.banner__logo-parallax');
const banner = document.querySelector('.banner__container');
const bannerHeight = banner.offsetHeight;

// Flag variable to track if a requestAnimationFrame is already scheduled
let ticking = false; // flag accessible globally


// Function to update the parallax effect based on current scroll position
function updateParallax() {
    // Get the current vertical scroll position of the window
    const scrollY = window.scrollY;
    // Calculate how far the user has scrolled relative to banner height, capped at 1
    const scrollProgress = Math.min(scrollY / bannerHeight, 1);
    // Calculate the vertical translation based on scroll progress and max offset
    const translateY = scrollProgress * 270;
    // Apply CSS transform to move the parallax wrapper element vertically and center it horizontally
    parallaxWrapper.style.transform = `translateX(-50%) translateY(${translateY}px)`;
    // Reset the ticking flag to allow scheduling new animation frames on next scroll
    ticking = false; // reset flag
}
// Listen to the scroll event on the document
document.addEventListener('scroll', () => {
    // If there is no animation frame already scheduled
    if (!ticking) {
        // Request the browser to run updateParallax on the next animation frame
        requestAnimationFrame(updateParallax);
        // Set the ticking flag to true to prevent multiple scheduled frames
        ticking = true;
    }
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
  
  
  