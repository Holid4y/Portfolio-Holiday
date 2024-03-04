document.addEventListener('DOMContentLoaded', function() {
  const consoleDiv = document.getElementById('console');
  const desktopDiv = document.getElementById('desktop');
  const workDiv = document.getElementById('work');

  function addLine(text) {
    const line = document.createElement('div');
    line.textContent = text;
    consoleDiv.appendChild(line);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
  }

  function displayLines(lines, index) {
    if (index >= lines.length) {
      return;
    }

    setTimeout(() => {
      addLine(lines[index]);
      displayLines(lines, index + 1);
    }, 200); // Задержка между строками
  }

  function simulateBoot() {
    const bootMessages = [
      'Booting \'Arch Linux\'',
      'Loading Linux linux ...',
      'Loading initial ramdisk ...',
      ''
    ];

    const infoMessages = [
      'Info: Fix the reported corruption',
      'Info: MKFS version',
      '         "Linux version 6.7.2-arch1-2 (linux@archlinux) (gcc (GCC) 13.2.1 20230001, GNU Id (GNU Binutils) 2.42.0)"',
      'Info: FSCK version from "Linux version 6.7.2-arch1-2 (linux@archlinux) (gcc (GCC) 13.2.1 20230001, GNU Id (GNU Binutils) 2.42.0)" to "Linux version 6.7.6-arch1-2 (linux@archlinux) (gcc (GCC) 13.2.1 20230001, GNU Id (GNU Binutils) 2.42.0)"',
      'Info: superblock features = 0 :',
      'Info: superblock encrypt level = 0, salt = 000000000000',
      'Info: Segments per section = 1',
      'Info: Sections per zone = 1',
      'Info: total FS sectors = 247969792 (121079 MB)',
      'Info: CKPT version = 328ad9ad',
      'Info: checkpoint state = 45 : crc compacted_summary unmount',
      'Info: No error was reported',
      ''
    ];

    displayLines(bootMessages, 0);

    setTimeout(() => {
      consoleDiv.innerHTML = '';
      displayLines(infoMessages, 0);
      setTimeout(() => {
        showDesktop();
      }, infoMessages.length * 300);
    }, bootMessages.length * 500);
  }

  function showDesktop() {
    consoleDiv.style.display = 'none';
    desktopDiv.style.display = 'block';
  
    // Обработчик для нажатия на Enter
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        desktopDiv.style.display = 'none';
        workDiv.style.display = 'block';
      }
    });
  
    var rightArrowButton = document.querySelector('.blue-block svg');
  
    rightArrowButton.addEventListener('click', function() {
      desktopDiv.style.display = 'none';
      workDiv.style.display = 'block';
    });
  }
  
  simulateBoot();
});