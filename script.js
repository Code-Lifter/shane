// gap for the nav bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 50, // Adjust the value as needed
        behavior: 'smooth'
      });
    });
  });

  // Close sidebar when a nav link is clicked
  document.querySelectorAll('.links-container a').forEach(function(link) {
    link.addEventListener('click', function() {
      document.getElementById('sidebar-active').checked = false;
    });
  });

// slideshow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// accordion

document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
      header.addEventListener('click', function () {
          const content = this.nextElementSibling;
          const icon = this.querySelector('.accordion-icon');

          // Toggle the active class
          this.classList.toggle('active');

          // Toggle the max-height for the accordion content
          if (content.style.maxHeight) {
              content.style.maxHeight = null;
              icon.textContent = '+';
          } else {
              content.style.maxHeight = content.scrollHeight + 'px';
              icon.textContent = '×';

              // Scroll to ensure the entire accordion content is centered in the viewport
              setTimeout(() => {
                  const elementTop = this.getBoundingClientRect().top + window.scrollY;
                  const elementHeight = this.offsetHeight + content.scrollHeight;
                  const viewportHeight = window.innerHeight;
                  const scrollPosition = elementTop - (viewportHeight / 2) + (elementHeight / 2);

                  window.scrollTo({
                      top: scrollPosition,
                      behavior: 'smooth'
                  });
              }, 50); // Delay to allow content expansion
          }
      });
  });
});



