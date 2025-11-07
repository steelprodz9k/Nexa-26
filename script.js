function completeSetup() {
  const username = document.getElementById('username').value;
  if (username.trim()) {
    localStorage.setItem('nexaUser', username);
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('desktop').classList.remove('hidden');
  }
}

function openApp(app) {
  document.getElementById(`window-${app}`).classList.remove('hidden');
}

function closeApp(app) {
  document.getElementById(`window-${app}`).classList.add('hidden');
}
