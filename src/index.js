import { expandWeek,showToday, handleDayClick } from './navbar.js';

document.onload = showToday();
document.querySelectorAll('.dropdown').forEach(e => e.addEventListener('click', expandWeek));
document.querySelectorAll('.dropdown_content').forEach(e => e.addEventListener('click', handleDayClick));