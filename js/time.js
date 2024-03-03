// Функция для обновления времени
function updateTime() {
  const currentTimeElements = document.querySelectorAll('.time');
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  
  // Обновляем время для каждого элемента
  currentTimeElements.forEach(element => {
    element.textContent = timeString;
  });
}

// Обновляем время сразу после загрузки страницы
updateTime();

// Обновляем время каждую секунду
setInterval(updateTime, 1000);
