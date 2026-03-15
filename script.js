  // Countdown Timer


         // Loading Screen Animation
         document.addEventListener('DOMContentLoaded', function() {
            const loadingScreen = document.querySelector('.loading-screen');
            const loadingProgress = document.querySelector('.loading-progress');
            let progress = 0;
            
            const interval = setInterval(() => {
              progress += 5;
              loadingProgress.style.width = `${progress}%`;
              
              if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                  loadingScreen.style.opacity = '0';
                  setTimeout(() => {
                    loadingScreen.style.display = 'none';
                  }, 900);
                }, 900);
              }
            }, 100);
            
        
        
        
            $(document).ready(function(){
                $('.sponsors').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    arrows: false,
                    dots: false,
                    pauseOnHover: false,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4
                        }
                    }, {
                        breakpoint: 520,
                        settings: {
                            slidesToShow: 3
                        }
                    }]
                });
            });
        
        
        
        
           
            
            // Initialize countdown
            startCountdown();
          });
          function startCountdown() {
            const daysElement = document.getElementById('days');
            const hoursElement = document.getElementById('hours');
            const minutesElement = document.getElementById('minutes');
            const secondsElement = document.getElementById('seconds');
        
            // Set the target date to April 5, 2025, 11:59 PM
            const targetDate = new Date("April 5, 2025 23:59:59").getTime();
        
            function updateCountdown() {
                const currentTime = new Date().getTime();
                const difference = targetDate - currentTime;
        
                if (difference < 0) {
                    daysElement.textContent = "00";
                    hoursElement.textContent = "00";
                    minutesElement.textContent = "00";
                    secondsElement.textContent = "00";
                    clearInterval(interval); // Stop countdown when time reaches zero
                    return;
                }
        
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
                daysElement.textContent = days.toString().padStart(2, '0');
                hoursElement.textContent = hours.toString().padStart(2, '0');
                minutesElement.textContent = minutes.toString().padStart(2, '0');
                secondsElement.textContent = seconds.toString().padStart(2, '0');
            }
        
            // Update countdown every second
            updateCountdown();
            const interval = setInterval(updateCountdown, 1000);
        }
        
        // Start the countdown when the page loads
        window.onload = startCountdown;
        
  

  
  // FAQ Toggle
  // Fix for FAQ section - Toggle functionality
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });





  
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ["#ffffff", "#ff4500"] }, 
        shape: { type: "circle" },
        opacity: { value: 1, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: "top", out_mode: "out" }
    },
    interactivity: {
        events: { onhover: { enable: false }, onclick: { enable: false } }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const pageInfo = document.getElementById("pageInfo");

    let currentPage = 0;
    const itemsPerPage = 4;
    const totalPages = Math.ceil(faqItems.length / itemsPerPage);

    function showPage(page) {
        faqItems.forEach((item, index) => {
            if (index >= page * itemsPerPage && index < (page + 1) * itemsPerPage) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        pageInfo.textContent = `Page ${page + 1} of ${totalPages}`;

        prevBtn.disabled = page === 0;
        nextBtn.disabled = page === totalPages - 1;
    }

    prevBtn.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Initialize first page
    showPage(currentPage);
});


setTimeout(() => {
    document.getElementById('loading-screen').classList.add('fade-out');
}, 4000);