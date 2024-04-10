document.addEventListener('DOMContentLoaded', function () {
    var video;

    // Initialize video element and turn off autoplay and looping
    video = document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;

    // Log message when window finishes loading
    window.addEventListener("load", function() {
        console.log("Good job opening the window");
    });

    // Log message when "play" button is clicked
    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
    });

    // Play Button
    const playButton = document.getElementById('play');
    playButton.addEventListener('click', function () {
        video.play();
        updateVolumeInfo();
    });

    // Pause Button
    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', function () {
        video.pause();
    });

    // Slow Down
    const slowerButton = document.getElementById('slower');
    slowerButton.addEventListener('click', function () {
        video.playbackRate -= 0.1;
        console.log('New playback speed:', video.playbackRate);
        updateVolumeInfo();
    });

    // Speed Up
    const fasterButton = document.getElementById('faster');
    fasterButton.addEventListener('click', function () {
        video.playbackRate += 0.1;
        console.log('New playback speed:', video.playbackRate);
        updateVolumeInfo();
    });

    // Skip Ahead
    const skipButton = document.getElementById('skip');
    skipButton.addEventListener('click', function () {
        video.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log('Current video location:', video.currentTime);
    });

    // Mute
    const muteButton = document.getElementById('mute');
    muteButton.addEventListener('click', function () {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });

    // Volume Slider
    const volumeSlider = document.getElementById('slider');
    volumeSlider.addEventListener('input', function () {
        video.volume = volumeSlider.value / 100;
        updateVolumeInfo();
    });

    // Update volume information
    function updateVolumeInfo() {
        const volumeInfo = document.getElementById('volume');
        volumeInfo.textContent = Math.round(video.volume * 100) + '%';
    }

    // Styled
    const vintageButton = document.getElementById('vintage');
    vintageButton.addEventListener('click', function () {
        video.classList.add('oldSchool');
    });

    // Original
    const originalButton = document.getElementById('orig');
    originalButton.addEventListener('click', function () {
        video.classList.remove('oldSchool');
    });
});


