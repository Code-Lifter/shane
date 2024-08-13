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
