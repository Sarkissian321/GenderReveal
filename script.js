document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.querySelector('.button-72');
    var imageContainer = document.body;

    var countdownDuration = 10;

    function startCountdown() {
        // Disable the button during the countdown
        startButton.disabled = true;

        // Start the countdown
        var countdownInterval = setInterval(function () {
            countdownDuration--;

            startButton.textContent = 'Countdown: ' + countdownDuration;

            if (countdownDuration <= 0) {
                clearInterval(countdownInterval);
                displayImage();
            }
        }, 1000);
    }

    function displayImage() {
        // Check if an image is already displayed
        if (document.querySelector('.reveal-image')) {
            return;
        }

        var image = document.createElement('img');
        image.src = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gender-reveal-boy-design-template-3a26e77b60eb99b0a672d59ca0c6da5e_screen.jpg';
        image.className = 'reveal-image';

        imageContainer.appendChild(image);
    }

    startButton.addEventListener('click', startCountdown);
});
