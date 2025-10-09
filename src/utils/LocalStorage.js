// Load Installed Apps
export const loadInstalledApps = () => {
  try {
    const data = localStorage.getItem('installedApps');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Error loading installed apps:', err);
    return [];
  }
};

// Save / Install New App
export const installApp = (app) => {
  try {
    const installed = loadInstalledApps();
    const alreadyInstalled = installed.some(item => item.id === app.id);

    if (alreadyInstalled) {
      alert('This app is already installed!');
      return;
    }

    const updatedList = [...installed, app];
    localStorage.setItem('installedApps', JSON.stringify(updatedList));
    alert(`${app.title} installed successfully!`);
  } catch (err) {
    console.error('Error installing app:', err);
  }
};

// Remove App
export const removeApp = (id) => {
  try {
    const installed = loadInstalledApps();
    const updatedList = installed.filter(app => app.id !== id);
    localStorage.setItem('installedApps', JSON.stringify(updatedList));
    alert('App removed successfully!');
  } catch (err) {
    console.error('Error removing app:', err);
  }
};

// Optional: Clear All Apps
export const clearInstalledApps = () => {
  try {
    localStorage.removeItem('installedApps');
  } catch (err) {
    console.error('Error clearing installed apps:', err);
  }
};
