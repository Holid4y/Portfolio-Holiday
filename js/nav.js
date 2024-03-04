const aboutButton = document.getElementById('aboutButton');
const backpackButton = document.getElementById('backpackButton');
const telegramButton = document.getElementById('telegramButton');
const gitButton = document.getElementById('gitButton');
const phoneButton = document.getElementById('phoneButton');
const AboutMe = document.getElementById('aboutme');
const Projects = document.getElementById('projects');
const outputAboutMe = document.getElementById('output_aboutme');

aboutButton.addEventListener('click', function() {
    openAboutMe();
});
backpackButton.addEventListener('click', function() {
    openProjects();
});
telegramButton.addEventListener('click', function() {
    window.open('https://t.me/H0llyday', '_blank');
});
gitButton.addEventListener('click', function() {
    window.open('https://github.com/JenkaPyhka', '_blank');
});
phoneButton.addEventListener('click', function() {
    window.location.href = 'tel:89304088365';
});


function openProjects() {
  Projects.style.display = 'block';
}
function openAboutMe() {
  AboutMe.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    let isDragging = false;
    let offsetX;
    let offsetY;
    let currentWindow;
  
    function startDragging(e) {
      if (e.target.classList.contains('nav_console_app')) {
        isDragging = true;
        currentWindow = e.target.closest('.window_app');
        const rect = currentWindow.getBoundingClientRect();
        const navConsoleAppRect = e.target.getBoundingClientRect();
        offsetX = e.clientX - navConsoleAppRect.left;
        offsetY = e.clientY - navConsoleAppRect.top;
  
        // Установка текущего окна поверх остальных
        currentWindow.style.zIndex = getHighestZIndex() + 1;
      }
    }
  
    function stopDragging() {
      isDragging = false;
    }
  
    function drag(e) {
      if (isDragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
  
        const maxX = window.innerWidth - currentWindow.offsetWidth;
        const maxY = window.innerHeight - currentWindow.offsetHeight;
        const boundedX = Math.min(Math.max(0, newX), maxX);
        const boundedY = Math.min(Math.max(38, newY), maxY - 90);
  
        currentWindow.style.left = boundedX + 'px';
        currentWindow.style.top = boundedY + 'px';
      }
    }
  
    function getHighestZIndex() {
      const windows = document.querySelectorAll('.window_app');
      let highestZIndex = 0;
      windows.forEach(function(window) {
        const zIndex = parseInt(window.style.zIndex || 0);
        highestZIndex = Math.max(highestZIndex, zIndex);
      });
      return highestZIndex;
    }
  
    document.addEventListener('mousedown', startDragging);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mousemove', drag);
  
    // Закрытие окна и сбрасывание позиционирования 
    document.querySelectorAll('.window_app button').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const windowId = btn.getAttribute('data-window');
        const windowElement = document.getElementById(windowId);
        windowElement.style.display = 'none';

        windowElement.style.top = '';
        windowElement.style.left = '';
      });
    });
});