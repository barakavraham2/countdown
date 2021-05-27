const days = document.getElementById('days')
const Hours = document.getElementById('Hours')
const Minutes = document.getElementById('Minutes')
const Seconds = document.getElementById('Seconds')
const countcontianer = document.getElementById('countcontianer')

const gameTime = new Date('May 30 2021 20:30:00')

function updateCountDown() {
    const currentTime = new Date();
    const diff = gameTime - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24)
    const h = Math.floor(diff / 1000 / 60 / 60) % 24
    const m = Math.floor(diff / 1000 / 60) % 60
    const s = Math.floor(diff / 1000) % 60
    days.innerHTML = d
    Hours.innerHTML = h < 10 ? '0' + h : h;
    Minutes.innerHTML = m < 10 ? '0' + m : m;
    Seconds.innerHTML = s < 10 ? '0' + s : s;
}
setInterval(updateCountDown, 1000)