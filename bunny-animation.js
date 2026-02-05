// Memorial para Romeo - Control de audio YouTube
var player;
var isMuted = true;

// Carica l'API di YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Funzione chiamata quando l'API è pronta
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    console.log('Player YouTube pronto');
    const audioBtn = document.getElementById('audioBtn');
    
    audioBtn.addEventListener('click', () => {
        if (isMuted) {
            player.unMute();
            audioBtn.textContent = '🔊';
            isMuted = false;
        } else {
            player.mute();
            audioBtn.textContent = '🔇';
            isMuted = true;
        }
    });
}

// Funzione globale richiesta dall'API YouTube
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;







