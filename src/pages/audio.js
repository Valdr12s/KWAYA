// Audio Page Component
const AudioPage = {
  render(container) {
    const audioTracks = DataService.audioTracks;
    
    container.innerHTML = `
      <div class="page audio-page fade-in" style="padding: 20px;">
        <h2>🎧 Audio Rehearsal Room</h2>
        <p style="color: var(--dark-gray); margin-bottom: 20px;">Practice with voice-part specific tracks</p>
        
        <div class="voice-parts-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px;">
          <div class="voice-part-card" style="background: white; border-radius: 16px; padding: 16px; text-align: center; border: 2px solid var(--navy);">
            <i class="fas fa-female" style="font-size: 24px; color: var(--gold);"></i>
            <p style="font-weight: 600; margin-top: 8px;">Soprano</p>
            <small style="color: var(--dark-gray);">High voices</small>
          </div>
          <div class="voice-part-card" style="background: white; border-radius: 16px; padding: 16px; text-align: center; border: 2px solid var(--navy);">
            <i class="fas fa-female" style="font-size: 24px; color: var(--gold); opacity: 0.7;"></i>
            <p style="font-weight: 600; margin-top: 8px;">Alto</p>
            <small style="color: var(--dark-gray);">Low voices</small>
          </div>
          <div class="voice-part-card" style="background: white; border-radius: 16px; padding: 16px; text-align: center; border: 2px solid var(--navy);">
            <i class="fas fa-male" style="font-size: 24px; color: var(--gold);"></i>
            <p style="font-weight: 600; margin-top: 8px;">Tenor</p>
            <small style="color: var(--dark-gray);">High voices</small>
          </div>
          <div class="voice-part-card" style="background: white; border-radius: 16px; padding: 16px; text-align: center; border: 2px solid var(--navy);">
            <i class="fas fa-male" style="font-size: 24px; color: var(--gold); opacity: 0.7;"></i>
            <p style="font-weight: 600; margin-top: 8px;">Bass</p>
            <small style="color: var(--dark-gray);">Low voices</small>
          </div>
        </div>
        
        <h3 style="margin-bottom: 12px;">Available Rehearsal Tracks</h3>
        <div class="audio-tracks-list" id="audioTracksList">
          ${audioTracks.map(track => `
            <div class="list-item audio-track-item" onclick="AudioPlayer.play({id: '${track.id}', title: '${track.title}', part: '${track.part}', duration: '${track.duration}'})">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div class="audio-play-btn">
                  <i class="fas fa-play"></i>
                </div>
                <div>
                  <strong>${track.title}</strong>
                  <p style="font-size: 12px; color: var(--dark-gray);">${track.part} • ${track.duration}</p>
                </div>
              </div>
              <i class="fas fa-ellipsis-v" style="color: var(--medium-gray);"></i>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
};
