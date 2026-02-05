const video = document.getElementById('video');
const playBtn = document.getElementById('playBtn');
const audioBtn = document.getElementById('audioBtn');

playBtn.addEventListener('click', () => {
    video.muted = false;
    video.play();
    playBtn.classList.add('hidden');
});

audioBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    }
    video.muted = !video.muted;
    audioBtn.textContent = video.muted ? '??' : '??';
});

window.addEventListener('load', () => {
    video.muted = true;
    video.play().then(() => {
        playBtn.classList.add('hidden');
    }).catch(() => {
        console.log('Click para reproducir');
    });
});

