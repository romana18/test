const videos = [
    "/RTO/earth.mp4", // Replace with your video sources
    "/RTO/A001_C037_0921FG_001.mp4",
    // Add more video sources as needed
];
const mcqs = [
    ["How are you?", "Fine", "Not good"], // First set of MCQs
    ["What's your name?", "John", "Jane"]  // Second set of MCQs
    // Add more MCQs sets as needed
];
let currentVideoIndex = 0;
let currentMCQIndex = 0;

const backgroundVideo = document.getElementById('background-video');
const video = document.getElementById('video');
const mcqOverlay = document.getElementById('mcq-overlay');
const mcqQuestion = document.getElementById('mcq-question');
const option1Button = document.getElementById('option-1');
const option2Button = document.getElementById('option-2');

// Show MCQ overlay when the video ends
video.addEventListener('ended', showMCQ);

// Show MCQ overlay function
function showMCQ() {
    mcqOverlay.style.display = 'block';
    mcqQuestion.innerText = mcqs[currentVideoIndex][currentMCQIndex];
}

// Event listener for "Yes" button
option1Button.addEventListener('click', function() {
    alert('Correct!');
    mcqOverlay.style.display = 'none';
    loadNextMCQ();
});

// Event listener for "No" button
option2Button.addEventListener('click', function() {
    alert('Incorrect!');
    mcqOverlay.style.display = 'none';
    loadNextMCQ();
});

// Function to load the next MCQ
function loadNextMCQ() {
    currentMCQIndex++;
    if (currentMCQIndex >= mcqs[currentVideoIndex].length) {
        currentMCQIndex = 0; // Reset to the first MCQ if all questions have been answered
        loadNextVideo();
    } else {
        showMCQ();
    }
}

// Function to load the next video
function loadNextVideo() {
    currentVideoIndex++;
    if (currentVideoIndex < videos.length) {
        video.src = videos[currentVideoIndex];
        video.play();
    } else {
        alert('No more videos!');
        // Reset the index to play the videos from the beginning
        currentVideoIndex = 0;
    }
}

// Load the first video and start playing the looped background video when the page loads
window.onload = function() {
    video.src = videos[currentVideoIndex];
    video.play();
    backgroundVideo.play();
};
