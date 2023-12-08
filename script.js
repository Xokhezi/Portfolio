document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('changingText');
    const textArray = ["Web Developer", "Content Creator"];
    var currentIndex = 0;

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function changeText() {
      textElement.textContent = textArray[currentIndex];
      currentIndex = (currentIndex + 1) % textArray.length;
      setTimeout(function() {
        textElement.style.opacity = 1;
      }, 10);
    }

    function fadeOutText() {
      textElement.style.opacity = 0;
      setTimeout(changeText, 500); 
    }

    changeText();
    setInterval(fadeOutText, 4000);
  

  });