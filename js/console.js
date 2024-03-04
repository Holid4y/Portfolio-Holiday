// Получаем элементы
const consoleApp = document.getElementById('console_app');
const navConsoleApp = document.querySelector('.nav_console_app');
const closeButton = document.querySelector('.nav_console_app button');
const commandInput = document.getElementById('commandInput');
const output = document.getElementById('output');
const networkIcon = document.getElementById('networkIcon');

closeButton.addEventListener('click', function() {
  closeConsoleApp();
});

// Функция для открытия console_app и вывода начального сообщения
function openConsoleApp() {
  consoleApp.style.display = 'block';
  commandInput.value = '';
  commandInput.focus();
  addConsoleMessage('Введите "help" для просмотра доступных команд');
}

// Функция для очистки console_app
function clearConsoleApp() {
    output.innerHTML = '';
}

// Функция для закрытия console_app и очистки чата
function closeConsoleApp() {
  consoleApp.style.display = 'none';
  output.innerHTML = '';
}

// Обработчик события нажатия клавиши Enter в поле ввода
commandInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    handleCommand(commandInput.value.trim());
    commandInput.value = '';
  }
});

// Функция для обработки введенных команд
function handleCommand(command) {
switch (command) {
    case 'help':
        addConsoleMessage(`- project
- git
- neofetch
- reboot
- sudo pacman -S "название пакета"`);
        break;
    case 'project':
        addConsoleMessage('Рабочий проект: ...');
        break;
    case 'git':
        var networkIcon = document.getElementById('networkIcon');
        if (networkIcon.style.fill === 'white') {
            addGitLink();
        } else {
            addConsoleMessage('Включите Интернет для вывода ссылки');
        }
        break;
    case 'neofetch':
        addConsoleMessage(`
                   -                     hollyday@hollyday
                  .o+                    -----------------
                  ooo/                   OS: Arch Linux x86_64
                 +oooo:                  Kernel: 6.7.6-arch1-2
                +oooooo:                 Telegram: https://t.me/H0llyday
               -+oooooo+:                Git: https://github.com/JenkaPyhka
              /:-:++oooo+:               Shell: bash 5.2.26
             /++++/+++++++:              Resolution: 1280x1024, 1920x1080
            /++++++++++++++:             DE: GNOME 45.4
           /+++ooooooooooooo/            WM: Mutter
         ./ooosssso++osssssso+           WM Theme: Colloid-Dark
        .oossssso-    /ossssss+          Theme: Colloid-Dark [GTK2/3]
       -osssssso.      :ssssssso.        Icons: Adwaita [GTK2/3]
      :osssssss/        osssso+++.       Terminal: kgx
     /ossssssss/        +ssssooo/-       CPU: Intel i5-9400F (6) @ 4.100GHz
    /ossssso+/:-        -:/+osssso+-     GPU: NVIDIA GeForce RTX 3060 Lite Hash Rate
    +sso+:-                  .-/+oso:    Memory: 40045MiB
   ++:.                           -/+/
`);
        break;
    case 'reboot':
        location.reload();
        break;
    case 'clear':
        clearConsoleApp();
        break;
    default:
        if (command.startsWith('sudo pacman -S')) {
            addConsoleMessage('Ты серьезно думал что это сработает???');
        } else {
            addConsoleMessage('Команда не распознана. Введите "help" для просмотра доступных команд');
        }
        break;
    }
}

// Функция для добавления ссылки на GitHub
function addGitLink() {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('git-link');
  
    const messageText = document.createElement('span');
    messageText.textContent = 'Ссылка на GitHub - ';
  
    const gitLink = document.createElement('a');
    gitLink.textContent = 'Hollyday';
    gitLink.href = 'https://github.com/JenkaPyhka';
    gitLink.target = '_blank'; // Открывать ссылку в новой вкладке
  
    messageContainer.appendChild(messageText);
    messageContainer.appendChild(gitLink);
    output.appendChild(messageContainer);
}

// Функция для добавления сообщения в чат
function addConsoleMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    output.appendChild(messageElement);
    output.scrollTop = output.scrollHeight;
}

// Функция для проверки "Интернет" соединения
function toggleNetworkIconColor() {
  var networkIcon = document.getElementById('networkIcon');
  if (networkIcon.style.fill === 'gray') {
      networkIcon.style.fill = 'white';
  } else {
      networkIcon.style.fill = 'gray';
  }
}
window.onload = function() {
  toggleNetworkIconColor();
};
networkIcon.addEventListener('click', function() {
  toggleNetworkIconColor();
});
const consoleButton = document.getElementById('consoleButton');
consoleButton.addEventListener('click', function() {
  openConsoleApp();
});