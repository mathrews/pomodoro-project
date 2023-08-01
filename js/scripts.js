let pomodoroMode = document.querySelector('#tempos .pomodoro');
let shortBreakMode = document.querySelector('#tempos .shortBreak');
let longBreakMode = document.querySelector('#tempos .longBreak');

pomodoroMode.onclick = () => {
    pomodoroMode.classList.add('active');
    shortBreakMode.classList.remove('active');
    longBreakMode.classList.remove('active');
}
shortBreakMode.onclick = () => {
    shortBreakMode.classList.add('active');
    longBreakMode.classList.remove('active');
    pomodoroMode.classList.remove('active');
}
longBreakMode.onclick = () => {
    longBreakMode.classList.add('active');
    shortBreakMode.classList.remove('active');
    pomodoroMode.classList.remove('active');
}

