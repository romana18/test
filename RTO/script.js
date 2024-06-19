document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const videoPlayer = document.getElementById('video-player');
    const optionsOverlay = document.getElementById('options-overlay');
    const option1Button = document.getElementById('option1');
    const option2Button = document.getElementById('option2');
    const exitButton = document.getElementById('exit');

    let currentVideoIndex = 0;

    // Play video when card is clicked
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const videoSrc = card.getAttribute('data-video');
            playVideo(videoSrc);
        });
    });

    // Play video and show options overlay
    function playVideo(src) {
        videoPlayer.src = src;
        videoPlayer.play();
        optionsOverlay.style.display = 'block';
    }

    // Handle option button clicks
    option1Button.addEventListener('click', function() {
        // Logic to show next video based on option 1
        // For simplicity, assuming the next video is named video2.mp4
        playVideo('video2.mp4');
    });

    option2Button.addEventListener('click', function() {
        // Logic to show next video based on option 2
        // For simplicity, assuming the next video is named video3.mp4
        playVideo('video3.mp4');
    });

    // Handle exit button click
    exitButton.addEventListener('click', function() {
        videoPlayer.pause();
        optionsOverlay.style.display = 'none';
        currentVideoIndex = 0; // Reset current video index
    });

    // Listen for video end event
    videoPlayer.addEventListener('ended', function() {
        // Logic to show options overlay or exit
        // This logic can be based on your specific requirements
        // For simplicity, I'm showing the exit button when the video ends
        optionsOverlay.style.display = 'none';
        exitButton.style.display = 'block';
    });
});
