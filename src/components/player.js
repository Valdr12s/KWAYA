// Audio Player Component for Kwaya Master
const AudioPlayer = {
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  
  init() {
    this.playerElement = document.getElementById('audio-player');
  },
  
  play(track) {
    this.currentTrack = track;
    this.isPlaying = true;
    this.updateUI();
  },
  
  pause() {
    this.isPlaying = false;
    this.updateUI();
  },
  
  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else if (this.currentTrack) {
      this.play(this.currentTrack);
    }
  },
  
  seekTo(time) {
    this.currentTime = time;
    this.updateUI();
  },
  
  loop(startTime, endTime) {
    // Loop specific section for practice
    console.log('Looping from ' + startTime + ' to ' + endTime);
  },
  
  updateUI() {
    const playerSection = document.querySelector('.audio-player-section');
    if (playerSection) {
      if (this.currentTrack && this.isPlaying) {
        playerSection.classList.add('active');
        playerSection.innerHTML = this.renderMiniPlayer();
      } else {
        playerSection.classList.remove('active');
        playerSection.innerHTML = '';
      }
    }
  },
  
  renderMiniPlayer() {
    return 
      <div class="mini-player">
        <div class="mini-player-info">
          <div class="audio-waveform"></div>
          <div class="track-info">
            <p class="track-title"></p>
            <p class="track-part"> Part</p>
          </div>
        </div>
        <div class="mini-player-controls">
          <button onclick="AudioPlayer.togglePlay()">
            <i class="fas fa-"></i>
          </button>
          <div class="audio-progress">
            <div class="audio-progress-bar" style="width: %"></div>
          </div>
        </div>
      </div>
    ;
  }
};
