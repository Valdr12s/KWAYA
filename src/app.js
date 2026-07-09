// Kwaya Master - Main Application
// Mobile App for iOS & Android (PWA)

const App = {
  init() {
    console.log('🎵 Kwaya Master v' + APP_CONFIG.version + ' initializing...');
    
    // Show loading screen
    this.showLoading();
    
    // Initialize components
    this.initializeApp();
    
    // Register Service Worker for PWA
    this.registerServiceWorker();
    
    // Hide loading and show app
    setTimeout(() => {
      this.hideLoading();
      this.showApp();
    }, 1500);
  },
  
  showLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) loadingScreen.style.display = 'flex';
  },
  
  hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
  },
  
  showApp() {
    const appContent = document.getElementById('app-content');
    if (appContent) {
      appContent.style.display = 'flex';
      appContent.style.flexDirection = 'column';
    }
    
    // Initialize navigation
    Navigation.init();
    
    // Initialize audio player
    AudioPlayer.init();
    
    console.log('✅ Kwaya Master ready!');
  },
  
  initializeApp() {
    // Check if online
    if (!Helpers.isOnline()) {
      console.log('📡 Offline mode - using cached data');
    }
    
    // Initialize storage
    if (!StorageService.isAvailable()) {
      console.warn('⚠️ Local storage not available');
    }
    
    // Setup app-level event listeners
    this.setupEventListeners();
  },
  
  setupEventListeners() {
    // Handle back button on Android
    window.addEventListener('popstate', (e) => {
      if (Navigation.currentScreen !== SCREENS.HOME) {
        Navigation.navigateTo(SCREENS.HOME);
        e.preventDefault();
      }
    });
    
    // Handle online/offline status
    window.addEventListener('online', () => {
      console.log('📡 Back online');
    });
    
    window.addEventListener('offline', () => {
      console.log('📡 Offline - cached content available');
    });
    
    // Prevent double-tap zoom on iOS
    document.addEventListener('dblclick', (e) => {
      e.preventDefault();
    }, { passive: false });
  },
  
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('✅ Service Worker registered:', registration.scope);
          })
          .catch(error => {
            console.log('❌ Service Worker registration failed:', error);
          });
      });
    }
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

// Handle install prompt for PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log('📱 App can be installed');
});
