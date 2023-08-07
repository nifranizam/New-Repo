// JavaScript for Dynamic Content
const showMoreButton = document.getElementById('showMoreButton');
const additionalInfo = document.getElementById('additionalInfo');

showMoreButton.addEventListener('click', () => {
  if (additionalInfo.style.display === 'none') {
    additionalInfo.style.display = 'block';
    showMoreButton.textContent = 'Show Less';
  } else {
    additionalInfo.style.display = 'none';
    showMoreButton.textContent = 'Show More';
  }
});

// JavaScript for Image Slider
const photoSlider = document.querySelector('.photo-slider');
const images = photoSlider.querySelectorAll('img');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].style.transform = 'translateX(-100%)';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.transform = 'translateX(0)';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// JavaScript for Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
    } else {
        // Code to submit the form goes here
        alert('Message sent successfully!');
        contactForm.reset();
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// JavaScript for Smooth Scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});


// JavaScript for Fade-in Effect
const achievementsListItems = document.querySelectorAll('#achievements li');

window.addEventListener('scroll', () => {
    achievementsListItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowBottom = window.innerHeight;
        if (itemTop < windowBottom) {
            item.classList.add('fade-in');
        } else {
            item.classList.remove('fade-in');
        }
    });
});
