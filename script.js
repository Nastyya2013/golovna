document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('applicationForm');
            const messageDiv = document.getElementById('message');
            const navLinks = document.querySelectorAll('.nav a');
    
            navLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    if (this.getAttribute('href') === '#application-section') {
                        event.preventDefault();
                        document.getElementById('application-section').scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
    
            if (form) {
                form.addEventListener('submit', function(event) {
                    event.preventDefault();
    
                    const fullName = document.getElementById('fullName').value;
                    const phoneNumber = document.getElementById('phoneNumber').value;
                    const email = document.getElementById('email').value;
                    const city = document.getElementById('city').value;
    
                    if (!fullName || !phoneNumber || !email) {
                        showMessage('Будь ласка, заповніть усі обов\'язкові поля.', 'error-message');
                        return;
                    }
    
                    console.log('Дані для відправки:', { fullName, phoneNumber, email, city });
                    showMessage('Вашу заявку успішно надіслано!', 'success-message');
                    form.reset();
                });
            }
    
            function showMessage(text, className) {
                messageDiv.textContent = text;
                messageDiv.className = className;
                setTimeout(() => {
                    messageDiv.textContent = '';
                    messageDiv.className = '';
                }, 3000);
            }
        });
    
        const sliderWrapper = document.querySelector('.slider-wrapper');
        const slides = document.querySelectorAll('.slide');
        const slideCount = slides.length;
        let currentIndex = 0;
    
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        }
    
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateSlider();
        }
    
        function updateSlider() {
            const translateX = -currentIndex * (100 / slideCount);
            sliderWrapper.style.transform = `translateX(${translateX}%)`;
        }


        