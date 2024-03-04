// Функция для обновления времени
function updateTime() {
  const currentTimeElements = document.querySelectorAll('.time');
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  
  currentTimeElements.forEach(element => {
    element.textContent = timeString;
  });
}
updateTime();
setInterval(updateTime, 1000);
