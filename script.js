document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('changingText');
    const textArray = ["Web Developer", "Content Creator"];
    var currentIndex = 0;

    function changeText() {
      textElement.textContent = textArray[currentIndex];
      currentIndex = (currentIndex + 1) % textArray.length;
      setTimeout(function() {
        textElement.style.opacity = 1;
      }, 10); // Delay for a smoother transition
    }

    function fadeOutText() {
      textElement.style.opacity = 0;
      setTimeout(changeText, 500); // Adjust the duration based on your transition time
    }

    // Initial setup
    changeText();

    // Set interval to change text every, for example, 3 seconds
    setInterval(fadeOutText, 4000); // Adjust the interval based on your preference
  });