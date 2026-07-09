// Home Page Component
const HomePage = {
  render(container) {
    const greeting = Helpers.getGreeting();
    const trendingSongs = DataService.getTrendingSongs();
    
    container.innerHTML = `
      <div class="page home-page fade-in">
        <div class="home-header">
          <div>
            <h1 class="home-greeting">` + greeting + `, <span class="gold-text">` + MOCK_USER.name.split(' ')[0] + `</span></h1>
            <p style="color: var(--dark-gray); font-size: 14px;">Welcome back to your music library</p>
          </div>
          <div style="position: relative;">
            <i class="fas fa-bell" style="font-size: 24px; color: var(--navy);"></i>
            <span class="notification-badge">3</span>
          </div>
        </div>
        
        <div class="search-bar">
          <i class="fas fa-search" style="color: var(--medium-gray);"></i>
          <input type="search" placeholder="Search songs, composers, categories..." id="homeSearch">
          <i class="fas fa-sliders-h" style="color: var(--gold); cursor: pointer;"></i>
        </div>
        
        <div class="nav-grid">
          <div class="grid-tile" onclick="Navigation.navigateTo('library')">
            <i class="fas fa-book-open"></i>
            <span>Sol-fa Scores</span>
          </div>
          <div class="grid-tile" onclick="Navigation.navigateTo('library')">
            <i class="fas fa-music"></i>
            <span>Staff Notation</span>
          </div>
          <div class="grid-tile" onclick="Navigation.navigateTo('audio')">
            <i class="fas fa-headphones"></i>
            <span>Rehearsal Audio</span>
          </div>
          <div class="grid-tile" onclick="Navigation.navigateTo('upload')">
            <i class="fas fa-cloud-upload-alt"></i>
            <span>Upload Scores</span>
          </div>
        </div>
        
        <div class="section">
          <div class="home-section-title">
            <i class="fas fa-fire gold-text"></i>
            <h3>Trending This Week</h3>
          </div>
          <div class="trending-scroll" id="trendingScroll">
          </div>
        </div>
      </div>
    `;
    
    // Add trending songs dynamically
    const trendingContainer = document.getElementById('trendingScroll');
    if (trendingContainer) {
      trendingContainer.innerHTML = trendingSongs.map(song => 
        '<div class="trending-card">' +
          '<p style="font-weight: 700; font-size: 14px; color: var(--navy);">' + song.title + '</p>' +
          '<p style="font-size: 12px; color: var(--dark-gray); margin: 4px 0;">' + song.composer + '</p>' +
          '<span class="badge badge-gold">' + song.category + '</span>' +
          '<div style="margin-top: 8px; font-size: 11px; color: var(--medium-gray);">' +
            '<i class="fas fa-download"></i> ' + song.downloads + ' downloads' +
          '</div>' +
        '</div>'
      ).join('');
    }
  }
};
