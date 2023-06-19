const comingYear = document.querySelector('.coming-year');

const birthDate = prompt("Enter birth date (1-31):");
const birthMonth = prompt("Enter birth month (1-12):");

const today = new Date();

var nextYear;

const monthname = function getMonthName(birthMonth) {
    const date = new Date();
    date.setMonth(birthMonth - 1);

    return date.toLocaleString('en-US', { month: 'long' });
}


if (today.getMonth() + 1 > birthMonth || (today.getMonth() + 1 == birthMonth && today.getDate() + 1 > birthDate)) {
    nextYear = new Date().getFullYear() + 1;
}
else {
    nextYear = new Date().getFullYear();
}

comingYear.innerHTML = nextYear
document.querySelector('.targetDate').innerHTML = (`${birthDate}/${birthMonth}/${nextYear}`)

function countDown() {
    const finalDate = new Date(`${nextYear}-${birthMonth}-${birthDate} 00:00:00`).getTime();

    const now = new Date().getTime();
    const gap = finalDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const targetDay = Math.floor(gap / day);
    const targetHour = Math.floor((gap % day) / hour);
    const targetMinute = Math.floor((gap % hour) / minute);
    const targetSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerHTML = targetDay;
    document.querySelector('.hour').innerHTML = targetHour;
    document.querySelector('.minute').innerHTML = targetMinute;
    document.querySelector('.second').innerHTML = targetSecond;

}

countDown();

setInterval(countDown, 1000);
