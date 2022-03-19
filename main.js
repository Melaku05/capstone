/* eslint linebreak-style: ["error", "windows"] */

const navBar = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navToggle = document.querySelector('.nav__toggler');
const toggleFirstdBar = document.querySelector('.first-bar');
const toggleSecondBar = document.querySelector('.second-bar');
const toggleThirdBar = document.querySelector('.third-bar');
const navItems = document.querySelectorAll('.nav__item');
const featuredSection = document.querySelector('.featured-section');

function opneMenu() {
  navItems.forEach((elem) => {
    elem.classList.toggle('mobile-menu__item');
    elem.classList.remove('active-item');
  });
  toggleSecondBar.classList.toggle('hidden');
  toggleFirstdBar.classList.toggle('transform');
  toggleThirdBar.classList.toggle('transform');
  document.body.classList.toggle('no-scroll');
  navBar.classList.toggle('nav');
  navBar.classList.toggle('mobile-menu__nav');
  navList.classList.toggle('mobile-menu');
}

['click', 'keypress'].forEach((event) => {
  navToggle.addEventListener(event, opneMenu);
});

const projectObjects = [
  {
    name: 'Leilani Montoya',
    speakerInfo: [
      'Leilani Montoya is a PHD, MBA, M.A, B.Sc. holder and CEO at REMOTE EXPERTS',
    ],
    image: ['./images/generated_photos_5f896fca5bec830008385831.jpg'],
    description: [
      'With nearly 4 years of experience working with job seekers and employers,',
    ],
  },
  {
    name: 'Melaku Shiferaw',
    speakerInfo: [
      'Melaku Shiferaw Bachelor Degree in Software Engineering, Student at Microverse.',
    ],
    image: ['./images/mela.png'],
    description: [
      'With nearly 3 years of experience developing and desgining software for different  company.',
    ],
  },
  {
    name: 'Lia Crane',
    speakerInfo: [
      'Lia creane is the Career Development Manager for the career coaching program',
    ],
    image: ['./images/generated_photos_5e680e326d3b380006d6a253.jpg'],
    description: [
      'nearly 5 years of experience working with job seekers and employers,',
    ],
  },
  {
    name: 'Alfred Donaldson',
    speakerInfo: [
      'Alfred Donaldson is a PHD, MBA, M.A, B.Sc. holder and CEO at REMOTE EXPERTS',
    ],
    image: ['./images/generated_photos_5e6810cb6d3b380006d73d63.jpg'],
    description: [
      'nearly 3 years of experience working with job seekers and employers,',
    ],
  },
  {
    name: 'Javion Hobbs',
    speakerInfo: [
      'Javion Hobbs is the Career Development Manager at REMOTE EXPERTS',
    ],
    image: ['./images/generated_photos_5e68588e6d3b380006e72197.jpg'],
    description: [
      'nearly 2 years of experience working with job seekers and employers,',
    ],
  },
  {
    name: 'Kelvin Calderon',
    speakerInfo: [
      'Kelvin Calderon is the Career Development Manager at REMOTE EXPERTS',
    ],
    image: ['./images/generated_photos_5f1804011f67b0000678ae42.jpg'],
    description: [
      'nearly 7 years of experience working with job seekers and employers,',
    ],
  },
];

function createFeaturedSection() {
  const featuredSectionHeader = document.createElement('div');
  const featuredSectionBoy = document.createElement('div');
  featuredSectionHeader.setAttribute(
    'class',
    'featured-section__header featured-element'
  );
  featuredSectionBoy.setAttribute(
    'class',
    'featured-section__body featured-element'
  );
  featuredSection.appendChild(featuredSectionHeader);
  featuredSection.appendChild(featuredSectionBoy);

  featuredSectionHeader.innerHTML = `<div class="featured-section__header">
    <h2 class="featured-section__title">Featured Speakers</h2>
    <div class="red-line"></div>
    </div>`;
  for (let i = 0; i < projectObjects.length; i += 1) {
    featuredSectionBoy.innerHTML += `<article class="speaker-container">
          <div class="speaker-container__img">
            <img
              src="${projectObjects[i].image[0]}"
              alt="image of our spreaker his name ${projectObjects[i].name}"
            />
          </div>
          <div class="speaker">
            <h3>${projectObjects[i].name}</h3>
            <p class="speaker__info">
              <em>${projectObjects[i].speakerInfo[0]}</em>
            </p>
            <div class="gray-line"></div>
            <p class="speaker__description">${projectObjects[i].description[0]}</p>
          </div>
        </article>`;
  }
  featuredSection.appendChild(featuredSectionHeader);
  featuredSection.appendChild(featuredSectionBoy);
}

createFeaturedSection();
