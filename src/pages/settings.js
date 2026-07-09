// Settings Page Component
const SettingsPage = {
  render(container) {
    container.innerHTML = `
      <div class="page settings-page fade-in" style="padding: 20px;">
        <h2>⚙️ Settings</h2>
        
        <div class="profile-section">
          <div class="profile-avatar">${MOCK_USER.avatar}</div>
          <div>
            <strong style="font-size: 18px;">${MOCK_USER.name}</strong>
            <p style="color: var(--dark-gray);">${MOCK_USER.email}</p>
            <span class="badge ${MOCK_USER.isPremium ? 'badge-gold' : 'badge-blue'}">${MOCK_USER.isPremium ? 'Premium' : 'Standard'}</span>
          </div>
        </div>
        
        <div class="settings-list">
          <div class="settings-item">
            <div class="settings-item-left">
              <i class="fas fa-moon" style="color: var(--navy);"></i>
              <span>Dark Mode</span>
            </div>
            <div class="toggle-switch" onclick="this.classList.toggle('active')">
              <div class="toggle-switch-circle"></div>
            </div>
          </div>
          
          <div class="settings-item">
            <div class="settings-item-left">
              <i class="fas fa-text-height" style="color: var(--navy);"></i>
              <span>Font Size (Sol-fa)</span>
            </div>
            <select style="padding: 8px; border-radius: 8px; border: 1px solid #ddd;">
              <option>Small</option>
              <option selected>Medium</option>
              <option>Large</option>
            </select>
          </div>
          
          <div class="settings-item">
            <div class="settings-item-left">
              <i class="fas fa-download" style="color: var(--navy);"></i>
              <span>Audio Quality</span>
            </div>
            <select style="padding: 8px; border-radius: 8px; border: 1px solid #ddd;">
              <option>Low (64kbps)</option>
              <option selected>Medium (128kbps)</option>
              <option>High (256kbps)</option>
            </select>
          </div>
          
          <div class="settings-item">
            <div class="settings-item-left">
              <i class="fas fa-sync-alt" style="color: var(--navy);"></i>
              <span>Auto-sync Downloads</span>
            </div>
            <div class="toggle-switch active" onclick="this.classList.toggle('active')">
              <div class="toggle-switch-circle"></div>
            </div>
          </div>
          
          <div class="settings-item">
            <div class="settings-item-left">
              <i class="fas fa-wifi" style="color: var(--navy);"></i>
              <span>WiFi Only Downloads</span>
            </div>
            <div class="toggle-switch active" onclick="this.classList.toggle('active')">
              <div class="toggle-switch-circle"></div>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 24px;">
          <button class="btn-outline-gold" style="width: 100%; margin-bottom: 12px;">
            <i class="fas fa-crown"></i> Upgrade to Premium
          </button>
          <button style="width: 100%; padding: 12px; background: #FEE2E2; color: #991B1B; border: none; border-radius: 12px; font-weight: 600;">
            <i class="fas fa-sign-out-alt"></i> Sign Out
          </button>
        </div>
        
        <p style="text-align: center; margin-top: 24px; color: var(--medium-gray); font-size: 12px;">
          Kwaya Master v${APP_CONFIG.version} • Made with ❤️ for Choristers
        </p>
      </div>
    `;
  }
};
