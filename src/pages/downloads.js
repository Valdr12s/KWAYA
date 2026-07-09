// Downloads Page Component
const DownloadsPage = {
  downloads: [],
  
  init() {
    this.loadDownloads();
  },
  
  loadDownloads() {
    const saved = StorageService.get(APP_CONFIG.storageKeys.downloads);
    this.downloads = saved || [];
  },
  
  addDownload(songId) {
    const song = DataService.songs.find(s => s.id === songId);
    if (song && !this.downloads.find(d => d.id === songId)) {
      this.downloads.push({
        id: song.id,
        title: song.title,
        type: 'sheet-music',
        format: song.formats[0],
        size: song.fileSize,
        dateDownloaded: new Date().toISOString()
      });
      StorageService.save(APP_CONFIG.storageKeys.downloads, this.downloads);
      alert(song.title + ' downloaded successfully!');
    }
  },
  
  render(container) {
    this.loadDownloads();
    
    container.innerHTML = `
      <div class="page downloads-page fade-in" style="padding: 20px;">
        <h2>📥 Downloads Repository</h2>
        
        <div class="download-tabs">
          <span class="download-tab active" data-tab="sheet-music">Sheet Music</span>
          <span class="download-tab" data-tab="audio">Audio Files</span>
        </div>
        
        <div class="downloads-list" id="downloadsList">
          ${this.downloads.length > 0 ? this.downloads.map(download => `
            <div class="list-item">
              <div style="display: flex; align-items: center;">
                <i class="fas fa-file-${download.format === 'pdf' ? 'pdf' : 'word'} download-file-icon" style="color: ${download.format === 'pdf' ? '#C62828' : '#1565C0'};"></i>
                <div style="margin-left: 12px;">
                  <strong>${download.title}.${download.format}</strong>
                  <p style="font-size: 12px; color: var(--dark-gray);">${download.size} • ${Helpers.formatDate(download.dateDownloaded)}</p>
                </div>
              </div>
              <i class="fas fa-ellipsis-v" style="color: var(--medium-gray);"></i>
            </div>
          `).join('') : `
            <div style="text-align: center; padding: 40px; color: var(--medium-gray);">
              <i class="fas fa-cloud-download-alt" style="font-size: 48px; margin-bottom: 16px;"></i>
              <p>No downloads yet</p>
              <p style="font-size: 12px;">Downloaded scores and audio will appear here</p>
            </div>
          `}
        </div>
        
        ${this.downloads.length > 0 ? `
          <button class="btn-outline-gold" style="width: 100%; margin-top: 20px;" onclick="DownloadsPage.clearAll()">
            <i class="fas fa-trash-alt"></i> Clear All Downloads
          </button>
        ` : ''}
      </div>
    `;
    
    // Setup tabs
    setTimeout(() => {
      document.querySelectorAll('.download-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.download-tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
        });
      });
    }, 100);
  },
  
  clearAll() {
    if (confirm('Are you sure you want to clear all downloads?')) {
      this.downloads = [];
      StorageService.remove(APP_CONFIG.storageKeys.downloads);
      const container = document.getElementById('screen-container');
      if (container) this.render(container);
    }
  }
};

// Initialize downloads
DownloadsPage.init();
