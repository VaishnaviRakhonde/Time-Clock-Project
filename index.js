function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const dayOfMonth = now.getDate().toString().padStart(2, '0');
    const dateString = `${dayOfMonth}-${month}-${year}`;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayString = days[now.getDay()];

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
    document.getElementById('day').textContent = dayString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately




