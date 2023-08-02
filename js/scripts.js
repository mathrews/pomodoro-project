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

btnGear.onclick = () => {
    overlay.classList.add('activeOverlay')
    modal.classList.add('activeModal')
}

overlay.onclick = () => {
    overlay.classList.remove('activeOverlay')
    modal.classList.remove('activeModal')
}

btnCrossModal.onclick = () => {
    overlay.classList.remove('activeOverlay')
    modal.classList.remove('activeModal')
}

let configDeCadaTempo = JSON.parse(localStorage.getItem('configuracaoDoTempo')) || [];

function submitar(){
    event.preventDefault();
    let configDoTempo = {
        tempoPomodoro: Number(pomodoroMinutes.value),
        tempoShort: Number(shortBreakMinutes.value),
        tempoLong: Number(longBreakMinutes.value)
    };
    configDeCadaTempo.push(configDoTempo);
    localStorage.setItem('configuraçaoDoTempo', JSON.stringify(configDeCadaTempo));
    overlay.classList.remove('activeOverlay');
    modal.classList.remove('activeModal');
    console.log(configDoTempo);
}