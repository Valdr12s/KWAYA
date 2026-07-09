// Navigation Component for Kwaya Master
const Navigation = {
  currentScreen: SCREENS.HOME,
  
  init() {
    this.setupNavListeners();
    this.navigateTo(SCREENS.HOME);
  },
  
  setupNavListeners() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const screen = item.dataset.screen;
        if (screen) {
          this.navigateTo(screen);
        }
      });
    });
  },
  
  navigateTo(screen) {
    this.currentScreen = screen;
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
      if (item.dataset.screen === screen) {
        item.classList.add('active');
      }
    });
    
    // Load screen content
    const container = document.getElementById('screen-container');
    if (container) {
      switch(screen) {
        case SCREENS.HOME:
          HomePage.render(container);
          break;
        case SCREENS.LIBRARY:
          LibraryPage.render(container);
          break;
        case SCREENS.AUDIO:
          AudioPage.render(container);
          break;
        case SCREENS.DOWNLOADS:
          DownloadsPage.render(container);
          break;
        case SCREENS.SETTINGS:
          SettingsPage.render(container);
          break;
        default:
          HomePage.render(container);
      }
    }
  }
};
