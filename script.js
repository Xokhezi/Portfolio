document.addEventListener('DOMContentLoaded', function() {
  const the_animation = document.querySelectorAll(['.fadein','.slidein',".popup"])
  const textElement = document.getElementById('changingText');
  const textArray = ["Web Developer", "Content Creator"];
  var currentIndex = 0;

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('scroll-animation')
          }
              else {
                  entry.target.classList.remove('scroll-animation')
              }
          
      })
  },
     { threshold: 0.3
     });
    for (let i = 0; i < the_animation.length; i++) {
     const elements = the_animation[i];
  
      observer.observe(elements);
    } 

    
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