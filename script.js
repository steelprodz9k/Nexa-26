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

// Make windows draggable
document.querySelectorAll('.draggable').forEach(el => {
  el.onmousedown = function (e) {
    let shiftX = e.clientX - el.getBoundingClientRect().left;
    let shiftY = e.clientY - el.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
      el.style.left = pageX - shiftX + 'px';
      el.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    el.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      el.onmouseup = null;
    };
  };

  el.ondragstart = () => false;
});
