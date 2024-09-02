// Инициализация AOS
AOS.init({
    duration: 1000, // Анимация длится 1 секунду
    easing: 'ease-in-out', // Плавное изменение
});

// Функция для плавной прокрутки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); }); });


        const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;


const TELEGRAM_BOT_TOKEN = 'ВАШ_ТОКЕН_БОТА';
const CHAT_ID = 'ВАШ_CHAT_ID';

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/service-request', (req, res) => {
    const { name, phone, email, description } = req.body;

    const message = `Новая заявка на услуги:\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nОписание: ${description}`;
    sendToTelegram(message);

    res.send('Заявка отправлена!');
});

app.post('/courier-request', (req, res) => {
    const { 'name-courier': name, 'phone-courier': phone, 'email-courier': email, resume } = req.body;

    const message = `Заявка на курьера:\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nРезюме: ${resume}`;
    sendToTelegram(message);

    res.send('Заявка отправлена!');
});

function sendToTelegram(message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    axios.post(url, {
        chat_id: CHAT_ID,
        text: message,
    }).catch(err => console.error('Ошибка при отправке сообщения в Telegram:', err));
}

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
