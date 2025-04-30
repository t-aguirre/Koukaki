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
        const targetId = link.getAttribute('href').substring(1); // Enlève le '#' du href

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
// Loading sections with a fade in animation adding is-visible class
document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll('section.banner, section.story, section.studio, section.nomination');
    let delay = 0;
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('is-visible');
        }, delay);
        delay += 500; // Increases the delay for the next section 
    })
});

// MAIN TITLES ANIMATION (h2)
const h2Elements = document.querySelectorAll('section h2');

h2Elements.forEach(h2 => {
    const span = document.createElement('span');
    span.textContent = h2.textContent; // Place the text inside a span for animations
    h2.textContent = ''; // Clear the text content of the h2 element to prepare for the animated span
    h2.appendChild(span);
    span.classList.add('slide-up-title');

    // Observe each h2 to trigger the animation on scroll
    function animateOnScroll() {
        if (isInViewport(h2) && !span.classList.contains('animate-background')) {
            span.classList.add('animate-background');
            const words = span.textContent.split(' ');
            span.textContent = ''; // Clear the span to add each word with effect
            words.forEach((word, index) => {
                const wordSpan = document.createElement('span');
                wordSpan.textContent = word + ' ';
                wordSpan.classList.add('fade-word');

                // Add padding-right to the first word
                if (index === 0) {
                    wordSpan.style.paddingRight = '10px';
                }

                span.appendChild(wordSpan);
                setTimeout(() => wordSpan.classList.add('animate-word'), index * 200); // 200ms delay
            });
        }
    }
    
    window.addEventListener('scroll', animateOnScroll); // Attach the animation to the scroll event
});

// Function to check if an element is visible in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.75;
}

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
  
  
  