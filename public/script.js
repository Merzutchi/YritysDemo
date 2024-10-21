const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menuContainer = document.querySelector('.menu-container');


menuBtn.addEventListener('click', () => {
    menuContainer.style.display = 'block'; 
    menuBtn.style.display = 'none'; 
    closeBtn.style.display = 'block'; 
});


closeBtn.addEventListener('click', () => {
    menuContainer.style.display = 'none'; 
    menuBtn.style.display = 'block'; 
    closeBtn.style.display = 'none'; 
});

const flipTrack = document.querySelector('.herotitle-fliptrack');
const flipWords = document.querySelectorAll('.herotitle-flipword');

let currentWordIndex = 0;
const totalWords = flipWords.length;

function flipText() {
    currentWordIndex = (currentWordIndex + 1) % totalWords;
    flipTrack.style.transform = `translateY(-${currentWordIndex * 100}%)`;
}

setInterval(flipText, 2000);

const aboutSection = document.querySelector('.about-section');

gsap.registerPlugin(ScrollTrigger);

gsap.from('.about-text p', {
    scrollTrigger: {
        trigger: aboutSection,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
});

gsap.from('.about-personnel-card', {
    scrollTrigger: {
        trigger: aboutSection,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
});

// script.js
async function fetchStaffData() {
    const response = await fetch('/api/staff');
    const staff = await response.json();
    displayStaff(staff);
}

function displayStaff(staff) {
    const personnelContainer = document.querySelector('.about-personnel-container');
    personnelContainer.innerHTML = ''; 

    staff.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('about-personnel-card');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="about-personnel-image">
            <h4>${member.name}</h4>
            <p>${member.position}</p>
        `;
        personnelContainer.appendChild(card);
    });
}

fetchStaffData();