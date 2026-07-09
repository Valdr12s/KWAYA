// Library Page Component
const LibraryPage = {
  render(container) {
    const songs = DataService.getAllSongs();
    
    container.innerHTML = `
      <div class="page library-page fade-in">
        <div class="library-container">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h2>📚 Music Library</h2>
            <span class="badge badge-blue">` + songs.length + ` songs</span>
          </div>
          
          <div class="search-bar">
            <i class="fas fa-search" style="color: var(--medium-gray);"></i>
            <input type="search" placeholder="Search by title or composer..." id="librarySearch">
            <i class="fas fa-filter" style="color: var(--gold);"></i>
          </div>
          
          <div class="filter-tabs" style="margin-bottom: 16px;">
            <button class="filter-tab active" data-filter="all">All</button>
            <button class="filter-tab" data-filter="sol-fa">Sol-fa</button>
            <button class="filter-tab" data-filter="staff">Staff</button>
            <button class="filter-tab" data-filter="hymn">Hymns</button>
            <button class="filter-tab" data-filter="anthem">Anthems</button>
          </div>
          
          <div class="songs-list" id="songsList">
          </div>
        </div>
      </div>
    `;
    
    // Render songs
    this.updateSongsList(container, songs);
    
    // Setup filter and search
    setTimeout(() => {
      this.setupFilters(songs, container);
      this.setupSearch(songs, container);
    }, 100);
  },
  
  setupFilters(songs, container) {
    const filterTabs = container.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const filter = tab.dataset.filter;
        let filteredSongs = songs;
        
        if (filter === 'sol-fa') filteredSongs = songs.filter(s => s.notation === 'sol-fa');
        else if (filter === 'staff') filteredSongs = songs.filter(s => s.notation === 'staff');
        else if (filter === 'hymn') filteredSongs = songs.filter(s => s.category.toLowerCase() === 'hymn');
        else if (filter === 'anthem') filteredSongs = songs.filter(s => s.category.toLowerCase() === 'anthem');
        
        this.updateSongsList(container, filteredSongs);
      });
    });
  },
  
  setupSearch(songs, container) {
    const searchInput = document.getElementById('librarySearch');
    if (searchInput) {
      searchInput.addEventListener('input', Helpers.debounce((e) => {
        const query = e.target.value.toLowerCase();
        const filtered = songs.filter(song => 
          song.title.toLowerCase().includes(query) ||
          song.composer.toLowerCase().includes(query)
        );
        this.updateSongsList(container, filtered);
      }, 300));
    }
  },
  
  updateSongsList(container, songs) {
    const songsList = container.querySelector('#songsList');
    if (songsList) {
      songsList.innerHTML = songs.map(song => 
        '<div class="list-item fade-in">' +
          '<div class="library-item-content">' +
            '<strong style="color: var(--navy);">' + song.title + '</strong>' +
            '<small style="color: var(--dark-gray); display: block;">' + song.composer + ' • ' + song.category + '</small>' +
          '</div>' +
          '<div style="display: flex; gap: 6px; margin-right: 12px;">' +
            (song.formats.includes('pdf') ? '<span class="badge badge-red">PDF</span>' : '') +
            (song.formats.includes('word') ? '<span class="badge badge-blue">Word</span>' : '') +
            (song.notation === 'sol-fa' ? '<span class="badge badge-gold">Sol-fa</span>' : '<span class="badge badge-blue">Staff</span>') +
          '</div>' +
          '<div class="library-item-actions">' +
            '<i class="fas fa-eye" title="Preview"></i>' +
            '<i class="fas fa-download" title="Download" onclick="DownloadsPage.addDownload(\'' + song.id + '\')"></i>' +
          '</div>' +
        '</div>'
      ).join('');
    }
  }
};
