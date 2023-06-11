const http = require('http');

// Создание сервера
const server = http.createServer((req, res) => {
  // Установка заголовков ответа
  res.setHeader('Content-Type', 'text/plain');
  
  // Обработка различных маршрутов (URL)
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Добро пожаловать на сервер!');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('О нас');
  } else {
    res.statusCode = 404;
    res.end('Страница не найдена');
  }
});

// Запуск сервера на порту 3000
server.listen(3000, 'localhost', () => {
  console.log('Сервер запущен на порту 3000');
});
