/*------------------FAQ--------------*/
document.addEventListener('DOMContentLoaded', function () {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    const answer = question.nextElementSibling;
    answer.classList.add('hidden'); 

    question.addEventListener('click', () => {
      const isActive = answer.classList.toggle('hidden'); 
      question.parentNode.classList.toggle('active', !isActive); 
    });
  });
});

/*-------------------SPONSORS-----------*/
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 2000);
});

/*------------------CHAT SUPPORT------------*/
const movingImage = document.getElementById('moving-image');
const journeySection = document.querySelector('.journey-section');

const journeySectionBottom =
  journeySection.offsetTop + journeySection.offsetHeight;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > journeySectionBottom) {
    const distanceScrolled = scrollPosition - journeySectionBottom;

    movingImage.style.transform = `translateY(${distanceScrolled * 0.5}px)`; 
    movingImage.style.opacity = 1;
  } else {
    movingImage.style.opacity = 0; 
  }
});

