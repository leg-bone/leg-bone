

var buttons = document.querySelectorAll('.television_channel a');

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    document.querySelector('.television_screen iframe').src = this.href;
    e.preventDefault();
  });
}

const playButton = document.getElementById('play');

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayButton() {
  playbackIcons.forEach(icon => icon.classList.toggle('hidden'));

  if (video.paused) {
    playButton.setAttribute('data-title', 'Play (k)')
  } else {
    playButton.setAttribute('data-title', 'Pause (k)')
  }
}


playButton.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

//update play button
<button data-title="Play (k)" id="play">
  <svg class="playback-icons">
    <use href="#play-icon"></use>
    <use class="hidden" href="#pause"></use>
  </svg>
</button>

const playbackIcons = document.querySelectorAll('.playback-icons use');
